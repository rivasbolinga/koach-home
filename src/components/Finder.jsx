import filtersContent from '../data';
import '../styles/finder.scss';
import { useFilterContext } from '../context/filter_context';

const Finder = () => {
  const { toggleFilter, filters } = useFilterContext();
  const {title, filters:filterItems } = filtersContent;
  return (
  <section className="finder-section">
    <h2>{title}</h2>
    <div className="filters-container">
      {filterItems.map((filter, i) => {
        return (
          <button
            className={`filter-button ${
              filters[i].isFiltered ? 'filtered' : ''
            }`}
            type="button"
            key={`filter-${i}`}
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