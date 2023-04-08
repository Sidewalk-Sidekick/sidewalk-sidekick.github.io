import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionHeading from './SectionHeading';
import SectionTextBox from './SectionTextBox';
import SectionText from './SectionText';
import SectionContent from './SectionContent';
import '../ui/CTA.css';

const CTA = () => {
  return (
    <Section className='cta'>
      <SectionHeader>
        <SectionHeading title='Get Involved' />
      </SectionHeader>
      <SectionContent className='container'>
        <SectionTextBox>
          <SectionText>
            Join us April 8, 2023 at 12:00 PM for our first user test event,
            hosted at COhatch The Gateway. Up to 50 applicants will be selected
            for this round and will receive a $20 Amazon gift card and pizza!
          </SectionText>
          <a href='#' className='btn btn-dark'>
            Sign up to be a tester
          </a>
        </SectionTextBox>
      </SectionContent>
    </Section>
  );
};

export default CTA;
