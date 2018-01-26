import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { parse } from 'querystring';

@Component({
  template: `<h3>You selected user with id :{{contactId}} </h3>
              <a (click)="goPrevious()"><button class = "btn btn-info"><<Previous</button></a>
              <a (click)="goNext()"><button class = "btn btn-info">Next>></button></a>
              <p>
                <button (click)="goToContact()" class="btn btn-danger">Back</button>
              </p>
              `
})
export class ContactDetailComponent implements OnInit {
  public contactId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  // ngOnInit() {
  //   let id = parseInt(this.route.snapshot.params['id']);
  //   this.contactId = id;
  // }
  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      let id = parseInt(params['id']);
      this.contactId = id;
    })
  }

  goPrevious() {
    let previousId = this.contactId - 1;
    this.router.navigate(['contact', previousId]);
  }

  goNext() {
    let nextId = this.contactId + 1;
    this.router.navigate(['contact', nextId]);
  }

  goToContact() {
    let selectedId = this.contactId ? this.contactId : null;
    // this.router.navigate(['contact',{id:selectedId, random:"random"}]);
    this.router.navigate(['../', {id:selectedId}, {relativeTo:this.route} ]);
  }

}
