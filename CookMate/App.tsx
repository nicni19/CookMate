import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QueryService from './src/shared/services/QueryService';
import { User } from './src/shared/view-models/User';

export default function App() {
  let userinfo = QueryService.users.getUser("0");

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {userinfo && <Text>Cookbook info on user 1: ({userinfo.id}) {userinfo.firstName} {userinfo.lastName} following ({userinfo.following.length})</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
