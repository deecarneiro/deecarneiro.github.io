import Section  from '../..';
import './SectionServices.css';

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
