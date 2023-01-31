import { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '../lib/prisma'

export async function createHabits(req: FastifyRequest, res: FastifyReply) {
  try {
    const { title, weekDays } = req.body
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}
