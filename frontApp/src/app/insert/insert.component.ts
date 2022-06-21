import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css'],
})
export class InsertComponent {
  text = '';

  constructor(private http: HttpClient) {}

  insert(): void {
    const data = {
      id: (document.getElementById('id') as HTMLInputElement).value,
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
    };

    this.http
      .post('http://localhost:3000/gerentes', data)
      .subscribe((responseData: any) => {
        this.text = responseData.text;
      });
  }
}
