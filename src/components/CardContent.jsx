const CardContent = (props, { className }) => {
  return (
    <div className={`card-content ${props.className}`}>{props.children}</div>
  );
};

export default CardContent;
