import { mentorsData } from "../data";
import '../styles/mentors.scss';
import { AiFillStar} from 'react-icons/ai';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';

const Mentors = () => {
const {title, tags, mentors} = mentorsData;
return (
  <section className="mentors-section">
    <h1>{title}</h1>
    <div className="tags-container">
      {tags.map((tag)=> {
        return (
          <div className="tag-container" key={tag}>
            <p>{tag}</p>
            <p> &#62;</p>
          </div>
        )
      })}
    </div>
    <div className="mentors-container">
      {mentors.map((mentor)=>{
        const { id, img, name, job} = mentor;
        return (
          <div className="mentor-container" key={`mentor-${id}`}>
            <img className="mentor-img" alt="mentor" src={img} />
            <div className="mentor-details">
              <h4>{name}</h4>
              <div className="job-container">
                <PiSuitcaseSimpleBold />
                <p>{job}</p>{' '}
              </div>
              <div className="experience-stars-container">
                <div className="experience-container">
                  <p>Experience</p>
                  <p className="years">2 years</p>
                </div>
                <div className="stars-container">
                  4.8
                  <AiFillStar className="star" />
                </div>
              </div>
            </div>
          </div>
        )

      })}
    </div>
  </section>
);
};

export default Mentors;
