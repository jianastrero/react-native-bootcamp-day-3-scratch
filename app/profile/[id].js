import {Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";

export default function ViewProfile() {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text style={{ fontSize: 64 }}>
                View Profile: {id}
            </Text>
        </View>
    );
}