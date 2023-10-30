import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SchemeCard, type UnmatchedCard } from 'types';

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
        {amount}x{value !== undefined ? ` ${VALUES[value]}${typeIcon}` : ''}
        {type === SchemeCard.scheme ? ` ${typeIcon}` : ''}
        {boost > 0 ? ` ${VALUES[boost]}${BOOST}` : ''}
        {` ${name}${character !== 'any' ? ` (${character})` : ''}`}
        {'\n'}
        <Text style={styles.description}>{descripcion}</Text>
      </Text>
    </View>
  );
}

const VALUES = {
  0: '0️⃣',
  1: '1️⃣',
  2: '2️⃣',
  3: '3️⃣',
  4: '4️⃣',
  5: '5️⃣',
  6: '6️⃣',
  7: '7️⃣',
  8: '8️⃣',
  9: '9️⃣',
  10: '🔟',
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    fontWeight: 'normal',
  },
});
