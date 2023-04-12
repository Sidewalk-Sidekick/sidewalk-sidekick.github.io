import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionHeading from './SectionHeading';
import SectionContent from './SectionContent';
import Cards from './Cards';
import Card from './Card';
import CardMedia from '../components/CardMedia';
import CardHeader from '../components/CardHeader';
import '../ui/HowItWorks.css';
import CardText from '../components/CardText';
import CardTextBox from '../components/CardTextBox';

const HowItWorks = (ref) => {
  return (
    <Section className='how-it-works' id='how-it-works'>
      <SectionHeader>
        <SectionHeading title='How It Works' />
      </SectionHeader>
      <SectionContent className='container'>
        <Cards>
          <Card>
            <CardMedia>
              <img
                src='mockup-img-1.png'
                alt='User entering a destination using Sidewalk Sidekick app'
              />
            </CardMedia>
            <CardTextBox>
              <CardHeader>
                <h3 className='card-heading'>Look up a destination</h3>
              </CardHeader>
              <CardText>
                Search for walkable routes in your surrounding area.
              </CardText>
            </CardTextBox>
          </Card>
          <Card>
            <CardMedia>
              <img
                src='mockup-img-2.png'
                alt='Sidewalk Sidekick app creating a walkable route for user'
              />
            </CardMedia>
            <CardTextBox>
              <CardHeader>
                <h3 className='card-heading'>
                  Get a route for pedestrian travel
                </h3>
              </CardHeader>
              <CardText>
                Sidewalk Sidekick will recommend convenient routes to get you
                from Point A to Point B.
              </CardText>
            </CardTextBox>
          </Card>
          <Card>
            <CardMedia>
              <img
                src='mockup-img-3.png'
                alt='User reporting issues found on route using Sidewalk Sidekick app'
              />
            </CardMedia>
            <CardTextBox>
              <CardHeader>
                <h3 className='card-heading'>
                  Report issues you find on your way
                </h3>
              </CardHeader>
              <CardText>
                Let the community know about issues such as obstacles and
                construction through real time reporting.
              </CardText>
            </CardTextBox>
          </Card>
          <Card>
            <CardMedia>
              <img
                src='mockup-img-4.png'
                alt='User arriving safely at the destination'
              />
            </CardMedia>
            <CardTextBox>
              <CardHeader>
                <h3 className='card-heading'>
                  Arrive safely at your destination!
                </h3>
              </CardHeader>
              <CardText>
                Sidewalk Sidekick takes the worry out of pedestrian travel so
                you can arrive safely.
              </CardText>
            </CardTextBox>
          </Card>
        </Cards>
      </SectionContent>
    </Section>
  );
};

export default HowItWorks;
