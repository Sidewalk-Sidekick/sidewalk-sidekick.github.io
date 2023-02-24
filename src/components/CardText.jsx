import '../ui/CardText.css';

const CardText = (props, { className }) => {
  return <p className={`card-text ${props.className}`}>{props.children}</p>;
};

export default CardText;
