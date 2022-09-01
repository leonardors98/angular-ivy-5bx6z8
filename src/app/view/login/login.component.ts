import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  selectedCities: string[] = [];

  selectedCategories: any[] = ['Technology', 'Sports'];

  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' },
  ];

  checked: boolean = false;

  ngOnInit() {
    this.selectedCategories = this.categories.slice(1, 3);
  }
}
