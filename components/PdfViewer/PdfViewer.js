import React from 'react';
import { View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';
import { COLORS } from '@/store/constants';

const PdfViewer = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { pdfUrl, title } = route.params;

  // Utilisation de useWindowDimensions pour obtenir les dimensions de l'écran
  const { width, height } = useWindowDimensions();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title || 'Document PDF',
      headerLeft: () => (
        <MaterialIcons
          name="arrow-back-ios"
          size={20}
          color={COLORS.white}
          style={styles.headerIcon}
          onPress={() => navigation.goBack()}
        />
      ),
      headerBackVisible: false, // j'ai masquais le texte "Back"
    });
  }, [navigation, title]);

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: pdfUrl }}
        style={[styles.webview, { width, height }]} // Utilisation des dimensions actuelles
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  webview: {
    flex: 1,
  },
  headerIcon: {
    marginLeft: 15,
  },
});

export default PdfViewer;
