import { mentorsData } from "../data";

const Mentors = () => {
const {title, tags, mentors} = mentorsData;
return (
  <section className="mentors-section">
    <h1>{title}</h1>
    <div className="tags-container">
      {tags.map((tag)=> {
        return (
          <div className="tag-container">
            <p>{tag}</p>
            <p> &#62;</p>
          </div>
        )
      })}
    </div>
    <div className="mentors-container">
      {mentors.map((mentor)=>{
        const { img, name, job} = mentor;
        <div className="mentor-container">
          <img className="mentor-img" alt='mentor' src={img}/>
          <div className="mentor-details">
            <h4>{name}</h4>
            <p> {job}</p>
            <div className="experience-stars-container">
              <div className="experience-container">
                <p>Experience</p>
                <p className="years">2 yearse</p>
              </div>
              <div className="stars-container">
                <p>4.8</p>
                <p>*</p>
              </div>
            </div>
          </div>
        </div>
      })}
    </div>
  </section>
)
}

export default Mentors;
