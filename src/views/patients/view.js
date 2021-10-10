import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Button, TextInput, DataTable } from 'react-native-paper';
import Patient from '../../models/patient';

export class ViewPatientScreen extends React.Component {
  render(){
      var patient = this.props.patient;

      const send_flag = () => {
        this.props.func_flag(true);
      }

      return (
      <ScrollView style={styles.scrollView}>
            <TextInput style={styles.input} label="Apellidos" value={patient.last_name} onChangeText={text_last_name => patient.last_name = text_last_name} left={<TextInput.Icon name="account"/>} mode='outlined'/>
            <TextInput style={styles.input} label="Nombre" value={patient.first_name} left={<TextInput.Icon name="face"/>} mode='outlined'/>
            <TextInput style={styles.input} label="Fecha de Nacimiento" value={patient.date_birth}  left={<TextInput.Icon name="calendar-range"/>} mode='outlined'/>
            <TextInput style={styles.input} label="Estatura" value={patient.stature}  left={<TextInput.Icon name="account-details"/>} mode='outlined' keyboardType={'numeric'} />
            <TextInput style={styles.input} label="Dirección" value={patient.address} left={<TextInput.Icon name="map-marker"/>} mode='outlined'/>
            <Button style={styles.button} icon="content-save" mode="contained">Guardar</Button>
            <Button style={styles.button} icon="map" mode="contained">Ver Mapa</Button>
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