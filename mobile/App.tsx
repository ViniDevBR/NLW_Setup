//DAYJS
import './src/lib/dayjs'
//REACT
import { StatusBar } from 'react-native'
//COMPONENTS
import { Loading } from './src/components/Loading'
//FONTS
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter'
//SCREENS
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Routes } from './src/routes'


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor='transparent' translucent/>
      {fontsLoaded ? <Routes /> : <Loading />}
    </SafeAreaProvider>
  )
}
