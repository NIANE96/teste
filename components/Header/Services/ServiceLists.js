import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { services } from "@/data/ServiceLists.data";
import { COLORS } from "@/store/constants";
import * as Haptics from "expo-haptics";
import { useNavigation } from "@react-navigation/native";

const ServicesLists = ({ onServiceChanged }) => {
  const scrollRef = useRef(null);
  const itemsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(1);
  const navigation = useNavigation();

  const selectService = (index) => {
    const selected = itemsRef.current[index];
    setActiveIndex(index);

    selected.measure((x) => {
      scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
    });

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    const selectedService = services[index].name;
    onServiceChanged(selectedService);

    switch (selectedService) {
      case "Dossier médical":
        navigation.navigate("DossierMedical");
        break;
      case "Téléconsultation":
        navigation.navigate("Teleconsultation");
        break;
      case "Télédiagnostic":
        navigation.navigate("Telediagnostic");
        break;
      case "Médecin à domicile":
        navigation.navigate("MedecinDomicile");
        break;
      case "Pharmacie":
        navigation.navigate("Pharmacie");
        break;
      default:
        break;
    }
  };
  return (
    <SafeAreaView style={[{ flex: 1 }]}>
      <View style={[styles.container]}>
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            gap: 30,
            paddingHorizontal: 16,
          }}
        >
          {services.map((item, index) => (
            <TouchableOpacity
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              style={
                activeIndex === index
                  ? styles.serviceActiveButton
                  : styles.serviceButton
              }
              onPress={() => selectService(index)}
            >
              <Image
                source={item.icon}
                style={[
                  styles.icon,
                  {
                    tintColor:
                      activeIndex === index ? COLORS.white : COLORS.secondary,
                  },
                ]}
              />
              <Text
                style={[
                  activeIndex === index
                    ? styles.serviceTextActive
                    : styles.serviceText,
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ServicesLists;

const styles = StyleSheet.create({
  container: {
    marginTop: hp("1.6%"),
  },
  serviceText: {
    fontFamily: "Roboto-Bold",
    color: COLORS.secondary,
  },
  serviceTextActive: {
    fontFamily: "Roboto-Bold",
    color: COLORS.white,
  },
  serviceButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  serviceActiveButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,
  },
  icon: {
    width: wp("9%"),
    height: wp("9%"),
  },
});
