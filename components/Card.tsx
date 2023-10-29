import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { UnmatchedCard } from 'assets/unmatched';

interface Props {
  card: UnmatchedCard;
}

const BOOST = '⚫️';
const types = {
  attack: '🔴',
  defense: '🔵',
  scheme: '🟡',
  versatile: '🟣',
};

export default function Card(props: Props) {
  const { name, descripcion, type, value, amount, character, boost } = props.card;
  const typeIcon = types[type];

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>
        {name}
        {character !== 'any' && <Text style={styles.title}> ({character})</Text>}
        {'\n'}
        <Text style={styles.subtitle}>
          {amount > 1 ? `${amount}x ` : ''}
          {type !== 'scheme' && value > 0 ? typeIcon.padStart(value * typeIcon.length, typeIcon) : `(${type})`}
          {boost > 0 ? BOOST.padStart(boost * BOOST.length, BOOST) : ''}
        </Text>
      </Text>
      <Text style={styles.description}>{descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 16,
    fontSize: 18,
  },
});
