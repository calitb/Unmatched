import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ActionRow, Line } from './ReferenceCard';

export default function Attack() {
  return (
    <View style={styles.container}>
      <ActionRow title="OBJETIVO">
        Anuncia tu luchador
        {'\n'}
        <Text style={styles.subtext}>(Debes tener una carta de ataque en tu mano que pueda usar tu luchador)</Text>
        {'\n'}
        {'\n'}
        Escoge un oponente válido
        {'\n'}
        <Text style={styles.subtext}>
          (Melee debe escoger un oponente adyacente.
          {'\n'}
          Ranged puede escoger un oponente en su zona.)
        </Text>
      </ActionRow>
      <Line />
      <ActionRow title="COLOCA">
        Escoge el ataque y colócalo boca abajo.
        {'\n'}
        {'\n'}
        El oponente puede colocar una defensa boca abajo.{'\n'}
        <Text style={styles.subtext}>(Debe ser una carta de defensa que el oponente pueda usar)</Text>
        {'\n'}
        {'\n'}
        El defensor revela su carta primero.
      </ActionRow>
      <Line />
      <ActionRow title="RESUELVE">
        <Text style={[styles.subtext, { fontWeight: 'bold' }]}>
          Cualquier luchador cuya salud llega a 0 es derrotado y removido del tablero. Si esto termina el juego, se
          detiene la resolución del combate.
        </Text>
        {'\n'}
        {'\n'}
        Resuelve cualquier efecto INMEDIATAMENTE{'\n'}
        <Text style={styles.subtext}>(Empezando con el defensor)</Text>
        {'\n'}
        {'\n'}
        Resuelve cualquier efecto DURANTE EL COMBATE{'\n'}
        <Text style={styles.subtext}>(Empezando con el defensor)</Text>
        {'\n'}
        {'\n'}
        Determina el resultado del combate{'\n'}
        <Text style={styles.subtext}>
          (Haz daño al defensor igual a la diferencia entre el valor del ataque y el valor de la defensa. Si el atacante
          hizo daño, gana el combate; en caso contrario el defensor gana el combate)
        </Text>
        {'\n'}
        {'\n'}
        Resuelve cualquier efecto DESPUÉS DEL COMBATE{'\n'}
        <Text style={styles.subtext}>
          (Empezando con el defensor. Cualquier otro efecto que ocurre después del combate, tales como habilidades, se
          resuelven después que los efectos de las cartas.)
        </Text>
        {'\n'}
        {'\n'}
        Coloca las cartas jugadas en la pila de descarte.
      </ActionRow>
      <View style={[styles.blackContainer, { borderBottomStartRadius: 8, borderBottomEndRadius: 8 }]}>
        <Text style={[styles.text, { color: 'white', textAlign: 'center' }]}>
          Las cartas moradas son consideradas como cartas de ataque y defensa.
        </Text>
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
  blackContainer: {
    backgroundColor: 'black',
    padding: 10,
  },
  text: {
    fontSize: 18,
  },
  subtext: {
    fontSize: 14,
  },
});
