import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) {}

  contactProfile = {
    profile: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/himanshu8605',
        iconUrl: './assets/icons/facebook.svg'
      },      
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/_freakytraveller_/',
        iconUrl: './assets/icons/instagram.svg'
      },
      {
        name: 'LinkedIn',
        url: 'www.linkedin.com/in/himanshu8605',
        iconUrl: './assets/icons/linkedin.svg'
      },    
        {
          name: 'GitHub',
          url: 'https://github.com/himanshu8605',
          iconUrl: './assets/icons/github.svg'
        }      
    
    ]
  
  };

  email = {
    name: 'Email',
    url: 'mailto:him8605@gmail.com',
    iconUrl: './assets/icons/email.svg'
  };

 
  ngOnInit() {}

  onBackClick() {
    this.router.navigateByUrl('/');
  }
}
