import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MapChart from "../components/MapChart";
import SideBar from "../components/Sidebar";

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css';

function App() {

  const [content, setContent] = useState("");
  return (
    <div>
      <SideBar />
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;
