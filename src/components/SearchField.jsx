import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchField = ({ onSearch }) => {
  const [state, setState] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Seach by team name"
        className="search"
        onChange={handleChange}
        value={state}
      />
    </div>
  );
};

export default SearchField;

SearchField.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
