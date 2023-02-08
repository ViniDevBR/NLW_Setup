import { View, Text, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { BackButton } from '../components/BackButton'
import dayjs from 'dayjs'
import { ProgressBar } from '../components/ProgressBar'
import { CheckBox } from '../components/CheckBox'

interface IParams {
  date: string
}

export function Habit() {
  const { params } = useRoute()
  const { date } = params as IParams

  const parsedDate = dayjs(date)
  const dayOfWeek = parsedDate.format('dddd')
  const dayAndMonth = parsedDate.format('DD/MM')
  return (
    <View className='flex-1 bg-backgroundStock px-8 pt-16'>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <BackButton />
        <Text className='text-zinc-400 mt-6 font-semibold text-base lowercase'>{dayOfWeek}</Text>
        <Text className='text-white mt-6 font-extrabold text-3xl'>{dayAndMonth}</Text>

        <ProgressBar progress={37}/>

        <View className='mt-6'>
          <CheckBox title='Beber 2L de agua'/>
          <CheckBox title='Caminhar' checked/>
        </View>
      </ScrollView>
    </View>
  )
}
