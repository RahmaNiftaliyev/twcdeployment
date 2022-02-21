import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const GoogleMapLoader = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geolocation',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={18} defaultCenter={{ lat: 40.37823, lng: 49.87535 }}>
    {props.isMarkerShown && <Marker position={{ lat: 40.37823, lng: 49.87535 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
));

export default GoogleMapLoader;
