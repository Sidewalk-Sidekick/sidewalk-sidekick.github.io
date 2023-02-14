import '../ui/SectionHeader.css';
import SectionHeading from '../components/SectionHeading';

const SectionHeader = (props) => {
  return <header className='section-header'>{props.children}</header>;
};

export default SectionHeader;
