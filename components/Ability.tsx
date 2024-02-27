import * as React from 'react';
import { Text, View } from 'react-native';

import type { Character } from 'types';

interface Props {
  character: Character;
}

export default function Ability(props: Props) {
  return (
    <View className="border rounded-md mt-1 mx-2">
      <View className="p-2">
        <Text className="text-lg">{props.character.ability?.es ?? '... '}</Text>
      </View>
    </View>
  );
}
