import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import { lighten } from 'polished';

import typesColorsMap from '../../constants/typesColorsMap';
import normalizePixel from '../../helpers/normalizePixel';
import { Pokemon } from '../../types/pokemon';
import { PokemonImage } from '../PokemonCard/styles';
import typesBgMap from '../PokemonTypes/map';
import PokemonStat from './Stat';
import { Container, PokemonName, PokemonNumber } from './styles';

interface Props {
  pokemon: Pokemon;
}

const PokemonInfoDetails: React.FC<Props> = ({ pokemon }) => {
  const type = pokemon.types[0].type.name;
  const { height } = useWindowDimensions();
  const typeColor = lighten(0.1, typesColorsMap[type] || typesColorsMap.normal);

  const PokemonTypeBg = typesBgMap[type];

  return (
    <View style={{ flex: 1 }}>
      <View style={{ position: 'absolute', top: 50, left: 0 }}>
        <PokemonTypeBg size={height} color={typeColor} />
      </View>
      <SharedElement
        id={`pokemon-${pokemon.id}-image`}
        style={{
          height: normalizePixel(250),
          width: '100%',
          alignItems: 'center',
        }}
      >
        <PokemonImage
          source={{
            uri: pokemon.sprites.other['official-artwork'].front_default,
          }}
          style={{
            height: normalizePixel(250),
            width: normalizePixel(250),
          }}
        />
      </SharedElement>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}
      >
        <PokemonName>{pokemon.name}</PokemonName>
        <PokemonNumber type={type}>
          {`Nº${String(pokemon.id).padStart(3, '0')}`}
        </PokemonNumber>
      </View>
      <Container>
        {pokemon.stats.map(stat => (
          <PokemonStat key={stat.stat.name} stat={stat} color={typeColor} />
        ))}
      </Container>
    </View>
  );
};

export default PokemonInfoDetails;
