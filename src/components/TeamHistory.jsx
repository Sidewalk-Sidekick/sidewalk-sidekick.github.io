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
            <div className="teamHistory">
                <SectionHeader>
                    <SectionHeading title="Team History" />
                </SectionHeader>
                <div>
                    <SectionContent>
                        <SectionMedia>
                            <img src="./groupPhotoTeam.jpg" alt="Photo of the team from GiveBackHack Columbus 2022" />
                        </SectionMedia>
                    </SectionContent>
                    <SectionContent>
                        <SectionTextBox>
                            <SectionText>
                                <p>
                                    Conceived between friends passionate about the viability of walkable communities, Sidewalk Sidekick was the winning pitch of GiveBackHack Columbus 2022.
                                </p>
                            </SectionText>
                        </SectionTextBox>
                    </SectionContent>
                    <SectionContent>
                        <SectionTextBox>
                            <SectionText>
                                <p>
                                    Composed of a healthy mix of developers, designers, and product growth researchers, we’re a small team committed to making alternative forms of transportation safe, accessible, and viable.
                                </p>
                            </SectionText>
                        </SectionTextBox>
                    </SectionContent>
                    <SectionContent>
                        <SectionMedia>
                            <img src="./awardsPhoto.jpeg" alt="Photo of the team from GiveBackHack Columbus 2022" />
                        </SectionMedia>
                    </SectionContent>
                    <SectionContent>
                        <SectionMedia>
                            <img src="./groupPhotoGBH.jpg" alt="Photo of the team from GiveBackHack Columbus 2022" />
                        </SectionMedia>
                    </SectionContent>
                    <SectionContent>
                        <SectionTextBox>
                            <SectionText>
                            <a href='http://localhost:3000/' className='btn btn-dark'>
                                Click here to view our slidedeck from GiveBackHack Columbus 2022
                            </a>
                            </SectionText>
                        </SectionTextBox>
                    </SectionContent>
                </div>
            </div>
        </Section>
    );
  };
  
  export default TeamHistory;