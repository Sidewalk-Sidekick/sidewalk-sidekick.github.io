import { FaExternalLinkAlt } from 'react-icons/fa';

const ExternalButton = ({ title }, { className }) => {
  return (
    <a
      href='http://localhost:3000/'
      target='_blank'
      className={`btn ${className}`}
    >
      <FaExternalLinkAlt /> {title}
    </a>
  );
};

export default ExternalButton;
