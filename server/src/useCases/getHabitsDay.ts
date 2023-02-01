import { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'
import dayjs from 'dayjs'

export async function getHabitsDay(req: FastifyRequest, res: FastifyReply) {
  try {
    const getHabitsParams = z.object({
      date: z.coerce.date()
    })

    const { date } = getHabitsParams.parse(req.query)
    const parsedDate = dayjs(date).startOf('day')
    const weekDay = parsedDate.get('day')

    const possibleHabits = await prisma.habit.findMany({
      where: {
        createdAt: {
          lte: date
        },
        weekDays: {
          some: {
            week_day: weekDay
          }
        }
      }
    })

    const day = await prisma.day.findUnique({
      where: {
        date: parsedDate.toDate()
      },
      include: {
        dayHabits: true
      }
    })

    const completedHabits = day?.dayHabits.map(dayHabit => (dayHabit.habit_id))

    return { possibleHabits, completedHabits }
  } catch (error) {
    console.log(error)
  }
}
