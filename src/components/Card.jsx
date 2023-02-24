const Card = (props, { className }) => {
  return (
    <article className={`card ${props.className}`}>{props.children}</article>
  );
};

export default Card;
