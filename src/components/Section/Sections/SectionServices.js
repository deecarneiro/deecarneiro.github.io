import Section from '..';
import '../Section.css';


function SectionServices(props) {

  return (
    <Section>
      {props.children}
    </Section>
  );
}

export default SectionServices;
