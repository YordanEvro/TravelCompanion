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


import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import NightsStayIcon from '@material-ui/icons/NightsStay';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import RestaurantIcon from '@material-ui/icons/Restaurant';

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
  list: {
    backgroundColor: theme.palette.background.paper,
  },
  grid: {
    flexGrow: 1,
  }
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
      setPopoverContent(country);
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
                    
                    if(hoveredCountry){
                      
                      if(hoveredCountry.curfew)
                      restrictions += "— Curfew ";

                      if(hoveredCountry.hasEntryRestrictions)
                        restrictions += "— Entry restrictions ";
                        
                      if(hoveredCountry.gymRestricted)
                        restrictions += "— Gym restrictions "; 
                        
                      if(hoveredCountry.restaurantRestricted)
                        restrictions += "— Restaurant restrictions "; 
                    }

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
                    setTooltipContent("");
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
        anchorPosition={{top:0, left:0}}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          style: { width: '20%', height: '80%'},
        }}
      >
        <div className={classes.grid}>
          <Grid>
            <Typography className={classes.typography} >{content.name}</Typography>
            <div className={classes.list}>
              <List>
                  <ListItem>
                    <ListItemIcon>
                      <NightsStayIcon />
                    </ListItemIcon>
                    <ListItemText>{content.curfew ? content.curfewInformation : "No curfew"}</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FlightLandIcon />
                    </ListItemIcon>
                    <ListItemText>{content.hasEntryRestrictions ? content.Entry : "No entry restrictions"}</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <NaturePeopleIcon />
                    </ListItemIcon>
                    <ListItemText>{content.outdoorRestricted ? content.outdoorInformation : "No outdoor restriction"}</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FitnessCenterIcon />
                    </ListItemIcon>
                    <ListItemText>{content.gymRestricted ? content.gymInformation : "Gyms are open"}</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <RestaurantIcon />
                    </ListItemIcon>
                    <ListItemText>{content.restaurantRestricted ? content.restaurantInformation : "Restaurants are open"}</ListItemText>
                  </ListItem>
              </List>
            </div>
          </Grid>
        </div>
      </Popover>
    </>
  );
};

export default memo(MapChart);
