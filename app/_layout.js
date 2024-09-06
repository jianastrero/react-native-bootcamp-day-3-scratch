import {Stack} from "expo-router";
import {MyThemeProvider} from "../src/context/MyTheme";

export default function AppLayout() {
    return (
        <MyThemeProvider>
            <Stack>
                <Stack.Screen
                    name='index'
                    options={{
                        title: 'Home',
                        headerShown: false,
                    }}/>
                <Stack.Screen
                    name='settings'
                    options={{
                        title: 'App Settings',
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#8b8b8b',
                        },
                        headerTintColor: 'red'
                    }} />
                <Stack.Screen
                    name='profile'
                    options={{
                        title: 'Profile',
                        headerShown: false,
                    }} />
                <Stack.Screen
                    name='(tabs)'
                    options={{
                        title: 'My Tabs',
                        headerShown: false,
                    }} />
            </Stack>
        </MyThemeProvider>
    );
}