import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '../components/Themed';
import ChatRooms from '../data/ChatRooms';
import ChatListItem from '../components/ChatListItem';
import NewMessageButton from '../components/NewMessageButton';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
      style={{width: "100%" }}
      data={ChatRooms}
      renderItem={({ item }) => <ChatListItem chatRoom={item} /> } 
      keyExtractor={(item) => item.id}
      />

      <NewMessageButton />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
