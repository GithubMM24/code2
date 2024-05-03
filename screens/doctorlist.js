import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput,Image, TouchableOpacity, FlatList, Modal } from 'react-native';
import Doc from './doctocard.js';

const DoctorSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  // Sample data for doctors
  const [doctors] = useState([
    { id: '1' , name: 'Dr. Smith', specialty: 'Cardiologist',       logoColor: '#f5e29d', rep: <Doc info='A cardiologist is a medical doctor who specializes in diagnosing and treating conditions related to the heart and blood vessels. They undergo extensive training in internal medicine and then pursue further specialization in cardiology. Cardiologists are experts in managing various heart conditions such as coronary artery disease, heart failure, arrhythmias, and valvular heart disease. They utilize a range of diagnostic tests including ECGs, echocardiograms, stress tests, and cardiac catheterization to evaluate heart function and structure. Treatment options may include medication, lifestyle modifications, or procedures such as angioplasty or heart surgery. Regular visits to a cardiologist can help prevent and manage heart disease, ensuring better cardiovascular health.'/> },
    { id: '2' , name: 'Dr. John',  specialty: 'Dermatologist',      logoColor: '#f5e29d', rep: <Doc info="Dermatologists are medical doctors who specialize in diagnosing and treating conditions related to the skin, hair, and nails. They undergo extensive training in dermatology after completing medical school. Dermatologists diagnose and treat a wide range of skin conditions, including acne, eczema, psoriasis, skin cancer, and infections. They also provide cosmetic procedures such as botox injections, laser treatments, and chemical peels to improve the appearance of the skin. Dermatologists play a crucial role in promoting skin health and managing both medical and cosmetic concerns related to the skin. Regular visits to a dermatologist can help prevent and treat various skin issues, ensuring healthy and radiant skin."/> },
    { id: '3' , name: 'Dr. Liam',  specialty: 'Pediatrician',       logoColor: '#f5e29d', rep: <Doc info="Pediatricians are medical doctors who specialize in the care of infants, children, and adolescents. They undergo extensive training in pediatrics after completing medical school. Pediatricians are experts in managing the physical, emotional, and behavioral health of children from birth through adolescence. They provide preventive care, diagnose and treat illnesses, and monitor growth and development milestones. Pediatricians address a wide range of issues including vaccinations, nutrition, developmental delays, and common childhood illnesses like colds, flu, and ear infections. They also play a crucial role in educating parents about childcare and promoting healthy lifestyle habits for children. Regular visits to a pediatrician are essential for ensuring the well-being and proper development of children."/> },
    { id: '4' , name: 'Dr. Brown', specialty: 'Neurologist',        logoColor: '#f5e29d', rep: <Doc info="Neurologists are medical doctors who specialize in diagnosing and treating disorders of the nervous system. They undergo extensive training in neurology after completing medical school. The nervous system includes the brain, spinal cord, nerves, and muscles, and neurologists are experts in understanding how these components interact to control bodily functions. Neurologists diagnose and treat a wide range of conditions such as stroke, epilepsy, multiple sclerosis, Parkinson's disease, Alzheimer's disease, and headaches. They utilize various diagnostic tools including imaging tests like MRI and CT scans, as well as neurological exams to assess patients' neurological function. Treatment options may include medication, physical therapy, lifestyle modifications, or surgical interventions, depending on the specific condition. Neurologists play a critical role in managing neurological disorders and improving patients' quality of life. Regular visits to a neurologist are essential for monitoring and managing neurological conditions effectively."/> },
    { id: '5' , name: 'Dr. Jones', specialty: 'Orthopedic Surgeon', logoColor: '#f5e29d', rep: <Doc info="Orthopedic surgeons are medical doctors who specialize in the diagnosis, treatment, and surgical management of conditions related to the musculoskeletal system. After completing medical school, they undergo extensive training in orthopedic surgery, focusing on the bones, joints, ligaments, tendons, and muscles of the body. Orthopedic surgeons treat a wide range of musculoskeletal conditions, including fractures, sports injuries, arthritis, spinal disorders, and congenital deformities. They utilize various diagnostic tools such as X-rays, MRI scans, and physical examinations to assess patients' conditions accurately. Treatment options may include non-surgical approaches such as medication, physical therapy, and orthotic devices, as well as surgical interventions like joint replacement, arthroscopy, and spinal fusion. Orthopedic surgeons play a crucial role in restoring mobility, relieving pain, and improving the quality of life for their patients. Regular visits to an orthopedic surgeon may be necessary for ongoing management of musculoskeletal issues."/> },
    {id:'6', name:'Dr kevin',specialty:'eye specalist',logoColor:'#f5e29d',rep:<Doc info=" An eye specialist, also known as an ophthalmologist, is a medical doctor who specializes in the diagnosis and treatment of eye disorders and diseases. After completing medical school, ophthalmologists undergo further training in ophthalmology, which includes surgical procedures related to the eyes. They are experts in assessing and managing a wide range of eye conditions, including refractive errors (such as nearsightedness, farsightedness, and astigmatism), cataracts, glaucoma, macular degeneration, diabetic retinopathy, and eye injuries. Ophthalmologists utilize various diagnostic tools and techniques, such as visual acuity tests, tonometry, ophthalmoscopy, and optical coherence tomography (OCT), to evaluate and monitor patients' eye health. Treatment options may include prescription eyeglasses or contact lenses, medications, laser therapy, or surgical interventions like cataract surgery, LASIK, or retinal detachment repair. Regular visits to an eye specialist are essential for maintaining good vision and preventing vision loss or eye-related complications."/>,

    }
  ]);

  // Function to handle search
  const handleSearch = () => {
    const filteredDoctors = doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setRecommendations(filteredDoctors);
  };

  // Function to handle doctor press
  const handleDoctorPress = (doctor) => {
    setSelectedDoctor(doctor);
    setModalVisible(true); // Show modal when doctor card is pressed
  };

  // Function to render doctor card item
  const renderDoctorItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleDoctorPress(item)}>
      <View style={[styles.doctorItem, { backgroundColor: item.logoColor }]}>
        <Text style={styles.doctorName}>{item.name}</Text>
        <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
      </View>
    </TouchableOpacity>
  );

  const poi=100
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

      {/* Modal for displaying doctor information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedDoctor && (
              <>
                <Text style={styles.modalDoctorName}>

                <Image resizeMode="stretch" style={{ height:poi,
  width:poi,}}   source={require('../assets/doctor.jpeg')}/>

                {selectedDoctor.name}</Text>
                <Text style={styles.modalDoctorSpecialty}>
                {selectedDoctor.specialty}</Text>
              </>
            )}
            <View style={styles.container2}>
               {selectedDoctor && (

                <View style={styles.scren}>
                {selectedDoctor.rep}
                </View>
               ) 
                }
            </View>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    width:350,
    justifyContent:"end",
alignItems:"center"
},
scren:{
  // fontSize: 24,
  fontWeight: 'bold',

  width:"100%",
  height:'100%',
  // backgroundColor:'red',
   
  // textAlign: 'center',
},



container2:{
  // flex: 1,
  borderColor:"yellow",
//  borderWidth:2,
marginBottom:12,
  backgroundColor: '#fff',
  // padding: 0,
  width:"100%",
  height:'70%',
  // justifyContent:"end",
// alignItems:"center"
},

  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width:250,

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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },


  modalContent: {
    alignContent:"space-between",
    backgroundColor: '#ffffff',
    width: '70%',
    height: '94%',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },


  modalDoctorName: {

    fontSize: 20,
    height:135,
    width:191,
    fontWeight: 'bold',
    // marginBottom: 1,
  },

  modalDoctorSpecialty: {
    fontSize: 18,
    color: '#888',
    // marginBottom: 2,
  },


  
  closeButton: {
    fontSize: 18,
    color: '#ffffff',
    // textDecorationLine: 'none',
    backgroundColor:"#ff2300",
borderRadius:20,
textAlign:"center",
    width:98,
    height:28
  },
});

export default DoctorSearch;
