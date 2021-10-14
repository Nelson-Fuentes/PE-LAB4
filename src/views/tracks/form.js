import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import fireb  from '../../../database/firebase';
import Patient from '../../models/patient';
import { Track } from '../../models/tracks';

export class FormTrack extends React.Component {

    
    render(){
        var patient = this.props.patient;
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var t_fecha = date + '-' + month + '-' + year;
        var t_peso = "12";
        var t_temp = "12";
        var t_pres = "12";
        var t_sat = "12";

        const save_track = () => {
          var track = new Track( t_fecha , t_peso, t_temp, t_pres, t_sat,undefined)
            this.props.func_flag_track(patient.id,track);
        }

        return (
            <ScrollView style={styles.scrollView}>
            <TextInput style={styles.input} label="Fecha" value={t_fecha} left={<TextInput.Icon name="calendar-range"/>} mode='outlined'/>
            <TextInput style={styles.input} label="Peso" value={t_peso} onChangeText={text_peso => t_peso = text_peso } left={<TextInput.Icon name="coat-rack"/>} mode='outlined'/>
            <TextInput style={styles.input} label="Temperatura" value={t_temp}  onChangeText={text_temp => t_temp = text_temp } left={<TextInput.Icon name="thermometer-high"/>} mode='outlined'/>
            <TextInput style={styles.input} label="Presión" value={t_pres}  onChangeText={text_pre => t_pres = text_pre } left={<TextInput.Icon name="heart"/>} mode='outlined'/>
            <TextInput style={styles.input} label="Saturación" value={t_sat}  onChangeText={text_sat => t_sat = text_sat } left={<TextInput.Icon name="seat-recline-normal"/>} mode='outlined' keyboardType={'numeric'} />
            <Button icon="content-save" mode="contained" onPress={save_track}>Guardar</Button>
            </ScrollView>
        );


    }
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
  }
});