import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  firstdelete: boolean = false;
  seconddelete: boolean = false;
  thirddelete: boolean = false;
  fourthdelete: boolean = false;
  fifthdelete: boolean = false;
  sixdelete: boolean = false;

  ngOnInit() {}

  constructor(private render: Renderer2) {}

  // firstimg="../../assets/inputoutput.jpg"

  @ViewChild('first', { static: false }) first: ElementRef;
  @ViewChild('second', { static: false }) second: ElementRef;
  @ViewChild('third', { static: false }) third: ElementRef;
  @ViewChild('fourth', { static: false }) fourth: ElementRef;
  @ViewChild('fifth', { static: false }) fifth: ElementRef;
  @ViewChild('sixth', { static: false }) sixth: ElementRef;

  ngAfterViewInit() {
    // ****************************first & second clicks**********************************************//
    this.first.nativeElement.addEventListener('click', () => {
      this.render.addClass(this.first.nativeElement, 'firstwelcome');
      this.firstdelete = true;
    });

    this.second.nativeElement.addEventListener('click', () => {
      this.second.nativeElement.classList.add('secondwelcome');
      this.seconddelete = true;
    });

    // ****************************first & second clicks**********************************************//

    // $$$$$$$$$$$$$$$$$$$$$$$$$$$ third & fourth Button clicks $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//

    this.third.nativeElement.addEventListener('click', () => {
      this.third.nativeElement.classList.add('thirdwelcome');
      this.thirddelete = true;
    });
    this.fourth.nativeElement.addEventListener('click', () => {
      this.fourth.nativeElement.classList.add('fourthwelcome');
      this.fourthdelete = true;
    });
    // $$$$$$$$$$$$$$$$$$$$$$$$$$$ third & fourth Button clicks $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//

    this.fifth.nativeElement.addEventListener('click', () => {
      this.fifth.nativeElement.classList.add('fifthwelcome');
      this.fifthdelete = true;
    });
    this.sixth.nativeElement.addEventListener('click', () => {
      this.sixth.nativeElement.classList.add('sixthwelcome');
      this.sixdelete = true;
    });
  }

  deleteclick(data) {
    if (data == 'first') {
      setTimeout(() => {
        this.render.removeClass(this.first.nativeElement, 'firstwelcome');
        this.firstdelete = false;
      }, 500);
    } else if (data == 'second') {
      if (
        this.first.nativeElement.classList.length == 1 &&
        this.second.nativeElement.classList.length == 1 &&
        this.third.nativeElement.classList.length == 1 &&
        this.fourth.nativeElement.classList.length == 1 &&
        this.fifth.nativeElement.classList.length == 1 &&
        this.sixth.nativeElement.classList.length == 1
      ) {
        setTimeout(() => {
          this.second.nativeElement.remove();
          this.render.removeClass(this.third.nativeElement, 'thirdwelcome');
          this.third.nativeElement.classList.add('fourthwelcome');
          this.render.removeClass(this.fourth.nativeElement, 'fourthwelcome');
          this.fourth.nativeElement.classList.add('fifthwelcome');
          this.render.removeClass(this.fifth.nativeElement, 'fifthwelcome');
          this.fifth.nativeElement.classList.add('sixthwelcome');
          this.render.removeClass(this.sixth.nativeElement, 'sixthwelcome');
        }, 1000);
      } else {
        setTimeout(() => {
          this.render.removeClass(this.second.nativeElement, 'secondwelcome');
          this.seconddelete = false;
        }, 1000);
      }
    } else if (data == 'third') {
      setTimeout(() => {
        this.render.removeClass(this.third.nativeElement, 'thirdwelcome');
        this.thirddelete = false;
      }, 1000);
    } else if (data == 'fourth') {
      setTimeout(() => {
        this.render.removeClass(this.fourth.nativeElement, 'fourthwelcome');
        this.fourthdelete = false;
      }, 1000);
    } else if (data == 'fifth') {
      setTimeout(() => {
        this.render.removeClass(this.fifth.nativeElement, 'fifthwelcome');
        this.fifthdelete = false;
      }, 1000);
    } else if (data == 'sixth') {
      if (
        this.fifth.nativeElement.classList.length == 1 ||
        this.fourth.nativeElement.classList.length == 1 ||
        this.third.nativeElement.classList.length == 1
      ) {
        setTimeout(() => {
          this.render.removeClass(this.third.nativeElement, 'thirdwelcome');
          this.thirddelete = false;
          this.render.removeClass(this.fourth.nativeElement, 'fourthwelcome');
          this.fourthdelete = false;
          this.render.removeClass(this.fifth.nativeElement, 'fifthwelcome');
          this.fifthdelete = false;
          this.render.removeClass(this.sixth.nativeElement, 'sixthwelcome');
          this.sixdelete = false;
          this.third.nativeElement.classList.add('thirdwelcome');
          this.thirddelete = true;
        }, 500);
      } else {
        setTimeout(() => {
          this.render.removeClass(this.sixth.nativeElement, 'sixthwelcome');
          this.sixdelete = false;
        }, 1000);
      }
    }
  }
}
