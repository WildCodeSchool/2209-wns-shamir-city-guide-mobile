import MapView, { Marker, Polyline } from 'react-native-maps';
import { View, Text } from 'react-native';
import { MapViewProps } from 'react-native-maps';

interface Point {
    id: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
}

interface Props {
    points: Point[];
}

const MapWithPoints: React.FC<Props & MapViewProps> = ({ points, ...props }) => {
    return (
        <MapView {...props}>
            {points.map((point) => (
                <Marker
                    key={point.id}
                    coordinate={{
                        latitude: point.latitude,
                        longitude: point.longitude,
                    }}
                    title={point.title}
                    description={point.description}
                />
            ))}
            <Polyline
            coordinates={points.map((point) => ({
                latitude: point.latitude,
                longitude: point.longitude
            }))}
            strokeColor="#000"
            strokeWidth={3}
        />
    </MapView>
);
};

export default MapWithPoints;