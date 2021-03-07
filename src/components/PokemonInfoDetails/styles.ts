import { darken, lighten } from 'polished';
import styled from 'styled-components/native';

import typesColorsMap, { TypesColorsMap } from '../../constants/typesColorsMap';
import normalizePixel from '../../helpers/normalizePixel';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.23);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-horizontal: 20px;
  padding-vertical: 20px;
`;

export const PokemonName = styled.Text`
  font-size: ${normalizePixel(30)}px;
  text-transform: capitalize;
  text-align: center;
  font-family: 'RobotoSlab-SemiBold';
  margin-bottom: 10px;
`;

export interface TypeProp {
  type: keyof TypesColorsMap;
}

export const PokemonNumber = styled.Text<TypeProp>`
  font-size: ${normalizePixel(30)}px;
  text-transform: capitalize;
  text-align: center;
  font-family: 'RobotoSlab-SemiBold';
  margin-bottom: 10px;
  color: ${({ type }: TypeProp) =>
    darken(0.2, typesColorsMap[type] || typesColorsMap.normal)};
`;

export const TypeBackground = styled.View<TypeProp>`
  height: ${normalizePixel(150)}px;
  width: ${normalizePixel(150)}px;
  position: absolute;
  align-self: center;
  border-radius: ${normalizePixel(75)}px;
  background-color: ${({ type }: TypeProp) =>
    lighten(0.1, typesColorsMap[type] || typesColorsMap.normal)};
`;

export const StatLabel = styled.Text`
  font-family: 'RobotoSlab-SemiBold';
  font-size: ${normalizePixel(18)}px;
  text-transform: uppercase;
`;
export const StatValue = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: ${normalizePixel(20)}px;
`;

export const StatContainer = styled.View`
  margin-bottom: 5px;
`;

export const ProgressContainer = styled.View`
  height: 10px;
  width: 100%;
  border-radius: 5px;
  border-color: black;
  border-width: 1px;
  overflow: hidden;
`;

interface ProgressFillProps {
  max: number;
  value: number;
  color: string;
}

export const ProgressFill = styled.View<ProgressFillProps>`
  width: ${({ max, value }) => (value / max) * 100}%;
  background-color: ${({ color }) => darken(0.2, color)};
  height: 10px;
`;
