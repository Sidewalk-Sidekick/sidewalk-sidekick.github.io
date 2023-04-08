import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionHeading from './SectionHeading';
import SectionTextBox from './SectionTextBox';
import SectionText from './SectionText';
import SectionContent from './SectionContent';
import '../ui/GetInvolved.css';

const GetInvolved = () => {
  return (
    <Section className='get-involved'>
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
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSf1LO2Q5exb2EGDDsReZuHsGU-t3hM0_HsunZQu3Fb0GKctNA/viewform'
            target='_blank'
            className='btn btn-dark'
          >
            Sign up to be a tester
          </a>
        </SectionTextBox>
      </SectionContent>
    </Section>
  );
};

export default GetInvolved;
