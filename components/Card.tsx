import useIsMobile from '@/utils/useIsMobile';
import * as React from 'react';
import { useReducer } from 'react';
import { Pressable, Text } from 'react-native';

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

  const isMobile = useIsMobile();

  const [open, toggle] = useReducer((state) => !state, !isMobile);

  return (
    <Pressable onPress={toggle} className={'active:bg-[#D2E6FF] px-2 rounded-md ' + (isMobile ? '' : 'w-1/2')}>
      <Text className="font-bold text-lg">
        {name}
        {'\n'}
        {amount}x{value !== undefined ? ` ${VALUES[value]}${typeIcon}` : ''}
        {type === SchemeCard.scheme ? ` ${typeIcon}` : ''}
        {boost > 0 ? ` ${VALUES[boost]}${BOOST}` : ''}
        {character !== 'any' ? ` (${character})` : ''}
        {open && (
          <Text className="font-normal text-sm">
            {'\n'}
            {descripcion.length > 0 ? descripcion : '---'}
          </Text>
        )}
      </Text>
    </Pressable>
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
