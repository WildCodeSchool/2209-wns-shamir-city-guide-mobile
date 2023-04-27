import React, {useState} from 'react';
import {ActivityIndicator, Alert, View} from 'react-native';
import MapInput from './mapInput';
import MyMapView from './mapView';
import { getLocation } from './locationService';
import {gql, useQuery} from "@apollo/client";
const GET_ALL_POI = gql`
query GetAllPoi {
  getAllPoi {
    address
    city {
      id
      name
    }
    latitude
    longitude
    name
    picture
  }
}`

interface State {
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
}


const MapContainer = () => {
    const [state, setState] = useState<State>({
        region: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0,
        }
    });
const [pointsOfInterest, setPointsOfInterest] = useState<any[]>([]);

 const componentDidMount = async () => {
    await getInitialState();
  }

const  getInitialState = async () => {
    const data: any = await getLocation();
    setState({
      region: {
        latitude: data.latitude,
        longitude: data.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      },
    });
  };
  const {loading : getAllPoiLoading , error : getAllPoiError} = useQuery(GET_ALL_POI,{
    onCompleted: (data) => {
      setPointsOfInterest(data.getAllPoi)
    }
  } );
    if (getAllPoiLoading) return <ActivityIndicator />;
    // if (getAllPoiError) return Alert.alert('Pas de POI trouvés',`${getAllPoiError.message}`, [
    //     {
    //         text: 'Fermer',
    //         onPress: () => {}
    //     }
    // ]);;

console.warn(pointsOfInterest)

  const getCoordsFromName = (loc: { lat: number; lng: number }) => {
    setState({
      region: {
        latitude: loc.lat,
        longitude: loc.lng,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      },
    });
  };

  const onMapRegionChange = (region: State['region']) => {
    setState({ region });
  };

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <MapInput
            notifyChange={(loc) => getCoordsFromName(loc)}
          />
        </View>

        {state.region.latitude ? (
          <View style={{ flex: 1 }}>
            <MyMapView
              region={state.region}
              onRegionChange={(reg) => onMapRegionChange(reg)}
            />
          </View>
        ) : null}
      </View>
    );
  }

export default MapContainer;
