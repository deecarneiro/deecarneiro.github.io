import Section from '../..';
import './SectionServices.css';
import Typewriter from 'typewriter-effect';
import Card from '../../../Card';
import  Mobile  from '../../../../assets/images/Mobile.jsx';
import Web from '../../../../assets/images/Web.jsx';
import REST from '../../../../assets/images/REST.jsx';
import ReactCardCarousel from "react-card-carousel";
import VisibilitySensor from 'react-visibility-sensor';
import {useState} from 'react';
import {BrowserView, MobileView} from 'react-device-detect';

function SectionServices() {

  const [visible, setVisible] = useState(false);

  return (
    <Section>
     <Typewriter
          options={{
            strings: ['cd Work/Services', 'ls'],
            autoStart: true,
            loop: true,
          }}
        />
            <VisibilitySensor onChange={(isVisible) => { setVisible(isVisible) }}>
      <div id="services">
       <Typewriter
          options={{
            strings: ['cd Work/Services', 'ls'],
            autoStart: true,
            loop: true,
          }}
        />
        <MobileView>
                {visible ?
               <ReactCardCarousel disable_box_shadow={true}>
          <Card
            title="Mobile"
            description="Frontend mobile with React Native, Flutter, Ionic Framework..."
            buttonValue="See more"
          >
            <Mobile/>
          </Card>
          <Card
            title="Frontend Web"
            description="Frontend development with React.js, Bootstrap, Angular.js and Angular"
            buttonValue="See more"
          >
          <Web/>
          </Card>
          <Card
            title="REST APIs"
            description="REST API development with Spring Boot, Node.js and JPA"
            buttonValue="See more"
          >
            <REST/>
          </Card>
        
        </ReactCardCarousel>
        : <div></div>
        }
       </MobileView>
        <BrowserView>
        <div className="section-services">
              <Card
            title="Mobile"
            description="Frontend mobile with React Native, Flutter, Ionic Framework..."
            buttonValue="See more"
          >
            <Mobile/>
          </Card>
          <Card
            title="Frontend Web"
            description="Frontend development with React.js, Bootstrap, Angular.js and Angular"
            buttonValue="See more"
          >
          <Web/>
          </Card>
          <Card
            title="REST APIs"
            description="REST API development with Spring Boot, Node.js and JPA"
            buttonValue="See more"
          >
            <REST/>
          </Card></div>
   
          </BrowserView>
        </div>
                </VisibilitySensor>

        </Section>
  );
}

export default SectionServices;
