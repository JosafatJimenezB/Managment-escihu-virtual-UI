import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'no-content',
  templateUrl: 'no-content.component.html'
})

export class NoContentComponent implements OnInit {
  constructor() { }

  @Input() title : string = 'No content';

  @Input() message: string = 'Nothing to show here.';

  ngOnInit() { }
}
