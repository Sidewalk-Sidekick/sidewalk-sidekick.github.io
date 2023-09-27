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
import Section from './Section';
import SectionContent from './SectionContent';

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
    <Section className='section data'>
      <SectionContent className='container'>
        <Cards>
          <Card>
            <CardMedia>
              <a href='/map'>
                <img src='./sidewalk-sidekick-mapbox-map-img.png' alt='' />
              </a>
            </CardMedia>
            <CardTextBox>
              <CardHeader>
                <CardHeading>
                  <h2>Data at a Glance</h2>
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
      </SectionContent>
    </Section>
  );
};

export default Data;
