import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionHeading from './SectionHeading';
import SectionContent from './SectionContent';
import SectionTextBox from './SectionTextBox';
import SectionText from './SectionText';
import Cards from './Cards';
import Card from './Card';
import CardHeader from './CardHeader';
import CardHeading from './CardHeading';
import CardContent from './CardContent';
import CardTextBox from './CardTextBox';
import CardText from './CardText';
import CardMedia from './CardMedia';
import '../ui/BusinessList.css';
import data from '../short-north-businesses.json';

const BusinessList = () => {
  return (
    <Section className='businesses'>
      <SectionHeader className='container'>
        <h1>Wheelchair accessible businesses in Columbus, Ohio.</h1>
        <SectionTextBox>
          <SectionText>
            Businesses with a <span className='green'>Green</span> checkmark are
            accessible, and those with a <span className='red'>Red</span>{' '}
            checkmark are not.
          </SectionText>
        </SectionTextBox>
      </SectionHeader>
      <SectionContent className='container'>
        <Cards>
          {data.map((business) => (
            <Card key={business.image_url}>
              <CardMedia>
                <img
                  src={
                    business.image_url.length > 0
                      ? business.image_url
                      : 'https://dummyimage.com/600x400/eeeeee/fff'
                  }
                  alt=''
                />
                <span
                  className={
                    business.is_wheelchair_accessible === true ? 'happy' : 'sad'
                  }
                />
              </CardMedia>
              <CardContent>
                <CardHeader>
                  <h3 className='card-heading'>{business.name}</h3>
                </CardHeader>

                <CardTextBox>
                  <CardText>{business.address}</CardText>
                </CardTextBox>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </SectionContent>
    </Section>
  );
};

export default BusinessList;
