import {Component, ElementRef, Input, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html'
})
export class PopupComponent {
  @ViewChild('mainPopup')
  popup!: TemplateRef<ElementRef>
  @Input() data: string = '';

  constructor(private modalService: NgbModal) {
  }

  open() {
    this.modalService.open(this.popup)
  }
}
