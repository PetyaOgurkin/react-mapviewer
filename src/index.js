import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MapViewer from './Map/Map';

import * as serviceWorker from './serviceWorker';
import TilesSelect from './Map/Tiles/Tile';
import Sortable from './sortable';
import Catalog from './Catalog/Catalog';
import Layers from './Map/Layers/Layers';


ReactDOM.render(
  <>
    <MapViewer />
    <TilesSelect />
    <Layers />

    <Catalog />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
