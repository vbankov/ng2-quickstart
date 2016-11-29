import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: 'app/components/main/main.component.html'
})
export class MainComponent implements OnInit {
  constructor(){}

  ngOnInit(){
      console.log('main component init');
  }
}
