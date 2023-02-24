const SectionMedia = (props, { className }) => {
  return (
    <div className={`section-media ${props.className}`}>{props.children}</div>
  );
};

export default SectionMedia;
