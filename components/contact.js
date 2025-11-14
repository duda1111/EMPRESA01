import React from 'react';
import { View, Text, } from 'react-native';
import { globalStyles as styles } from '../global';

export default function Contato() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Contato</Text>
      <Text>Entre em contato conosco pelo email.</Text>
    </View>
  );
}