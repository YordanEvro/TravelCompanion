import React from 'react';


const Searchbar = (props) => {
    return (
    <div id = "searchBar" >
    <form>
    <input type = 'search'
    className = 'search'
    placeholder ="Search country, amenity"
    onChange = {props.handleChange}
    />
    <select id="type" name="types">
    <option value="country">Country</option>
    <option value="amenities">Amenity</option>
  </select>
    <input type="submit" value= "search"/>
    </form>
    </div>
    )

}

export default Searchbar;