import { FaExternalLinkAlt } from 'react-icons/fa';

const SignUp = ({ title }) => {
  return (
    <a
      href='https://docs.google.com/forms/d/e/1FAIpQLSf1LO2Q5exb2EGDDsReZuHsGU-t3hM0_HsunZQu3Fb0GKctNA/viewform'
      target='_blank'
      className='btn btn-light'
    >
      <FaExternalLinkAlt /> {title}
    </a>
  );
};

export default SignUp;
