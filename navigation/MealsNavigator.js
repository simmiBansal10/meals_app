import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';


import CategoriesScreen from '../screens/CategoriesScreen';
import filtersScreen from '../screens/FiltersScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import color from '../constants/color';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? color.primaryColor : ''
  },
  headerTitleStyle:{
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle:{
    fontFamily: 'open-sans'
  },
  headerTintColor:
    Platform.OS === 'android' ? 'white' : color.primaryColor,
  headerTitle: 'A Screen'

};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions 
  });

const favNavigator= createStackNavigator({
  Favorites: FavouritesScreen,
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = {Meals: {
  screen: MealsNavigator,
  navigationOptions: {
    tabBarIcon: tabInfo => {
      return (
        <Ionicons
          name="ios-restaurant"
          size={25}
          color={tabInfo.tintColor}
        />
      );
    },
    tabBarColor: color.primaryColor
  }
},
Favorites: {
  screen: favNavigator,
  navigationOptions: {
    tabBarLabel: 'Favorites!',
    tabBarIcon: tabInfo => {
      return (
        <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      );
    }
  }
 }
}


const MealsFavTabNavigator = Platform.OS === 'android' 
? createMaterialBottomTabNavigator(tabScreenConfig, {
    shifting: true,
    activeTintColor: color.accentColor,
    barStyle: {
      backgroundColor:color.primaryColor
    }
} ) 
: createBottomTabNavigator(
  tabScreenConfig , {
    tabBarOptions: {
      labelStyle:{
        fontFamily:'open-sans'
      },
      activeTintColor: color.accentColor
    }
  }
);

  const filtersNavigator = createStackNavigator({
    filters: filtersScreen
  },{
    
    defaultNavigationOptions: defaultStackNavOptions 
  });

const mainNavigator = createDrawerNavigator({
  mealsFav: {screen: MealsFavTabNavigator, navigationOptions:{
    drawerLabel: 'Meals'
  }},
  filters: filtersNavigator },
   {
    contentOptions: {
      activeTintColor: color.accentColor,
      fontFamily: 'open-sans-bold'
    }
  }

)

export default createAppContainer(mainNavigator);
