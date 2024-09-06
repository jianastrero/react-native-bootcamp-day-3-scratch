import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Link, router} from "expo-router";
import {useMyTheme} from "../src/context/MyTheme";

export default function Index() {
    const { theme } = useMyTheme();

    React.useEffect(() => {

    }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{fontSize: 64}}>Current Theme: {theme}</Text>

      <Link href={'/settings'}>Go to settings</Link>

      <Button
          title='Go to settings'
          onPress={() => router.push('/settings')} />

      <Button
          title='Go to profile'
          onPress={() => router.push('/profile')} />

      <Button
          title='Go to update profile'
          onPress={() => router.push('/profile/update-profile')} />

      <Button
          title='Go to Tabs'
          onPress={() => router.push('/(tabs)')} />

        <Button
          title='View Profile'
          onPress={() => router.push('/profile/' + 1 + '/hello/' + 1)} />

        <Button
          title='View Profile 2'
          onPress={() => router.push('/profile/Hi, there')} />

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
