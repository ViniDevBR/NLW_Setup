import { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '../lib/prisma'

export async function summaryOfAll(req: FastifyRequest, res: FastifyReply) {
  try {
    const summary = await prisma.$queryRaw`
      SELECT
        D.id,
        D.date,
        (
          SELECT
            cast(count(*) as float)

          FROM dayHabits DH
          WHERE DH.day_id = D.id
        ) as completed,
        (
          SELECT
            cast(count(*) as float)

          FROM habitWeekDays HWD
          JOIN habits H
            ON H.id = HWD.habit_id
          WHERE
            HWD.week_day = cast(strftime('%w', D.date/1000.0, 'unixepoch') as int)
            AND H.createdAt <= D.date
        ) as amount
      FROM days D
    `

    return summary
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}
