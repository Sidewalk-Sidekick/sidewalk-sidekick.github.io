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
        <Cards className='grid grid-3-cols'>
          <Card>
            <CardMedia>
              <img src='https://dummyimage.com/600x400/cccccc/ffffff' alt='' />
            </CardMedia>
            <CardHeader>
              <CardHeading title='H3 Heading' />
            </CardHeader>
            <CardContent>
              <CardTextBox>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus ipsa eius aut assumenda voluptas aperiam placeat?
                  Vel autem accusantium, hic officia eligendi sed enim similique
                  rem nostrum dolor esse exercitationem?
                </CardText>
              </CardTextBox>
            </CardContent>
          </Card>
          <Card>
            <CardMedia>
              <img src='https://dummyimage.com/600x400/cccccc/ffffff' alt='' />
            </CardMedia>
            <CardHeader>
              <CardHeading title='H3 Heading' />
            </CardHeader>
            <CardContent>
              <CardTextBox>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, magnam cumque voluptas, tenetur doloremque ab veniam
                  officiis ut totam ullam alias nobis quas consectetur. Cumque
                  sit quam architecto aspernatur dolor.
                </CardText>
              </CardTextBox>
            </CardContent>
          </Card>
          <Card>
            <CardMedia>
              <img src='https://dummyimage.com/600x400/cccccc/ffffff' alt='' />
            </CardMedia>
            <CardHeader>
              <CardHeading title='H3 Heading' />
            </CardHeader>
            <CardContent>
              <CardTextBox>
                <CardText>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                  velit voluptate reprehenderit dolores alias autem minus, iure
                  necessitatibus commodi ut debitis esse quisquam natus.
                  Architecto perspiciatis animi repudiandae? Officiis,
                  exercitationem?
                </CardText>
              </CardTextBox>
            </CardContent>
          </Card>
        </Cards>
      </SectionContent>
    </Section>
  );
};

export default Why;
