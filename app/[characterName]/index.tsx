import { Stack, useLocalSearchParams } from 'expo-router';
import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';

import { unmatched } from 'assets/unmatched';
import Ability from 'components/Ability';
import Attack from 'components/Attack';
import Card from 'components/Card';
import ReferenceCard from 'components/ReferenceCard';

export default function Details() {
  const { characterName } = useLocalSearchParams();
  const selectedCharacter = unmatched.filter((character) => character.name === characterName)[0];

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: selectedCharacter.name,
          headerBackTitle: 'Volver',
        }}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <List.Accordion
          style={styles.accordion}
          theme={{ colors: { onSurfaceVariant: 'white' } }}
          titleStyle={styles.accordionTitle}
          title="Habilidad"
        >
          <Ability character={selectedCharacter} />
        </List.Accordion>
        <List.Accordion
          style={styles.accordion}
          theme={{ colors: { onSurfaceVariant: 'white' } }}
          titleStyle={styles.accordionTitle}
          title="En tu Turno"
        >
          <ReferenceCard />
        </List.Accordion>
        <List.Accordion
          style={styles.accordion}
          theme={{ colors: { onSurfaceVariant: 'white' } }}
          titleStyle={styles.accordionTitle}
          title="Secuencia de Ataque"
        >
          <Attack />
        </List.Accordion>
        <List.Accordion
          style={styles.accordion}
          theme={{ colors: { onSurfaceVariant: 'white' } }}
          titleStyle={styles.accordionTitle}
          title={`${selectedCharacter.amount} Cartas`}
        >
          <View style={styles.cardContainer}>
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
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollContainer: {
    gap: 15,
  },
  accordion: {
    backgroundColor: '#C65516',
  },
  accordionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  cardContainer: {
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
});
