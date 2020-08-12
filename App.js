import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Button, Image } from 'react-native';
import { Picker } from '@react-native-community/picker';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import HistogramBar from './HistogramBar';
import SlideComponent from './SlideComponent'
import { getPermissionsAsync } from 'expo-location';

const data = {
  test: [{ votes: 1, grade: 'V4' }, { votes: 10, grade: 'V4+' }, { votes: 11, grade: 'V5-' }, { votes: 20, grade: 'V5' }, { votes: 9, grade: 'V5+' }, { votes: 3, grade: 'V6-' }, { votes: 1, grade: 'V6' }]
}

function App() {
  let max = Math.max.apply(Math, data.test.map(function (i) { return i.votes; }))
  // const [language, changeLanguage] = useState('java');
  const [image, setImage] = useState(null);

  useEffect(() => {
    getPermissionsAsync();
  }, [])

  const getPermissionsAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  const handleChoosePhoto = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result)
        console.log('result', result)
        console.log(result.uri)

        // this.setState({ image: result.uri });
      }

      // console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  return (
    <View style={styles.container}>
      {/* <RNTextSwitch style={{ width: 200, height: 100 }} /> */}

      <Text>Open up App.js to start working on your app rob!</Text>
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

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {image && (
          <Image
            source={{ uri: image.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}
        <Button
          title="Choose Photo"
          onPress={handleChoosePhoto}
        />
      </View>
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

export default App;