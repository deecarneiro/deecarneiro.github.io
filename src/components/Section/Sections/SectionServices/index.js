import Section from '../..';
import './SectionServices.css';
import Typewriter from 'typewriter-effect';
import Card from '../../../Card';
import Mobile from '../../../../assets/images/Mobile.webp';
import Web from '../../../../assets/images/Web.webp';
import REST from '../../../../assets/images/REST.webp';


function SectionServices() {

  return (
    <Section>
      <div id="services">
        <Typewriter
          options={{
            strings: ['Services', 'Work'],
            autoStart: true,
            loop: true,
          }}
        />
        <div className="section-services">
        <Card
            title="Mobile"
            description="Developing mobile applications with React Native, Flutter, Ionic Framework..."
            imgSrc={Mobile}
            buttonValue="See more"
          />
          <Card
            title="Frontend Web"
            description="Frontend development with React.js, Bootstrap, Angular.js and Angular"
            imgSrc={Web}
            buttonValue="See more"
          />
          <Card
            title="REST APIs"
            description="REST API development with Spring Boot, Node.js and JPA"
            imgSrc={REST}
            buttonValue="See more"
          />
        </div>
      </div>
    </Section>
  );
}

export default SectionServices;
