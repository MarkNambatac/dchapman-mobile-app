import { Component, OnInit, ViewChild, AfterContentInit, ElementRef } from '@angular/core';
import leaflet from 'leaflet'
import { Geolocation } from '@ionic-native/geolocation/ngx'
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})


export class LocationPage implements OnInit {
  @ViewChild('mapid',{static: false}) mapContainer: ElementRef;
  map: any;


  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    this.loadmap();
  }

  loadmap() {
    var myProfile = leaflet.icon({
      iconUrl: '../../assets/img/jan1.png',
      iconSize: [38, 50],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    })
    var myicon = leaflet.icon({
        iconUrl: '../../assets/icon/logo.png',
        iconSize:     [38, 50],
        iconAnchor:   [22, 94],
        popupAnchor:  [0, 0]
      });

    this.map = leaflet.map("mapid").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 20
    }).on('locationfound', (e) => {
      let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([e.latitude, e.longitude], {icon: myProfile})
      let marker1: any = leaflet.marker([ 8.2284685,124.2364906], {icon: myicon}).bindPopup("Iligan City Police Station 5")
      let marker2: any = leaflet.marker([ 8.2435025,124.2574229], {icon: myicon}).bindPopup("Iligan City Police Station 1")
      let marker3: any = leaflet.marker([ 8.2174394,124.2379843], {icon: myicon}).bindPopup("Iligan City Police Station 4")
      let marker4: any = leaflet.marker([ 8.1995121,124.2476892], {icon: myicon}).bindPopup("Philippine National Police Iligan City Camp Tomas L. Cabili ")
      let marker5: any = leaflet.marker([ 8.2918053,124.2556654], {icon: myicon}).bindPopup("Iligan City Police Station 3 ")
      let marker6: any = leaflet.marker([  8.2432102,124.256503], {icon: myicon}).bindPopup("ILIGAN CITY TRAFFIC MANAGEMENT & PARKING OFFICE  ")
      markerGroup.addLayer(marker);
      markerGroup.addLayer(marker1)
      markerGroup.addLayer(marker2)
      markerGroup.addLayer(marker3)
      markerGroup.addLayer(marker4)
      markerGroup.addLayer(marker5)
      markerGroup.addLayer(marker6)
      this.map.addLayer(markerGroup);
      }).on('locationerror', (err) => {
       
    })


 
  }

}
