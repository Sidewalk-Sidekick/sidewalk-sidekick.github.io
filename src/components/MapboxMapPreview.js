import { useState, useEffect } from 'react';
import * as React from 'react';
import Map, { Marker, NavigationControl, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import PlaceIcon from '@mui/icons-material/FmdBadTwoTone';
import Issues from '../issues.json';
import '../ui/MapboxMap.css';

const MapboxMapPreview = () => {
  const [pins, setPins] = useState([]);
  const [viewport, setViewport] = useState({
    longitude: 39.994661737585325,
    latitude: -83.00715713180998,
    zoom: 12,
  });

  const [currentPlaceId, setCurrentPlaceId] = useState(null);

  const handleMarkerClick = (id, latitude, longitude) => {
    setCurrentPlaceId(id);
  };

  return (
    <div className='mapContainer'>
      <Map
        container={'map'}
        projection={'globe'}
        initialViewState={{ setViewport }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        style={{ width: '100%', height: '100vh' }}
        mapStyle='mapbox://styles/sidewalk-sidekick/clh17gluf013801pa0ozl95g8'
        scrollZoom={false}
      >
        <NavigationControl />

        {Issues.map((pin) => (
          <>
            <Marker
              longitude={pin.longitude}
              latitude={pin.latitude}
              anchor='center'
            >
              <PlaceIcon
                className='pinIcon'
                onClick={() =>
                  handleMarkerClick(pin.image_uri, pin.latitude, pin.longitude)
                }
                //Style => If current user make the pinIcon color different
                style={{
                  fontSize: viewport.zoom * 2,
                  color: 'orangered',
                }}
              />
            </Marker>
            {pin.image_uri === currentPlaceId && (
              <Popup
                longitude={pin.longitude}
                latitude={pin.latitude}
                closeOnClick={false}
                closeOnMove={false}
                onClose={() => setCurrentPlaceId(false)}
                anchor='left'
              >
                <div className='popupCard'>
                  <div className='popupCardContent'>
                    <div className='popupCardTextBox'>
                      <h1 className='popupCardTextBoxHeading'>Location</h1>
                      <ul className='popupCardCoordinates'>
                        <li className='coordinate'>{pin.latitude}</li>
                        <li className='coordinate'>{pin.longitude}</li>
                      </ul>
                    </div>
                    <div className='popupCardTextBox'>
                      <h2 className='popupCardTextBoxHeading'>Issue Type(s)</h2>
                      <ul className='popupCardIssues'>
                        {pin.tags.map((tag) => (
                          <li className='issue'>{tag.name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Popup>
            )}
          </>
        ))}
      </Map>
    </div>
  );
};

export default MapboxMapPreview;
