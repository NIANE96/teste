import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import MyStatusBar from "@/components/Header/MyStatusBar/MyStatusBar";
import {COLORS} from '@/store/constants';

//Import destructurer pour la fonction confirmUser
import { confirmUser } from '@/services/authService';

export default function VerifyAccountScreen() {
    const [code, setCode] = useState(new Array(4).fill(''));
    const inputs = useRef([...Array(4)].map(() => React.createRef()));
    const navigation = useNavigation();
      const route = useRoute();
  const { phoneNumber } = route.params; // Accédez uniquement aux paramètres passés

    const handleInput = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if (text && index < 3) {
            inputs.current[index + 1].current.focus();
        }
        if (text === "" && index > 0) {
            inputs.current[index - 1].current.focus();
        }
    };

    const handleSubmit = async () => {
        const confirmationCode = code.join('');
        if (confirmationCode.length !== 4) {
            // Assurez-vous que le code est complet
            alert("Veuillez entrer un code complet.");
            return;
        }

        try {
            const response = await confirmUser(phoneNumber, confirmationCode);

            if (response.success) {
                // Code vérifié avec succès
                alert("Compte vérifié avec succès !");
                navigation.navigate('Login'); // Navigation vers l'ecran Login
            } else {
                // Gestion des erreurs
                alert("Le code de vérification est invalide. Veuillez réessayer.");
            }
        } catch (error) {
            console.error("Erreur lors de la vérification du code:", error);
            alert("Une erreur est survenue. Veuillez réessayer.");
        }
    };

    return (
        <View style={styles.container}>
            {/* Contenu principal */}
            <View style={styles.content}>
                <Text style={styles.subText}>Nous vous avons envoyé un code de vérification sur votre numéro de téléphone</Text>
                {/* Zone de saisie du code de vérification */}
                <View style={styles.inputContainer}>
                    {code.map((_, index) => (
                        <TextInput
                            key={index}
                            style={styles.inputBox}
                            keyboardType="number-pad"
                            maxLength={1}
                            onChangeText={(text) => handleInput(text, index)}
                            value={code[index]}
                            ref={inputs.current[index]}
                            returnKeyType="done"
                            autoFocus={index === 0}
                        />
                    ))}
                </View>

                {/* Bouton de validation */}
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity onPress={handleSubmit}>
                    <Text>Valider</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingTop: 60, // Ajuster l'espace en haut pour l'en-tête
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: COLORS.primary,
        padding: 12,
    },
    backIcon: {
        marginRight: 10,
    },
    headerText: {
        fontFamily: "Montserrat-ExtraBold",
        //fontSize: 18,
        flex: 1, // Pour centrer le texte
        color: COLORS.white,
        textAlign: 'center',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 50,
    },
    subText: {
        fontSize: 16,
        fontFamily: "Montserrat-Medium",
        color: "#666",
        marginBottom: 20,
        textAlign: "center",
    },
    inputContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    inputBox: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: "#ddd",
        textAlign: "center",
        marginRight: 10,
        borderRadius: 10,
        fontSize: 20,
        fontFamily: "Montserrat-Bold",
    },
});
