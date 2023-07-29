import filtersContent from '../data';

const Finder = () => {
  return (
  <section className="finder-section">
    <h2>{filtersContent.title}</h2>
    <div className="filters-container">
      {filtersContent.filters.map((filter) => {
        return <button className='filter-button' type='filter'>{filter}</button>
      })}
    </div>
    <div className='form'>
      <form>
        <input 
        type='text'
        placeholder='search mentors'
        required
        />
        <button>find your mentor</button>
      </form>
    </div>
  </section>
  );
};

export default Finder;