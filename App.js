import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import HistogramBar from './HistogramBar';
import SlideComponent from './SlideComponent'
import { getPermissionsAsync } from 'expo-location';
import {
  ActionSheetProvider,
  connectActionSheet,
  ActionSheetProps,
  useActionSheet,
} from '@expo/react-native-action-sheet';

const data = {
  test: [{ votes: 1, grade: 'V4' }, { votes: 10, grade: 'V4+' }, { votes: 11, grade: 'V5-' }, { votes: 20, grade: 'V5' }, { votes: 9, grade: 'V5+' }, { votes: 3, grade: 'V6-' }, { votes: 1, grade: 'V6' }]
}

function App() {
  const { showActionSheetWithOptions } = useActionSheet();

  const _onOpenActionSheet = () => {
    // Same interface as https://facebook.github.io/react-native/docs/actionsheetios.html
    const options = ['Delete', 'Save', 'Cancel'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      buttonIndex => {
        // Do something here depending on the button index selected
      },
    );
  };


  return (
    <View style={styles.container}>
      {/* <RNTextSwitch style={{ width: 200, height: 100 }} /> */}

      <Text>This is from App</Text>
      <StatusBar style="auto" />
      {/* <SlideComponent/> */}
      {/* <Picker
        selectedValue={language}
        style={{ height: 50, width: 200, backgroundColor: 'turquoise' }}
        onValueChange={(itemValue, itemIndex) =>
          changeLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Kotlin" value="kt" />
        <Picker.Item label="JSON" value="json" />
        <Picker.Item label="C Sharp" value="C#" />
      </Picker> */}

      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {image && (
          <Image
            source={{ uri: image.uri }}
            style={{
              // flex: 1
              // width: '100%',
              // height: '50%',
              width: 300,
              height: 300,
              backgroundColor: 'gainsboro'
            }}
          />
        )}
        <Button
          title="Choose Photo"
          onPress={handleChoosePhoto}
          style={{ flex: 1 }}
        />
      </View> */}
      {/* <View style={{
        width: '100%',
        height: 128,
        backgroundColor: 'honeydew',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: '4%',
        alignItems: 'flex-end',
        paddingBottom: '5%'
      }}>
        {
          data.test.map((item, i) => (
            <HistogramBar height={item.votes} key={i} max={max} grade={item.grade} />
          ))}
      </View> */}

      <Text>Open up App.js to start working on your app rob!</Text>
    </View >
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

const ConnectedApp = connectActionSheet(App)

export default ConnectedApp;