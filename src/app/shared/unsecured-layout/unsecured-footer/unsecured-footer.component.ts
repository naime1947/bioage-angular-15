import { Component } from '@angular/core';

@Component({
  selector: 'app-unsecured-footer',
  templateUrl: './unsecured-footer.component.html',
  styleUrls: ['./unsecured-footer.component.scss']
})
export class UnsecuredFooterComponent {
  year = new Date().getFullYear();

}
