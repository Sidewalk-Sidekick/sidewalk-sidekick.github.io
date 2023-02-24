import '../ui/SectionHeader.css';

const SectionHeader = (props, { className }) => {
  return (
    <header className={`section-header ${props.className}`}>
      {props.children}
    </header>
  );
};

export default SectionHeader;
