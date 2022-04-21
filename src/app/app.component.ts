import { Component } from '@angular/core';

export interface UserElement{
  id:number,
  name: string;
  position: string;
  company: string,
  phone: number;
  city: string;
}  

interface Food {
  value: string;
  viewValue: string;
}


const USER_DATA: UserElement[] = [
  {id: 1, name: 'Jos', position: 'Frontend Developer', company: 'Google', phone: 1204567890, city: 'US'},
  {id: 2, name: 'Ross', position: 'Java Developer', company: 'Microsoft', phone: 1564567890, city: 'Londan'},  
  {id: 3, name: 'Chandler', position: 'Pyton Developer', company: 'Accenture', phone: 1234567890, city: 'UK'},
  {id: 4, name: 'Joey', position: 'Backend Developer', company: 'Adobe', phone: 1234595590, city: 'Paris'},
  {id: 5, name: 'Max', position: 'Fullstack Developer', company: 'Google', phone: 1234589890, city: 'Greece'},  
];  




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'name', 'position', 'company', 'phone', 'city'];

  dataSource= USER_DATA;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


}
