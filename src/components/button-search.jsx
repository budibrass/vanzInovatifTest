import React from 'react';

const Search = ({ onChange }) => {
  return (
    <div className="input-group mt-2 justify-content-center">
        <div className="form-outline w-75">
            <input type="search" id="form1" className="form-control" onChange={onChange} />
        </div>
        <button type="button" className="btn btn-primary">
            <i className="fas fa-search"></i>
        </button>
    </div>
  )
}

export default Search;