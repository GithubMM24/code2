import React from 'react'
import { StatusBar } from 'react-native'
import {StyleSheet,Text,View,Image,TouchableOpacity,ScrollView} from 'react-native'
import  LAB from './Result'
const Dashboard = ({navigation}) => {
    const wid=100
    const hei=100
    const rad=100
    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#001737" translucent = {true}/>
            <View style={styles.container}>
                <Text style={{color:"#ffffff",fontSize:20, marginLeft:'5%',marginTop:'5%',marginBottom:'5%',textAlign: "center",marginRight:'5%',fontWeight: "bold"}}>Services</Text>
                <View style={styles.images}>

                    <TouchableOpacity onPress={()=>navigation.navigate('LabTest')}>
                    <Image resizeMode="stretch" style={{width:wid,height:hei ,borderRadius:rad}} source={require('../assets/chat.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft:"5%"}} onPress={()=>navigation.navigate('FindDoctor')}>
                    <Image resizeMode="stretch" style={{width:wid,height:hei, borderRadius:rad}} source={require('../assets/finddoc.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft:"5%"}} onPress={()=>navigation.navigate('BuyMedicine')}>
                    <Image resizeMode="stretch" style={{width:wid,height:hei, borderRadius:rad}} source={require('../assets/sleeptrack.png')} />
                    </TouchableOpacity>

                </View>

                <View style={styles.images}>
                    <TouchableOpacity onPress={()=>navigation.navigate('OrderDetails')}>
                    <Image resizeMode="stretch" style={{width:wid,height:hei, borderRadius:rad}} source={require('../assets/dietplan.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft:"5%"}} onPress={()=>navigation.navigate('Excercises')}> 
                    <Image resizeMode="stretch" style={{width:wid,height:hei, borderRadius:rad}} source={require('../assets/Med.jpeg')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft:"5%"}} onPress={()=>navigation.navigate('Articles')}>
                    <Image resizeMode="stretch" style={{width:wid,height:hei, borderRadius:rad}} source={require('../assets/healthchart.png')} />
                    </TouchableOpacity>
                </View>




<LAB/>
                {/* <Text style={{color:"#FFDE59",fontSize:20, marginLeft:'5%',marginTop:'5%',marginBottom:'5%',textAlign: "center",marginRight:'5%',fontWeight: "bold"}}>Latest Reports</Text> */}
                
                {/* <View style={styles.superimages}>

                <TouchableOpacity onPress={()=>navigation.navigate('Result')} >

                        <Image resizeMode="stretch" style={{width:340,height:180}} source={require('../assets/report1.png')} />
                </TouchableOpacity>    


                    <TouchableOpacity>
                        <Image resizeMode="stretch" style={{width:340,height:180,marginTop:'5%'}} source={require('../assets/report2.png')} />
                    </TouchableOpacity>
                    
                </View> */}
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
    
        flex: 1,
        backgroundColor: 'white',
    },
    images: {
        justifyContent:'space-evenly',
        alignItems: "center",
        flexDirection: 'row' ,
        marginBottom:'25%'
    },
    superimages: {
        justifyContent:'center',
        alignItems: "center",
        flexDirection: 'column' ,
        marginBottom:'5%'
    },
});

export default Dashboard