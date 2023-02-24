import '../ui/Cards.css';

const Cards = (props, { className }) => {
  return (
    <section className={`cards ${props.className}`}>{props.children}</section>
  );
};

export default Cards;
