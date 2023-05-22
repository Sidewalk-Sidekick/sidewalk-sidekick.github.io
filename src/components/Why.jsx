import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionHeading from './SectionHeading';
import SectionContent from './SectionContent';
import Cards from './Cards';
import Card from './Card';
import CardHeader from './CardHeader';
import CardHeading from './CardHeading';
import CardContent from './CardContent';
import CardTextBox from './CardTextBox';
import CardText from './CardText';
import CardMedia from './CardMedia';
import '../ui/Why.css';

const Why = () => {
  return (
    <Section className='why'>
      <SectionHeader>
        <SectionHeading title='Why Sidewalk Sidekick' />
      </SectionHeader>
      <SectionContent className='container'>
        <Cards>
          <Card>
            <CardMedia>
              <img src='../../walking.jpeg' alt='' />
            </CardMedia>
            <CardHeader>
              <h3 className='card-heading'>
                Boosts your overall mental and physical health
              </h3>
            </CardHeader>
          </Card>
          <Card>
            <CardMedia>
              <img src='accessibility.jpeg' alt='' />
            </CardMedia>
            <CardHeader>
              <h3 className='card-heading'>Improves accessibility</h3>
            </CardHeader>
          </Card>
          <Card>
            <CardMedia>
              <img src='alt-transportation.jpeg' alt='' />
            </CardMedia>
            <CardHeader>
              <h3 className='card-heading'>
                Encourages alternative forms of travel
              </h3>
            </CardHeader>
          </Card>
        </Cards>
      </SectionContent>
    </Section>
  );
};

export default Why;
