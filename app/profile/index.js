import {StyleSheet, View, Text, Button} from "react-native";
import {Link, router} from "expo-router";
import React from "react";
import {useMyTheme} from "../../src/context/MyTheme";

export default function ProfileScreen() {
    const { toggleTheme, theme, setTheme, data } = useMyTheme();

    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Text style={{fontSize: 64}}>Current Theme: {theme}</Text>

            <Button
                title='Go to update profile'
                onPress={() => router.push('/profile/update-profile')} />

            <Button title='Back'
                    onPress={() => router.back()} />

            <Button title='Light Mode'
                    onPress={() => setTheme('light')} />

            <Button title='Dark Mode'
                    onPress={() => setTheme('dark')} />

            <Button title='Toggle UI Mode'
                    onPress={() => toggleTheme()} />
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