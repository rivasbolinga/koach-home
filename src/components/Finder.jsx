import filtersContent from '../data';
import '../styles/finder.scss';
import { useFilterContext } from '../context/filter_context';

const Finder = () => {
  const { toggleFilter, filters } = useFilterContext();
  return (
  <section className="finder-section">
    <h2>{filtersContent.title}</h2>
    <div className="filters-container">
      {filtersContent.filters.map((filter, i) => {
        return (
          <button
            className={`filter-button ${
              filters[i].isFiltered ? 'filtered' : ''
            }`}
            type="button"
            key={i}
            onClick={() => toggleFilter(i)}
          >
            {filter}
          </button>
        )
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