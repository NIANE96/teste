// import React from "react";
// import { View, Text, TextInput, TouchableOpacity } from "react-native";
// import { ScaledSheet } from "react-native-size-matters";
// import * as Progress from "react-native-progress";
// import { AntDesign, FontAwesome } from "@expo/vector-icons";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";
// import { COLORS } from "../../store/constants";
// import Button from "../Button/Button";

// const RenderLogin = ({
//   step,
//   phoneNumber,
//   phoneError,
//   phoneErrorMessage,
//   password,
//   passwordError,
//   passwordErrorMessage,
//   isPasswordVisible,
//   handlePhoneNumberChange,
//   togglePasswordVisibility,
//   handleNext,
//   handleSignUp,
//   setPassword,
//   setPasswordError,
//   setPasswordErrorMessage,
//   commonStylesAuth,
// }) => {
//   return (
//     <>
//       {step === 1 ? (
//         <>
//           <Text style={commonStylesAuth.label}>Numéro de téléphone pour vous connecter</Text>
//           <View style={[commonStylesAuth.inputContainer, phoneError && commonStylesAuth.errorInput]}>
//           <FontAwesome name="phone-square" size={22} color={COLORS.secondary} />
//             <Text style={[commonStylesAuth.prefix]}>+221</Text>
//             <TextInput
//               style={commonStylesAuth.inputText}
//               placeholder="770000000"
//               keyboardType="phone-pad"
//               value={phoneNumber}
//               onChangeText={handlePhoneNumberChange}
//               autoCapitalize="none"
//               autoCorrect={false}
//               maxLength={9} // Limite la saisie à 9 chiffres après le préfixe
//             />
//           </View>
//           {phoneError && <Text style={commonStylesAuth.errorText}>{phoneErrorMessage}</Text>}
//         </>
//       ) : (
//         <>
//           <Text style={commonStylesAuth.label}>Veuillez entrer votre mot de passe</Text>
//           <View style={[commonStylesAuth.inputContainer, passwordError && commonStylesAuth.errorInput]}>
//           <FontAwesome name="lock" size={22} color={COLORS.secondary} style={{marginRight: wp("1.5%")}}/>
//             <TextInput
//               style={commonStylesAuth.inputText}
//               placeholder="••••••••"
//               secureTextEntry={!isPasswordVisible}
//               value={password}
//               onChangeText={(text) => {
//                 setPassword(text);
//                 if (passwordError) {
//                   setPasswordError(false);
//                   setPasswordErrorMessage("");
//                 }
//               }}
//               autoCapitalize="none"
//               autoCorrect={false}
//             />
//             <TouchableOpacity activeOpacity={0.7} delayPressIn={0} style={[commonStylesAuth.isPasswordVisibleButton]} onPress={togglePasswordVisibility}>
//               <AntDesign name={isPasswordVisible ? "eye" : "eyeo"} size={22} color={COLORS.gray_2} />
//             </TouchableOpacity>
//           </View>
//           {passwordError && <Text style={commonStylesAuth.errorText}>{passwordErrorMessage}</Text>}
//         </>
//       )}
//       <Progress.Bar
//         progress={step / 2}
//         width={wp("90%")}
//         height={hp("0.4%")}
//         color={COLORS.primary}
//         unfilledColor="#C0C0C0"
//         borderWidth={0}
//         borderRadius={5}
//         style={commonStylesAuth.progressBar}
//       />
//       <Button
//         title={step < 2 ? "CONTINUER" : "SE CONNECTER"}
//         onPress={handleNext}
//         type="primary"
//       />
//       {step === 1 && (
//         <View style={[commonStylesAuth.signupContainer]}>
//           <Text
//             style={[
//               commonStylesAuth.label,
//               { fontFamily: "Roboto-Medium", fontSize: "16@s" },
//             ]}
//           >
//             Nouveau sur SenDoctor ?
//           </Text>
//           <TouchableOpacity activeOpacity={0.8} onPress={handleSignUp}>
//             <Text
//               style={[
//                 commonStylesAuth.label,
//                 {
//                   marginLeft: wp("1.5%"),
//                   color: COLORS.primary,
//                   fontSize: "14@s",
//                 },
//               ]}
//             >
//               S'INSCRIRE
//             </Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </>
//   );
// };

// export default RenderLogin;