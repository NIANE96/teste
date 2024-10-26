import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '@/store/constants'

const PreferencesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Mes préférences</Text>
    </View>
  )
}

export default PreferencesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
})