import React, { useEffect } from 'react';
import { Platform, StatusBar, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { StackScreenProps } from '@react-navigation/stack';

import LinearGradient from 'react-native-linear-gradient';
import { darken, lighten } from 'polished';

import PokemonInfoDetails from '../../components/PokemonInfoDetails';
import typesColorsMap from '../../constants/typesColorsMap';
import { RootStackParamList } from '../../routes';

type Props = StackScreenProps<RootStackParamList, 'PokemonDetails'>;

const PokemonDetailsScreen = ({ route, navigation }: Props) => {
  const { params } = route;
  const { pokemon } = params;
  if (!pokemon) return null;
  const type = pokemon.types[0].type.name;
  const bgColor = typesColorsMap[type] || typesColorsMap.normal;

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor(bgColor, true);
    }
    return () => {
      if (Platform.OS === 'android') {
        StatusBar.setTranslucent(false);
        StatusBar.setBackgroundColor('#fff', true);
      }
    };
  }, []);

  return (
    <LinearGradient
      colors={[bgColor, lighten(0.18, bgColor)]}
      locations={[0.5, 0.9]}
      style={{
        flex: 1,
        paddingTop: 30,
      }}
    >
      <TouchableOpacity
        onPress={navigation.goBack}
        style={{ flexDirection: 'row', alignItems: 'center' }}
      >
        <Icon
          name="arrow-left"
          size={30}
          color={darken(0.28, bgColor)}
          style={{
            marginLeft: 10,
          }}
        />
      </TouchableOpacity>
      <PokemonInfoDetails pokemon={pokemon} />
    </LinearGradient>
  );
};

export default PokemonDetailsScreen;
