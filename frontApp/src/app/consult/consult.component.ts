import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css'],
})
export class ConsultComponent implements OnInit {
  gerentes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/gerentes').subscribe((response: any) => {
      const data = response.data;
      if (data.length !== 0) {
        this.gerentes = data;
      }
    });
  }
}
