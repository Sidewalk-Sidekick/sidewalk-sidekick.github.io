import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionHeading from './SectionHeading';
import SectionContent from './SectionContent';
import '../ui/Sponsors.css';
import Cards from './Cards';
import Card from './Card';
import CardContent from './CardContent';
import CardMedia from './CardMedia';

const Sponsors = () => {
  return (
    <Section className='sponsors' id='sponsors'>
      <SectionHeader>
        <SectionHeading title='Sponsors' />
      </SectionHeader>
      <SectionContent className='container'>
        <Cards>
          <Card>
            <CardContent>
              <CardMedia>
                <a href='https://givebackhack.com/' target='_blank'>
                  <img src='give-back-hack-logo.png' alt='logo' />
                </a>
              </CardMedia>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardMedia>
                <a href='https://www.rooseveltcoffee.org/' target='_blank'>
                  <img src='the-roosevelt-coffeehouse.png' alt='logo' />
                </a>
              </CardMedia>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardMedia>
                <a href='https://www.unitedway.org/' target='_blank'>
                  <img src='united-way-logo.png' alt='logo' />
                </a>
              </CardMedia>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardMedia>
                <a href='https://www.cohatch.com/' target='_blank'>
                  <img src='cohatch-logo.png' alt='logo' />
                </a>
              </CardMedia>
            </CardContent>
          </Card>
        </Cards>
        <a
          href='mailto:partnerships@sidewalksidekick.com'
          className='btn btn-dark'
        >
          Become a Sponsor
        </a>
      </SectionContent>
    </Section>
  );
};

export default Sponsors;
