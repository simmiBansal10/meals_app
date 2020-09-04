import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealList from '../Components/MealList';

const FavoritesScreen = props => {
  const favMeals = MEALS.filter(meals=> meals.id=== 'm1' )
  return (<MealList listData={favMeals} navigation= {props.navigation} />);
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Yours Favourites'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
