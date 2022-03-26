import Section from '..';
import '../Section.css';

function SectionAbout(props) {


  return (
    <Section>
      <div id="about">
      {props.children}
      </div>
    </Section>
  );
}

export default SectionAbout;
