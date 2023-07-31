import heroImage from '../assets/images/homepage.png';
import '../styles/hero.scss';

const Hero = () => (
  <section className="hero-section">
    <h1>Unlocking the Future of Talent</h1>
    <img className="hero-img" alt="student studying" src={heroImage} />
  </section>
);


export default Hero;