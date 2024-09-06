import {StyleSheet, View, Text, Button} from "react-native";
import {Link, router} from "expo-router";

export default function UpdateProfileScreen() {
    return (
        <View style={styles.container}>
            <Text>Update Profile Screen</Text>

            <Button
                title='Go to update profile'
                onPress={() => router.push('/profile/update-profile')} />

            <Button title='Back'
                    onPress={() => router.back()} />
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