import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  

  let actualID="main-page";
  function openMainPagefos(){
      document.getElementById("main-page").removeAttribute("style")
      document.getElementById("ourservices-page").setAttribute("style", "display:none;")
      actualID="main-page";
}
  function openOurServicesfh(){
      document.getElementById("main-page").setAttribute("style", "display:none;")
      document.getElementById("ourservices-page").removeAttribute("style")
      actualID="ourservices-page";
      
}
  function openMainPagefas(){
      document.getElementById("main-page").removeAttribute("style")
      document.getElementById("aboutus-page").setAttribute("style", "display:none;")
      actualID="main-page";
}
  function openAboutUsfh() {
      document.getElementById("main-page").setAttribute("style", "display:none;")
      document.getElementById("aboutus-page").removeAttribute("style")
      actualID="aboutus-page";
  }
  
  function scrollTop() {
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
  }
  function closeMenu() {
      document.getElementById("mobilemenu").setAttribute("style", "display:none;")
  }
  function openMenu() {
      document.getElementById("mobilemenu").removeAttribute("style")
  }
  function openAboutUs() {
      if(actualID!=="aboutus-page"){
      document.getElementById("mobilemenu").setAttribute("style", "display:none;")
      document.getElementById("aboutus-page").removeAttribute("style")
      document.getElementById("ourservices-page").setAttribute("style", "display:none;")
      document.getElementById(actualID).setAttribute("style", "display:none;")
      actualID="aboutus-page";}
  }
  function openOurServices() {
      if(actualID!=="ourservices-page"){
      document.getElementById("mobilemenu").setAttribute("style", "display:none;")
      document.getElementById("ourservices-page").removeAttribute("style")
      document.getElementById("aboutus-page").setAttribute("style", "display:none;")
      document.getElementById(actualID).setAttribute("style", "display:none;")
      actualID="ourservices-page";
      }
  }
















  }



}
