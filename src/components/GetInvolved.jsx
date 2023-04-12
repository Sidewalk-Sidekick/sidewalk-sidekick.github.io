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
            Join us May 20, 2023 at 12:00 PM for our second user test event,
            hosted at COhatch The Gateway. Up to 50 applicants will be selected
            for this round and will receive a $20 Amazon gift card and pizza!
          </SectionText>
          <a
            href='https://www.meetup.com/sidewalk-sidekick-community/events/292850129/'
            target='_blank'
            className='btn btn-dark'
          >
            RSVP on our Meetup
          </a>
        </SectionTextBox>
      </SectionContent>
    </Section>
  );
};

export default GetInvolved;
