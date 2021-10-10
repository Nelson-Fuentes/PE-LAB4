import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export class FormTrack extends React.Component {

    render(){

        const save_track = () => {
            this.props.func_flag();
        }

        return (
            <ScrollView style={styles.scrollView}>
            <TextInput style={styles.input} label="Peso"  left={<TextInput.Icon name="coat-rack"/>} mode='outlined'/>
            <TextInput style={styles.input} label="Temperatura"  left={<TextInput.Icon name="thermometer-high"/>} mode='outlined'/>
            <TextInput style={styles.input} label="Presión"  left={<TextInput.Icon name="heart"/>} mode='outlined'/>
            <TextInput style={styles.input} label="Saturación"  left={<TextInput.Icon name="seat-recline-normal"/>} mode='outlined' keyboardType={'numeric'} />
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