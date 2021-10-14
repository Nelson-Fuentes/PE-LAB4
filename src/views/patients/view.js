import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Button, TextInput, DataTable } from 'react-native-paper';
import Patient from '../../models/patient';
import fireb  from '../../../database/firebase';

export class ViewPatientScreen extends React.Component {
  
  render(){

      var patient = this.props.patient;
      //var trackings = this.props.trackings;

      const send_flag = () => {
        this.props.func_flag(true);
      }
      const open_map = () => {
        this.props.func_flag_map(patient);
      }

      const save_patient = () =>{
        var patient2 = this.props.patient;
        this.props.func_flag_save_patient(patient2);
      } 
      

      return (
      <ScrollView style={styles.scrollView}>
            <TextInput style={styles.input} label="Apellidos" value={this.props.patient.last_name}  onChangeText={text_last_name => this.props.patient.last_name = text_last_name } left={<TextInput.Icon name="account"/>} mode='outlined'/>
            <TextInput style={styles.input} label="Nombre" value={this.props.patient.first_name} onChangeText={text_first_name => this.props.patient.first_name = text_first_name } left={<TextInput.Icon name="face"/>} mode='outlined'/>
            <TextInput style={styles.input} label="Fecha de Nacimiento" value={this.props.patient.date_birth} onChangeText={text_birth => this.props.patient = text_birth}    left={<TextInput.Icon name="calendar-range"/>} mode='outlined'/>
            <TextInput style={styles.input} label="Estatura" value={this.props.patient.stature} onChangeText={text_stature => this.props.patient.stature = text_stature}   left={<TextInput.Icon name="account-details"/>} mode='outlined' keyboardType={'numeric'} />
            <TextInput style={styles.input} label="Dirección" value={this.props.patient.address}  onChangeText={text_address => this.props.patient.address = text_address}  left={<TextInput.Icon name="map-marker"/>} mode='outlined'/>
            <TextInput style={styles.input} label="latitud" value={this.props.patient.latitude}  onChangeText={text_latitude => this.props.patient.latitude = text_latitude} left={<TextInput.Icon name="map-marker"/>} mode='outlined' keyboardType={'numeric'} />
            <TextInput style={styles.input} label="longitud" value={this.props.patient.longitude} onChangeText={text_longitude => this.props.patient.longitude = text_longitude} left={<TextInput.Icon name="map-marker"/>} mode='outlined' keyboardType={'numeric'} />
            <Button style={styles.button} onPress={save_patient} icon="content-save" mode="contained">Guardar</Button>
            <Button style={styles.button} onPress={open_map} icon="map" mode="contained">Ver Mapa</Button>
            <Button style={styles.button} onPress={send_flag} icon="clipboard-list-outline" mode="contained">Agregar Seguimiento</Button>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Fecha</DataTable.Title>
                    <DataTable.Title numeric>Peso</DataTable.Title>
                    <DataTable.Title numeric>Temperatura</DataTable.Title>
                    <DataTable.Title numeric>Presión</DataTable.Title>
                    <DataTable.Title numeric>Saturacion</DataTable.Title>
                </DataTable.Header>
                {patient.tracking.map((prop, key) => {
                    return (
                    <DataTable.Row>
                        <DataTable.Cell>{prop.date}</DataTable.Cell>
                        <DataTable.Cell numeric>{prop.weigth}</DataTable.Cell>
                        <DataTable.Cell numeric>{prop.temperature}</DataTable.Cell>
                        <DataTable.Cell numeric>{prop.presion}</DataTable.Cell>
                        <DataTable.Cell numeric>{prop.saturation}</DataTable.Cell>
                    </DataTable.Row>
                
                    );
                })}

            </DataTable>
      </ScrollView>
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