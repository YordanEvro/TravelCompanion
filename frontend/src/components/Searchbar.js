import React from 'react';


const Searchbar = (props) => {
    return (
    <div id = "searchBar" >
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"/>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet"/>
    <form>
    <input type = 'text'
    className = 'search'
    placeholder ="Search country, amenity"
    onChange = {props.handleChange}
    />
    <select id="type" name="types">
    <option value="country">Country</option>
    <option value="amenities">Amenity</option>
  </select>
  <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
        </button>
    </form>
    </div>
    )

}

export default Searchbar;