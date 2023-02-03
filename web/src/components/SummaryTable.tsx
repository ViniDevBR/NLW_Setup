import { generateRangeForDate } from '../utils/generateRangeForDates'
import { HabitDay } from './HabitDay'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const summaryDates = generateRangeForDate()
const minimumSummaryDatesSize = 18 * 7 //18 weeks
const amountDaysToFill = minimumSummaryDatesSize - summaryDates.length

export function SummaryTable() {
  return (
    <main className="w-full flex ">

      <section className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((day, index) => (
          <div
            key={index}
            className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center"
          >
            {day}
          </div>
        ))}
      </section>

      <section className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => (
          <HabitDay key={date.toString()}/>
        ))}

        {amountDaysToFill > 0 && Array.from({ length: amountDaysToFill })
          .map((value, index) => (
            <div
              key={index}
              className="h-10 w-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
            />
          ))}
      </section>
    </main>
  )
}
