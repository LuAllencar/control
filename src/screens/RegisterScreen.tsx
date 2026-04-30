import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

export default function RegisterScreen({navigation}: any) {
    const [image, setImage] = useState<string | null>(null);

    async function pickImage() {

        const permission = await
    ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
        alert("Permissão necessária para acessar a galeria de fotos.");
        return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true,
    });
    if (!result.canceled) {
        setImage(result.assets[0].uri);
    }
}
return (
    <View style={styles.container}>
        <Text style={styles.title}>Criar Conta</Text>
        <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
            {image ? (
                <Image source={{ uri: image }} style={styles.avatar} />
            ) : (
                <Text style={styles.imageText}>Selecionar Foto</Text>
            )}
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Nome" />
        <TextInput style={styles.input} placeholder="E-mail" />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
        
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.link}>Voltar para o Login</Text>
        </TouchableOpacity>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
},

title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
},

imageContainer: {
    alignSelf: "center",
    marginBottom: 20,
},

avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
},

imageText: {
    color: "#1e88e5",
},

input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
},

button: {
    backgroundColor: "#1e88e5",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
},

buttonText: {
    color: "#fff",
    fontWeight: "bold",
},

link: {
    color: "#1e88e5",
    textAlign: "center",
    marginTop: 20,
},

});