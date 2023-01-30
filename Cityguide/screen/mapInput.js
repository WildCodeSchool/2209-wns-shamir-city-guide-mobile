import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

function MapInput(props){
    return (

        <GooglePlacesAutocomplete
            placeholder ='Search'
            minLength={2} // minimum length of text to search
            listViewDisplayed={false}    // true/false/undefined
            fetchDetails={true}
            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
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
}
export default MapInput;