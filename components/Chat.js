import React, { useState, useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const Chat = ({ route, navigation }) => {
    const { name, background } = route.params;
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        navigation.setOptions({ title: name });

        setMessages([
            {
                _id: 1,
                text: 'Welcome to the chat!',
                createdAt: new Date(),
                system: true,
            },
            {
                _id: 2,
                text: `Hi ${name}!`,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: name,
                },
            },
        ]);
    }, []);

    const onSend = (newMessages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, newMessages)
        );
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={[styles.container, { backgroundColor: background }]}>
                <GiftedChat
                    messages={messages}
                    onSend={(messages) => onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Chat;
