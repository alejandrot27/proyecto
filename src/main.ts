/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 
'pk.eyJ1IjoiamVpMDQiLCJhIjoiY2xkMmNtZTluMDVrbzN3cjQydmNhdmxodCJ9.qNxLd0ZB3iJ-MFe89_xL_w';


if( !navigator.geolocation ){
  alert('Navegador no compatible');
  throw new Error('Navegador no compatible con la Geolocalizacion');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // var geojson = {
  //   'type': 'FeatureCollection',
  //   'features': [
  //     {
  //       'type': 'Feature',
  //       'geometry': {
  //         'type': 'Point',
  //         'coordinates': [-66.91330932374085,10.503968050751439]
  //       },
  //       'properties': {
  //         'title': 'El Chorro',
  //         'description': 'Ciudad de Caracas, Venezuela'
  //       }
  //     },
  //     {
  //       'type': 'Feature',
  //       'geometry': {
  //         'type': 'Point',
  //         'coordinates': [-66.933333, 10.5]
  //       },
  //       'properties': {
  //         'title': 'Caracas',
  //         'description': 'Caracas, Venezuela'
  //       }
  //     }
  //   ]
  // };