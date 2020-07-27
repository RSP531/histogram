import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

// import Histogram from 'react-native-histogram';

const screenWidth = Dimensions.get("window").width;

// const data = {
//   labels: ["January", "February", "March", "April", "May", "June"],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99, 43]
//     }
//   ]
// };
// const data = [{ data: [10, 13, 8, 19, 17] }]


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app rob!</Text>
      <StatusBar style="auto" />
      {/* <Histogram data={data} /> */}
      <BarChart
        data={{
          labels: [
            'Jan',
            'Feb',
            'March',
            'April',
            'May',
            'June',
          ],
          datasets: [
            {
              data: [10, 0, 12, 13, 3, 2, 1],
            },
          ],
        }}
        width={Dimensions.get('window').width - 20}
        height={220}
        yAxisLabel={''}
        chartConfig={{
          backgroundColor: 'red',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          // color: '#F67451',
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 10,
          borderRadius: 16,
        }}
      />
    </View>
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