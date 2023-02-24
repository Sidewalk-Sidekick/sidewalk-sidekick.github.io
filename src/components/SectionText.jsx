import '../ui/SectionText.css';

const SectionText = (props, { className }) => {
  return <p className={`section-text ${props.className}`}>{props.children}</p>;
};

export default SectionText;
