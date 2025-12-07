import { ImageSourcePropType } from 'react-native';

export enum FightCard {
  attack = 'attack',
  defense = 'defense',
  versatile = 'versatile',
}

export enum SchemeCard {
  scheme = 'scheme',
}

export type UnmatchedCard =
  | {
      name: string;
      type: FightCard;
      value: number;
      character: string;
      amount: number;
      boost: number;
      description: string;
      descripcion: string;
    }
  | {
      name: string;
      type: SchemeCard;
      value?: number;
      character: string;
      amount: number;
      boost: number;
      description: string;
      descripcion: string;
    };

export type Character = {
  domain:
    | 'Public Domain'
    | 'Tales to Amaze'
    | 'BuffyVerse'
    | 'Marvel'
    | 'Jurassic Park'
    | 'Bruce Lee'
    | 'TMNT'
    | 'TMNT Bosses'
    | 'Witcher'
    | 'Hellboy'
    | 'Missing';
  lang?: ('en' | 'es')[];
  id: string;
  name: string;
  image?: ImageSourcePropType;
  amount: number;
  ability?: {
    en: string;
    es: string;
  };
  cards: UnmatchedCard[];
};
