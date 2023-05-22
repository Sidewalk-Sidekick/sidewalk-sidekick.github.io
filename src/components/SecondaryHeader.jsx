import SecondaryNav from '../components/SecondaryNav';
import SecondaryNavMenu from '../components/SecondaryNavMenu';
import '../ui/SecondaryHeader.css';

const SecondaryHeader = (props) => {
  return (
    <header className='main-header'>
      <SecondaryNav className='container'>
        <SecondaryNavMenu />
      </SecondaryNav>
    </header>
  );
};

export default SecondaryHeader;
