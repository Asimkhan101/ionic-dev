import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent implements OnInit {

 @Input() hasHeader: boolean;
 @Input()hasfooter: boolean;

 @Input() status: string;
 @Input() updatedAt: string;
 @Input() createdAt: string;
 @Input() notes: string;
 @Input() name: string;
 @Input()  color: string;
 @Input() slot: string;

   constructor(private router: Router) { }

  ngOnInit() {}
  goToPickupcall(){

    this.router.navigate(['pickup-calls']);
  }

}
