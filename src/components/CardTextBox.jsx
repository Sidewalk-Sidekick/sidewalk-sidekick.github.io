import '../ui/CardTextBox.css';

const CardTextBox = (props) => {
  return <div className='card-text-box'>{props.children}</div>;
};

export default CardTextBox;