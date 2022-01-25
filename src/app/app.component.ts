import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import data from '../assets/en.json';
import { GoogleObj } from './solution';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent{
  public result = '';
  lang = new FormControl('en');

  title = 'app';
  constructor(public translate: TranslateService){
    translate.addLangs(['en','es']);
    translate.setDefaultLang('es');
    console.log(Object.values(data));
  
  }
  
  }


