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
    <Section>
      <div className='partners'>
        <SectionHeader>
          <SectionHeading title='Partners' />
        </SectionHeader>
        <SectionContent>
          <SectionTextBox>
            <SectionText>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                voluptatibus harum laborum quae quia et voluptatum consectetur
                consequatur laboriosam tempora, minima doloremque quibusdam cum
                atque quod modi laudantium officia fugiat!
              </p>
            </SectionText>
          </SectionTextBox>
          <Cards>
            <div className='grid grid-4-cols'>
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
            </div>
          </Cards>
          <a href='http://localhost:3000/' className='btn btn-dark'>
            Become a Partner
          </a>
        </SectionContent>
      </div>
    </Section>
  );
};

export default Partners;
