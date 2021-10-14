import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { List , Modal} from 'react-native-paper';
import Patient from '../../models/patient';
import * as RootNavigation from '../../../theme/navigation';
import { ViewPatientScreen } from './view';
import { Track } from '../../models/tracks';
import {FormTrack} from '../tracks/form';
import fireb from '../../../database/firebase';


export const ListPatientScreen = ({navigation}) => {
  const patients = []

  const item_list = patients.map(item => (
    <List.Item
      title="First Item"
      description="Item description"
      left={props => <List.Icon {...props} icon="folder" />}
      />
    )
  );

  React.useEffect(() => {
    fireb.db.collection("patients").onSnapshot((querySnapshot )  => {
      querySnapshot.docs.forEach((doc) =>{
        const {last_name,first_name,date_birth, stature, address, latitude, longitude } = doc.data()
        patients.push({
          id:doc.id,
          last_name,
          first_name,
          date_birth,
          stature,
          address,
          latitude,
          longitude
        })
      } )
    })
  })


  const [current_patient, set_patient] = React.useState(undefined);

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



  const view_patient = (patient) => {
    set_patient(patient)
    showModal()
  }


  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      {patients.map((prop, key) => {
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
          <ViewPatientScreen patient={current_patient} func_flag={recieve_flag}/>          
      </Modal>
      <Modal visible={visible_form_track} onDismiss={hideModal_form_track} contentContainerStyle={containerStyle}>
          <FormTrack func_flag={recieve_flag_2}/>
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