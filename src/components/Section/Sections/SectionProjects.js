import Section from '..';
import '../Section.css';

function SectionProjects(props) {


  return (
    <Section>
      <div id="projects">
        {props.children}
      </div>
    </Section>
  );
}

export default SectionProjects;
