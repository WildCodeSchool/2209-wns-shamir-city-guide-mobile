import React from 'react';
import { View } from 'react-native';
import MapInput from './mapInput';
import MyMapView from './mapView';
import { getLocation } from './locationService';

interface State {
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
}

class MapContainer extends React.Component<{}, State> {
  state = {
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    },
  };

  componentDidMount() {
    this.getInitialState();
  }

  getInitialState = async () => {
    const data: any = await getLocation();
    this.setState({
      region: {
        latitude: data.latitude,
        longitude: data.longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      },
    });
  };

  getCoordsFromName = (loc: { lat: number; lng: number }) => {
    this.setState({
      region: {
        latitude: loc.lat,
        longitude: loc.lng,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      },
    });
  };

  onMapRegionChange = (region: State['region']) => {
    this.setState({ region });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <MapInput
            notifyChange={(loc) => this.getCoordsFromName(loc)}
          />
        </View>

        {this.state.region.latitude ? (
          <View style={{ flex: 1 }}>
            <MyMapView
              region={this.state.region}
              onRegionChange={(reg) => this.onMapRegionChange(reg)}
            />
          </View>
        ) : null}
      </View>
    );
  }
}

export default MapContainer;
