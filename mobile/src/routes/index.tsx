//REACT
import { View } from 'react-native'
//NAVIGATION
import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'

export function Routes() {
  return(
    <View className='flex-1 bg-backgroundStock'>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}
