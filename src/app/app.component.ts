import { Component, OnInit } from '@angular/core';
import { HttpProjectService } from './http-project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Nguza';

  constructor(private httpProjectService: HttpProjectService) { }

  ngOnInit() {
    this.getName();
  }

  getName() {
    this.httpProjectService.getName(this.name).subscribe(
      (data: any) => {
        this.name = data.name;
      },
      (error: any) => {
        console.log(this.name)
      }
    );
  }
}
