import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionHeading from './SectionHeading';
import SectionContent from './SectionContent';
import Cards from './Cards';
import Card from './Card';
import CardHeader from '../components/CardHeader';
import '../ui/GetInvolved.css';
import CardText from '../components/CardText';
import CardTextBox from '../components/CardTextBox';

const GetInvolved = () => {
  return (
    <Section className='get-involved' id='get-involved'>
      <SectionHeader>
        <SectionHeading title='Get Involved' />
      </SectionHeader>
      <SectionContent className='container'>
        <Cards>
          <Card>
            <CardTextBox>
              <CardHeader>
                <h3 className='card-heading'>Canvassing Events</h3>
              </CardHeader>
              <CardText>
                Join us May 20, 2023 at 12:00 PM for our second user test event,
                hosted at COhatch The Gateway.
              </CardText>
              <a
                href='https://www.meetup.com/sidewalk-sidekick-community/events/292850129/'
                target='_blank'
                rel='noreferrer'
                className='btn btn-dark'
              >
                RSVP on our Meetup
              </a>
            </CardTextBox>
          </Card>
          <Card>
            <CardTextBox>
              <CardHeader>
                <h3 className='card-heading'>Sidewalk Stories</h3>
              </CardHeader>
              <CardText>
                Have you ever had trouble navigating your community without a
                car? We'd love to hear from you!
              </CardText>
              <a
                href='mailto:info@sidewalksidekick.com'
                className='btn btn-dark'
              >
                Share your story
              </a>
            </CardTextBox>
          </Card>
        </Cards>
      </SectionContent>
    </Section>
  );
};

export default GetInvolved;
