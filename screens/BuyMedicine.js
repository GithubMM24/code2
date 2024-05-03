// import React from 'react'
// import { StatusBar } from 'react-native'
// import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native'

// const BuyMedicine = ({navigation}) => {
//     return (
//         <View style={styles.container}>
//             <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#001737" translucent = {true}/>
//                 <View style={styles.superimages}>
//                         <Image resizeMode="stretch" source={require('../assets/buymedi.png')} />
//                 </View>
//             <Text style={{color:"white",fontSize:16, textAlign:"justify", margin:"10%"}}>Feature Currently Unavailable </Text>
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

// export default BuyMedicine


// ===================================================================




// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// const SleepTracker = () => {
//   const [startTime, setStartTime] = useState(null);
//   const [endTime, setEndTime] = useState(null);
//   const [currentTime, setCurrentTime] = useState(getCurrentTime());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(getCurrentTime());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const startSleepTracking = () => {
//     setStartTime(new Date());
//   };

//   const endSleepTracking = () => {
//     setEndTime(new Date());
//   };

//   function getCurrentTime() {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();
//     return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   }

//   const renderSleepTime = () => {
//     if (startTime && !endTime) {
//       const elapsedTime = Math.floor((new Date() - startTime) / 1000);
//       const hours = Math.floor(elapsedTime / 3600);
//       const minutes = Math.floor((elapsedTime % 3600) / 60);
//       const seconds = elapsedTime % 60;
//       return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     } else if (startTime && endTime) {
//       const sleepTime = Math.floor((endTime - startTime) / 1000);
//       const hours = Math.floor(sleepTime / 3600);
//       const minutes = Math.floor((sleepTime % 3600) / 60);
//       const seconds = sleepTime % 60;
//       return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     } else {
//       return '00:00:00';
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sleep Tracker</Text>
//       <Text style={styles.clock}>{currentTime}</Text>
//       <TouchableOpacity style={styles.button} onPress={startSleepTracking}>
//         <Text style={styles.buttonText}>Start Sleep</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={endSleepTracking}>
//         <Text style={styles.buttonText}>End Sleep</Text>
//       </TouchableOpacity>
//       <Text style={styles.sleepTime}>{renderSleepTime()}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   clock: {
//     fontSize: 48,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#007bff',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   sleepTime: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default SleepTracker;



// ===================================================================

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const SleepTracker = () => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const startSleepTracking = () => {
    setStartTime(new Date());
    setEndTime(null);
  };

  const endSleepTracking = () => {
    setEndTime(new Date());
  };

  const resetSleepTracking = () => {
    setStartTime(null);
    setEndTime(null);
  };

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  const calculateSleepTime = () => {
    if (startTime) {
      const end = endTime ? endTime : new Date();
      const sleepTime = Math.floor((end - startTime) / 1000);
      return sleepTime;
    }
    return 0;
  };

  const renderSleepTime = () => {
    const sleepTime = calculateSleepTime();
    const hours = Math.floor(sleepTime / 3600);
    const minutes = Math.floor((sleepTime % 3600) / 60);
    const seconds = sleepTime % 60;
    return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const renderProgressBar = () => {
    const sleepTime = calculateSleepTime();
    const totalSeconds = 8 * 3600; // Assuming a goal of 8 hours of sleep
    const progress = sleepTime / totalSeconds;
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference * (1 - progress);

    return (
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBar, { strokeDashoffset }]} />
        </View>
        <Text style={styles.progressText}>{`${Math.floor(progress * 100)}%`}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sleep Tracker</Text>
      <Text style={styles.clock}>{currentTime}</Text>
      <TouchableOpacity style={styles.start} onPress={startSleepTracking}>
        <Text style={styles.buttonText}>Start </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.stop} onPress={endSleepTracking}>
        <Text style={styles.buttonText}>Stop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reset} onPress={resetSleepTracking}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      <Text style={styles.stytext}> Hours you have slept</Text>
      <Text style={styles.sleepTime}>{renderSleepTime()}</Text>
      {/* {renderProgressBar()} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#07116e',
  },
  title: {
    color:"#FFDE59",
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  clock: {
    color:"white",
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },



  start: {
    backgroundColor: 'green',

    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  stop: {
    backgroundColor: 'red',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  reset: {
    backgroundColor: '#007bff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },




  reset: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },




  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
 stytext :{
fontSize:20,
     color: "white",
textAlign:'center',

    width:200,
    height:62,
 },
  sleepTime: {
    color:"white",
    fontSize: 50,
    fontWeight: 'bold',
  },
  
});

export default SleepTracker;
