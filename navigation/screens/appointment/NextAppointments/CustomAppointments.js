import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScaledSheet } from "react-native-size-matters";
import { FontAwesome, Ionicons, Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "@/store/constants";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

// Fonction pour mettre en majuscule la première lettre de chaque mot dans une chaîne
const capitalizeWords = (string) => {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const CustomAppointments = ({ item }) => {
  // Formatage de la date
  const rawDate = format(new Date(item.date), "EEEE d MMMM", { locale: fr });
  const formattedDate = capitalizeWords(rawDate);

  // Formatage de l’heure
  const formattedTime = format(
    new Date(`1970-01-01T${item.time}`),
    "HH'h':mm",
    { locale: fr }
  );

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      delayPressIn={0}
      style={[styles.card]}
    >
      {/* Header */}
      <View style={[styles.header]}>
        <View style={styles.headerLeft}>
          <Entypo name="calendar" size={16} color={COLORS.white} />
          <Text style={styles.dateText}> {formattedDate} </Text>
        </View>
        <View style={styles.headerRight}>
          <MaterialIcons name="access-time" size={16} color={COLORS.white} />
          <Text style={styles.timeText}> {formattedTime} </Text>
        </View>
      </View>

      {/* Body */}
      <TouchableOpacity activeOpacity={0.7} style={styles.body}>
        <View style={styles.bodyItem}>
          <Ionicons name="document-text" size={18} color={COLORS.secondary} />
          <View style={styles.bodyText}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{item.title}</Text>
            </View>
            <Text style={styles.subtitleText}>{item.subtitle}</Text>
          </View>
        </View>

        <View style={styles.bodyItem}>
          <Ionicons
            name="information-circle"
            size={18}
            color={COLORS.secondary}
          />
          <Text style={[styles.subtitleText]}>{item.info}</Text>
        </View>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.separator} />
      <TouchableOpacity activeOpacity={0.7} style={styles.footer}>
        <FontAwesome name="user" size={18} color={COLORS.secondary} />
        <Text style={styles.userText}> {item.user} </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  card: {
    borderColor: COLORS.green_white,
    backgroundColor: COLORS.white,
    borderRadius: "10@s",
    borderWidth: 1,
    marginHorizontal: wp("2%"),
    marginVertical: hp("1%"),
    width: wp('81%'),

    // Shadow for iOS
    shadowColor: "rgba(120, 144, 156, 0.2)", // Gris très clair avec faible opacité
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    // Elevation for Android
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    justifyContent: "space-between",
    padding: "8@s",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    fontSize: "11@s",
    fontFamily: "Roboto-Medium",
    color: COLORS.white,
    marginLeft: "5@s",
  },
  timeText: {
    fontSize: "11@s",
    fontFamily: "Roboto-Medium",
    color: COLORS.white,
    marginLeft: "5@s",
  },
  body: {
    padding: "8@s",
  },
  bodyItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "5@s",
  },
  bodyText: {
    marginLeft: "8@s",
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: "12@s",
    fontFamily: "Roboto-Bold",
    color: COLORS.textPrimary,
  },
  subtitleText: {
    fontSize: "10@s",
    color: COLORS.textSecondary,
    fontFamily: "Roboto-medium",
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.green_white,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopColor: COLORS.gray_3,
    borderRadius: 10,
    padding: "10@s",
    backgroundColor: COLORS.white,
  },
  userText: {
    fontFamily: "Roboto-Regular",
    marginLeft: "5@s",
  },
  reservationRow: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: COLORS.gray_2,
    padding: "10@s",
  },
  reservationText: {
    marginLeft: "5@s",
    color: COLORS.primary,
    fontSize: "11@s",
    fontFamily: "Roboto-Bold",
  },
  iconLeft: {
    marginRight: "5@s",
  },
  iconRight2: {
    marginLeft: "140@s",
  },
  iconRight: {
    marginLeft: "142@s",
  },
});

export default CustomAppointments;
