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
        <Section className="team-history">
                <SectionHeader>
                    <SectionHeading title="Team History" />
                </SectionHeader>
                <SectionContent className="container">
                    <div className="grid grid-2-cols">
                        <SectionMedia>
                            <img src="./awardsPhoto.jpeg" alt="Photo of the team from GiveBackHack Columbus 2022" />
                        </SectionMedia>
                        <SectionTextBox>
                            <SectionText>
                                <p>
                                    Conceived between friends passionate about the viability of walkable communities, Sidewalk Sidekick was the winning pitch of GiveBackHack Columbus 2022.
                                </p>
                            </SectionText>
                        </SectionTextBox>
                    </div>
                    <div className="grid grid-2-cols">
                        <SectionTextBox>
                            <SectionText>
                                <p>
                                    Composed of a healthy mix of developers, designers, and product growth researchers, we’re a small team committed to making alternative forms of transportation safe, accessible, and viable.
                                </p>
                            </SectionText>
                        </SectionTextBox>
                        <SectionMedia>
                            <img src="./groupPhotoTeam.jpg" alt="Photo of the team from GiveBackHack Columbus 2022" />
                        </SectionMedia>
                    </div>
                    <div className="grid grid-2-cols">
                        <SectionMedia>
                            <img src="./groupPhotoGBH.jpg" alt="Photo of the team from GiveBackHack Columbus 2022" />
                        </SectionMedia>
                        <SectionTextBox>
                            <SectionText>
                            <a href='http://localhost:3000/' className='btn btn-dark'>
                                Click here to view our slidedeck from GiveBackHack Columbus 2022
                            </a>
                            </SectionText>
                        </SectionTextBox>
                    </div>
                </SectionContent>
        </Section>
    );
  };
  
  export default TeamHistory;