import React from 'react';
import SearchBar from "material-ui-search-bar";
import { useState } from "react";

import { Icon, IconButton, Typography } from "@material-ui/core";

import SettingsIcon from '@material-ui/icons/Settings';
import TranslateIcon from '@material-ui/icons/Translate';

import Logo from '../static/Logo.png';

const Searchbar = (props) => {

    const [values, setValues] = useState("");
    return (
        <div id = "searchBar">
            <table style={{width:"100%"}}>
                <tr>
                <td style={{ paddingLeft:35, float:"left", marginRight:-230}}>
                    <IconButton>
                        <img src={Logo} style={{ width: 50, height: 50 }}/>Travel Companion
                    </IconButton>
                </td>
                <td>
                <SearchBar
                    onChange={(newValue) => 
                        setValues({ values: newValue })}
                    onRequestSearch={() => console.log('onRequestSearch')}
                    style={{
                        margin: '0 auto',
                        maxWidth: 500
                    }}
                />
                </td>
                <td style={{
                    float:"right"
                }}>
                    <IconButton>  
                        <TranslateIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </td>
                
                </tr>
            </table>  
      </div>
    )

}

export default Searchbar;