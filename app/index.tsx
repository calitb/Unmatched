import { useRouter } from 'expo-router';
import * as React from 'react';
import { Image, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { unmatched } from 'assets/unmatched';
import { useState } from 'react';
import { Character } from 'types';

const DEFAULT_CARD = { width: 124.4, height: 175 };
const WIDTH = DEFAULT_CARD.width * (Platform.OS === 'web' ? 1 : 0.75);
const HEIGHT = DEFAULT_CARD.height * (Platform.OS === 'web' ? 1 : 0.75);

export default function Home() {
  const [hoveredCharacter, setHoveredCharacter] = useState<Character>();

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {unmatched.map((character) => (
          <Pressable
            key={character.name}
            style={styles.itemContainer}
            onPress={() => {
              router.push(`/${character.name}`);
            }}
            onHoverIn={() => {
              setHoveredCharacter(character);
            }}
          >
            {character.image ? <Image source={character.image} style={styles.card} /> : <View style={styles.card} />}
            <Text style={styles.text}>{character.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
      {hoveredCharacter && (
        <View style={styles.infoContainer}>
          <Text>{hoveredCharacter?.ability?.es}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 10,
    gap: 3,
  },
  infoContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    width: 320,
    margin: 10,
    padding: 10,
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
