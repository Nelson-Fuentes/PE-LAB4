import React from 'react'
import MapView from "react-native-maps"
import { StyleSheet,Dimensions } from 'react-native';

const height=Dimensions.get("window").height;
var latitude,longitude;
const Map = ({firstname,lastname,latitude,longitude}) => {
    return(
        <MapView 
            style={styles.map}
            loadingEnabled={true}
            region={{
                latitude:latitude,
                longitude:longitude,
                latitudeDelta:0.010,
                longitudeDelta:0.003}}>
            <MapView.Marker
                coordinate={{
                    latitude:latitude,
                    longitude:longitude,
                }}
                title={`Ubicación de ${firstname}`}
                description={`${firstname} ${lastname}`}
            />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height:height*0.6,
    }
})

export default Map

/*

To use:

import { ViewMapScreen } from '../map/map'

<Modal visible={visible_form_track} onDismiss={hideModal_form_track} contentContainerStyle={containerStyle}>
          <ViewMapScreen func_flag={recieve_flag_2}/>
      </Modal>
*/