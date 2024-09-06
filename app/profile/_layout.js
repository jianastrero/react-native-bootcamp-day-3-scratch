import {Stack} from "expo-router";

export default function ProfileLayout() {
    return (
        <Stack>
            <Stack.Screen
                name='index'
                options={{
                    title: 'Profile',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#449a9a',
                    },
                    headerTintColor: 'yellow',
                    headerBackTitle: 'Back',
                    headerBackVisible: true,
                }}/>
            <Stack.Screen
                name='update-profile'
                options={{
                    title: 'Update Profile',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: 'yellow',
                    },
                    headerTintColor: 'blue',
                    headerBackTitle: 'Back',
                    headerBackVisible: true,
                }}/>
            <Stack.Screen
                name='[id]'
                options={{
                    headerShown: false
                }}/>
        </Stack>
    );
}