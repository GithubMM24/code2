// // Health chart


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const StatisticalHealthChart = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Statistical Health Chart</Text>
//       {/* Your statistical chart components here */}
//       <View style={styles.chartContainer}>
//         {/* Example bars for the statistical chart */}
//         <View style={[styles.bar, { height: 200 }]} />
//         <View style={[styles.bar, { height: 150 }]} />
//         <View style={[styles.bar, { height: 100 }]} />
//         <View style={[styles.bar, { height: 50 }]} />
//         <View style={[styles.bar, { height: 80 }]} />
//       </View>
//       <Text style={styles.pieChart}>Overall Health (Pie Chart)</Text>
//       {/* Your overall pie chart component here */}
//       <View style={styles.pieChartContainer}>
//         {/* Example pie chart */}
//         <View style={styles.pieSlice} />
//         <View style={[styles.pieSlice, { backgroundColor: '#5cdb95' }]} />
//         <View style={[styles.pieSlice, { backgroundColor: '#007bff' }]} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   chartContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 20,
//   },
//   bar: {
//     backgroundColor: '#007bff',
//     width: 20,
//     marginHorizontal: 5,
//   },
//   pieChart: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   pieChartContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   pieSlice: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#ccc',
//   },
// });

// export default StatisticalHealthChart;

// ==================================================================================


// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';

// const StatisticalHealthChart = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Statistical Health Chart</Text>
//       <View style={styles.chartContainer}>
//         <View style={[styles.bar, { height: 50 }]} />
//         <View style={[styles.bar, { height: 100 }]} />
//         <View style={[styles.bar, { height: 80 }]} />
//         <View style={[styles.bar, { height: 120 }]} />
//         <View style={[styles.bar, { height: 90 }]} />
//       </View>
//       <View style={styles.labelsContainer}>
//         <Text style={styles.label}>Data 1</Text>
//         <Text style={styles.label}>Data 2</Text>
//         <Text style={styles.label}>Data 3</Text>
//         <Text style={styles.label}>Data 4</Text>
//         <Text style={styles.label}>Data 5</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   chartContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-end',
//     width: '100%',
//     height: 200,
//   },
//   bar: {
//     width: 30,
//     backgroundColor: '#007bff',
//     borderRadius: 5,
//   },
//   labelsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default StatisticalHealthChart;


// ======================================================================


import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';

const StatisticalHealthChart = () => {
  const [dataValues, setDataValues] = useState({
    data1: 50,
    data2: 100,
    data3: 80,
    data4: 120,
    data5: 90,
  });

  const handleInputChange = (key, value) => {
    let newValue = parseInt(value);
    if (isNaN(newValue) || newValue < 0) {
      newValue = 0;
    } else if (newValue > 100) {
      newValue = 100;
    }
    setDataValues({ ...dataValues, [key]: newValue });
  };

  const calculateTotalProgress = () => {
    const total = Object.values(dataValues).reduce((acc, curr) => acc + curr, 0);
    const percentage = (total / 500) * 100; // Assuming 500 is the maximum possible value (100 * 5)
    return Math.round(percentage);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Statistical Health Chart</Text>
      <View style={styles.chartContainer}>
        {Object.keys(dataValues).map((key, index) => (
          <View key={key} style={[styles.bar, { height: (dataValues[key] / 100) * 150 }]}>
            <Text style={styles.barText}>{dataValues[key]}</Text>
          </View>
        ))}
      </View>
      <View style={styles.labelsContainer}>
        {Object.keys(dataValues).map((key, index) => (
          <Text key={key} style={styles.label}>Diet  {index + 1}</Text>
        ))}
      </View>
      <View style={styles.inputContainer}>
        {Object.keys(dataValues).map((key, index) => (
          <TextInput
            key={key}
            style={styles.input}
            value={String(dataValues[key])}
            onChangeText={(value) => handleInputChange(key, value)}
            keyboardType="numeric"
            maxLength={3}
          />
        ))}
      </View>
      <Text style={styles.progressText}>Overall health : {calculateTotalProgress()}%</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#394c91',
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chartContainer: {
    backgroundColor:"white",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    height: 200,
  },
  bar: {
    flex: 1,
    backgroundColor: '#c4b182',
    borderRadius: 5,

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  barText: {
    color:'white',
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  label: {
    color:"#c4b182",
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    color:"white",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    color:"white",
    width: 50,
    textAlign: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  progressText: {
    color:'#c4b182',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default StatisticalHealthChart;




