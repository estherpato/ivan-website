import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-text',
  templateUrl: './link-text.component.html',
  styleUrls: ['./link-text.component.scss']
})
export class LinkTextComponent implements OnInit {
  @Input('text') text: string = "";
  @Input('link') link: string = "";
  
  constructor() { }

  ngOnInit() {
  }

}
