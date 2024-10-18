import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { cssInterop } from 'nativewind';
import * as React from 'react';
import { FlatList, Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { unmatched } from 'assets/unmatched';
import { useState } from 'react';
import { Character } from 'types';

cssInterop(Image, { className: 'style' });

const DEFAULT_CARD = { width: 128.4, height: 175 };
const WIDTH = DEFAULT_CARD.width * (Platform.OS === 'web' ? 1 : 0.75);
const HEIGHT = DEFAULT_CARD.height * (Platform.OS === 'web' ? 1 : 0.75);

export default function Home() {
  const [hoveredCharacter, setHoveredCharacter] = useState<Character>();

  const router = useRouter();

  const data = [
    {
      title: 'Public Domain',
      data: unmatched
        .filter((character) => character.domain === 'Public Domain')
        .sort((a, b) => a.name.localeCompare(b.name)),
    },
    {
      title: 'Marvel',
      data: unmatched.filter((character) => character.domain === 'Marvel').sort((a, b) => a.name.localeCompare(b.name)),
    },
    {
      title: 'BuffyVerse',
      data: unmatched
        .filter((character) => character.domain === 'BuffyVerse')
        .sort((a, b) => a.name.localeCompare(b.name)),
    },
    {
      title: 'Jurassic Park',
      data: unmatched
        .filter((character) => character.domain === 'Jurassic Park')
        .sort((a, b) => a.name.localeCompare(b.name)),
    },
    {
      title: 'Bruce Lee',
      data: unmatched
        .filter((character) => character.domain === 'Bruce Lee')
        .sort((a, b) => a.name.localeCompare(b.name)),
    },
    {
      title: 'Tales to Amaze',
      data: unmatched
        .filter((character) => character.domain === 'Tales to Amaze')
        .sort((a, b) => a.name.localeCompare(b.name)),
    },
    {
      title: 'Witcher',
      data: unmatched
        .filter((character) => character.domain === 'Witcher')
        .sort((a, b) => a.name.localeCompare(b.name)),
    },
    {
      title: 'TMNT',
      data: unmatched.filter((character) => character.domain === 'TMNT').sort((a, b) => a.name.localeCompare(b.name)),
    },
  ];

  return (
    <SafeAreaView className="bg-white flex-1 flex-row">
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View>
              <Text className="text-2xl font-bold p-2">{item.title}</Text>
              <FlatList
                className="flex flex-row flex-wrap gap-1 p-2"
                data={item.data}
                renderItem={({ item: character }) => (
                  <Pressable
                    key={character.name}
                    style={styles.itemContainer}
                    className="border border-gray-500 rounded-md items-center relative"
                    onPress={() => {
                      if (character.cards.length === 0) return;
                      router.push(`/${character.id}`);
                    }}
                    onHoverIn={() => {
                      setHoveredCharacter(character);
                    }}
                  >
                    {character.image ? (
                      <Image source={character.image} style={styles.card} />
                    ) : (
                      <View style={styles.card} />
                    )}
                    <View className="p-1 h-10 flex justify-center items-center">
                      <Text className="text-center" numberOfLines={2}>
                        {character.name}
                      </Text>
                    </View>
                    {(character.lang ?? ['en']).includes('es') && (
                      <View className="absolute top-0 right-1 bg-white rounded-full w-6 h-6 flex justify-center items-center">
                        <Text className="text-xl">🇪🇸</Text>
                      </View>
                    )}
                  </Pressable>
                )}
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.title}
      />
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
