import { FlatList } from 'react-native';

import styled from 'styled-components/native';

import normalizePixel from '../../helpers/normalizePixel';
import { PokemonItemResponse } from '../../types/pokemon';

export const Container = styled(
  FlatList as new () => FlatList<PokemonItemResponse>,
).attrs({
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
})`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-SemiBold';
  padding-vertical: 4px;
  font-size: ${normalizePixel(34)}px;
`;
