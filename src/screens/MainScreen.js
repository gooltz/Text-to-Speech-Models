import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <Button title="Google" onPress={() => navigation.navigate('Google')} />
  );
};

const styles = StyleSheet.create({});

export default MainScreen;
