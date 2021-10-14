import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { List , Modal} from 'react-native-paper';
import Patient from '../../models/patient';
import * as RootNavigation from '../../../theme/navigation';
import { ViewPatientScreen } from './view';
import { Track } from '../../models/tracks';
import {FormTrack} from '../tracks/form'
import { ViewMapScreen } from '../map/map'
import fireb  from '../../../database/firebase';

export const ListPatientScreen = ({navigation}) => {
  const [patients,setPatients] = React.useState([]);
 
  React.useEffect(() => {
    fireb.db.collection("patients").onSnapshot(querySnapshot  => {
      const pat = [];
      querySnapshot.docs.forEach((doc) =>{
       
        const {last_name,first_name,date_birth, stature, address, latitude, longitude } = doc.data()
        pat.push(
          {
            id:doc.id,
            last_name,
            first_name,
            date_birth,
            stature,
            address,
            latitude,
            longitude,
            tracking:[]
          }
        );

      });
      setPatients(pat);
    });
  });


  const [current_patient, set_patient] = React.useState(undefined);
  //const [current_trakings,set_trakings] =  React.useState([]);

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, margin: 20};

  const [visible_form_track, setVisible_form_track] = React.useState(false);

  const showModal_form_track = () => setVisible_form_track(true);
  const hideModal_form_track = () => setVisible_form_track(false);


  const recieve_flag = (flag_) => {
    setVisible(!flag_)
    setVisible_form_track(flag_)
  }

  const recieve_flag_2 = () => {
    setVisible_form_track(false)
  }



  const view_patient = async (patient) => {
    try{
      fireb.db.collection("patients").doc(patient.id).collection("tracking").onSnapshot(querySnapshot  => {
        const tra = [];
        querySnapshot.docs.forEach((doc) =>{
          const {date,presion,saturation, temperature,weigth} = doc.data()
          tra.push(
            {
              id:doc.id,
              date:date,
              presion:presion,
              saturation:saturation,
              temperature:temperature,
              weigth:weigth
            }
          )
        });
        patient.tracking = tra;
      });
    }catch (e){
    }
    
    set_patient(patient)
    showModal()
  }
  var data_patient;
  const [mapView,setMapView] = React.useState(false);
  const hideModal_Map = () => setMapView(false);
  const drawMap=(data_patient_in) => {
    data_patient="Hola";
    setMapView(true);
  }
  const s_p = async (data_patient) =>{
    setVisible(false)
    await fireb.db.collection('patients').doc(current_patient.id).set({
      address:current_patient.address,
      date_birth:current_patient.date_birth,
      first_name:current_patient.first_name,
      last_name:current_patient.last_name,
      latitude:current_patient.latitude,
      longitude:current_patient.longitude,
      stature:current_patient.stature         
    });
    alert('Actualizado');
  }

  const s_t = async (patient_id,track) =>{
    setVisible_form_track(false)
    await fireb.db.collection('patients').doc(patient_id).collection('tracking').add({
      date:track.date,
      presion:track.presion,
      saturation:track.saturation,
      temperature: track.temperature,
      weigth: track.weigth
    }); 
  }
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      {patients.map((prop) => {
         return (
          <List.Item
            title={prop['first_name'] + ' ' +prop['last_name']}
            description={prop['date_birth']+' | ' + prop['stature'] + ' | ' + prop['address']}
            left={props => <List.Icon {...props} icon="face" />}
            right={props => <List.Icon {...props} color={"#2ECC71"} icon="eye" />}
            onPress={() => view_patient(prop)}
          />
         );
      })}
      </ScrollView>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <ViewPatientScreen patient={current_patient} func_flag={recieve_flag} func_flag_map={drawMap} func_flag_save_patient={s_p}  />          
      </Modal>
      <Modal visible={visible_form_track} onDismiss={hideModal_form_track} contentContainerStyle={containerStyle}>
          <FormTrack patient={current_patient} func_flag_track={s_t} />
      </Modal>

      <Modal visible={mapView} onDismiss={hideModal_Map} contentContainerStyle={containerStyle}>
          <ViewMapScreen func_flag2={setMapView} patient={current_patient}/>
      </Modal>
    </View>
  );
    
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex:1
  },
  scrollView: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 42,
  },
  input: {
    marginBottom: 10
  }
});