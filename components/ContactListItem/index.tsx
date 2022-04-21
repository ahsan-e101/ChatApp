import React from "react";
import { View, Text , Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types";
import {User} from '../../types'
import styles from "./style";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import Navigation from "../../navigation";

export type ContactListItemProps = {
    user : User;
}

const ContactListItem = (props: ContactListItemProps) => {
    const {user} = props;

    const navigation = useNavigation();

    const onClick = () => {
        //navigate to chat room with this user
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
                    <Text style={styles.status}>{user.status} </Text>

                </View>
            </View>
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

export default ContactListItem;