import './SectionHome.css';
import Section  from '../..';
import Video from '../../../../assets/videos/video_1.mp4'
import Typewriter from 'typewriter-effect';


function SectionHome() {

  const goTo = () => {
   return document.location='#contact'
  }
  return (
    <Section>
      <div  id="home" className="section-home">
        <div className="bg">
          <video className="videoBg"
            autoPlay
            loop
            muted
            type="video/mp4" src={Video} />
          <div className="home-content">
          </div>
          {/* <Typewriter
            options={{
              strings: ['deecarneiro\'s portfolio'],
              autoStart: true,
              loop: true,
            }}
          /> */}
          <h1 title="FRONTEND DEVELOPER" className="_404">FRONTEND DEVELOPER</h1>
          <div className="button-home-container">
          <button className="button-home" onClick={() =>goTo()} >CONTACT ME</button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default SectionHome;
