import { StyleSheet, LogBox } from 'react-native';
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

// import the screens
import Start from './components/Start';
import Chat from './components/Chat';

// import Firestore and Auth
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCgcov_f9yGDUbpyAKhOqJmZS8bPdyWRBM",
    authDomain: "chat-app-8db78.firebaseapp.com",
    projectId: "chat-app-8db78",
    storageBucket: "chat-app-8db78.appspot.com",
    messagingSenderId: "391944198459",
    appId: "1:391944198459:web:e3ac6cdd05e45916cebf1e",
    measurementId: "G-J2EJKPB034"
  };

  // Initialize Firebase if it hasn't been initialized already
  let app;
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);

    // Initialize Firebase Auth with persistence
    initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    });
  } else {
    app = getApp();
  }

  // Initialize Firebase Auth
  const auth = getAuth(app);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {props => <Chat db={db} {...props} />}
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
