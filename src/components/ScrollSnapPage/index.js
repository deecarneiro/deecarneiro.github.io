import Container from '../Container';
import Content from '../Content';
import './ScrollSnapPage.css';

function ScrollSnapPage() {


    return (
        <Container>
            <Content>
                <section> <h1> Home </h1></section>
                <section> <h1> About </h1></section>
                <section> <h1> Services </h1></section>
                <section> <h1> Projects </h1></section>
                <section> <h1> Experience </h1></section>
                <section> <h1> Contact </h1></section>
            </Content>
        </Container>
    );
}

export default ScrollSnapPage;