import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import MapViewer from './Map/Map';
import Click from './Map/Click'

import * as serviceWorker from './serviceWorker';
import TilesSelect from './Map/Tiles/Tile';


ReactDOM.render(
  <React.StrictMode>
    <MapViewer />
    <Click />
    <TilesSelect />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
