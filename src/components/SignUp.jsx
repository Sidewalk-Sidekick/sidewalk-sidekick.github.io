import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionHeading from './SectionHeading';
import SectionContent from './SectionContent';
import Cards from './Cards';
import Card from './Card';
import CardMedia from '../components/CardMedia';
import CardHeader from '../components/CardHeader';
import '../ui/HowItWorks.css';
import CardText from '../components/CardText';
import CardTextBox from '../components/CardTextBox';

const SignUp = (ref) => {
  return (
    <Section className='sign-up' id='sign-up'>
      <SectionContent className='container'>
        <Cards>
          <Card>
            <CardTextBox>
              <CardHeader>
                <h2 className='card-heading'>Stay Informed</h2>
              </CardHeader>
            </CardTextBox>
          </Card>
          <Card>
            <form>
              <fieldset>
                <label htmlFor='email'>
                  Want to keep up to date on Sidewalk Sidekick's progress?
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter your email address here'
                />
              </fieldset>
              <button className='btn btn-dark' type='submit'>
                Sign Up
              </button>
            </form>
          </Card>
        </Cards>
      </SectionContent>
    </Section>
  );
};

export default SignUp;
