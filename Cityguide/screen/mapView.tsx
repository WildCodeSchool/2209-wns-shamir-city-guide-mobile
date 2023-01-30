import React from 'react';
import MapView, { Marker, Region } from 'react-native-maps';

interface Props {
region: Region;
onRegionChange: (reg: Region) => void;
}

const MyMapView: React.FC<Props> = (props) => {
return (
<MapView
style={{ flex: 1 }}
region={props.region}
showsUserLocation={true}
onRegionChange={(reg) => props.onRegionChange(reg)}
>
<Marker coordinate={props.region} />
</MapView>
);
};

export default MyMapView;