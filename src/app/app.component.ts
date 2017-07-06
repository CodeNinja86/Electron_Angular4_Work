import { Component, OnInit } from '@angular/core';
import * as fs from 'fs-extra';

@Component({
  selector: 'app-body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  ngOnInit() {
    // testing a npm module inside angular app just to make sure it works
    fs.readJson('./bundle/assets/sample.json', (err, obj) => {
      // tslint:disable-next-line:curly
      if (err) console.error(err);

      console.log(obj);
    });
  }
}
