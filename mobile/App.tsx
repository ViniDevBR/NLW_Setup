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
import { Home } from './src/screens/Home'


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='transparent' translucent/>
      {fontsLoaded ? <Home /> : <Loading />}
    </>
  )
}
