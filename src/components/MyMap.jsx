import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { campCoords } from '../constants/marker-coords';
import { CampMarker } from './CampMarker';
import { Tracks } from './Tracks';
import { GpxLayer } from './GPX';
import gpxDay1 from '../data/tracks/day1.gpx';

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
  return (
    <div className={style.wrapper}>
      <h1>Our John Muir Trail Experience</h1>
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
        <CampMarker
          popupContent='Night 0'
          position={campCoords.night0}
        />
        <CampMarker
          popupContent='Night 1'
          position={campCoords.night1}
        />
        <CampMarker
          popupContent='Night 2'
          position={campCoords.night2}
        />
        <CampMarker
          popupContent='Night 3'
          position={campCoords.night3}
        />
        <CampMarker
          popupContent='Night 4'
          position={campCoords.night4}
        />
        <CampMarker
          popupContent='Night 5'
          position={campCoords.night5}
        />
        <CampMarker
          popupContent='Night 6'
          position={campCoords.night6}
        />
        <CampMarker
          popupContent='Night 7'
          position={campCoords.night7}
        />
        <CampMarker
          popupContent='Night 8'
          position={campCoords.night8}
        />
        <CampMarker
          popupContent='Night 9'
          position={campCoords.night9}
        />
        <CampMarker
          popupContent='Night 10'
          position={campCoords.night10}
        />
        <CampMarker
          popupContent='Night 11'
          position={campCoords.night11}
        />
        <CampMarker
          popupContent='Night 12'
          position={campCoords.night12}
        />
        <CampMarker
          popupContent='Night 13'
          position={campCoords.night13}
        />
        <CampMarker
          popupContent='Night 14'
          position={campCoords.night14}
        />
        <CampMarker
          popupContent='Night 15'
          position={campCoords.night15}
        />
        <CampMarker
          popupContent='Night 16'
          position={campCoords.night16}
        />
        <CampMarker
          popupContent='Night 17'
          position={campCoords.night17}
        />
        <CampMarker
          popupContent='Night 18'
          position={campCoords.night18}
        />
        <CampMarker
          popupContent='Night 19'
          position={campCoords.night19}
        />
        <CampMarker
          popupContent='Night 20'
          position={campCoords.night20}
        />
        <CampMarker
          popupContent='Night 21'
          position={campCoords.night21}
        />
        <CampMarker
          popupContent='Night 22'
          position={campCoords.night22}
        />
        <Tracks />
      </MapContainer>
    </div>
  );
};
