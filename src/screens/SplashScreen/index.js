import { StatusBar } from 'expo-status-bar'
import { Text, Logo } from '../../components'
import { StyleSheet, View } from 'react-native'

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text> StarWars - Wiki Allan</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
