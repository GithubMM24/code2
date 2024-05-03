import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Result = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blood Test Report</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Patient Information</Text>
        <Text>Patient Name: John Doe</Text>
        <Text>Age: 35</Text>
        <Text>Gender: Male</Text>
        <Text>Date of Birth: January 1, 1987</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Test Results</Text>
        <Text>Hemoglobin: 14.5 g/dL</Text>
        <Text>White Blood Cells: 7.2 x10^3/µL</Text>
        <Text>Platelet Count: 250 x10^3/µL</Text>
        {/* Add more test results here */}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Interpretation</Text>
        <Text>The blood test results indicate normal levels for all parameters.</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>This report is for informational purposes only. Consult a medical professional for accurate diagnosis and treatment.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#ebe1cc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    // backgroundColor: '#e8d1ac',

  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  footer: {
    display: "flex",
    marginTop: 'auto',
flexDirection:"row",
alignItems:'center',
    // borderTopWidth: 1,
    borderColor: '#ccc',
    // paddingTop: 40,
    height:100,

    backgroundColor:'#42413d',
  },
  footerText: {

    color:'white',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Result;


// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// const OverallHealthProgressBar = ({ progress }) => {
//   const strokeWidth = 10; // Width of the progress bar stroke
//   const radius = 100 - strokeWidth / 2; // Radius of the circle

//   // Calculate the circumference of the circle
//   const circumference = 2 * Math.PI * radius;

//   // Calculate the progress value in terms of stroke-dashoffset
//   const dashOffset = circumference - (progress / 100) * circumference;

//   return (
//     <View style={styles.container}>
//       <View style={styles.progressBarBackground}>
//         <View
//           style={[
//             styles.progressBar,
//             {
//               width: radius * 2,
//               height: radius * 2,
//               borderRadius: radius,
//               borderTopWidth: strokeWidth,
//               borderBottomWidth: strokeWidth,
//               borderColor: '#e0e0e0',
//             },
//           ]}
//         />
//         <View
//           style={[
//             styles.progressBar,
//             {
//               width: radius * 2,
//               height: radius * 2,
//               borderRadius: radius,
//               borderTopWidth: strokeWidth,
//               borderBottomWidth: strokeWidth,
//               borderLeftWidth: strokeWidth,
//               borderRightWidth: strokeWidth / 2,
//               borderColor: '#ff5722',
//               transform: [{ rotate: '-90deg' }],
//               borderBottomColor: 'transparent',
//             },
//             { borderTopColor: progress >= 50 ? '#ff5722' : '#00cc00' },
//             { borderRightColor: progress >= 50 ? '#ff5722' : '#00cc00' },
//             { borderLeftColor: 'transparent' },
//             { borderTopEndRadius: progress >= 50 ? 0 : radius, borderBottomRightRadius: radius },
//           ]}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//   },
//   progressBarBackground: {
//     position: 'relative',
//     width: 220, // Diameter of the circle + stroke width
//     height: 220, // Diameter of the circle + stroke width
//   },
//   progressBar: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//   },
// });

// export default OverallHealthProgressBar;
