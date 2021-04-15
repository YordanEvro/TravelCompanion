import React, { memo, useState } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { getAllCountries } from "../api/api";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));


const MapChart = ({ setTooltipContent }) => {
  
  const [countries, setCountries] = useState(new Array());
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [content, setPopoverContent] = useState("");

  getAllCountries().then(res => {
    setCountries(res.data.data);
  })
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const setFullRestrictions = (country) => {
    console.log('514country ', country);
    if(country)
      setPopoverContent(country.name);
    else
      setPopoverContent("No info");
    
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;

                    const hoveredCountry = countries.filter(function(country) { return country.name == NAME})[0];
                    let restrictions = "";

                    if(hoveredCountry)
                      restrictions = "— " + hoveredCountry.restrictions; 

                    setTooltipContent(`${NAME} — ${rounded(POP_EST)} ${restrictions}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={(event) => {
                    const { NAME, POP_EST } = geo.properties;

                    const clickedCountry = countries.filter(function(country) { return country.name == NAME})[0];

                    setFullRestrictions(clickedCountry);
                    handleClick(event);
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#5826ba",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorReference="anchorPosition"
        anchorPosition={{top:100, left:100}}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Typography className={classes.typography} >{content}</Typography>
      </Popover>
    </>
  );
};

export default memo(MapChart);
