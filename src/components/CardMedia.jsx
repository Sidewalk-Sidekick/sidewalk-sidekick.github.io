const CardMedia = (props, { className }) => {
  return (
    <div className={`card-media ${props.className}`}>{props.children}</div>
  );
};

export default CardMedia;
