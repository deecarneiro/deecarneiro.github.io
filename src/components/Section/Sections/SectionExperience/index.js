import '../Section.css';
import Section from '..';

function SectionExperience(props) {


  return (
    <Section>
      <div id="experience">
        {props.children}
      </div>
    </Section>
  );
}

export default SectionExperience;
