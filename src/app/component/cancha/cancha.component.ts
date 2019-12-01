import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancha',
  templateUrl: './cancha.component.html',
  styleUrls: ['./cancha.component.css']
})
export class CanchaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router) { }
  items = [];
  ngOnInit() {
    console.log(history.state);
    if (history.state == null){
      this.router.navigateByUrl("/establecimiento");
    }else{
      this.items = history.state.cancha;
    }
  }


}
