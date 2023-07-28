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
import '../ui/Data.css';
import { Link } from 'react-router-dom';
import MapboxMap from './MapboxMap';

const Data = () => {
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
    <section className='section data'>
      <div className='section-content container'>
        <Cards>
          <Card>
            <CardMedia>
              <a href='wheelchair-accessible-businesses'>
                <img
                  src='https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80'
                  alt=''
                />
              </a>
            </CardMedia>
            <CardTextBox>
              <CardHeader>
                <CardHeading>
                  <h3>Wheelchair Accessible Businesses</h3>
                </CardHeading>
              </CardHeader>
              <CardText>
                Browse our curated lists of wheelchair accessible businesses in
                Columbus, Ohio.
              </CardText>
              <Link
                to='/wheelchair-accessible-businesses'
                className='btn btn-dark'
              >
                View lists
              </Link>
            </CardTextBox>
          </Card>
          <Card>
            <CardMedia>
              <a href='/map'>
                <img src='./sidewalk-sidekick-mapbox-map-img.png' alt='' />
              </a>
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
                View map
              </Link>
            </CardTextBox>
          </Card>
        </Cards>
      </div>
    </section>
  );
};

export default Data;
