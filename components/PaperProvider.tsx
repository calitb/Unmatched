import { DarkTheme as NavDefaultDarkTheme, DefaultTheme as NavDefaultLightTheme } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { DarkTheme as DefaultDarkTheme, DefaultTheme, Provider } from 'react-native-paper';

interface Props {
  children: React.ReactNode;
}

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F4F9FF',
    accent: '#D36135',
    primary: '#000000',
    surface: NavDefaultLightTheme.colors.card,
  },
};

const DarkTheme = {
  ...DefaultDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors,
    background: '#000000',
    accent: '#D36135',
    primary: '#FFFFFF',
    surface: NavDefaultDarkTheme.colors.card,
  },
};

export default function PaperProvider(props: Props) {
  const colorScheme = useColorScheme();

  return <Provider theme={colorScheme === 'dark' ? DarkTheme : LightTheme}>{props.children}</Provider>;
}
