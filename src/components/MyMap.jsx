import { useState } from 'react';

import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { Camps } from './camps/Camps';
import { Tracks } from './tracks/Tracks';
import { MapControls } from './map-controls/MapControls';

import style from './MyMap.module.css';

const LocationMarker = () => {
  useMapEvents({
    click(e) {
      console.log('click e', e.latlng);
    },
  });
  return null;
}

export const MyMap = () => {
  const [showCamps, setShowCamps] = useState(true);
  const [showTracks, setShowTracks] = useState(true);
  return (
    <div className={style.wrapper}>
      <h1>Our John Muir Trail Experience</h1>
      <MapControls
        showCamps={showCamps}
        setShowCamps={setShowCamps}
        showTracks={showTracks}
        setShowTracks={setShowTracks}
      />
      <MapContainer
        className={style.map}
        center={[37.33079, -118.81027]}
        zoom={9}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <LocationMarker />
        {showCamps && <Camps />}
        {showTracks && <Tracks />}        
      </MapContainer>
    </div>
  );
};
