import React from 'react';
import Map from './components/Map';
import logo from './logo.svg';
import './App.css';

function App() {
  let api_key = process.env.MAPS_API_KEY, map_url = "https://maps.googleapis.com/maps/api/js?" + api_key + "&v=3.exp&libraries=geometry,drawing,places"
  return (
    <div className="App">
      <Map
        isMarkerShown
        googleMapURL={map_url}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
