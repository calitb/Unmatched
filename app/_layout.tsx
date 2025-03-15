import '../global.css';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { unmatched } from 'assets/unmatched';

export default function Layout() {
  const scheme = useColorScheme();

  const owned = unmatched.filter((character) => Boolean(character.image));

  return (
    <ThemeProvider value={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <PaperProvider>
        <StatusBar style="auto" />
        <Stack
          screenOptions={{
            title: `Unmatched Characters ${owned.length}/${unmatched.length}`,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
            },
          }}
        ></Stack>
      </PaperProvider>
    </ThemeProvider>
  );
}
