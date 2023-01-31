import { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function listenHabits(req: FastifyRequest, res: FastifyReply) {
  const habits = await prisma.habit.findMany()
  return habits
}