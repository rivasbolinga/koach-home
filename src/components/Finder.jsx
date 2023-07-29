import filtersContent from '../data';
import '../styles/finder.scss';

const Finder = () => {
  return (
  <section className="finder-section">
    <h2>{filtersContent.title}</h2>
    <div className="filters-container">
      {filtersContent.filters.map((filter) => {
        return <button className='filter-button' type='filter'>{filter}</button>
      })}
    </div>
      <form className='form'>
        <input 
        className='search-mentor-input'
        type='text'
        placeholder='Search mentors'
        required
        />
        <button className='find-mentor-btn'>find your mentor</button>
        </form>

  </section>
  );
};

export default Finder;