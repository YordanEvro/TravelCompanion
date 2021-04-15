import React from 'react';


const Searchbar = (props) => {
    return (
        <div id = "searchBar" >
    <input type = 'search'
    className = 'search'
    placeholder ="Enter country, place"
    onChange = {props.handleChange}
    />
    </div>
    )

}

export default Searchbar;