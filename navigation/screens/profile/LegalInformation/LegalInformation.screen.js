import {Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ScaledSheet } from "react-native-size-matters";
import { AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { COLORS } from "@/store/constants";
import { useNavigation } from '@react-navigation/native';

const LegalInformationScreen = () => {
  const navigation = useNavigation();

  const openPdfViewer = (pdfUrl, title) => {
    navigation.navigate('PdfViewer', { pdfUrl, title });
  };

  return (
    <View style={[styles.container]}>
      <TouchableOpacity activeOpacity={0.7} delayPressIn={0} style={[styles.content]} onPress={() => openPdfViewer('https://example.com/conditions.pdf', 'Conditions générales')}>
        <Text style={[styles.label]}>Conditions générales d'utilisation de SenDoctor</Text>
        <AntDesign name="select1" size={16} color="black" />
      </TouchableOpacity>
      <View style={styles.separator} />

      <TouchableOpacity activeOpacity={0.7} delayPressIn={0} style={[styles.content]} onPress={() => openPdfViewer('https://example.com/politique.pdf', 'Politique de protection')}>
        <Text style={[styles.label]}>Politique de protection des données personnellles</Text>
        <AntDesign name="select1" size={16} color="black" />
      </TouchableOpacity>
      <View style={styles.separator} />

      <TouchableOpacity activeOpacity={0.7} delayPressIn={0} style={[styles.content]} onPress={() => openPdfViewer('https://example.com/referencement.pdf', 'Référencement')}>
        <Text style={[styles.label]}>Référencement</Text>
        <AntDesign name="select1" size={16} color="black" />
      </TouchableOpacity>
      <View style={styles.separator} />

      <TouchableOpacity activeOpacity={0.7} delayPressIn={0} style={[styles.content]} onPress={() => openPdfViewer('https://example.com/mentions.pdf', 'Mentions légales')}>
        <Text style={[styles.label]}>Mentions légales</Text>
        <AntDesign name="select1" size={16} color="black" />
      </TouchableOpacity>
      <View style={styles.separator} />
    </View>
  )
}

export default LegalInformationScreen

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: hp('1.5%'),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  separator: {
    height: 1,
    backgroundColor: '#D1F2EB',
  },
  label: {
    fontFamily: 'Roboto-Medium'
  },
})