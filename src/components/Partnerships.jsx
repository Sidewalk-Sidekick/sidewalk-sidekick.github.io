import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionHeading from './SectionHeading';
import SectionContent from './SectionContent';
import '../ui/Partnerships.css';
import Cards from './Cards';
import Card from './Card';
import CardContent from './CardContent';
import CardMedia from './CardMedia';

const Partnerships = () => {
  return (
    <Section className='partners'>
      <SectionHeader>
        <SectionHeading title='Partnerships' />
      </SectionHeader>
      <SectionContent className='container'>
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

export default Partnerships;
