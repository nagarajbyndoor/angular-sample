import { Component, OnInit } from '@angular/core';
import { Router , Params} from '@angular/router'; // router service
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public selectedId;
  constructor(private router : Router, private route :ActivatedRoute ) { }

  contacts = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"React"},
    {"id":3, "name":"Node"},
    {"id":4, "name":"Java"},
    {"id":5, "name":"Php"}  
  ];

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      let id = parseInt(params['id']);
      this.selectedId = id;
    })
  }


  onSelect(contact) {
    console.log(contact.id);
    // this.router.navigate(['/contact',contact.id]);    
    this.router.navigate([contact.id], {relativeTo:this.route});
  }

  isSelected(contact) {
    return contact.id === this.selectedId;
  }
} 
