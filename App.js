import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import HistogramBar from './HistogramBar'

const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ['V4','V4+','V5-','V5','V5+','V6-','V6'],
  data: [8,3,10,25,12,6,2],
  testdata: [80,30,100,25,120,60,20],
  test: [{votes: 1, grade:'V4'},{votes: 10, grade:'V4+'},{votes: 11, grade:'V5-'},{votes: 20, grade:'V5'},{votes: 9, grade:'V5+'},{votes: 3, grade:'V6-'},{votes: 1, grade:'V6'}]
}

export default function App() {
  // let max= Math.max(...data.testdata);
  let max= Math.max.apply(Math, data.test.map(function(o) { return o.votes; }))
  console.log('NewMax: ', max)

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app rob!</Text>
      <StatusBar style="auto" />

      <View style={{ width: '100%', 
      height: 128, 
      backgroundColor: 'honeydew', 
      justifyContent: 'center', 
      flexDirection: 'row', 
      paddingHorizontal:'4%', 
      alignItems:'flex-end',       
      paddingBottom: '5%'
      }}>
        {
          data.test.map((item,i) => (
          <HistogramBar height={item.votes} key={i} max={max} color={'#F67451'} index={i} grade={item.grade}/>
        ))}
      </View>

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