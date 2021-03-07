import { Pressable, PressableProps, TextProps } from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated from 'react-native-reanimated';

import { darken, lighten } from 'polished';
import styled from 'styled-components/native';

import typesColorsMap, { TypesColorsMap } from '../../constants/typesColorsMap';
import normalizePixel from '../../helpers/normalizePixel';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export interface ContainerProps extends PressableProps {
  type: keyof TypesColorsMap;
}

export const Container = styled(AnimatedPressable)<ContainerProps>`
  margin-vertical: ${normalizePixel(10)}px;
  border-radius: ${normalizePixel(15)}px;

  background-color: ${({ type }: ContainerProps) =>
    typesColorsMap[type] || typesColorsMap.normal};
  shadow-color: rgba(0, 0, 0, 0.3);
  shadow-offset: 0px 0px;
  shadow-radius: 3.84px;
  width: 100%;
  flex-direction: row;
  align-self: flex-end;
`;

export const PokemonImage = styled(FastImage).attrs({
  resizeMode: 'contain',
})``;

export interface TypeCircleProps {
  type: keyof TypesColorsMap;
}

export const TypeBackground = styled.View<TypeCircleProps>`
  height: ${normalizePixel(150)}px;
  width: ${normalizePixel(150)}px;
  left: -20px;
  bottom: -25px;
  border-radius: ${normalizePixel(75)}px;
  background-color: ${({ type }: ContainerProps) =>
    lighten(0.1, typesColorsMap[type] || typesColorsMap.normal)};
`;

export const PokemonNumber = styled.Text<TypeCircleProps>`
  border-radius: ${normalizePixel(75)}px;
  font-family: 'RobotoSlab-SemiBold';
  font-size: 25px;
  position: absolute;
  right: 10px;
  bottom: 0;
  color: ${({ type }: ContainerProps) =>
    darken(0.3, typesColorsMap[type] || typesColorsMap.normal)};
`;

export const PokemonName = styled.Text`
  font-size: ${normalizePixel(30)}px;
  text-transform: capitalize;
  font-family: 'RobotoSlab-SemiBold';
  flex-wrap: wrap;
  flex: 1;
`;

export const ContentContainer = styled.View`
  border-radius: ${normalizePixel(15)}px;
  flex-direction: row;
  overflow: hidden;
  padding: ${normalizePixel(5)}px;
  flex: 1;
`;

interface PokemonTypeProps extends TextProps {
  type: keyof TypesColorsMap;
}

export const PokemonType = styled.Text<PokemonTypeProps>`
  font-size: ${normalizePixel(18)}px;
  text-transform: capitalize;
  text-align: center;
  color: white;
  font-family: 'RobotoSlab-SemiBold';
  border-radius: 20px;
  width: ${normalizePixel(80)}px;
  margin-bottom: ${normalizePixel(5)}px;
  background-color: ${({ type }: ContainerProps) =>
    lighten(0.1, typesColorsMap[type] || typesColorsMap.normal)};
`;

export const InfoContainer = styled.View`
  flex: 1;
`;
