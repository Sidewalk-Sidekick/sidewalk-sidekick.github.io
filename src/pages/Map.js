import SecondaryHeader from '../components/SecondaryHeader';
import MapboxMapPreview from '../components/MapboxMapPreview';
import '../ui/Map.css';

const Map = () => {
  return (
    <div className='map-page'>
      <SecondaryHeader />
      <MapboxMapPreview />
    </div>
  );
};

export default Map;
