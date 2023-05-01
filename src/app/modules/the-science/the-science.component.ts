import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-the-science',
  templateUrl: './the-science.component.html',
  styleUrls: ['./the-science.component.scss'],
})
export class TheScienceComponent implements OnInit {
  constructor(private titleService: Title) {}
  ngOnInit(): void {
    this.titleService.setTitle('The Science - BioAge');
  }
}
