import { useState, useEffect } from 'react';
import * as React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Cards from './Cards';
import Card from './Card';
import CardMedia from './CardMedia';
import CardTextBox from './CardTextBox';
import CardHeader from './CardHeader';
import CardText from './CardText';
import CardHeading from './CardHeading';
import '../ui/MapPreview.css';
import { Link } from 'react-router-dom';
import MapboxMapPreview from './MapboxMap';

const MapPreview = () => {
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
    <section className='section map-preview'>
      <div className='section-content container'>
        <Card>
          <CardMedia>
            <MapboxMapPreview />
          </CardMedia>
          <CardTextBox>
            <CardHeader>
              <CardHeading>
                <h3>Sidewalk Issues Map</h3>
              </CardHeading>
            </CardHeader>
            <CardText>
              Discover what sidewalk related issues exist in your community
              through our live map of crowd-sourced data!
            </CardText>
            <Link to='/map' className='btn btn-dark'>
              View full map
            </Link>
            <Link to='/businesses' className='btn btn-dark'>
              businesses
            </Link>
          </CardTextBox>
        </Card>
      </div>
    </section>
  );
};

export default MapPreview;
