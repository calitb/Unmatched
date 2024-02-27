import * as React from 'react';
import { Text, View } from 'react-native';

import { ActionRow } from './ReferenceCard';

export default function Attack() {
  return (
    <View className="border border-black border-t-0 rounded-md mt-1 mx-2">
      <ActionRow title="OBJETIVO" titleClassName="rounded-t-md">
        Anuncia tu luchador
        {'\n'}
        <Text className="text-sm">(Debes tener una carta de ataque en tu mano que pueda usar tu luchador)</Text>
        {'\n'}
        {'\n'}
        Escoge un oponente válido
        {'\n'}
        <Text className="text-sm">
          (Melee debe escoger un oponente adyacente.
          {'\n'}
          Ranged puede escoger un oponente en su zona.)
        </Text>
      </ActionRow>
      <ActionRow title="COLOCA">
        Escoge el ataque y colócalo boca abajo.
        {'\n'}
        {'\n'}
        El oponente puede colocar una defensa boca abajo.{'\n'}
        <Text className="text-sm">(Debe ser una carta de defensa que el oponente pueda usar)</Text>
        {'\n'}
        {'\n'}
        El defensor revela su carta primero.
      </ActionRow>
      <ActionRow title="RESUELVE">
        <Text className="text-sm font-bold">
          Cualquier luchador cuya salud llega a 0 es derrotado y removido del tablero. Si esto termina el juego, se
          detiene la resolución del combate.
        </Text>
        {'\n'}
        {'\n'}
        Resuelve cualquier efecto INMEDIATAMENTE{'\n'}
        <Text className="text-sm">(Empezando con el defensor)</Text>
        {'\n'}
        {'\n'}
        Resuelve cualquier efecto DURANTE EL COMBATE{'\n'}
        <Text className="text-sm">(Empezando con el defensor)</Text>
        {'\n'}
        {'\n'}
        Determina el resultado del combate{'\n'}
        <Text className="text-sm">
          (Haz daño al defensor igual a la diferencia entre el valor del ataque y el valor de la defensa. Si el atacante
          hizo daño, gana el combate; en caso contrario el defensor gana el combate)
        </Text>
        {'\n'}
        {'\n'}
        Resuelve cualquier efecto DESPUÉS DEL COMBATE{'\n'}
        <Text className="text-sm">
          (Empezando con el defensor. Cualquier otro efecto que ocurre después del combate, tales como habilidades, se
          resuelven después que los efectos de las cartas.)
        </Text>
        {'\n'}
        {'\n'}
        Coloca las cartas jugadas en la pila de descarte.
      </ActionRow>
      <View className="bg-black p-2 border rounded-b-md">
        <Text className="text-lg text-white text-cemter">
          Las cartas moradas son consideradas como cartas de ataque y defensa.
        </Text>
      </View>
    </View>
  );
}
