import React from 'react';
import SearchBar from "material-ui-search-bar";
import { useState } from "react";

const Searchbar = (props) => {

    const [values, setValues] = useState("");
    return (
        <div id = "searchBar">
        <SearchBar
        onChange={(newValue) => 
            setValues({ values: newValue })}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={{
            margin: '0 auto',
            maxWidth: 500
          }}
      />
      </div>
    )

}

export default Searchbar;