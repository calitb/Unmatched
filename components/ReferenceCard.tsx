import * as React from 'react';
import { Text, View } from 'react-native';

export default function ReferenceCard() {
  return (
    <View className="border border-black rounded-md mt-1 mx-2">
      <View className="p-2">
        <Text className="text-lg">
          Debes tomar 2 acciones. Puedes escoger dos acciones diferentes o la misma acción dos veces.
        </Text>
      </View>
      <ActionRow title="MANIOBRAR">
        Toma una carta. (Obligatorio){'\n'}Mueve tus luchadores (opcional){'\n'}
        Puedes descartar una carta para aplicar BOOST a tu movimiento.
      </ActionRow>
      <ActionRow title="ESTRATEGIA">Juega una carta ⚡️.</ActionRow>
      <ActionRow title="ATACAR">Ataca jugando una carta de ataque o versatil boca abajo.</ActionRow>
      <View className="bg-black p-2 border rounded-b-md">
        <Text className="text-lg text-white text-center">
          Al final de tu turno, descarta hasta que tengas un máximo de 7 cartas.
        </Text>
      </View>
    </View>
  );
}

interface ActionRowProps {
  title: string;
  children: React.ReactNode;
  titleClassName?: string;
}

export function ActionRow({ children, title, titleClassName }: ActionRowProps) {
  return (
    <View>
      <View className={'p-2 bg-red-600 border-y-[1px] ' + titleClassName}>
        <Text className="text-white font-bold text-xl">{title}</Text>
      </View>
      <View className="p-2">
        <Text className="text-lg">{children}</Text>
      </View>
    </View>
  );
}
