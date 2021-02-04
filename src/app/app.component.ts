import { Component,ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit,AfterViewInit {


  ngOnInit(){

    if(this.sixthdeleteicon){
      this.sixthdeleteicon.addEventListener('click',()=>{
        debugger;
        console.log("ghhh")
      })
      }

  }

  // firstimg="../../assets/inputoutput.jpg"
  sixthdeleteicon:any;

@ViewChild("first",{static:false}) first:ElementRef
@ViewChild("second",{static:false}) second:ElementRef
@ViewChild("third",{static:false}) third:ElementRef
@ViewChild("fourth",{static:false}) fourth:ElementRef
@ViewChild("fifth",{static:false}) fifth:ElementRef
@ViewChild("sixth",{static:false}) sixth:ElementRef
 
  ngAfterViewInit() {

   

  
  
// ****************************first & second clicks**********************************************//
this.first.nativeElement.addEventListener('click',()=>{
  this.first.nativeElement.classList.add('welcome');
  this.first.nativeElement.innerHTML=`<i id="firsticon" class="fa fa-trash fa-3x" aria-hidden="true"></i>`
})

this.second.nativeElement.addEventListener('click',()=>{
  this.second.nativeElement.classList.add('welcome');
  this.second.nativeElement.innerHTML=`<i id="firsticon" class="fa fa-trash fa-3x" aria-hidden="true"></i>`
})

// ****************************first & second clicks**********************************************//

// $$$$$$$$$$$$$$$$$$$$$$$$$$$ third & fourth Button clicks $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//

this.third.nativeElement.addEventListener('click',()=>{
  
  this.third.nativeElement.classList.add('welcome');
  this.third.nativeElement.innerHTML=`<i id="firsticon" class="fa fa-trash fa-3x" aria-hidden="true"></i>`
})
this.fourth.nativeElement.addEventListener('click',()=>{
  this.fourth.nativeElement.classList.add('welcome');
  this.fourth.nativeElement.innerHTML=`<i id="firsticon" class="fa fa-trash fa-3x" aria-hidden="true"></i>`
})
// $$$$$$$$$$$$$$$$$$$$$$$$$$$ third & fourth Button clicks $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//


this.fifth.nativeElement.addEventListener('click',()=>{
  // this.fifth.nativeElement.innerHTML=`<img src="${this.firstimg}" height="200" width="200">
  // <i id="fifthicon" class="fa fa-trash fa-3x" aria-hidden="true"></i>`

  this.fifth.nativeElement.classList.add('welcome');
  this.fifth.nativeElement.innerHTML=`<i id="firsticon" class="fa fa-trash fa-3x" aria-hidden="true"></i>`
})
this.sixth.nativeElement.addEventListener('click',()=>{
  this.sixth.nativeElement.classList.add('welcome');
  this.sixth.nativeElement.innerHTML=`<i id="firsticon" class="fa fa-trash fa-3x" aria-hidden="true"></i>`
  this.sixthdeleteicon=this.sixth.nativeElement.childNodes[0]

})






  }



  
 


}
