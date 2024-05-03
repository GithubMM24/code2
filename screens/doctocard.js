import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardiologistReport = (props) => {
  return (
    <View style={styles.container}>
       {/* <Text style={styles.heading}>Cardiologist Report</Text>
       <View style={styles.section}>
         <Text style={styles.sectionHeading}>Patient Details</Text>
         <Text>Patient Name: John Doe</Text>
         <Text>Age: 45</Text>
         <Text>Gender: Male</Text>
       </View>
       <View style={styles.section}>
         <Text style={styles.sectionHeading}>Diagnosis</Text>
         <Text>High blood pressure</Text>
         <Text>Irregular heartbeat</Text>
       </View>
       <View style={styles.section}>
         <Text style={styles.sectionHeading}>Treatment</Text>
         <Text>Prescribed Medication: Atenolol</Text>
         <Text>Dietary Recommendations: Low-sodium diet</Text>
         <Text>Exercise: Light cardiovascular exercises</Text>
       </View>
       <View style={styles.section}>
         <Text style={styles.sectionHeading}>Follow-up</Text>
         <Text>Next Appointment: 2024-05-01</Text>
         <Text>Remarks: Patient advised to monitor blood pressure regularly</Text>
       </View> */}


          <Text style={styles.text}>{props.info}</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: 'green',
    width:'100%',
    height:'100%',
justifyContent:"center",
alignItems:"center",

  },
  
  

text:{

overflow:"scroll",

    // fontSize: 24,
    fontWeight: 'bold',
padding:"1%",
    width:"100%",
    height:"100%",
    //  backgroundColor:'blue',
    // textAlign: 'center',
  },
});

export default CardiologistReport;
