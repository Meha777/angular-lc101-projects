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
  displayList: Satellite[];

  constructor() {
    this.sourceList = [];
    this.displayList = []; 
    const satellitesUrl = '../assets/satellites.json';
    window.fetch(satellitesUrl).then(function(response) {

       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;

          for (let i = 0; i < fetchedSatellites.length; i++){
            let satellite = new Satellite(fetchedSatellites[i].name, 
              fetchedSatellites[i].type, fetchedSatellites[i].launchDate, 
              fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
              this.sourceList.push(satellite);
              
          };
            
        
          
          this.displayList = this.sourceList.slice(0);
      }.bind(this));

    }.bind(this));
    
  };

  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let i=0; i < this.sourceList.length; i++) {
       let name = this.sourceList[i].name.toLowerCase();
       if (name.indexOf(searchTerm) >= 0) {

        matchingSatellites.push(this.sourceList[i])
       };
       
      
    }; 
    
    this.displayList = matchingSatellites;
  };
  
 
    
    
   
};




