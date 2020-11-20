import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public quantity = 10;
  public min = 3;
  public price = 15;
  public person = {
    name: 'Huy Trương',
    age: 20,
    school: 'Cao Thắng'
  };

  public students = [
    'huy',
    'hai',
    'trong'
  ];
  public list = [
    'lau nhà',
    'rửa chén',
    'nấu cơm'
  ];
  public index = 1;
  public listStudent = [
    {
      id: this.index++,
      name: 'huy',
      lop: '18c'
    },
    {
      id: this.index++,
      name: 'trong',
      lop: '18c'
    },
    {
      id: this.index++,
      name: 'tien',
      lop: '18d'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public display(data: any) {
    alert(data);
  }
  public up() {
    this.quantity++;

  }
  public down() {
    this.quantity--;
  }
}
