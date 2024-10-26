import { View, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function MyStatusBar({ backgroundColor, barStyle = "dark-content" }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.statusBar, { height: insets.top, backgroundColor }]}>
      <StatusBar animated={true} backgroundColor={backgroundColor} barStyle={barStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    zIndex: 1000, // Pour que le StatusBar est toujours au-dessus des autres éléments
  },
});
