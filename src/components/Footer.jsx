import '../ui/Footer.css';

const Footer = (props, { className }) => {
  return <footer className={`footer ${props.className}`}>{props.children}</footer>;
};

export default Footer;
