import './SectionContact.css';
import Section from '../..';
import Typewriter from 'typewriter-effect';

function SectionContact(props) {


  return (
    <Section>
      <div id="contact" className="section-contact">
        <div className="contact-box">
          <Typewriter
            options={{
              strings: ['Contact me', 'Send me a message'],
              autoStart: true,
              loop: true,
            }}
          />
          <div className="form-contact">
            <form>
              <input className="identifiers" type="text" placeholder="Your name"></input>
              <input className="identifiers email" type="email" placeholder="Your email"></input>
              <textarea className="identifiers message" placeholder="Type your message here!"></textarea>
              <div className="button-contact-container">
              <button className="button-contact">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default SectionContact;
