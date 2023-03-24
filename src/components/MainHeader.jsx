import MainNav from '../components/MainNav';
import MainNavMenu from '../components/MainNavMenu';
import '../ui/MainHeader.css';

const MainHeader = (props) => {
  return (
    <header className='main-header'>
      <MainNav className='container'>
        <MainNavMenu />
      </MainNav>
    </header>
  );
};

export default MainHeader;
