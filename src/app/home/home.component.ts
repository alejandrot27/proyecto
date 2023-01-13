import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  

  center ={lat:24 , lng:12}
  zoom= 15;
  display?:google.maps.LatLngLiteral

  // constructor(){}

  //  home(){
  //   console.log(this.center)
  //   console.log(this.zoom)
  //   console.log(this.display)
  //  }
}
