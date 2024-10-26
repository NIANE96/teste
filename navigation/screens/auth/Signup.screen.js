import React, { useState, useContext, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Modal, Pressable, Platform, KeyboardAvoidingView } from "react-native";
import MyStatusBar from "@/components/Header/MyStatusBar/MyStatusBar";
import CustomBackButton from "@/components/Header/MyStatusBar/CustomBackButton";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "@/store/context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GenderButton from "@/components/GenderButton/GenderButton";
import CountryPicker from "@/components/RenderAuth/CountryPicker";
import CityPicker from "@/components/RenderAuth/CityPicker";
import { COLORS } from "@/store/constants";
import * as Progress from "react-native-progress";
import Button from "@/components/Button/Button";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import commonStylesAuth from "@/styles/common/common.styles.auth";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

//Import destructurer pour la foonction Signup
import { signup } from "@/services/authService";
import commonStyles from "../../../styles/common/common.style";
import CustomInputField from "../../../components/CustomInputField";
import CustomButtonInputField from "../../../components/CustomButtonInputField";
import CustomDatePickerModal from "../../../components/CustomModalPicker/CustomModalPicker";

const SignupScreen = () => {
  const navigation = useNavigation();
  const { login, isLoggedIn } = useContext(AuthContext);
  const [step, setStep] = useState(1);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [city, setCity] = useState("");
  const [showCityPicker, setShowCityPicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");

  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState(false);
  const [genderErrorMessage, setGenderErrorMessage] = useState("");

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");

  const [selectedDate, setSelectedDate] = useState('Sélectionnez une date de naissance');
  const [birthDate, setBirthDate] = useState("");
  const [birthDateError, setBirthDateError] = useState(false);
  const [birthDateErrorMessage, setBirthDateErrorMessage] = useState("");

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [countryErrorMessage, setCountryErrorMessage] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState("");

  // UseEffect pour charger le numéro de téléphone sauvegardé
  useEffect(() => {
    const loadPhoneNumber = async () => {
      try {
        const savedPhoneNumber = await AsyncStorage.getItem("phoneNumber");
        if (savedPhoneNumber) {
          setPhoneNumber(savedPhoneNumber);
        }
      } catch (error) {
        console.error("Erreur de chargement du numéro de téléphone à partir d’AsyncStorage", error);
      }
    };

    loadPhoneNumber();

    if (isLoggedIn) {
      navigation.replace("MainTabs");
    }
  }, [isLoggedIn]);

  // Fonction pour gérer le changement de numéro de téléphone
  const handlePhoneNumberChange = async (text) => {
    const formattedNumber = text.replace(/\D/g, ""); // Conserver uniquement les chiffres
    setPhoneNumber(formattedNumber);
    try {
      await AsyncStorage.setItem("phoneNumber", formattedNumber);
    } catch (error) {
      console.error("Erreur lors de l’enregistrement du numéro de téléphone dans AsyncStorage", error);
    }
    if (phoneError) {
      setPhoneError(false);
      setPhoneErrorMessage("");
    }
  };

  // Fonction pour gérer le changement de date de naissance
  const handleBirthdateChange = (formattedDate) => {
    setBirthDate(formattedDate);
    if (birthDateError) {
      setBirthDateError(false);
      setBirthDateErrorMessage("");
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthDate;
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      handleBirthdateChange(currentDate.toISOString().split("T")[0]);
      setBirthDate(currentDate);
      setBirthDateError(false);
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const hideDatepicker = () => {
    setShowDatePicker(false);
  };

  // const handleSelectCountry = (country) => {
  //   setSelectedCountry(country);
  //   setCountryError(false);
  //   setCountryErrorMessage("");
  // };
  const handleSelectCountry = (country) => {
    // Extraire les informations essentielles du pays
    const simplifiedCountry = {
      name: country.name.common, // Nom du pays
      code: country.cca2, // Code pays en deux lettres (ISO)
    };

    // Mettre à jour l'état avec les informations simplifiées
    setSelectedCountry(simplifiedCountry);
    setCountryError(false);
    setCountryErrorMessage("");
  };

  const handleSelectCity = (city) => {
    setCity(city);
  };

  // Fonction pour gérer la visibilité du mot de passe
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  }; 

  const handleSelectDate = (event, date) => {
    if (date) {
      setBirthDate(date);
      setSelectedDate(format(date, 'dd MMMM yyyy', { locale: fr }));
    }
  };

  // Function pour gerer les etapes
  const handleNext = () => {
    let isValid = true;
    if (step === 1) {
      // Validation pour l'étape 1 (Numéro de téléphone)
      const validPrefixes = ["70", "76", "77", "78"];
      const phoneRegex = new RegExp(`^(${validPrefixes.join("|")})\\d{7}$`);

      if (!phoneNumber) {
        setPhoneError(true);
        setPhoneErrorMessage("Le numéro de téléphone est requis");
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
      // Validation pour l'étape 2 (Identité)
      if (!gender) {
        setGenderError(true);
        setGenderErrorMessage("Le genre est requis.");
        isValid = false;
      }
      if (!firstName) {
        setFirstNameError(true);
        setFirstNameErrorMessage("Le prénom est requis.");
        isValid = false;
      }
      if (!lastName) {
        setLastNameError(true);
        setLastNameErrorMessage("Le nom est requis.");
        isValid = false;
      }
      if (!birthDate) {
        setBirthDateError(true);
        setBirthDateErrorMessage("La date de naissance est requise.");
        isValid = false;
      }
      if (!selectedCountry) {
        setCountryError(true);
        setCountryErrorMessage(
          "Veuillez sélectionner votre pays de naissance."
        );
        return;
      }
      if (isValid) {
        setStep(3);
      }
    } else if (step === 3) {
      // Validation pour l'étape 3 (Adresse)
      if (!address) {
        setAddressError("Veuillez entrer votre adresse");
        isValid = false;
      } else if (!city) {
        setAddressError("Veuillez sélectionner une ville");
        isValid = false;
      } else {
        setAddressError("");
        if (isValid) {
          setStep(4);
        }
      }
      // if (isValid) {
      //   setStep(4);
      // }
    }else if (step === 4) {
      // Validation pour l'étape 3 (Adresse)
      if (!country) {
        //isValid = false;
      } else if (!city) {
        //isValid = false;
      } else {
        setAddressError("");
        if (isValid) {
          setStep(5);
        }
      }
      // if (isValid) {
      //   setStep(4);
      // }
    }  else if (step === 5) {
      // Validation pour l'étape 4 (Mot de passe)
      if (!password) {
        setPasswordError(true);
        setPasswordErrorMessage("Le mot de passe est requis.");
        isValid = false;
      } else if (password.length < 6) {
        setPasswordError(true);
        setPasswordErrorMessage(
          "Le mot de passe doit contenir au moins 6 caractères."
        );
        isValid = false;
      }
      if (!confirmPassword) {
        setConfirmPasswordError(true);
        setConfirmPasswordErrorMessage(
          "La confirmation du mot de passe est requise."
        );
        isValid = false;
      } else if (confirmPassword !== password) {
        setConfirmPasswordError(true);
        setConfirmPasswordErrorMessage(
          "Les mots de passe ne correspondent pas."
        );
        isValid = false;
      }
      if (isValid) {
        handleSignUp(); // ou autre action pour finaliser l'inscription
      }
    }
  };


  const handleSignUp = async () => {
    try {
      // Logic to handle signup (e.g., API call to register user)
      console.log("Inscription réussie avec:", {
        phone: `+221${phoneNumber}`, // Préfixer le numéro de téléphone avec l'indicatif international
        gender,
        firstName,
        lastName,
        birthDate,
        address,
        city,
        country: selectedCountry.name, // Utiliser le nom du pays sélectionné
        password,
      });

      const response = await signup(userData);

      if (response.success) {
        // Naviguer vers l'écran de vérification
        navigation.navigate("Verification", { phoneNumber });
      } else {
        // Afficher l'erreur
        Alert.alert("Erreur", response.message || "Une erreur est survenue lors de l'inscription.");
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      Alert.alert("Erreur", "Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar backgroundColor={COLORS.primary} />
      <CustomBackButton title="S'inscrire" onPress={() => navigation.goBack()} />
      <KeyboardAvoidingView style={commonStyles.content} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {step === 1 && (
          <>
          <Text style={commonStyles.label}>
            Saisissez un numéro de téléphone
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
        </>
        )}
        {step === 2 && (
          <>
          <Text style={commonStyles.label}>Renseigner votre identité</Text>
          <Text style={[commonStyles.label, commonStyles.subLabel]}>
            Identité
          </Text>
          <View style={[{flexDirection: "row"}]}>
            <GenderButton
              title="Féminin"
              selected={gender === "female"}
              style={[genderError && commonStyles.errorInput]}
              onPress={() => {
                setGender("female");
                if (genderError) {
                  setGenderError(false);
                  setGenderErrorMessage("");
                }
              }}
            />
            <GenderButton
              title="Masculin"
              selected={gender === "male"}
              style={[genderError && commonStyles.errorInput]}
              onPress={() => {
                setGender("male");
                if (genderError) {
                  setGenderError(false);
                  setGenderErrorMessage("");
                }
              }}
            />
          </View>
  
          <View>
             <CustomInputField
              style={[
                firstNameError && commonStyles.errorInput,
              ]}
        placeholder="Prénom"
        value={firstName}
        onChangeText={(text) => {
          setFirstName(text);
          if (firstNameError) {
            setFirstNameError(false);
            setFirstNameErrorMessage("");
          }
        }}
      />
          </View>
          <View>
              <CustomInputField
               style={[
                firstNameError && commonStyles.errorInput,
              ]}
        placeholder="Nom"
        value={lastName}
        onChangeText={(text) => {
          setLastName(text);
          if (lastNameError) {
            setLastNameError(false);
            setLastNameErrorMessage("");
          }
        }}
        
      />
          </View>
          {/* <Text style={[commonStyles.label, commonStyles.subLabel]}>
            Date et lieu de naissance
          </Text>
          <View
            style={[
              commonStylesAuth.birthDateContent,
              { marginTop: -hp("0.5%") },
            ]}
          >
            <TouchableOpacity
              onPress={showDatepicker}
              style={[
                commonStylesAuth.btnContainer,
                birthDateError && commonStylesAuth.errorInput,
              ]}
            > */}
              {/* <CustomButtonInputField
        title={selectedOption}
        options={['Option 1', 'Option 2', 'Option 3']}
        onSelect={handleSelectOption}
      /> */}
              {/* <TextInput
                style={[commonStylesAuth.inputText, { zIndex: 0 }]}
                placeholder="Date de Naissance"
                value={birthDate ? birthDate.toLocaleDateString() : ""}
                editable={false}
              />
            </TouchableOpacity>
  
            <CustomDatePickerModal
        isVisible={showDatePicker}
        onClose={() => setShowDatePicker(false)}
        date={birthDate}
        onChange={handleSelectDate}
        confirmText="Valider"
        styles={commonStylesAuth} // Si vous avez des styles personnalisés
      /> */}
          {/* </View>
          {birthDateError && (
            <Text style={commonStylesAuth.errorText}>
              {birthDateErrorMessage} 
            </Text>
          )}
  
          <View style={[commonStylesAuth.inputForm]}>
            <TouchableOpacity
              onPress={() => setShowCountryPicker(true)}
              style={[
                commonStylesAuth.btnContainer,
                countryError && commonStylesAuth.errorInput,
              ]}
            >
              <Text>
                {selectedCountry
                  ? selectedCountry.name // Afficher uniquement le nom du pays
                  : "Sélectionner le pays"}
              </Text>
            </TouchableOpacity>
          </View>
          {countryError && (
            <Text style={commonStylesAuth.errorText}>{countryErrorMessage}</Text>
          )} */}
  
          {/* <CountryPicker
            visible={showCountryPicker}
            onClose={() => setShowCountryPicker(false)}
            onSelect={handleSelectCountry}
            selectedCountry={selectedCountry}
          /> */}
        </>
        )}
        {step === 3 && (
          <>
        </>
        )}
         {step === 4 && (
          <></>)}
        {step === 5 && (
          <>
          <Text style={commonStylesAuth.label}>Créer un mot de passe</Text>
          <View
            style={[
              commonStylesAuth.inputContainer,
              passwordError && commonStylesAuth.errorInput,
            ]}
          >
            <TextInput
              style={commonStylesAuth.inputText}
              placeholder="Mot de passe"
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (passwordError) {
                  setPasswordError(false);
                  setPasswordErrorMessage("");
                }
              }}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <AntDesign
                name={isPasswordVisible ? "eye" : "eyeo"}
                size={22}
                color={COLORS.secondary}
              />
            </TouchableOpacity>
          </View>
          {passwordError && (
            <Text style={commonStylesAuth.errorText}>{passwordErrorMessage}</Text>
          )}
  
          <View
            style={[
              commonStylesAuth.inputContainer,
              { marginTop: hp("2%") },
              confirmPasswordError && commonStylesAuth.errorInput,
            ]}
          >
            <TextInput
              style={commonStylesAuth.inputText}
              placeholder="Confirmer le mot de passe"
              secureTextEntry={!isPasswordVisible}
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                if (confirmPasswordError) {
                  setConfirmPasswordError(false);
                  setConfirmPasswordErrorMessage("");
                }
              }}
            />
          </View>
          {confirmPasswordError && (
            <Text style={commonStylesAuth.errorText}>
              {confirmPasswordErrorMessage}
            </Text>
          )}
        </>
        )}
          {/* <CityPicker
          visible={showCityPicker}
          onClose={() => setShowCityPicker(false)}
          onSelect={setCity}
          selectedCity={city}
        /> */}
        <Progress.Bar
          progress={step / 5}
          width={wp("90%")}
          height={hp("0.4%")}
          color={COLORS.primary}
          unfilledColor="#C0C0C0"
          borderWidth={0}
          borderRadius={5}
          style={commonStylesAuth.progressBar}
        />

        <Button
          title={step === 4 ? "S'INSCRIRE" : "CONTINUER"}
          onPress={handleNext}
          type="primary"
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignupScreen;
