import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SurangaAiya';


  provinceDistricMap = new Map<String, any[]>();

  districAreaMap = new Map<String, any[]>();

  provinces = ["western", "central"];
  districs = [];
  areas = [];

  ngOnInit() {


    this.provinceDistricMap.set("western", ["colombo", "gampaha"]);
    this.provinceDistricMap.set("central", ["kandy", "N-eliya"]);

    this.districAreaMap.set("colombo", ["colombo-1", "colombo-2"]);
    this.districAreaMap.set("gampaha", ["gamapah1-1", "gampaha-2"]);
    this.districAreaMap.set("kandy", ["kandy-1", "kandy-2"]);
    this.districAreaMap.set("N-eliya", ["N-eliya-1", "N-eliya-2"]);
  }
  selectProvince(event: any) {
    this.districs = this.provinceDistricMap.get(event.target.value);
  }

  selectDistrict(event: any) {
    this.areas = this.districAreaMap.get(event.target.value);
  }
  selectArea(event: any) {
    console.log(event.target.value);
  }
}
