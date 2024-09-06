import {StyleSheet, View, Text, Button} from "react-native";
import {Link, router} from "expo-router";

export default function TabPersonScreen() {
    return (
        <View style={styles.container}>
            <Text>Person Screen</Text>

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