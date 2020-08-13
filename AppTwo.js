import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Button, Image } from 'react-native';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import ConnectedApp from './App';

function MyApp() {

  return (
    <ActionSheetProvider >
      <ConnectedApp />
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyApp;