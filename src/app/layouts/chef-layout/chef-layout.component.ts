import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chef-layout',
  templateUrl: './chef-layout.component.html',
  styleUrls: ['./chef-layout.component.css']
})
export class ChefLayoutComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit() {
    
  }

  logout(){
    localStorage.clear()
    this.router.navigateByUrl("/login")

  }
}
