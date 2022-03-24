import Container from '../Container';
import Content from '../Content';
import Section from '../Section';
import {
    SectionAbout,
    SectionContact,
    SectionExperience,
    SectionHome,
    SectionProjects,
    SectionServices
} from '../Section/Sections';

import './ScrollSnapPage.css';

function ScrollSnapPage() {


    return (
        <Container>
            <Content>
                <SectionHome/>
                <SectionAbout> <h1> About </h1></SectionAbout>
                <SectionServices> <h1> Services </h1></SectionServices>
                <SectionProjects> <h1> Projects </h1></SectionProjects>
                <SectionExperience> <h1> Experience </h1></SectionExperience>
                <SectionContact> <h1> Contact </h1></SectionContact>
            </Content>
        </Container>
    );
}

export default ScrollSnapPage;