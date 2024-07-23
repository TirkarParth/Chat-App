# Chat-App

# About the Chat App with React Native
This project involves building a chat app for mobile devices using React Native. The app provides users with a chat interface and options to share images and their location. It works on both iOS and Android devices and utilizes Google Firestore/Firebase for storing messages and images. Guest authentication is handled via Google Firebase authentication.

## Features and Requirements

### Key Features

- **User Setup**: Users can enter their name and choose a background color for the chat screen before joining the chat.
- **Chat Interface**: A page displaying the conversation, as well as an input field and submit button.
- **Enhanced Communication**: Users can send images and location data.
- **Data Storage**: Messages and images are stored online and offline.

### Technologies Used

- **React Native**
- **Expo**
- **Expo ImagePicker**
- **Expo Location**
- **Google Firestore/Firebase**
- **Gifted Chat Library**
- **Android Studio**

### Dependencies

json
{
  - "@react-navigation/native": "",
  - "@react-navigation/native-stack": "",
  - "expo": "",
  - "expo-status-bar": "",
  - "firebase": "",
  - "react": "",
  - "react-native": "",
  - "react-native-gifted-chat": "",
  - "react-native-safe-area-context": "",
  - "react-native-screens": "",
  - "@react-native-async-storage/async-storage": "",
  - "@react-native-community/netinfo": "",
  - "expo-image-picker": "",
  - "expo-location": "",
  - "react-native-maps": ""
}

### Prerequisites

Node.js

### Google Firestore/Firebase Setup

1 - Create an Account: Sign up for a Google Firestore/Firebase account and create a new project.
2 - Obtain Configuration Code: Add the configuration code to App.js.
3 - Set Up Database: Navigate to Build > Firestore Database to set up the database.
4 - Activate Storage: Enable storage for the project.
5 - Modify Rules: Set rules to allow read, write: if true.

### Starting the Expo Project

To start the Expo project, run the following command: `npx expo start`

### Testing Options

- Expo App: Download and connect the Expo app on your mobile device.
- Android Studio: For Android testing.
- Xcode: For iOS testing.
