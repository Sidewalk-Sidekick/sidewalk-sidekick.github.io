import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionHeading from './SectionHeading';
import SectionTextBox from './SectionTextBox';
import SectionText from './SectionText';
import SectionContent from './SectionContent';
import '../ui/Partners.css';

const Partners = () => {
  return (
    <Section>
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
      </SectionContent>
        <SectionHeading title='Partnerships' />
      </SectionHeader>
    </Section>
  );
};

export default Partners;
