import Container from '../Container';
import Content from '../Content';
import Section from '../Section';
import { SectionAbout, 
         SectionContact, 
         SectionExperience, 
         SectionHome, 
         SectionProjects, 
         SectionServices } from '../Section/Sections';

import './ScrollSnapPage.css';

function ScrollSnapPage() {


    return (
        <Container>
            <Content>
                <Section> <h1> Home </h1></Section>
                <Section> <h1> About </h1></Section>
                <Section> <h1> Services </h1></Section>
                <Section> <h1> Projects </h1></Section>
                <Section> <h1> Experience </h1></Section>
                <Section> <h1> Contact </h1></Section>
            </Content>
        </Container>
    );
}

export default ScrollSnapPage;