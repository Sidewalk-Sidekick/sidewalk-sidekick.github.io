import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionHeading from './SectionHeading';
import SectionContent from './SectionContent';
import SectionTextBox from './SectionTextBox';
import SectionText from './SectionText';
import '../ui/TestingFAQ.css';

const TestingFAQ = () => {
  return (
    <Section className='testing-faq'>
      <SectionHeader>
        <SectionHeading title='Testing FAQ' />
      </SectionHeader>
      <SectionContent className='container'>
        <div className='grid grid-2-cols'>
          <SectionTextBox>
            <h3>Heading 3</h3>
            <SectionText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus fuga et repudiandae necessitatibus consectetur natus
              ad voluptate, tempora obcaecati, in eligendi modi, minima ut omnis
              animi dignissimos nam laboriosam facere.
            </SectionText>
          </SectionTextBox>
          <SectionTextBox>
            <h3>Heading 3</h3>
            <SectionText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus fuga et repudiandae necessitatibus consectetur natus
              ad voluptate, tempora obcaecati, in eligendi modi, minima ut omnis
              animi dignissimos nam laboriosam facere.
            </SectionText>
          </SectionTextBox>
          <SectionTextBox>
            <h3>Heading 3</h3>
            <SectionText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus fuga et repudiandae necessitatibus consectetur natus
              ad voluptate, tempora obcaecati, in eligendi modi, minima ut omnis
              animi dignissimos nam laboriosam facere.
            </SectionText>
          </SectionTextBox>
          <SectionTextBox>
            <h3>Heading 3</h3>
            <SectionText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus fuga et repudiandae necessitatibus consectetur natus
              ad voluptate, tempora obcaecati, in eligendi modi, minima ut omnis
              animi dignissimos nam laboriosam facere.
            </SectionText>
          </SectionTextBox>
        </div>
      </SectionContent>
    </Section>
  );
};

export default TestingFAQ;
