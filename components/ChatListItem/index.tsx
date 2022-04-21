import React from "react";
import { View, Text , Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types";
import {User} from '../../types'
import styles from "./style";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import Navigation from "../../navigation";

export type ChatListItemProps = {
    chatRoom : ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const {chatRoom} = props;

    const navigation = useNavigation();

    const user = chatRoom.users[1];

    const onClick = () => {
     navigation.navigate("ChatRoom", 
        { 
            id: chatRoom.id,
            name: user.name,
        })
    }


    return(
        <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <View style= {styles.leftContainer}>
                <Image source = {{uri: user.imageUri}} style={styles.avatar} />
                <View style={styles.midContainer}>
                    <Text style={styles.userName}> {user.name} </Text>
                    <Text style={styles.lastmsg}>{chatRoom.lastMessage.content} </Text>
                </View>
            </View>
            <Text style={styles.time}> {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")} </Text>
        </View>
        </TouchableWithoutFeedback>
    )
};

// const styles = StyleSheet.create({
//     avatar: {
//         width: 50,
//         height: 50,
//     }
// });

export default ChatListItem;