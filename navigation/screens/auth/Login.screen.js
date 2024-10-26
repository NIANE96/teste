import React, { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MyStatusBar from "@/components/Header/MyStatusBar/MyStatusBar";
import CustomBackButton from "@/components/Header/MyStatusBar/CustomBackButton";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "@/store/context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "@/store/constants";
import * as Progress from "react-native-progress";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Button from "@/components/Button/Button";
import CustomInputField from "@/components/CustomInputField";

//Import destructurer pour la fonction Login
import { login as loginUser } from "@/services/authService";

// Import Style
import commonStyles from '@/styles/common/common.style';
import DepartmentsComponent from "../../../components/DepartmentsComponent/DepartmentsComponent";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { login, isLoggedIn } = useContext(AuthContext);
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  useEffect(() => {
    const loadPhoneNumber = async () => {
      try {
        const savedPhoneNumber = await AsyncStorage.getItem("phoneNumber");
        if (savedPhoneNumber) {
          setPhoneNumber(savedPhoneNumber);
        }
      } catch (error) {
        console.error(
          "Erreur de chargement du numéro de téléphone à partir d’AsyncStorage",
          error
        );
      }
    };

    loadPhoneNumber();

    if (isLoggedIn) {
      navigation.replace("MainTabs");
    }
  }, [isLoggedIn]);

  const handlePhoneNumberChange = async (text) => {
    const formattedNumber = text.replace(/\D/g, ""); // Conserver uniquement les chiffres
    setPhoneNumber(formattedNumber);
    try {
      await AsyncStorage.setItem("phoneNumber", formattedNumber);
    } catch (error) {
      console.error(
        "Erreur lors de l’enregistrement du numéro de téléphone dans AsyncStorage",
        error
      );
    }
    if (phoneError) {
      setPhoneError(false);
      setPhoneErrorMessage("");
    }
  };

  const handleNext = () => {
    let isValid = true;
    if (step === 1) {
      const validPrefixes = ["70", "76", "77", "78"];
      const phoneRegex = new RegExp(`^(${validPrefixes.join("|")})\\d{7}$`);

      if (!phoneNumber) {
        setPhoneError(true);
        setPhoneErrorMessage("Numéro de téléphone requis");
        isValid = false;
      } else if (!phoneRegex.test(phoneNumber)) {
        setPhoneError(true);
        setPhoneErrorMessage("Numéro de téléphone invalide");
        isValid = false;
      }

      if (isValid) {
        setStep(2);
      }
    } else if (step === 2) {
      const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

      if (!password) {
        setPasswordError(true);
        setPasswordErrorMessage("Mot de passe requis");
        isValid = false;
      } else if (!passwordRegex.test(password)) {
        setPasswordError(true);
        setPasswordErrorMessage(
          "Mot de passe invalide. Il doit contenir au moins 6 caractères, dont un caractère spécial."
        );
        isValid = false;
      }

      if (isValid) {
        handleLogin();
      }
    }
  };

  const handleLogin = async () => {
    try {
      const response = await loginUser(phoneNumber, password);
      if (response.success) {
        isLoggedIn(true); // Mise à jour de l'état de connexion
        navigation.replace("MainTabs");
      } else {
        Alert.alert(
          "Erreur de connexion",
          response.message || "Erreur inconnue lors de la connexion."
        );
      }
    } catch (error) {
      Alert.alert(
        "Erreur de connexion",
        "Le numéro de téléphone ou le mot de passe est incorrect."
      );
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else {
      navigation.navigate("MainTabs");
    }
  };

  const handleSignUp = () => {
    navigation.navigate("Signup");
  };

  return (
    <>
      <MyStatusBar backgroundColor={COLORS.primary} />
      <CustomBackButton title="Connexion" onPress={handleBack} />
      <View style={commonStyles.content}>
        <>
          {step === 1 ? (
            <>
              <Text style={commonStyles.label}>
                Numéro de téléphone pour vous connecter
              </Text>
              <View>
                <CustomInputField
                  style={[
                    phoneError && commonStyles.errorInput,
                  ]}
                  placeholder="770000000"
                  iconName="phone"
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={handlePhoneNumberChange}
                  autoCapitalize="none"
                  autoCorrect={false}
                  maxLength={9}
                />
              </View>
              {phoneError && (
                <Text style={commonStyles.errorText}>
                  {phoneErrorMessage}
                </Text>
              )}
            </>
          ) : (
            <>
              <Text style={commonStyles.label}>
                Veuillez entrer votre mot de passe
              </Text>
              <View
              >
                 <CustomInputField
                  style={[
                    passwordError && commonStyles.errorInput,
                  ]}
                  placeholder="••••••••"
                  iconName="lock"
                  isPassword={true}
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text);
                    if (passwordError) {
                      setPasswordError(false);
                      setPasswordErrorMessage("");
                    }
                  }}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
              {passwordError && (
                <Text style={commonStyles.errorText}>
                  {passwordErrorMessage}
                </Text>
              )}
            </>
          )}
          <Progress.Bar
            progress={step / 2}
            width={wp("90%")}
            height={hp("0.4%")}
            color={COLORS.primary}
            unfilledColor="#C0C0C0"
            borderWidth={0}
            borderRadius={5}
            style={commonStyles.progressBar}
          />
          <Button
            title={step < 2 ? "CONTINUER" : "SE CONNECTER"}
            onPress={handleNext}
            type="primary"
          />
          {step === 1 && (
            <View style={[commonStyles.signupContainer]}>
              <Text
                style={[
                  commonStyles.label,
                  { fontFamily: "Roboto-Medium", fontSize: "16@s" },
                ]}
              >
                Nouveau sur SenDoctor ?
              </Text>
              <TouchableOpacity activeOpacity={0.8} onPress={handleSignUp}>
                <Text
                  style={[
                    commonStyles.label,
                    {
                      marginLeft: wp("1.5%"),
                      color: COLORS.primary,
                      fontSize: "14@s",
                    },
                  ]}
                >
                  S'INSCRIRE
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </>
       <DepartmentsComponent />
      </View>
    </>
  );
};

export default LoginScreen;
