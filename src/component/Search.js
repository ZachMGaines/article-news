import React from 'react';
import PropTypes from 'prop-types';

function Search({ handleSearch }) {
  return (
    <div>

      <input type="text" onChange={handleSearch} />
    </div>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default Search;

