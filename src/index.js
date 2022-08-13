import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CustomCard from "./CustomCard";
import Searchbar from "./Searchbar";

const root = ReactDOM.createRoot(document.getElementById('reactroot'));

root.render(
  <div>
    <Searchbar />
    <CustomCard name="Cactus" />
    <CustomCard name="Blume" />
  </div>
);
