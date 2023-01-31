import { createHabits } from './useCases/createHabits'
import { FastifyInstance } from 'fastify'


export async function appRouter(app: FastifyInstance) {

  //List Habits
  app.post('/habits' , createHabits)
}
