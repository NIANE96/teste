import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "@/store/constants";
import Button from "@/components/Button/Button";
import ProfileStyle from "@/styles/Profile/Profile.style";
import CustomModal from "@/components/CustomModal/CustomModal";
import SelectedCountry from "@/components/CustomModal/SelectedCountry/SelectedCountry";
import { useNavigation } from "@react-navigation/native";

// J'ai isolé le contenu dans un composant ProfileContent pour éviter la duplication du code.
const ProfileContent = () => {
  const navigation = useNavigation();
  const [isModalVisibleCountry, setModalVisibleCountry] = useState(false);
  const [showSelectedCountry, setShowSelectedCountry] = useState(true); // Contrôler l'affichage de SelectedCountry
  const [selectedCountry, setSelectedCountry] = useState("SN"); // Sénégal par défaut

  // Function pour ouvrir les Modals
  const handleOpenModalCountry = () => {
    setModalVisibleCountry(true);
  };

  // Function pour fermer les Modals
  const handleCloseModalCountry = () => {
    setModalVisibleCountry(false);
  };

  // Fonction du clic sur le button enregistrer du choix du pays
  const handleButtonChosedCountry = () => {
    console.log("J'ai choisi un pays!");
    handleCloseModalCountry();
  };

  const handleSelectCountry = (code) => {
    setSelectedCountry(code);
  };

  const getFlagImage = (code) => {
    // Remplacez par vos propres chemins d'accès aux images de drapeau locales
    try {
      switch (code) {
        case "SN":
          return require("@/assets/images/icons/senegal.png"); // Chemin local pour le drapeau du Sénégal
        case "ML":
          return require("@/assets/images/icons/mali.png"); // Chemin local pour le drapeau du Mali
        default:
          return require("@/assets/images/icons/senegal.png"); // Drapeau par défaut
      }
    } catch (error) {
      return require("@/assets/images/icons/senegal.png"); // Drapeau par défaut en cas d'erreur
    }
  };

  return (
    <View style={ProfileStyle.profileContent}>
      <View
        style={[
          ProfileStyle.content,
        ]}
      >
        <View style={ProfileStyle.row}>
          <FontAwesome5 name="user-lock" size={28} color="#34495E" />
          {/* <Text style={ProfileStyle.title}>Sendoctor.</Text> */}
        </View>
        <Text style={ProfileStyle.title}>
          Gerer votre santé et celle de votre proches avec Sendoctor, la santé
          avant tout.
        </Text>
        <Button
          title="SE CONNECTER"
          //onPress={() => navigation.navigate('Login')}
          type="primary"
        />
      </View>

      {/* Button S'inscrire */}
      <View style={[ProfileStyle.signUpContent]}>
        <Text style={[ProfileStyle.label]}>Vous n'avez pas de compte ?</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          delayPressIn={0}
          style={[ProfileStyle.signUpBtn]}
        >
          <Text style={[ProfileStyle.signUpBtnText]}>S'inscrire</Text>
        </TouchableOpacity>
      </View>

      {/* Paramétres */}
      <View style={[ProfileStyle.settingContent]}>
        <View style={[ProfileStyle.setting]}>
          <Text style={[ProfileStyle.labelSetting]}>Paramètres</Text>
        </View>
        <View style={ProfileStyle.separator} />

        {/* Pays */}
        <TouchableOpacity
          activeOpacity={0.7}
          delayPressIn={0}
          style={[ProfileStyle.btnContainer]}
          onPress={handleOpenModalCountry}
        >
          <View style={[ProfileStyle.countrySettingContinent]}>
            <View style={[ProfileStyle.countrySetting]}>
              <FontAwesome name="globe" size={18} color={COLORS.primary} />
              <View style={[ProfileStyle.country]}>
                <Text style={[ProfileStyle.labelCountry]}>Pays</Text>
              </View>
            </View>
            <Text style={[ProfileStyle.Sublabel]}>
              Pays ou vous avez besoins de soins
            </Text>
          </View>
          <Image
        source={getFlagImage(selectedCountry)}
        style={ProfileStyle.flagImage}
      />
          <MaterialIcons
            style={ProfileStyle.iconleft}
            name="navigate-next"
            size={20}
            color={COLORS.black}
          />
        </TouchableOpacity>
        <View style={ProfileStyle.separator} />

        {/* Langue */}
        <View
          style={[ProfileStyle.btnContainer]}
        >
          <View style={[ProfileStyle.countrySettingContinent]}>
            <View style={[ProfileStyle.countrySetting]}>
              <FontAwesome name="language" size={18} color={COLORS.primary} />
              <View style={[ProfileStyle.country]}>
                <Text style={[ProfileStyle.labelCountry]}>Langue</Text>
              </View>
            </View>
            <Text style={[ProfileStyle.Sublabel]}>Langue du compte</Text>
          </View>
          <Text style={[ProfileStyle.labelLangage]}>Français</Text>
        </View>
        <View style={ProfileStyle.separator} />
      </View>

      {/* Confidentialité */}
      <View style={[ProfileStyle.settingContent]}>
        <View style={[ProfileStyle.setting]}>
          <Text style={[ProfileStyle.labelSetting]}>Confidentialité</Text>
        </View>
        <View style={ProfileStyle.separator} />

        {/* Mes préférences */}
        <TouchableOpacity
          activeOpacity={0.7}
          delayPressIn={0}
          style={[ProfileStyle.btnContainer]}
          onPress={() => navigation.navigate("Preferences")}
        >
          <View style={[ProfileStyle.countrySettingContinent]}>
            <View style={[ProfileStyle.countrySetting]}>
              <FontAwesome name="cogs" size={18} color={COLORS.primary} />
              <View style={[ProfileStyle.preferency]}>
                <Text style={[ProfileStyle.labelCountry]}>Mes préférences</Text>
              </View>
            </View>
          </View>
          <MaterialIcons
            style={ProfileStyle.iconleft}
            name="navigate-next"
            size={20}
            color={COLORS.black}
          />
        </TouchableOpacity>
        <View style={ProfileStyle.separator} />

        {/* Informations légales */}
        <TouchableOpacity
          activeOpacity={0.7}
          delayPressIn={0}
          style={[ProfileStyle.btnContainer]}
          onPress={() => navigation.navigate("Legal_Informations")}
        >
          <View style={[ProfileStyle.countrySettingContinent]}>
            <View style={[ProfileStyle.countrySetting]}>
              <FontAwesome name="gavel" size={18} color={COLORS.primary} />
              <View style={[ProfileStyle.preferency]}>
                <Text style={[ProfileStyle.labelCountry]}>
                  Informations légales
                </Text>
              </View>
            </View>
          </View>
          <MaterialIcons
            style={ProfileStyle.iconleft}
            name="navigate-next"
            size={20}
            color={COLORS.black}
          />
        </TouchableOpacity>
        <View style={ProfileStyle.separator} />
      </View>
      <View style={[ProfileStyle.labelVersionContent]}>
        <Text style={[ProfileStyle.labelVersion]}>v1.0.0</Text>
      </View>

      {/* Utilisation du CustomModal pour le choix de pays d'utilisation de app*/}
      <CustomModal
        visible={isModalVisibleCountry}
        onClose={handleCloseModalCountry}
        title="Pays"
        description="Choisissez le pays dans lequel vous souhaitez trouver des praticiens et prendre des rendez-vous :"
        buttonTitle="ENREGISTRER"
        buttonAction={handleButtonChosedCountry}
      >
        {/* Affichage conditionnel de SelectedCountry */}
        {showSelectedCountry && <SelectedCountry onSelectCountry={handleSelectCountry} />}
      </CustomModal>
    </View>
  );
};

export default ProfileContent;
