import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  houses: object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getInfo().subscribe(data => {
      this.houses = data;
      console.log(this.houses)
    })
  }

}
