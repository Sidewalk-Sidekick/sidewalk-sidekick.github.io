import '../ui/SectionTextBox.css';

const SectionTextBox = (props, { className }) => {
  return (
    <div className={`section-text-box ${props.className}`}>
      {props.children}
    </div>
  );
};

export default SectionTextBox;
