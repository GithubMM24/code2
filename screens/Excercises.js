
// Training videos


// import React from 'react'
// import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native'
// const Excercises = ({navigation}) => {
//     return (
//         <View style={styles.container}>
//             <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#001737" translucent = {true}/>
//                 <View style={styles.superimages}><Image resizeMode="stretch" source={require('../assets/exercise.png')} /></View>
//             <Text style={{color:"white",fontSize:16, textAlign:"justify", margin:"10%"}}>Feature Currently Unavailable</Text>
//             <TouchableOpacity style={styles.btn}>
//                 <Text style={styles.btnText}>Get</Text>
//             </TouchableOpacity>


//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#001737',
//         justifyContent:'center',
//         alignItems: 'center',
//     },
//     images: {
//         justifyContent:'center',
//         alignItems: "center",
//         flexDirection: 'row' ,
//     },
//     superimages: {
//         justifyContent:'center',
//         alignItems: "center",
//         flexDirection: 'column' ,
//     },
//     btn : {
//         marginBottom:20,
//         backgroundColor:'#FFDE59',
//         borderRadius:22,
//         width:160,
//         alignItems: "center"
//     },
//     btnText: {
//         color: "#052147",
//         fontSize: 20,
//         fontWeight: "bold",
//         padding:10
//     }
// });

// export default Excercises





import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BloodPressureAndSugarCalculator = () => {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [sugarLevel, setSugarLevel] = useState('');
  const [average, setAverage] = useState('');

  const calculateAverage = () => {
    // Check if all fields are filled
    if (systolic && diastolic && sugarLevel) {
      const averageValue = (parseInt(systolic) + parseInt(diastolic) + parseInt(sugarLevel)) / 3;
      setAverage(averageValue.toFixed(2));
    } else {
      setAverage('Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
    <Text style={{fontSize:52,
marginBottom:100,marginTop:21,
    }}>Health Test</Text>
      <Text style={styles.label}>Enter Systolic Blood Pressure:</Text>
      <TextInput
        style={styles.input}
        value={systolic}
        onChangeText={text => setSystolic(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Enter Diastolic Blood Pressure:</Text>
      <TextInput
        style={styles.input}
        value={diastolic}
        onChangeText={text => setDiastolic(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Enter Sugar Level:</Text>
      <TextInput
        style={styles.input}
        value={sugarLevel}
        onChangeText={text => setSugarLevel(text)}
        keyboardType="numeric"
      />
      <Button title="Calculate "  onPress={calculateAverage} />
      <Text style={styles.result}>Overall  health: {average}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,

    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },


    
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  result: {

    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BloodPressureAndSugarCalculator;
