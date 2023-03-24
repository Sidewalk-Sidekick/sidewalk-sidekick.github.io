import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionHeading from './SectionHeading';
import SectionTextBox from './SectionTextBox';
import SectionText from './SectionText';
import SectionContent from './SectionContent';
import SectionMedia from './SectionMedia';
import '../ui/OurStory.css';

const OurStory = () => {
  return (
    <Section className='our-story'>
      <SectionHeader>
        <SectionHeading title='Our Story' />
      </SectionHeader>
      <SectionContent className='container'>
        <div className='grid grid-2-cols'>
          <SectionMedia>
            <img
              src='./awardsPhoto.jpeg'
              alt='Photo of the team from GiveBackHack Columbus 2022'
            />
          </SectionMedia>
          <SectionTextBox>
            <SectionText>
              <p>
                Conceived between friends passionate about the viability of
                walkable communities, Sidewalk Sidekick was the winning pitch of
                GiveBackHack Columbus 2022.
              </p>
            </SectionText>
          </SectionTextBox>
        </div>
        <div className='grid grid-2-cols'>
          <SectionTextBox>
            <SectionText>
              <p>
                Composed of a healthy mix of developers, designers, and product
                growth researchers, we’re a small team committed to making
                alternative forms of transportation safe, accessible, and
                viable.
              </p>
            </SectionText>
          </SectionTextBox>
          <SectionMedia>
            <img
              src='./groupPhotoTeam.jpg'
              alt='Photo of the team from GiveBackHack Columbus 2022'
            />
          </SectionMedia>
        </div>
        <div className='grid grid-2-cols'>
          <SectionMedia>
            <img
              src='./groupPhotoGBH.jpg'
              alt='Photo of the team from GiveBackHack Columbus 2022'
            />
          </SectionMedia>
          <SectionTextBox>
            <SectionText>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                saepe dolore eligendi dignissimos assumenda aliquam veritatis
                repellendus! Aspernatur odit sit ab quis eum aperiam, iure
                ratione ipsum nemo expedita at.
              </p>
            </SectionText>
          </SectionTextBox>
        </div>
      </SectionContent>
    </Section>
  );
};

export default OurStory;
