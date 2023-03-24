import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionHeading from './SectionHeading';
import SectionContent from './SectionContent';
import Cards from './Cards';
import Card from './Card';
import CardHeader from './CardHeader';
import CardHeading from './CardHeading';
import CardText from './CardText';
import CardMedia from './CardMedia';
import '../ui/MeetTheTeam.css';

const MeetTheTeam = () => {
  return (
    <Section className='meet-the-team'>
      <SectionHeader>
        <SectionHeading title='Meet the Team' />
      </SectionHeader>
      <SectionContent className='container'>
        <Cards className='grid grid-4-cols'>
          <Card>
            <CardMedia>
              <img src='nathan-speich.jpg' alt='' />
            </CardMedia>
            <CardHeader>
              <h4 className='card-heading'>Nathan Speich</h4>
              <CardText>Co-Founder</CardText>
            </CardHeader>
          </Card>
          <Card>
            <CardMedia>
              <img src='noel-castillon.jpeg' alt='' />
            </CardMedia>
            <CardHeader>
              <h4 className='card-heading'>Noel Castillon</h4>
              <CardText>Co-Founder</CardText>
            </CardHeader>
          </Card>
          <Card>
            <CardMedia>
              <img src='katie-oh.jpeg' alt='' />
            </CardMedia>
            <CardHeader>
              <CardHeading className='card-heading'>
                <h4>Katie Oh</h4>
              </CardHeading>
              <CardText>Software Engineer</CardText>
            </CardHeader>
          </Card>
          <Card>
            <CardMedia>
              <img src='maria-khoroshilova.jpg' alt='' />
            </CardMedia>
            <CardHeader>
              <CardHeading className='card-heading'>
                <h4>Maria Khoroshilova</h4>
              </CardHeading>
              <CardText>UI / UX Designer</CardText>
            </CardHeader>
          </Card>
          <Card>
            <CardMedia>
              <img src='wesley-giles.jpg' alt='' />
            </CardMedia>
            <CardHeader>
              <CardHeading className='card-heading'>
                <h4>Wesley Giles</h4>
              </CardHeading>
              <CardText>Data Analyst</CardText>
            </CardHeader>
          </Card>
          <Card>
            <CardMedia>
              <img src='stephanie-page.jpeg' alt='' />
            </CardMedia>
            <CardHeader>
              <CardHeading className='card-heading'>
                <h4>Stephanie Page</h4>
                <CardText>Head of Outreach & Partnerships</CardText>
              </CardHeading>
            </CardHeader>
          </Card>
          <Card>
            <CardMedia>
              <img src='shaffan-mustafa.jpeg' alt='' />
            </CardMedia>
            <CardHeader>
              <CardHeading className='card-heading'>
                <h4>Shaffan Mustafa</h4>
              </CardHeading>
              <CardText>Software Engineer</CardText>
            </CardHeader>
          </Card>
        </Cards>
      </SectionContent>
    </Section>
  );
};

export default MeetTheTeam;
