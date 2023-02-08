import { View, Text, ScrollView } from 'react-native'
import { generateRangeDatesFromYearStart } from '../utils/generateRangeForDates'
import { HabitDay, daySize } from '../components/HabitDay'
import { Header } from '../components/Header'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const datesFromYearStart = generateRangeDatesFromYearStart()
const minimunSummaryDatesSize = 18 * 5
const amountOfDaysToFill = minimunSummaryDatesSize - datesFromYearStart.length

export function Home() {
  return (
    <View className='bg-backgroundStock flex-1 px-8 pt-16'>
      <Header />

      <View className='flex-row mt-6 mb-2'>
        {weekDays.map((day, index) => (
          <Text
            key={index}
            className='text-zinc-400 text-xl font-bold text-center mx-1'
            style={{ width: daySize }}
          >
            {day}
          </Text>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className='flex-row flex-wrap'>
          {datesFromYearStart.map(date => (
            <HabitDay key={date.toISOString()} date={date.toISOString()}/>
          ))}

          {amountOfDaysToFill > 0 && Array
            .from({ length: amountOfDaysToFill })
            .map((_, index) => (
              <View
                key={index}
                className='bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40'
                style={{ width: daySize, height: daySize }}
              />
            ))
          }
        </View>
      </ScrollView>

    </View>
  )
}
