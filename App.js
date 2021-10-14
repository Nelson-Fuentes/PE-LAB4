import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ListPatientScreen } from './src/views/patients/list/';
import { FormPatientScreen } from './src/views/patients/form/';
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./theme/theme";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Lista de Pacientes') {
                  return (
                    <Ionicons
                      name={
                        focused
                          ? 'ios-add'
                          : 'ios-add'
                      }
                      size={size}
                      color={color}
                    />
                  );
                } else if (route.name === 'Registrar Paciente') {
                  return (
                    <Ionicons
                      name={focused ? 'ios-list' : 'ios-list'}
                      size={size}
                      color={color}
                    />
                  );
                }
              },
              tabBarInactiveTintColor: 'gray',
              tabBarActiveTintColor: 'blue',
            })}
        >
          <Tab.Screen name="Lista de Pacientes" component={ListPatientScreen} />
          <Tab.Screen name="Registrar Paciente" component={FormPatientScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
