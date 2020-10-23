import { Component, OnInit } from '@angular/core';
import { Book } from './shared/book';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BookMonkey';

  // type State = "list" | "details";
  viewState = "list";

  book: Book[];

  showDetails(book) {
    this.viewState = "details";
    this.book = book;
    console.log(this.book);
  }

  showList() {
    this.viewState = "list";
  }

  ngOnInit(): void { }

}
