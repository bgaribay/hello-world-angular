import { Component } from '@angular/core';
import {MaxService } from './max.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Barbara';
  subtitle = 'Angular 5 Class at MAX';
  names: string[] = [
    "Barbara", "Tamara", "Will", "Keith"
, "Greg" ];
showAngularImage: boolean = true;

aboutText: string = "This About Component created by Barbara Garibay";

buttonClick(): void {
  this.showAngularImage = !this.showAngularImage;
}

constructor(private max: MaxService) {
  console.log(this.max.about);
  }
}
