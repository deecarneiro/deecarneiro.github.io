import Section from '../..';
import './SectionServices.css';
import Typewriter from 'typewriter-effect';
import Card from '../../../Card';
import MobileCard from '../../../MobileCard';
import Mobile from '../../../../assets/images/Mobile.jsx';
import Web from '../../../../assets/images/Web.jsx';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import Games from '../../../../assets/images/Games';
import { useSwipeable } from 'react-swipeable';

function SectionServices() {

  const [visible, setVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [currentCard, setCurrentCard] = useState(0);

  const goTo = () => {
    return document.location = '#contact'
  }

  const cards = [
    {
      title: "Mobile",
      description: "Frontend mobile with React Native, Flutter, Ionic Framework...",
      icon: <Mobile />

    },
    {
      title: "Web",
      description: "Frontend and Backend development",
      icon: <Web />
    },
    {
      title: "Games",
      description: "Frontend and Backend development",
      icon: <Games />
    }
  ]

  const slideTo = (direction) => {
    if (direction === 'right' && currentCard >= 1) {
      console.log(currentCard, 'right')
      setCurrentCard(currentCard - 1)
    } else if (direction === 'left' && currentCard <= cards.length - 2) {
      console.log(currentCard, 'left')
      setCurrentCard(currentCard + 1)
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => slideTo('left'),
    onSwipedRight: () => slideTo('right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const browser = cards.map((card, key) => {
    return <Card
      title={card.title}
      description={card.description}
      buttonValue="See more"
      onclick={() => goTo()}
      key={key}
      visibility={key === currentCard}
    >
      {card.icon}
    </Card>
  })

  return (
    <VisibilitySensor onChange={(isVisible) => { setVisible(isVisible) }}>
      <Section>
        {visible ?

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
            {isTyping === false ?
              isMobile ?
              <div className="section-services"   {...handlers}>
                {cards.map((card, key) => {
                  return <MobileCard
                    title={card.title}
                    description={card.description}
                    buttonValue="See more"
                    onclick={() => goTo()}
                    key={key}
                    visibility={key === currentCard}
                  >
                    {card.icon}
                  </MobileCard>
                })}
                {cards.map((card, key) => {
                  return <a onClick={() => { setCurrentCard(key) }}></a>
                })}
              </div>
              :
              <div className="section-services" >
               {browser}
              </div>
              : ''
             }
          </div> : ''}
      </Section>
    </VisibilitySensor >

  );
}

export default SectionServices;
