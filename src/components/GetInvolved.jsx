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
                href='https://sidewalksidekick.us10.list-manage.com/subscribe?u=484ee6de7a7b40e3434d90174&id=5969a34fe7'
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
                href='https://forms.gle/xnq9qyFMTHZpqr148'
                target='_blank'
                className='btn btn-dark'
              >
                Share your Story
              </a>
            </CardTextBox>
          </Card>
        </Cards>
      </SectionContent>
    </Section>
  );
};

export default GetInvolved;
