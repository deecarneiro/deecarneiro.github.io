import Section from '..';
import '../Section.css';

function SectionAbout(props) {


  return (
    <Section>
      {props.children}
    </Section>
  );
}

export default SectionAbout;
