import { Component, OnInit } from '@angular/core';
import { FeedbackModalComponent } from '@shared/components/feedback-modal/feedback-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  bsModalRef!: BsModalRef;
  title = "";
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.bsModalRef = this.modalService.show(FeedbackModalComponent, {
    //     animated: true,
    //     class: 'feedback-modal-wrapper'
    //   });
    // }, 2000);
  }
}
