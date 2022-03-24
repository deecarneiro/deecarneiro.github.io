import Section from '..';
import '../Section.css';

function SectionProjects(props) {


  return (
    <Section>
      {props.children}
    </Section>
  );
}

export default SectionProjects;
