import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
// const screenWidth = Dimensions.get("window").width;

function HistogramBar({text, height, max, color, index, grade}) {
  let barChartColor;
  if(height === max){
    barChartColor = '#F67451'
  } else {
    barChartColor = '#F6745166' //rbg(246,116,81,40)
  }
  return (
    <View style={{
      flex: 1, 
      height:`${height/max*80}%`,
      backgroundColor: `${barChartColor}`, 
      marginHorizontal: 6,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      justifyContent:'flex-end',
      alignItems:'center'
    }}>
      {height === max ?
          <Text style={{
            paddingBottom:'250%',
            fontWeight:'bold'
          }}>{height}</Text>
          : null
      }
      <Text style={{
        marginBottom: '-50%',
        alignSelf: 'center',
      }}
      >{grade}</Text>
    </View>
  )
}

export default HistogramBar;

const s= StyleSheet.create({
  test:{

  }
})