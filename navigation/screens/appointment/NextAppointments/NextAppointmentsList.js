import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { COLORS } from '@/store/constants';
import CustomAppointments from './CustomAppointments';
import { data } from '@/data/appointments.data';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export default function NextAppointmentsList() {
  // Filtrage des rendez-vous à venir
  const upcomingAppointments = data.filter(item => {
    const appointmentDate = new Date(item.date + ' ' + item.time);
    const currentDate = new Date();
    return appointmentDate >= currentDate; // Inclus les rendez-vous qui sont à venir ou aujourd'hui
  });

    // Trie les rendez-vous par date et heure
    const sortedUpcomingAppointments = upcomingAppointments.sort((a, b) => {
        const dateA = new Date(a.date + ' ' + a.time);
        const dateB = new Date(b.date + ' ' + b.time);
        return dateA - dateB;
      });

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Mes prochains rendez-vous</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={sortedUpcomingAppointments} // J'utilise sortedUpcomingAppointments au lieu de data
          renderItem={({ item }) => <CustomAppointments item={item} isUpcoming={false} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: wp('3.5%'),
    marginBottom: -hp('1.8%'),
    marginTop: hp("1.8%"),
  },
  title: {
    fontSize: '16@s',
    fontFamily: 'Roboto-Bold',
    color: COLORS.secondary,
  },
  listContent: {
    paddingHorizontal: wp('2%'),
  },
});
