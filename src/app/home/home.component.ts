import { DATE_PIPE_DEFAULT_OPTIONS, getLocaleDirection } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Route } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import {AnySourceData, Map , Marker, Popup} from 'mapbox-gl';
import { UsersService } from '../users/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{


  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor(private userService:UsersService,  config: NgbCarouselConfig){
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;

  }

  ngAfterViewInit(): void {

    if(!this.userService.useLocation){
      throw Error('No se puede encontrar userServices.useLocation  !!');
    }
    console.log(this.userService.useLocation); 

    

    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center:this.userService.useLocation, // starting position [-66.933333, 10.5] ubicacion ccs ubicacion usuario [-66.803001 ,10.4442834]
      zoom: 11, // starting zoom
      });
      
      const popup = new Popup()
      .setHTML(`
       <h1>Tu</h1>
       <span>Usuario</span>
      `)
      const popupEsquina1 = new Popup()
      .setHTML(`
       <h1>Esquina El Chorro</h1>
       <span>Ubication</span>
      `)
      const popupEsquina2 = new Popup()
      .setHTML(`
      <h1>Esquina El Socorro</h1>
      <span>Ubication</span>
      `)
      const popupEsquina3 = new Popup()
      .setHTML(`
      <h1>Esquina Angelitos</h1>
      <span>Ubication</span>
      `)
      const popupEsquina4 = new Popup()
      .setHTML(`
      <h1>Esquina Padre Sierra</h1>
      <span>Ubication</span>
      `)
      const popupEsquina5 = new Popup()
      .setHTML(`
      <h1>Esquina de Sociedad/h1>
      <span>Ubication</span>
      `)
      const popupEsquina6 = new Popup()
      .setHTML(`
      <h1>Esquina Peligro</h1>
      <span>Ubication</span>
      `)
      const popupEsquina7 = new Popup()
      .setHTML(`
      <h1>Esquina Pele El Ojo</h1>
      <span>Ubication</span>
      `)
      const popupEsquina8 = new Popup()
      .setHTML(`
      <h1>Esquina de Ánimas</h1>
      <span>Ubication</span>
      `)
      const popupEsquina9 = new Popup()
      .setHTML(`
      <h1>Esquina El Muerto</h1>
      <span>Ubication</span>
      `)
      const popupEsquina10 = new Popup()
      .setHTML(`
      <h1>Esquina San Francisco</h1>
      <span>Ubication</span>
      `)
       const popupEsquina11 = new Popup()
      .setHTML(`
      <h1>Esquina La Bolsa</h1>
      <span>Ubication</span>
      `)
      const popupEsquina12= new Popup()
      .setHTML(`
      <h1>Esquina El Conde</h1>
      <span>Ubication</span>
      `)
      const popupEsquina13 = new Popup()
      .setHTML(`
      <h1>Esquina Guanabano</h1>
      <span>Ubication</span>
      `)
      const popupEsquina14 = new Popup()
      .setHTML(`
      <h1>Esquina El Carmen</h1>
      <span>Ubication</span>
      `)
      const popupEsquina15 = new Popup()
      .setHTML(`
      <h1>Esquina Gradillas</h1>
      <span>Ubication</span>
      `)
      const popupEsquina16 = new Popup()
      .setHTML(`
      <h1>Esquina de Madrices</h1>
      <span>Ubication</span>
      `)
      const popupEsquina17 = new Popup()
      .setHTML(`
      <h1>Esquina San Jacinto</h1>
      <span>Ubication</span>
      `)
      const popupEsquina18 = new Popup()
      .setHTML(`
      <h1>Esquina Las Monjas</h1>
      <span>Ubication</span>
      `)
      const popupEsquina19 = new Popup()
      .setHTML(`
      <h1>Esquina Candilito</h1>
      <span>Ubication</span>
      `)
      const popupEsquina20 = new Popup()
      .setHTML(`
      <h1>Esquina Veroes</h1>
      <span>Ubication</span>
      `)
      const popupEsquina21 = new Popup()
      .setHTML(`
      <h1>Esquina de Platanal</h1>
      <span>Ubication</span>
      `)
      const popupEsquina22 = new Popup()
      .setHTML(`
      <h1>Esquina de Romualda 1</h1>
      <span>Ubication</span>
      `)
      const popupEsquina23 = new Popup()
      .setHTML(`
      <h1>Esquina Avilanes</h1>
      <span>Ubication</span>
      `)
      const popupEsquina24 = new Popup()
      .setHTML(`
      <h1>Esquina Alcabala 1</h1>
      <span>Ubication</span>
      `)
      const popupEsquina25 = new Popup()
      .setHTML(`
      <h1>Esquina de Miguelacho 1</h1>
      <span>Ubication</span>
      `)
      const popupEsquina26 = new Popup()
      .setHTML(`
      <h1>Esquina Socarrás</h1>
      <span>Ubication</span>
      `)
      const popupEsquina27 = new Popup()
      .setHTML(`
      <h1>Esquina Puente Yanes</h1>
      <span>Ubication</span>
      `)
      const popupEsquina28 = new Popup()
      .setHTML(`
      <h1>Esquina Plaza España 1</h1>
      <span>Ubication</span>
      `)
      const popupEsquina29 = new Popup()
      .setHTML(`
      <h1>Esquina Amadores</h1>
      <span>Ubication</span>
      `)

      
      new Marker ({color: 'blue'})
      .setLngLat(this.userService.useLocation)
      .setPopup( popup )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.91330932374085,10.503968050751439])
      .setPopup( popupEsquina1 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.90876133739948 ,10.507923704004927])
      .setPopup( popupEsquina2 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.920754,10.502045])
      .setPopup( popupEsquina3 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.90360629999999,10.4805937])
      .setPopup( popupEsquina4 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.9145207,10.5042688])
      .setPopup( popupEsquina5 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.90407019999999,10.5033081])
      .setPopup( popupEsquina6 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.9042253,10.5020512])
      .setPopup( popupEsquina7 )
      .addTo( map )

       new Marker ({color: 'red'})
      .setLngLat([-66.9075192,10.5065757])
      .setPopup( popupEsquina8 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.91210319999999,10.4971013])
      .setPopup( popupEsquina9 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.91547299999999,10.504552])
      .setPopup( popupEsquina10 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.91657769999999,10.5046692])
      .setPopup( popupEsquina11 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.91612169999999,10.5068019])
      .setPopup( popupEsquina12 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.91626149999999,10.5130152])
      .setPopup( popupEsquina13 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.9192508,10.4972905])
      .setPopup( popupEsquina14 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.9143672, 10.505601])
      .setPopup( popupEsquina15 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.91285979999999,10.5061676])
      .setPopup( popupEsquina16 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.9130502,10.5052921])
      .setPopup( popupEsquina17 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.9152174,10.5056804])
      .setPopup( popupEsquina18 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([ -66.90508129999999,10.5060249])
      .setPopup( popupEsquina19 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.9138706,10.507744])
      .setPopup( popupEsquina20 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.9062976,10.506343])
      .setPopup( popupEsquina21 )
      .addTo( map )



      new Marker ({color: 'black'})
      .setLngLat([-66.9090544,10.5055485])
      .setPopup( popupEsquina22 )
      .addTo( map )

      new Marker ({color: 'black'})
      .setLngLat([-66.9048177,10.5073306])
      .setPopup( popupEsquina23 )
      .addTo( map )

      new Marker ({color: 'black'})
      .setLngLat([-66.90390289999999,10.5046304])
      .setPopup( popupEsquina24 )
      .addTo( map )

      new Marker ({color: 'black'})
      .setLngLat([-66.9053055,10.5035631])
      .setPopup( popupEsquina25 )
      .addTo( map )

      new Marker ({color: 'black'})
      .setLngLat([-66.9093699,10.5044498])
      .setPopup( popupEsquina26 )
      .addTo( map )

      new Marker ({color: 'black'})
      .setLngLat([-66.9081749394536,10.504154753186743])
      .setPopup( popupEsquina27 )
      .addTo( map )

      new Marker ({color: 'black'})
      .setLngLat([-66.90922809999999,10.5069681])
      .setPopup( popupEsquina28 )
      .addTo( map )

      new Marker ({color: 'red'})
      .setLngLat([-66.917622,10.5133797])
      .setPopup( popupEsquina29 )
      .addTo( map )

  }
  
  // ubicacion(){
  //   alert("funcionan")
  //   console.log("Probando botones");
  // }
  // data(){
  //   const inicio = this.userService.useLocation;
  //   const end = [-66.90922809999999,10.5069681]
  // }
  

  images=[
    {title: 'Esquina Amadores', short: 'Actualidad', src: "https://mentekupa.com/wp-content/uploads/2019/11/photo_2019-11-27_23-10-04.jpg"},
    {title: 'Esquina San Francisco', short: 'Actualidad', src: "https://cdn.cronica.uno/wp-content/uploads/2022/07/19054131/Esquinas-de-Caracas_43.jpg"},
    {title: 'Esquina El Chorro', short: 'Actualidad', src: "https://cdn.shortpixel.ai/spai/w_1029+q_lossy+ret_img+to_auto/https://cdn.cronica.uno/wp-content/uploads/2022/07/19054021/Esquina-el-Chorro_1A-2048x1366.jpg"}
  ]


  // // add markers to map
  // geojson.features.forEach(function(marker) {
  //   // create a HTML element for each feature
    
  //   // make a marker for each feature and add it to the map
  //   new Map.Marker(el)
  //     .setLngLat(marker.geometry.coordinates)
  //     .setPopup(
  //       new map.Popup({ offset: 25 }) // add popups
  //         .setHTML(
  //           '<h3>' +
  //             marker.properties.title +
  //             '</h3><p>' +
  //             marker.properties.description +
  //             '</p>'
  //         )
  //     )
      
  // });
}

