import { Link } from 'expo-router';
import * as React from 'react';
import { Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { unmatched } from 'assets/unmatched';

const DEFAULT_CARD = { width: 124.4, height: 175 };
const WIDTH = DEFAULT_CARD.width * (Platform.OS === 'web' ? 1 : 0.75);
const HEIGHT = DEFAULT_CARD.height * (Platform.OS === 'web' ? 1 : 0.75);

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {unmatched.map((character) => (
          <Link key={character.name} href={`/${character.name}`} style={styles.itemContainer}>
            <View>
              {character.image ? <Image source={character.image} style={styles.card} /> : <View style={styles.card} />}
              <Text style={styles.text}>{character.name}</Text>
            </View>
          </Link>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 10,
    gap: 3,
  },
  itemContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    width: WIDTH,
  },
  card: {
    height: HEIGHT,
    width: WIDTH,
  },
  text: {
    textAlign: 'center',
    padding: 2,
  },
});
