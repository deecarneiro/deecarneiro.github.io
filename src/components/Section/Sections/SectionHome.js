import '../Section.css';
import Section from '..';
import Video from '../../../assets/videos/video_3.mp4'

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
          <h1>{props.children}</h1>
        </div>
      </div>
    </Section>
  );
}

export default SectionHome;
