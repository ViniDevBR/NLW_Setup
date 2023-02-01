//FASTIFY
import { FastifyInstance } from 'fastify'
//USE CASES
import { createHabits } from './useCases/createHabits'
import { getHabitsDay } from './useCases/getHabitsDay'
import { toggleHabit } from './useCases/toggleHabit'
import { summaryOfAll } from './useCases/summaryOfAll'


export async function appRouter(app: FastifyInstance) {

  //Create Habits
  app.post('/habits' , createHabits)

  //List Habits of Day
  app.get('/day', getHabitsDay)

  //Toggle Habit
  app.patch('/habits/:id/toggle', toggleHabit)

  //Summary
  app.get('/summary', summaryOfAll)
}
