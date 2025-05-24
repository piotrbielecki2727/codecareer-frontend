'use client';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useEffect, useRef } from 'react';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src || markerIcon2x,
  iconUrl: markerIcon.src || markerIcon,
  shadowUrl: markerShadow.src || markerShadow,
});

type Props = {
  lat: number;
  lon: number;
  key?: string;
};

export const GeoMap = ({ lat, lon }: Props) => {
  const mapRef = useRef<L.Map>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([lat, lon], 15);
    }
  }, [lat, lon]);

  return (
    <MapContainer
      center={[lat, lon]}
      zoom={15}
      style={{ height: 500, width: '100%', borderRadius: 8 }}
      scrollWheelZoom={true}
      ref={mapRef}
    >
      <TileLayer
        url={`https://maps.geoapify.com/v1/tile/carto/{z}/{x}/{y}.png?&apiKey=6503889e85f243749b939746a94f2f74`}
        attribution='© Geoapify'
      />
      <Marker position={[lat, lon]} />
    </MapContainer>
  );
};
