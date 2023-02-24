import '../ui/CardTextBox.css';

const CardTextBox = (props, { className }) => {
  return (
    <div className={`card-text-box ${props.className}`}>{props.children}</div>
  );
};

export default CardTextBox;
