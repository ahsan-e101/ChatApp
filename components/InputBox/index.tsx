import React, { useState } from "react";
import { View,Text } from "../Themed";
import styles from "./style";
import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto, MaterialIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { TextInput, TouchableOpacity } from "react-native";

const InputBox = () => {

    const [message, setMessage]  = useState('');

    const onMicrophonePress = () => {
        console.warn('Microphone');
    }
    
    const onSendPress = () => {
        console.warn(`Sending: ${message}`);
        setMessage('');

        //Sending Message to backend.!!
    }

    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name='laugh-beam' size={24} color="grey" />
                <TextInput style={styles.textInput}
                multiline
                placeholder={"Type a message.."} 
                value={message}
                onChangeText={setMessage}  />
                <Entypo name='attachment' size={24} color="grey" style={styles.icons} />
                {!message &&<Fontisto name='camera' size={24} color="grey" style={styles.icons} />}
            </View>
            <TouchableOpacity onPress={onPress} >
            <View style={styles.buttonContainer}>
                {!message 
                ? <MaterialCommunityIcons name="microphone" size={28} Colors={Colors.light.tint} />
                : <MaterialIcons name="send" size={28} color= 'white' />
                }
                
            </View>
            </TouchableOpacity>

        </View>
    )
}

export default InputBox;