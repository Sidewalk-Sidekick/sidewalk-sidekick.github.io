import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionHeading from './SectionHeading';
import SectionTextBox from './SectionTextBox';
import SectionText from './SectionText';
import SectionContent from './SectionContent';
import SectionMedia from './SectionMedia';
import '../ui/OurStory.css';
import Cards from '../components/Cards';
import Card from '../components/Card';
import CardMedia from '../components/CardMedia';
import CardTextBox from '../components/CardTextBox';
import CardText from '../components/CardText';

const OurStory = () => {
  return (
    <Section className='our-story'>
      <SectionHeader>
        <SectionHeading title='Our Story' />
      </SectionHeader>
      <SectionContent className='container'>
        <Cards>
          <Card>
            <CardMedia>
              <img
                src='./awardsPhoto.jpeg'
                alt='Photo of the team from GiveBackHack Columbus 2022'
              />
            </CardMedia>
            <CardTextBox>
              <CardText>
                Conceived between friends passionate about the viability of
                walkable communities, Sidewalk Sidekick was the winning pitch of
                GiveBackHack Columbus 2022.
              </CardText>
            </CardTextBox>
          </Card>
          <Card>
            <CardTextBox>
              <CardText>
                Composed of a healthy mix of developers, designers, and product
                growth researchers, we’re a small team committed to making
                alternative forms of travel safe, accessible, and viable.
              </CardText>
            </CardTextBox>
            <CardMedia>
              <img
                src='./groupPhotoTeam.jpg'
                alt='Photo of the team from GiveBackHack Columbus 2022'
              />
            </CardMedia>
          </Card>
          <Card>
            <CardMedia>
              <img
                src='./groupPhotoGBH.jpg'
                alt='Photo of the team from GiveBackHack Columbus 2022'
              />
            </CardMedia>
            <CardTextBox>
              <CardText>
                Join us April 8, 2023 at 12:00 PM for our first user test event,
                hosted at COhatch The Gateway. Each applicant (limit 50) will
                receive a $20 Amazon gift card and pizza!
              </CardText>
              <a href='#' className='btn btn-dark'>
                Sign up to be a tester
              </a>
            </CardTextBox>
          </Card>
        </Cards>
      </SectionContent>
    </Section>
  );
};

export default OurStory;
