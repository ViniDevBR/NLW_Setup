import { TouchableOpacity, View, Text, TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'

interface IProps extends TouchableOpacityProps {
  checked?: boolean
  title: string
}

export function CheckBox({ checked, title, ...props }: IProps) {
  return (
    <TouchableOpacity className='flex-row mb-2 items-center' {...props}>
      {checked ? (
        <View className='h-8 w-8 rounded-lg items-center justify-center bg-green-500'>
          <Feather
            name='check'
            size={20}
            color={colors.white}
          />
        </View>
      ) : (
        <View className='h-8 w-8 rounded-lg bg-zinc-900'/>
      )
      }

      <Text className='text-white ml-3'>{title}</Text>
    </TouchableOpacity>
  )
}
