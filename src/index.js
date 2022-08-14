import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CustomCard from "./CustomCard";
import Searchbar from "./Searchbar";
import { MantineProvider } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

const root = ReactDOM.createRoot(document.getElementById('reactroot'));

// fetch('url', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('Success:', data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <div>
      <Searchbar />
      <Carousel slideSize="70%" height={200} slideGap="md" loop withIndicators>
        <CustomCard name="Cactus" />
        <CustomCard name="Blume" />
        <CustomCard name="Sukkulente" />
      </Carousel>
    </div>
  </MantineProvider>
);
