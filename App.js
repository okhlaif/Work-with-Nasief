import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, ImageBackground, Text, Button,TouchableWithoutFeedback,TouchableHighlight, TouchableNativeFeedback,View, SafeAreaView, Alert,Image, TextInput, Switch } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/Text';
import AppButton from './app/components/Button';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ListItem } from './app/components/lists/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/TextInput';
import AppPicker from "./app/components/Picker";
import LoginScreen from './app/screens/LoginScreen';
import ListEditingScreen from './app/screens/ListingEditScreen';


export default function App() {
  return<WelcomeScreen/>;
}