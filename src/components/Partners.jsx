import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionHeading from './SectionHeading';
import SectionTextBox from './SectionTextBox';
import SectionText from './SectionText';
import SectionContent from './SectionContent';
import '../ui/Partners.css';
import Cards from './Cards';
import Card from './Card';
import CardContent from './CardContent';
import CardMedia from './CardMedia';

const Partners = () => {
  return (
    <Section className='partners'>
      <SectionHeader>
        <SectionHeading title='Partnerships' />
      </SectionHeader>
      <SectionContent className='container'>
        <SectionTextBox>
          <SectionText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            voluptatibus harum laborum quae quia et voluptatum consectetur
            consequatur laboriosam tempora, minima doloremque quibusdam cum
            atque quod modi laudantium officia fugiat!
          </SectionText>
        </SectionTextBox>
        <Cards className='grid grid-4-cols'>
          <Card>
            <CardContent>
              <CardMedia>
                <img
                  src='https://dummyimage.com//250x250/ddddddffffff'
                  alt='logo'
                />
              </CardMedia>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardMedia>
                <img
                  src='https://dummyimage.com//250x250/ddddddffffff'
                  alt='logo'
                />
              </CardMedia>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardMedia>
                <img
                  src='https://dummyimage.com//250x250/ddddddffffff'
                  alt='logo'
                />
              </CardMedia>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardMedia>
                <img
                  src='https://dummyimage.com//250x250/ddddddffffff'
                  alt='logo'
                />
              </CardMedia>
            </CardContent>
          </Card>
        </Cards>
        <a href='http://localhost:3000/' className='btn btn-dark'>
          Become a Partner
        </a>
      </SectionContent>
    </Section>
  );
};

export default Partners;
