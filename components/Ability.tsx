import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { Character } from 'assets/unmatched';

interface Props {
  character: Character;
}

export default function Ability(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.whiteContainer}>
        <Text style={styles.text}>{props.character.ability?.es ?? '... '}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    marginTop: 5,
    marginHorizontal: 10,
  },
  whiteContainer: {
    padding: 10,
  },
  text: {
    fontSize: 18,
  },
});
