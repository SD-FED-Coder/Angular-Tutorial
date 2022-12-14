import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-component',
  templateUrl: './right-component.component.html',
  styleUrls: ['./right-component.component.css']
})
export class RightComponentComponent implements OnInit {

  SelectNumber = 0;
  books1 = null;
  books = [
    {
      'bookid': 101,
      'bookname': 'Ean? Etharku? Eppadi?',
      'author': 'Sujatha',
      'bookstatus': 'Available',
      'category': 'education'
    },
    {
      'bookid': 102,
      'bookname': 'Ponniyin Selvan',
      'author': 'Kalki',
      'bookstatus': 'Available',
      'category': 'history'
    },
    {
      'bookid': 103,
      'bookname': 'Kaasum Pirappum',
      'author': 'Balakumaran',
      'bookstatus': 'Available',
      'category': 'novel'
    },
    {
      'bookid': 104,
      'bookname': 'Udayar',
      'author': 'Balakumaran',
      'bookstatus': 'Available',
      'category': 'history'
    },
    {
      'bookid': 105,
      'bookname': 'En Iniya Iyanthira',
      'author': 'Sujatha',
      'bookstatus': 'Not Available',
      'category': 'sci-fic'
    },
    {
      'bookid': 106,
      'bookname': 'Thirukkural',
      'author': 'Thiruvalluvar',
      'bookstatus': 'Available',
      'category': 'education'
    },
    {
      'bookid': 107,
      'bookname': 'Vandhargal Vendrargal',
      'author': 'Madhan',
      'bookstatus': 'Available',
      'category': 'history'
    },
    {
      'bookid': 108,
      'bookname': 'Maths Puzzle',
      'author': 'Shakuntala Devi',
      'bookstatus': 'Not Available',
      'category': 'education'
    },
    {
      'bookid': 109,
      'bookname': 'Sorgha Theevu',
      'author': 'Sujatha',
      'bookstatus': 'Not Available',
      'category': 'sci-fic'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
