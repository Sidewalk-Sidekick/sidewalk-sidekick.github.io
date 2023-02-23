import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionHeading from './SectionHeading';
import SectionTextBox from './SectionTextBox';
import SectionText from './SectionText';
import SectionContent from './SectionContent';
import SectionMedia from  "./SectionMedia";
import '../ui/TeamHistory.css';

const TeamHistory = () => {
    return (
        <Section>
            <SectionHeader>
                <SectionHeading title="Team History" />
            </SectionHeader>
            <SectionContent>
                <SectionTextBox>
                    <SectionText>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aut atque aliquam non saepe exercitationem molestias sint, voluptatem et. Eos obcaecati eius ratione repellendus esse ad, distinctio ipsam velit nihil?
                        </p>
                    </SectionText>
                </SectionTextBox>
                <SectionMedia>
                    <img src="./groupPhoto.jpg" alt="Photo of the team from GiveBackHack Columbus 2022" />
                </SectionMedia>
            </SectionContent>
        </Section>
    );
  };
  
  export default TeamHistory;