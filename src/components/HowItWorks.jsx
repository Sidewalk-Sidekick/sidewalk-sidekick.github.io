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
import '../ui/HowItWorks.css';

const HowItWorks = () => {
  return (
    <Section className='how-it-works'>
      <SectionHeader>
        <SectionHeading title='How It Works' />
      </SectionHeader>
      <SectionContent className='container'>
        <Cards className='grid grid-4-cols'>
          <Card>
            <CardHeader>
              <h3 className='card-heading'>1</h3>
            </CardHeader>
            <CardContent>
              <CardTextBox>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </CardText>
              </CardTextBox>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h3 className='card-heading'>2</h3>
            </CardHeader>
            <CardContent>
              <CardTextBox>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </CardText>
              </CardTextBox>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h3 className='card-heading'>3</h3>
            </CardHeader>
            <CardContent>
              <CardTextBox>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </CardText>
              </CardTextBox>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h3 className='card-heading'>4</h3>
            </CardHeader>
            <CardContent>
              <CardTextBox>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </CardText>
              </CardTextBox>
            </CardContent>
          </Card>
        </Cards>
      </SectionContent>
    </Section>
  );
};

export default HowItWorks;
