import { Marker, Popup } from 'react-leaflet';

/**
 * @param {object} props
 * @param {number[]} props.position - [lat, lng]
 * @param {string} props.popupContent
 * @returns {React.JSX.Element}
 */
export const CampMarker = ({ position, popupContent }) => {
  return (
    <Marker position={position}>
      <Popup>{popupContent}</Popup>
    </Marker>
  );
};
