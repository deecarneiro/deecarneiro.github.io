import './SectionContact.css';
import Section  from '../..';

function SectionContact(props) {


  return (
    <Section>
      <div id="contact">
        {props.children}
      </div>
    </Section>
  );
}

export default SectionContact;
