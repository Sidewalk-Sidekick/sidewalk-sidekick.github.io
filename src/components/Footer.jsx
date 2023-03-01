import '../ui/Footer.css';

const Footer = (props, { className }) => {
  return <nav className={`footer ${props.className}`}>{props.children}</nav>;
};

export default Footer;
