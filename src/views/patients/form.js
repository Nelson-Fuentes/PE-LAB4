import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import fireb  from '../../../database/firebase';

export const FormPatientScreen = ({ navigation }) => {
  const [text_last_name, setText_last_name] = React.useState('');
  const [text_first_name, setText_first_name] = React.useState('');
  const [text_birthdate, setText_birthdate] = React.useState('');
  const [text_estature, setText_estature] = React.useState('');
  const [text_address, setText_address] = React.useState('');
  const [text_latitude, setText_latitude] = React.useState('');
  const [text_longitude, setText_longitude] = React.useState('');

  const save_patient = async () => {
    if (text_last_name=== ''){
      alert('Please provide a name')
    }else{
      await fireb.db.collection('patients').add({
          address:text_address,
          date_birth:text_birthdate,
          first_name:text_first_name,
          last_name:text_last_name,
          latitude:text_latitude,
          longitude:text_longitude,
          stature:text_estature         
      })
      
      navigation.navigate('Lista de Pacientes', { name: 'Jane' })
    }

    
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TextInput style={styles.input} label="Apellidos" value={text_last_name} onChangeText={text_last_name => setText_last_name(text_last_name)} left={<TextInput.Icon name="account"/>} mode='outlined'/>
        <TextInput style={styles.input} label="Nombre" value={text_first_name} onChangeText={text_first_name => setText_first_name(text_first_name)} left={<TextInput.Icon name="face"/>} mode='outlined'/>
        <TextInput style={styles.input} label="Fecha de Nacimiento" value={text_birthdate} onChangeText={text_birthdate => setText_birthdate(text_birthdate)} left={<TextInput.Icon name="calendar-range"/>} mode='outlined'/>
        <TextInput style={styles.input} label="Estatura" value={text_estature} onChangeText={text_estature => setText_estature(text_estature)} left={<TextInput.Icon name="account-details"/>} mode='outlined' keyboardType={'numeric'} />
        <TextInput style={styles.input} label="Dirección" value={text_address} onChangeText={text_address => setText_address(text_address)} left={<TextInput.Icon name="map-marker"/>} mode='outlined'/>
        <TextInput style={styles.input} label="Latitud" value={text_latitude} onChangeText={text_latitude => setText_latitude(text_latitude)} left={<TextInput.Icon name="map-marker"/>} mode='outlined' keyboardType={'numeric'} />
        <TextInput style={styles.input} label="Longitud" value={text_longitude} onChangeText={text_longitude => setText_longitude(text_longitude)} left={<TextInput.Icon name="map-marker"/>} mode='outlined' keyboardType={'numeric'} />
        <Button icon="content-save" mode="contained" onPress={save_patient}>Guardar</Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
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