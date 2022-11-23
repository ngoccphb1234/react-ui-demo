import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

Search.propTypes = {
    // name: PropTypes.string,
    // placeholder: PropTypes.string,
};
//
// Search.defaultProps = {
//     name: 'search',
//     placeholder: 'Search',
// }

function Search(props) {
    return (
        <div className="divSearch">
            <input type="text" className="searchInput"
                   name="search"
                   placeholder="Search"
                   value={props.search}
            />
        </div>
    );
}

export default Search;