import { useState } from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import countries from '../data/countries.json';

import style from './MyMap.module.css';

export const MyMap = () => {
  return (
    <div className={style.wrapper}>
      <h1>My Map</h1>
      <MapContainer
        className={style.map}
        center={[20, 100]}
        zoom={2}
      >
        <GeoJSON
          data={countries.features}
        />
      </MapContainer>
    </div>
  );
};
