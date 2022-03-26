import Section from '..';
import '../Section.css';


function SectionServices(props) {

  return (
    <Section>
      <div id="services">
        {props.children}
      </div>
    </Section>
  );
}

export default SectionServices;
