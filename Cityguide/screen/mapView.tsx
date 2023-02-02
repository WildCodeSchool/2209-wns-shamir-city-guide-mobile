import React from 'react';
import MapView, { Marker, Region } from 'react-native-maps';
import {StyleSheet} from "react-native";

interface Props {
region: Region;
onRegionChange: (reg: Region) => void;
}

const MyMapView: React.FC<Props> = (props) => {
return (
<MapView
style={ styles.map}
region={props.region}
showsUserLocation={true}
onRegionChange={(reg) => props.onRegionChange(reg)}
>
<Marker coordinate={props.region} />
</MapView>
);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
export default MyMapView;