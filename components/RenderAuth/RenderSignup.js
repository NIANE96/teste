// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Pressable,
//   Platform,
//   Modal,
//   TouchableWithoutFeedback,
// } from "react-native";
// import { ScaledSheet } from "react-native-size-matters";
// import * as Progress from "react-native-progress";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import { AntDesign, FontAwesome } from "@expo/vector-icons";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";
// import { COLORS } from "../../store/constants";
// import Button from "../Button/Button";
// import GenderButton from "../GenderButton/GenderButton";
// import CountryPicker from "./CountryPicker";
// import CityPicker from "./CityPicker";

// const RenderSignup = ({
//   step,
//   phoneNumber,
//   phoneError,
//   phoneErrorMessage,
//   gender,
//   setGender,
//   genderError,
//   setGenderError,
//   genderErrorMessage,
//   setGenderErrorMessage,
//   firstName,
//   setFirstName,
//   firstNameError,
//   setFirstNameError,
//   firstNameErrorMessage,
//   setFirstNameErrorMessage,
//   lastName,
//   setLastName,
//   lastNameError,
//   setLastNameError,
//   lastNameErrorMessage,
//   setLastNameErrorMessage,
//   birthDate,
//   setBirthDate,
//   birthDateError,
//   setBirthDateError,
//   birthDateErrorMessage,
//   handleBirthdateChange,
//   selectedCountry,
//   setSelectedCountry,
//   countryError,
//   countryErrorMessage,
//   setCountryError,
//   setCountryErrorMessage,
//   isPasswordVisible,
//   handlePhoneNumberChange,
//   togglePasswordVisibility,
//   handleNext,
//   handleSignUp,
//   commonStylesAuth,
//   address,
//   setAddress,
//   addressError,
//   setAddressError,
//   city,
//   setCity,
//   showCityPicker,
//   setShowCityPicker,
//   password,
//   confirmPassword,
//   passwordError,
//   passwordErrorMessage,
//   confirmPasswordError,
//   confirmPasswordErrorMessage,
//   setPassword,
//   setConfirmPassword,
//   setPasswordError,
//   setPasswordErrorMessage,
//   setConfirmPasswordError,
//   setConfirmPasswordErrorMessage,
// }) => {
//   // Uttlisation de DatePicker
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const [showCountryPicker, setShowCountryPicker] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || birthDate;
//     setShowDatePicker(Platform.OS === "ios");
//     if (selectedDate) {
//       handleBirthdateChange(currentDate.toISOString().split("T")[0]);
//       setBirthDate(currentDate);
//       setBirthDateError(false);
//     }
//   };

//   const showDatepicker = () => {
//     setShowDatePicker(true);
//   };

//   const hideDatepicker = () => {
//     setShowDatePicker(false);
//   };

//   // const handleSelectCountry = (country) => {
//   //   setSelectedCountry(country);
//   //   setCountryError(false);
//   //   setCountryErrorMessage("");
//   // };
//   const handleSelectCountry = (country) => {
//     // Extraire les informations essentielles du pays
//     const simplifiedCountry = {
//       name: country.name.common, // Nom du pays
//       code: country.cca2, // Code pays en deux lettres (ISO)
//     };

//     // Mettre à jour l'état avec les informations simplifiées
//     setSelectedCountry(simplifiedCountry);
//     setCountryError(false);
//     setCountryErrorMessage("");
//   };

//   const handleSelectCity = (city) => {
//     setCity(city);
//   };

