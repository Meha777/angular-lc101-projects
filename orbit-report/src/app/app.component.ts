import { Component } from '@angular/core';
import {Satellite} from './satellite' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];

  constructor() {
    this.sourceList = [];
    const satellitesUrl = '../assets/satellites.json';
    window.fetch(satellitesUrl).then(function(response) {

       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;

          for (let i = 0; i < fetchedSatellites.length; i++){
            let satellite = new Satellite(fetchedSatellites[i].name, 
              fetchedSatellites[i].type, fetchedSatellites[i].launchDate, 
              fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
              this.sourceList.push(satellite)

              //  for (let i = 0; i < fetchedSatellites.length; i++)
              //   if (satellite.type === 'Space Debris') {
              //     ShouldShowWarning();
              //   }
               

          };
          // TODO: loop over satellites
          // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
          // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
 

      }.bind(this));

    }.bind(this));
    
    };
 };



