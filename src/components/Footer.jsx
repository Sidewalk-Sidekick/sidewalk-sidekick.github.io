import FooterNav from './FooterNav';
import { FaArrowUp } from 'react-icons/fa';
import '../ui/Footer.css';
import Section from '../components/Section';
import SectionContent from './SectionContent';
import SectionTextBox from '../components/SectionTextBox';
import SectionText from '../components/SectionText';

const Footer = () => {
  return (
    <footer className='footer'>
      <Section>
        <SectionContent className='container'>
          <SectionTextBox>
            <SectionText>
              <b>Sidewalk Sidekick LLC</b>
            </SectionText>
            <SectionText>© 2024 All Rights Reserved</SectionText>
            <FooterNav />
          </SectionTextBox>
          <SectionTextBox>
            <ul>
              <li>
                <a href='#'>
                  Back to Top <FaArrowUp />
                </a>
              </li>
            </ul>
          </SectionTextBox>
        </SectionContent>
      </Section>
    </footer>
  );
};

export default Footer;
