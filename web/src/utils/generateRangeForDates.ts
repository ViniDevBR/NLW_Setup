import dayjs from 'dayjs'

export function generateRangeForDate() {
  const firtsDayOfTheYear = dayjs().startOf('year')
  const today = new Date()

  const dates = []
  let compareDates = firtsDayOfTheYear

  while(compareDates.isBefore(today)) {
    dates.push(compareDates.toDate())
    compareDates = compareDates.add(1, 'day')
  }

  return dates
}
