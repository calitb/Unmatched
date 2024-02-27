import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { cssInterop } from 'nativewind';
import * as React from 'react';
import { Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { unmatched } from 'assets/unmatched';
import { useState } from 'react';
import { Character } from 'types';

cssInterop(Image, { className: 'style' });

const DEFAULT_CARD = { width: 124.4, height: 175 };
const WIDTH = DEFAULT_CARD.width * (Platform.OS === 'web' ? 1 : 0.75);
const HEIGHT = DEFAULT_CARD.height * (Platform.OS === 'web' ? 1 : 0.75);

export default function Home() {
  const [hoveredCharacter, setHoveredCharacter] = useState<Character>();

  const router = useRouter();

  return (
    <SafeAreaView className="bg-white flex-1 flex-row">
      <ScrollView contentContainerClassName="flex flex-row justify-center flex-wrap gap-1 p-2">
        {unmatched.map((character) => (
          <Pressable
            key={character.name}
            style={styles.itemContainer}
            className="border border-gray-500 rounded-md items-center"
            onPress={() => {
              router.push(`/${character.id}`);
            }}
            onHoverIn={() => {
              setHoveredCharacter(character);
            }}
          >
            {character.image ? <Image source={character.image} style={styles.card} /> : <View style={styles.card} />}
            <Text className="text-center p-1">{character.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
      {hoveredCharacter && (
        <View className="m-2 p-2 w-80 border border-gray-500 rounded-md">
          <Text>{hoveredCharacter?.ability?.es}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: WIDTH,
  },
  card: {
    height: HEIGHT,
    width: WIDTH,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
});
