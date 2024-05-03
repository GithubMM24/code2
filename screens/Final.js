
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';

// const DoctorList = () => {
//   const [doctors, setDoctors] = useState([
//     { id: '1', name: 'Dr. Smith', specialty: 'Cardiologist' },
//     { id: '2', name: 'Dr. Johnson', specialty: 'Dermatologist' },
//     { id: '3', name: 'Dr. Williams', specialty: 'Pediatrician' },
//     { id: '4', name: 'Dr. Brown', specialty: 'Neurologist' },
//     { id: '5', name: 'Dr. Jones', specialty: 'Orthopedic Surgeon' },
//     { id: '6', name: 'Dr. hawk', specialty: ' Dentist' },
//     { id: '7', name: 'Dr. moon', specialty: 'sugar Surgeon' },
//     { id: '8', name: 'Dr. james', specialty: 'skin Surgeon' },
//   ]);

//   const renderDoctorItem = ({ item }) => (
//     <View style={styles.doctorItem}>
//       <Text style={styles.doctorName}>{item.name}</Text>
//       <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={doctors}
//         renderItem={renderDoctorItem}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 0,
//     backgroundColor: '#fff',
//     padding: 70,
//   },
//   doctorItem: {
//     backgroundColor: '#f9f9f9',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 20,
//   },
//   doctorName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   doctorSpecialty: {
//     fontSize: 16,
//     color: '#888',
//   },
// });

// export default DoctorList;

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Doc from './doctocard'
const DoctorSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [doctors] = useState([
    { 
      id: '1', name: 'Dr. Smith', specialty: 'Cardiologist', logoColor: '#f5e29d' ,
      rep :<Doc/> },
    { id: '2', name: 'Dr. Johnson', specialty: 'Dermatologist', logoColor: '#f5e29d' },
    { id: '3', name: 'Dr. Williams', specialty: 'Pediatrician', logoColor: '#f5e29d' },
    { id: '4', name: 'Dr. Brown', specialty: 'Neurologist', logoColor: '#f5e29d' },
    { id: '5', name: 'Dr. Jones', specialty: 'Orthopedic Surgeon', logoColor: '#f5e29d' },
  ]);

  const handleSearch = () => {
    // Perform search logic here
    const filteredDoctors = doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setRecommendations(filteredDoctors);
  };

  const renderDoctorItem = ({ item }) => (
    <TouchableOpacity onPress={() => console.log('doctor',item ) 
    
    
    
    }>
      <View style={[styles.doctorItem, { backgroundColor: item.logoColor }]}>
        <Text style={styles.doctorName}>{item.name}</Text>
        <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search doctors..."
        value={searchQuery}
        onChangeText={text => {
          setSearchQuery(text);
          handleSearch();
        }}
      />
      {searchQuery !== '' && (
        <View style={styles.recommendationContainer}>
          <Text style={styles.recommendationText}>Recommendations</Text>
          <FlatList
            data={recommendations}
            renderItem={renderDoctorItem}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    padding: 90,
  },
  searchInput: {
    height: 40,
    width:200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  recommendationContainer: {
    marginTop: 10,
  },
  recommendationText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  doctorItem: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  doctorSpecialty: {
    fontSize: 16,
    color: '#888',
  },
});

export default DoctorSearch;
