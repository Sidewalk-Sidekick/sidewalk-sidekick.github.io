import '../ui/SectionHeader.css';

const SectionHeader = (props) => {
  return <header className='section-header'>{props.children}</header>;
};

export default SectionHeader;
