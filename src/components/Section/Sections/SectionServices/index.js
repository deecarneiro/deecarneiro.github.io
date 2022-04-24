import Section from '../..';
import './SectionServices.css';
import Typewriter from 'typewriter-effect';
import Card from '../../../Card';
import Mobile from '../../../../assets/images/Mobile.jsx';
import Web from '../../../../assets/images/Web.jsx';
import REST from '../../../../assets/images/REST.jsx';
import ReactCardCarousel from "react-card-carousel";
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import Games from '../../../../assets/images/Games';

function SectionServices() {

  const [visible, setVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  const goTo = () => {
    return document.location = '#contact'
  }

  return (
    <Section>
      <div id="services">
        {isTyping ?
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('cd /Work/Services')
              .callFunction(() => {
                console.log('cd /Work/Services');
              })
              .pauseFor(1000)
              .deleteAll()
              .start()
            typewriter.typeString('ls')
              .callFunction(() => {
                setVisible(true)
                setIsTyping(false)
              })
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .start()
          }}
        /> : ''}
        {visible &&
          <div className="section-services">
            <Card
              title="Mobile"
              description="Frontend mobile with React Native, Flutter, Ionic Framework..."
              buttonValue="See more"
              onclick={() => goTo()}
            >
              <Mobile />
            </Card>
            <Card
              title="Web"
              description="Frontend and Backend development"
              buttonValue="See more"
              onclick={() => goTo()}
            >
              <Web />
            </Card>
            <Card
              title="Games"
              description="REST API development with Spring Boot, Node.js and JPA"
              buttonValue="See more"
              onclick={() => goTo()}
            >
              <Games />
            </Card>
          </div>}
      </div>

    </Section>
  );
}

export default SectionServices;
