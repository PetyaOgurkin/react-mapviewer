import proj4 from 'proj4'
import { register } from 'ol/proj/proj4'
import Projection from 'ol/proj/Projection'
import MapMath from './mapmath'


const PROJECTION_CODE = "EPSG:3576"

proj4.defs("EPSG:3576", "+proj=laea +lat_0=90 +lon_0=0 +x_0=90 +y_0=0 +datum=WGS84 +units=m +no_defs");
register(proj4);


const projection = new Projection({
    code: PROJECTION_CODE,
    extent: MapMath.extent.EPSG3576,
    global: false,
    units: 'm'
});


export default projection