//   if (step === 1) {
//     return (
//       <>
//         <Text style={commonStylesAuth.label}>
//           Saisissez un numéro de téléphone
//         </Text>
//         <View
//           style={[
//             commonStylesAuth.inputContainer,
//             phoneError && commonStylesAuth.errorInput,
//           ]}
//         >
//           <FontAwesome name="phone-square" size={22} color={COLORS.secondary} />
//           <Text style={[commonStylesAuth.prefix]}>+221</Text>
//           <TextInput
//             style={commonStylesAuth.inputText}
//             placeholder="770000000"
//             keyboardType="phone-pad"
//             value={phoneNumber}
//             onChangeText={handlePhoneNumberChange}
//             autoCapitalize="none"
//             autoCorrect={false}
//             maxLength={9} // Limite la saisie à 9 chiffres après le préfixe
//           />
//         </View>
//         {phoneError && (
//           <Text style={commonStylesAuth.errorText}>{phoneErrorMessage}</Text>
//         )}
//       </>
//     );
//   } else if (step === 2) {
//     return (
//       <>
//         <Text style={commonStylesAuth.label}>Renseigner votre identité</Text>
//         <Text style={[commonStylesAuth.label, commonStylesAuth.subLabel]}>
//           Identité
//         </Text>
//         <View style={[commonStylesAuth.genderContainer]}>
//           <GenderButton
//             title="Féminin"
//             selected={gender === "female"}
//             style={[genderError && commonStylesAuth.errorInput]}
//             onPress={() => {
//               setGender("female");
//               if (genderError) {
//                 setGenderError(false);
//                 setGenderErrorMessage("");
//               }
//             }}
//           />
//           <GenderButton
//             title="Masculin"
//             selected={gender === "male"}
//             style={[genderError && commonStylesAuth.errorInput]}
//             onPress={() => {
//               setGender("male");
//               if (genderError) {
//                 setGenderError(false);
//                 setGenderErrorMessage("");
//               }
//             }}
//           />
//         </View>
//         {genderError && (
//           <Text style={commonStylesAuth.errorText}>{genderErrorMessage}</Text>
//         )}

//         <View
//           style={[
//             commonStylesAuth.inputContainer,
//             commonStylesAuth.inputForm,
//             firstNameError && commonStylesAuth.errorInput,
//           ]}
//         >
//           <TextInput
//             style={[commonStylesAuth.inputText]}
//             placeholder="Prénom"
//             value={firstName}
//             onChangeText={(text) => {
//               setFirstName(text);
//               if (firstNameError) {
//                 setFirstNameError(false);
//                 setFirstNameErrorMessage("");
//               }
//             }}
//           />
//         </View>
//         {firstNameError && (
//           <Text style={commonStylesAuth.errorText}>
//             {firstNameErrorMessage}
//           </Text>
//         )}

//         <View
//           style={[
//             commonStylesAuth.inputContainer,
//             commonStylesAuth.inputForm,
//             lastNameError && commonStylesAuth.errorInput,
//           ]}
//         >
//           <TextInput
//             style={[commonStylesAuth.inputText]}
//             placeholder="Nom"
//             value={lastName}
//             onChangeText={(text) => {
//               setLastName(text);
//               if (lastNameError) {
//                 setLastNameError(false);
//                 setLastNameErrorMessage("");
//               }
//             }}
//           />
//         </View>
//         {lastNameError && (
//           <Text style={commonStylesAuth.errorText}>{lastNameErrorMessage}</Text>
//         )}
//         <Text style={[commonStylesAuth.label, commonStylesAuth.subLabel]}>
//           Date et lieu de naissance
//         </Text>
//         <View
//           style={[
//             commonStylesAuth.birthDateContent,
//             { marginTop: -hp("0.5%") },
//           ]}
//         >
//           <TouchableOpacity
//             onPress={showDatepicker}
//             style={[
//               commonStylesAuth.btnContainer,
//               birthDateError && commonStylesAuth.errorInput,
//             ]}
//           >
//             <TextInput
//               style={[commonStylesAuth.inputText, { zIndex: 0 }]}
//               placeholder="Date de Naissance"
//               value={birthDate ? birthDate.toLocaleDateString() : ""}
//               editable={false}
//             />
//           </TouchableOpacity>

//           <Modal
//             visible={showDatePicker}
//             transparent={true}
//             animationType="slide"
//             onRequestClose={hideDatepicker}
//           >
//             <View style={commonStylesAuth.modalContainer}>
//               <View style={commonStylesAuth.datePickerContainer}>
//                 <DateTimePicker
//                   value={birthDate || new Date()}
//                   mode="date"
//                   display="spinner"
//                   onChange={onChange}
//                   maximumDate={new Date()} // Assure que la date sélectionnée ne dépasse pas la date actuelle
//                 />
//                 <Pressable
//                   onPress={() => setShowDatePicker(false)}
//                   style={commonStylesAuth.button}
//                 >
//                   <Text style={commonStylesAuth.buttonText}>Valider</Text>
//                 </Pressable>
//               </View>
//             </View>
//           </Modal>
//         </View>
//         {birthDateError && (
//           <Text style={commonStylesAuth.errorText}>
//             {birthDateErrorMessage}
//           </Text>
//         )}

