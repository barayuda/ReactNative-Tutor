import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Card, Button,Icon } from 'react-native-elements'
import WIT from '../components/wit';

export default function CodeSnippet({ navigation }) {
    
    return (
        <ScrollView>
          <WIT />
        </ScrollView>
    );
  }