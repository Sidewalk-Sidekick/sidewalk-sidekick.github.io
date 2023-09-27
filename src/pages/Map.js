import SecondaryHeader from '../components/SecondaryHeader';
import MapboxMap from '../components/MapboxMap';
import '../ui/Map.css';

const Map = () => {
  return (
    <div className='map-page'>
      <SecondaryHeader />
      <MapboxMap />
    </div>
  );
};

export default Map;
