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

const HowItWorks = () => {
  return (
    <Section className='how-it-works'>
      <SectionHeader>
        <SectionHeading title='How It Works' />
      </SectionHeader>
      <SectionContent className='container'>
        <Cards className='grid grid-4-cols'>
          <Card>
            <CardMedia>
              <img src='mockup-img-1.svg' alt='' />
            </CardMedia>
            <CardTextBox>
              <CardHeader>
                <h3 className='card-heading'>Look up a destination</h3>
              </CardHeader>
              <CardText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                at architecto eveniet culpa corrupti.
              </CardText>
            </CardTextBox>
          </Card>
          <Card>
            <CardMedia>
              <img src='mockup-img-2.svg' alt='' />
            </CardMedia>
            <CardTextBox>
              <CardHeader>
                <h3 className='card-heading'>
                  Get a route for pedestrian travel
                </h3>
              </CardHeader>
              <CardText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                at architecto eveniet culpa corrupti.
              </CardText>
            </CardTextBox>
          </Card>
          <Card>
            <CardMedia>
              <img src='mockup-img-3.svg' alt='' />
            </CardMedia>
            <CardTextBox>
              <CardHeader>
                <h3 className='card-heading'>
                  Report issues you find on your way
                </h3>
              </CardHeader>
              <CardText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                at architecto eveniet culpa corrupti.
              </CardText>
            </CardTextBox>
          </Card>
          <Card>
            <CardMedia>
              <img src='mockup-img-4.svg' alt='' />
            </CardMedia>
            <CardTextBox>
              <CardHeader>
                <h3 className='card-heading'>
                  Arrive safely at your destination!
                </h3>
              </CardHeader>
              <CardText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                at architecto eveniet culpa corrupti.
              </CardText>
            </CardTextBox>
          </Card>
        </Cards>
      </SectionContent>
    </Section>
  );
};

export default HowItWorks;
