import { AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'
import '../styles/footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-left-container">
      <h3 className='footer-company-name'>Koach</h3>
      <p className='footer-description'>
        We match the right initiatives with the right expertise, fostering
        flexible connections and empowering success
      </p>
      <div className="social-logos">
        <AiOutlineTwitter className='twitter-logo'/>
        <AiFillLinkedin className='linkedin-logo' />
      </div>
    </div>
    <div className="footer-right-container">
      <div className="footer-links-container">
        <h4>PLATFORM</h4>
        <ul>
          <li>Browse mentors</li>
          <li>Book a Session</li>
          <li>Become a Mentor</li>
        </ul>
      </div>
      <div className="footer-links-container">
        <h4>RESOURCES</h4>
        <ul>
          <li>Newsletter</li>
          <li>Blogs</li>
        </ul>
      </div>
      <div className="footer-links-container">
        <h4>COMPANY</h4>
        <ul>
          <li>About</li>
          <li>Partner Program</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-links-container">
        <h4>SUPPORT</h4>
        <ul>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer;