import { Component, OnInit, TemplateRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  modalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('What to do - BioAge');
  }
  openRefModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-lg modal-dialog-centered',
    });
  }
}
