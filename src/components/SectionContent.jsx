const SectionContent = (props, { className }) => {
  return (
    <div className={`section-content ${props.className}`}>{props.children}</div>
  );
};

export default SectionContent;
