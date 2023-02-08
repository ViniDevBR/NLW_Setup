//REACT
import { useState } from 'react'
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
//COMPONENTS
import { BackButton } from '../components/BackButton'
import { CheckBox } from '../components/CheckBox'
//ICONS && TAILWIND
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'

const availableWeekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']

export function New() {
  const [weekDays, setWeekDays] = useState<number[]>([])

  function handleToggleWeekDay(weekDay: number) {
    if(weekDays.includes(weekDay)) {
      return setWeekDays(prev => prev.filter(day => day !== weekDay))
    }
    return setWeekDays(prev => [...prev, weekDay])
  }
  return (
    <View className='flex-1 bg-backgroundStock px-8 pt-16'>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <BackButton />

        <Text className='mt-6 text-white font-extrabold text-3xl'>
          Criar habito
        </Text>
        <Text className='mt-6 text-white font-semibold text-base'>
          Qual o seu comprometimento?
        </Text>

        <TextInput
          className='h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-green-600'
          placeholder='Exercicios, dormir bem, etc...'
          placeholderTextColor={colors.zinc[400]}
        />

        <Text className='mt-4 mb-3 text-white font-semibold text-base'>
          Qual a recorrencia?
        </Text>

        {availableWeekDays.map((weekDay, index) => (
          <CheckBox
            key={weekDay}
            title={weekDay}
            checked={weekDays.includes(index)}
            onPress={() => handleToggleWeekDay(index)}
          />
        ))}

        <TouchableOpacity activeOpacity={0.7} className='flex-row items-center justify-center bg-green-600 w-full h-14 rounded-md mt-6'>
          <Feather
            name='check'
            size={20}
            color={colors.white}
          />

          <Text className='text-white text-base ml-2 font-semibold'>
            Confirmar
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  )
}
