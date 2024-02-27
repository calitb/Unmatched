import { Image } from 'expo-image';
import { Redirect, Stack, router, useLocalSearchParams } from 'expo-router';
import { cssInterop } from 'nativewind';
import * as React from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';

import useIsMobile from '@/utils/useIsMobile';
import { unmatched } from 'assets/unmatched';
import Ability from 'components/Ability';
import Attack from 'components/Attack';
import Card from 'components/Card';
import ReferenceCard from 'components/ReferenceCard';

cssInterop(Image, { className: 'style' });

export default function Details() {
  const isMobile = useIsMobile();

  const { characterId } = useLocalSearchParams();
  const selectedCharacter = unmatched.filter((character) => character.id === characterId)[0];

  if (!selectedCharacter) {
    return <Redirect href="/" />;
  }

  return (
    <SafeAreaView className="bg-white flex-1">
      <Stack.Screen
        options={{
          title: selectedCharacter.name,
          headerBackTitle: 'Volver',
          headerLeft: !router.canGoBack()
            ? () => (
                <Pressable onPress={() => router.replace('/')}>
                  <Image
                    className="w-6 h-6 mx-4"
                    tintColor="white"
                    source={require('assets/back-icon/back-icon.png')}
                  />
                </Pressable>
              )
            : undefined,
        }}
      />
      <ScrollView contentContainerClassName="gap-4">
        <List.Accordion
          theme={{ colors: { onSurfaceVariant: 'white', background: '#C65516' } }}
          titleStyle={styles.accordionTitle}
          title="Habilidad"
        >
          <Ability character={selectedCharacter} />
        </List.Accordion>
        <List.Accordion
          theme={{ colors: { onSurfaceVariant: 'white', background: '#C65516' } }}
          titleStyle={styles.accordionTitle}
          title="En tu Turno"
        >
          <ReferenceCard />
        </List.Accordion>
        <List.Accordion
          theme={{ colors: { onSurfaceVariant: 'white', background: '#C65516' } }}
          titleStyle={styles.accordionTitle}
          title="Secuencia de Ataque"
        >
          <Attack />
        </List.Accordion>
        <List.Accordion
          theme={{ colors: { onSurfaceVariant: 'white', background: '#C65516' } }}
          titleStyle={styles.accordionTitle}
          title={`${selectedCharacter.amount} Cartas`}
        >
          <View className={isMobile ? 'gap-2 px-4 py-1' : 'py-1 flex-row flex-wrap gap-y-2'}>
            {selectedCharacter.cards.map((card) => (
              <Card key={card.name} card={card} />
            ))}
          </View>
        </List.Accordion>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  accordionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
