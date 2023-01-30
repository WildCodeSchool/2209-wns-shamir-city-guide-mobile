import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

interface Props {
notifyChange: (location: {lat: number, lng: number}) => void;
}

const MapInput: React.FC<Props> = (props) => {
return (
<GooglePlacesAutocomplete
placeholder='Search'
minLength={2}
listViewDisplayed={false}
fetchDetails={true}
onPress={(data, details = null) => {
props.notifyChange(details?.geometry.location);
}}
query={{
key: 'AIzaSyD8kaYmqkEw9DMhpbtqnIe9Qk7PCQSb3R4',
language: 'fr'
}}
nearbyPlacesAPI='GooglePlacesSearch'
debounce={300}
/>
);
};

export default MapInput;