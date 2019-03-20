import {Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild} from '@angular/core';
import {MoveService} from '../_services/move.service';

@Component({
  selector: 'app-control-button',
  templateUrl: './control-button.component.html',
  styleUrls: ['./control-button.component.css'],
})
export class ControlButtonComponent implements OnInit {
  private speed:number;

  constructor(private moveService: MoveService) { }

  ngOnInit() {
  }

  @HostListener('window:keydown', ['$event'])
  keyEventDown(event: KeyboardEvent) {
    console.log(event);
    switch(event.key) {
      case 'ArrowUp' : {
        //up
        this.triggerkeydownBtnForward();
        break;
      }
      case 'ArrowDown': {
        //down
        this.triggerkeydownBtnBackward();
        break;
      }

      case 'ArrowLeft': {
        //left
        this.triggerkeydownBtnLeft();
        break;
      }

      case 'ArrowRight': {
        //right
        this.triggerkeydownBtnRight();
        break;
      }

      case 'z': {
        //up
        this.triggerkeydownBtnForward();
        break;
      }
      case 's': {
        //down
        this.triggerkeydownBtnBackward();
        break;
      }

      case 'q': {
        //left
        this.triggerkeydownBtnLeft();
        break;
      }

      case 'd': {
        //right
        this.triggerkeydownBtnRight();
        break;
      }

      default: {
        //statements;
        break;
      }
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEventUp(event: KeyboardEvent) {
    console.log(event);
    switch(event.key) {
      case 'ArrowUp': {
        //up
        this.triggerkeyupBtnForward();
        break;
      }
      case 'ArrowDown': {
        //down
        this.triggerkeyupBtnBackward();
        break;
      }

      case 'ArrowLeft': {
        //left
        this.triggerkeyupBtnLeft();
        break;
      }

      case 'ArrowRight': {
        //right
        this.triggerkeyupBtnRight();
        break;
      }

      case 'z': {
        //up
        this.triggerkeyupBtnForward();
        break;
      }
      case 's': {
        //down
        this.triggerkeyupBtnBackward();
        break;
      }

      case 'q': {
        //left
        this.triggerkeyupBtnLeft();
        break;
      }

      case 'd': {
        //right
        this.triggerkeyupBtnRight();
        break;
      }
      default: {
        //statements;
        break;
      }
    }
  }


  @ViewChild('buttonForward') buttonForward;
  triggerkeydownBtnForward() {
    this.buttonForward.nativeElement.className = "btn btn-outline-secondary btn-lg up-button active";
    this.moveService.move('forward',this.speed)
      .subscribe(data=>{
          console.log(data);
        },
        error => {

        });

  }
  triggerkeyupBtnForward() {
    this.buttonForward.nativeElement.className = "btn btn-outline-secondary btn-lg up-button";
    this.moveService.move('stop',0)
      .subscribe(data=>{
          console.log(data);
        },
        error => {
        });
  }

  @ViewChild('buttonBackward') buttonBackward;
  triggerkeydownBtnBackward() {
    this.buttonBackward.nativeElement.className = "btn btn-outline-secondary btn-lg active";
    this.moveService.move('backward',this.speed)
      .subscribe(data=>{
          console.log(data);
        },
        error => {
        });
  }
  triggerkeyupBtnBackward() {
    this.buttonBackward.nativeElement.className = "btn btn-outline-secondary btn-lg";
    this.moveService.move('stop',0)
      .subscribe(data=>{
          console.log(data);
        },
        error => {

        });
  }

  @ViewChild('buttonLeft') buttonLeft;
  triggerkeydownBtnLeft() {
    this.buttonLeft.nativeElement.className = "btn btn-outline-secondary btn-lg active";
    this.moveService.move('left',this.speed)
      .subscribe(data=>{
          console.log(data);
        },
        error => {
        });
  }
  triggerkeyupBtnLeft() {
    this.buttonLeft.nativeElement.className = "btn btn-outline-secondary btn-lg";
    this.moveService.move('stop',0)
      .subscribe(data=>{
          console.log(data);
        },
        error => {
        });
  }

  @ViewChild('buttonRight') buttonRight;
  triggerkeydownBtnRight() {
    this.buttonRight.nativeElement.className = "btn btn-outline-secondary btn-lg active";
    this.moveService.move('right',this.speed)
      .subscribe(data=>{
          console.log(data);
        },
        error => {
        });
  }
  triggerkeyupBtnRight() {
    this.buttonRight.nativeElement.className = "btn btn-outline-secondary btn-lg";
    this.moveService.move('stop',this.speed)
      .subscribe(data=>{
          console.log(data);
        },
        error => {
        });
  }

  @ViewChild('startCamera') startCamera;
  triggerkeyDownBtnStartCamera() {
    this.buttonRight.nativeElement.className = "btn btn-outline-secondary btn-lg";
    this.moveService.camera('start')
      .subscribe(data=>{
          console.log(data);
        },
        error => {
        });
  }

  triggerkeyDownBtnStopCamera() {
    this.buttonRight.nativeElement.className = "btn btn-outline-secondary btn-lg";
    this.moveService.camera('start')
      .subscribe(data=>{
          console.log(data);
        },
        error => {
        });
  }


}
