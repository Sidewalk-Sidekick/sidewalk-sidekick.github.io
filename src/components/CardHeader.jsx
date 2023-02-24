import '../ui/CardHeader.css';

const CardHeader = (props, { className }) => {
  return (
    <header className={`card-header ${props.className}`}>
      {props.children}
    </header>
  );
};

export default CardHeader;