//         <View style={[commonStylesAuth.inputForm]}>
//           <TouchableOpacity
//             onPress={() => setShowCountryPicker(true)}
//             style={[
//               commonStylesAuth.btnContainer,
//               countryError && commonStylesAuth.errorInput,
//             ]}
//           >
//             <Text>
//               {selectedCountry
//                 ? selectedCountry.name // Afficher uniquement le nom du pays
//                 : "Sélectionner le pays"}
//             </Text>
//           </TouchableOpacity>
//         </View>
//         {countryError && (
//           <Text style={commonStylesAuth.errorText}>{countryErrorMessage}</Text>
//         )}

//         <CountryPicker
//           visible={showCountryPicker}
//           onClose={() => setShowCountryPicker(false)}
//           onSelect={handleSelectCountry}
//           selectedCountry={selectedCountry}
//         />
//       </>
//     );
//   } else if (step === 3) {
//     return (
//       <>
//         <Text style={commonStylesAuth.label}>Adresse de domicile</Text>
//         <View
//           style={[
//             commonStylesAuth.inputContainer,
//             addressError && commonStylesAuth.errorInput,
//           ]}
//         >
//           <TextInput
//             style={commonStylesAuth.inputText}
//             placeholder="Adresse complète"
//             value={address}
//             onChangeText={(text) => {
//               setAddress(text);
//               if (addressError) {
//                 setAddressError(false);
//               }
//             }}
//           />
//         </View>
//         {addressError && (
//           <Text style={commonStylesAuth.errorText}>{addressError}</Text>
//         )}
//         <TouchableOpacity
//           onPress={() => setShowCityPicker(true)}
//           style={[
//             commonStylesAuth.inputContainer,
//             { marginTop: hp("2%") },
//             city && commonStylesAuth.inputText, // Style si une ville est sélectionnée
//           ]}
//         >
//           <Text style={commonStylesAuth.inputText}>
//             {city ? city : "Sélectionner une ville"}
//           </Text>
//         </TouchableOpacity>

//         <CityPicker
//           visible={showCityPicker}
//           onClose={() => setShowCityPicker(false)}
//           onSelect={handleSelectCity}
//           selectedCity={city}
//         />
//       </>
//     );
//   } else if (step === 4) {
//     return (
//       <>
//         <Text style={commonStylesAuth.label}>Créer un mot de passe</Text>
//         <View
//           style={[
//             commonStylesAuth.inputContainer,
//             passwordError && commonStylesAuth.errorInput,
//           ]}
//         >
//           <TextInput
//             style={commonStylesAuth.inputText}
//             placeholder="Mot de passe"
//             secureTextEntry={!isPasswordVisible}
//             value={password}
//             onChangeText={(text) => {
//               setPassword(text);
//               if (passwordError) {
//                 setPasswordError(false);
//                 setPasswordErrorMessage("");
//               }
//             }}
//           />
//           <TouchableOpacity onPress={togglePasswordVisibility}>
//             <AntDesign
//               name={isPasswordVisible ? "eye" : "eyeo"}
//               size={22}
//               color={COLORS.secondary}
//             />
//           </TouchableOpacity>
//         </View>
//         {passwordError && (
//           <Text style={commonStylesAuth.errorText}>{passwordErrorMessage}</Text>
//         )}

//         <View
//           style={[
//             commonStylesAuth.inputContainer,
//             { marginTop: hp("2%") },
//             confirmPasswordError && commonStylesAuth.errorInput,
//           ]}
//         >
//           <TextInput
//             style={commonStylesAuth.inputText}
//             placeholder="Confirmer le mot de passe"
//             secureTextEntry={!isPasswordVisible}
//             value={confirmPassword}
//             onChangeText={(text) => {
//               setConfirmPassword(text);
//               if (confirmPasswordError) {
//                 setConfirmPasswordError(false);
//                 setConfirmPasswordErrorMessage("");
//               }
//             }}
//           />
//         </View>
//         {confirmPasswordError && (
//           <Text style={commonStylesAuth.errorText}>
//             {confirmPasswordErrorMessage}
//           </Text>
//         )}
//       </>
//     );
//   }
// };

// export default RenderSignup;
