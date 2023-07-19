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
                <h3 className='card-heading'>Stay Informed!</h3>
              </CardHeader>
              <CardText>
                Stay informed of our teams progress! Click below and sign up to
                our newsletter using your email address!
              </CardText>
              <a
                href='https://forms.gle/scpT1aWDRyRF2R3C9'
                target='_blank'
                className='btn btn-dark'
              >
                Newsletter Sign Up
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
