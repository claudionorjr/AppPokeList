import React from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PokemonList from '../../components/PokemonList';

const PokeListScreen = () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="dark-content" backgroundColor="#f1f1f1" />
    <SafeAreaView style={{ flex: 1 }}>
      <PokemonList />
    </SafeAreaView>
  </View>
);

export default PokeListScreen;
