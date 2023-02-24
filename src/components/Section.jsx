import '../ui/Section.css';

const Section = (props, { className }) => {
  return (
    <section className={`section ${props.className}`}>{props.children}</section>
  );
};

export default Section;
