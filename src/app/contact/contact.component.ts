import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  countries: any[];
  phonePrefix: string;
  flagPrefix: any;
  currencyPrefix: any;
  timePrefix: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://restcountries.eu/rest/v2/')
      .subscribe((res: any[]) => this.countries = res)
  }


  changeCountry(country) {
    this.phonePrefix = country.value.code;
    this.flagPrefix = country.value.flags;
    console.log(this.flagPrefix);
    this.currencyPrefix = country.value.currency;
    console.log(this.currencyPrefix);
    this.timePrefix = country.value.time;
  }
}
