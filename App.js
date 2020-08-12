import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, } from 'react-native';
import HistogramBar from './HistogramBar';
// import { RNTextSwitch } from 'react-native-text-switch';
import SlideComponent from './SlideComponent'
import { Picker } from '@react-native-community/picker';
import ImagePicker from 'react-native-image-picker';



const data = {
  test: [{ votes: 1, grade: 'V4' }, { votes: 10, grade: 'V4+' }, { votes: 11, grade: 'V5-' }, { votes: 20, grade: 'V5' }, { votes: 9, grade: 'V5+' }, { votes: 3, grade: 'V6-' }, { votes: 1, grade: 'V6' }]
}

export default function App() {
  let max = Math.max.apply(Math, data.test.map(function (i) { return i.votes; }))
  const [language, changeLanguage] = useState('java');
  const [image, setImage] = useState(null);

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* <RNTextSwitch style={{ width: 200, height: 100 }} /> */}

      <Text>Open up App.js to start working on your app rob!</Text>
      <StatusBar style="auto" />
      {/* <SlideComponent/> */}
      <Picker
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
      </Picker>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {image && (
          <Image
            source={{ uri: image.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}
        <Button title="Choose Photo" onPress={handleChoosePhoto} />
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