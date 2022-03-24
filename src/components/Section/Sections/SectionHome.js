import '../Section.css';
import Section from '..';
import Video from '../../../assets/videos/video_1.mp4'
import Typewriter from 'typewriter-effect';


function SectionHome(props) {
  return (
    <Section>
      <div className="section-home">
        <div className="bg">
          <video className="videoBg"
            autoPlay
            loop
            muted
            type="video/mp4" src={Video} />
          <div className="home-content">
          </div>
          <Typewriter
            options={{
              strings: ['$ deecarneiro\'s portfolio'],
              autoStart: true,
              loop: true,
            }}
          />
          <h1 title="FRONTEND" className="_404">FRONTEND DEVELOPER</h1>
        </div>
      </div>
    </Section>
  );
}

export default SectionHome;