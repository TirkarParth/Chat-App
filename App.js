import React, { useEffect, useState } from 'react';
import { StyleSheet, LogBox } from 'react-native';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, disableNetwork, enableNetwork } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Start from './components/Start';
import Chat from './components/Chat';

LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

const Stack = createNativeStackNavigator();

const App = () => {
  const netInfo = useNetInfo();
  const [db, setDb] = useState(null);

  const firebaseConfig = {
    apiKey: "AIzaSyCgcov_f9yGDUbpyAKhOqJmZS8bPdyWRBM",
    authDomain: "chat-app-8db78.firebaseapp.com",
    projectId: "chat-app-8db78",
    storageBucket: "chat-app-8db78.appspot.com",
    messagingSenderId: "391944198459",
    appId: "1:391944198459:web:e3ac6cdd05e45916cebf1e",
    measurementId: "G-J2EJKPB034"
  };

  let app;
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
    initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    });
  } else {
    app = getApp();
  }

  const auth = getAuth(app);
  const firestore = getFirestore(app);

  useEffect(() => {
    setDb(firestore);
  }, [firestore]);

  useEffect(() => {
    if (db) {
      if (netInfo.isConnected) {
        enableNetwork(db).catch((error) => console.error("Error enabling Firestore network:", error));
      } else {
        disableNetwork(db).catch((error) => console.error("Error disabling Firestore network:", error));
      }
    }
  }, [netInfo.isConnected, db]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {props => <Chat db={db} isConnected={netInfo.isConnected} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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

export default App;
