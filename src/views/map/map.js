import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Button, TextInput, DataTable } from 'react-native-paper';
import Patient from '../../models/patient';
import Map from './mapComponent';


export class ViewMapScreen extends React.Component {
  render(){
      var patient = this.props.patient;
      const send_flag = () => {
        func_flag(true);
      }

      return (
        <SafeAreaView forceInset={{top:"always"}}>
          <Map firstname={patient.first_name} lastname={patient.last_name} latitude={parseFloat(patient.latitude)} longitude={ parseFloat(patient.longitude) }/>
        </SafeAreaView>
      )};
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  scrollView: {
    backgroundColor: 'white'
  },
  text: {
    fontSize: 42,
  },
  input: {
    marginBottom: 10
  },
  button: {
      marginBottom: 10,
      color: "white"
  }
});
  /*
  return (
    <SafeAreaView forceInset={{top:"always"}}>
      <Map/>
    </SafeAreaView>
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
*/