import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '99%',
        justifyContent: "space-between",
        padding: 5,
    },
    leftContainer: {
        flexDirection: "row",
    },
    midContainer: {
        justifyContent: "space-around",
        width:"60%"
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 8,
        borderRadius: 30,
    },
    userName: {
        fontWeight: "bold",
        fontSize: 16, 
    },
    lastmsg: {
      fontSize: 16,
      color: 'grey',  
    },
    time: {
        fontSize: 14,
      color: 'grey',
    },
});

export default styles;