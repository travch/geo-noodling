import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-gpx';

export const GpxLayer = ({ gpxData, options }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) {
      return;
    };

    const gpx = new L.GPX(gpxData, {
      markers: {
        startIcon: null,
        endIcon: null,
      },
    });

    gpx.addTo(map);
    gpx.on('loaded', function(e) {
      map.fitBounds(e.target.getBounds());
    });

    return () => {
      map.removeLayer(gpx);
    };
  }, [map, gpxData, options]);

  return null;
};

