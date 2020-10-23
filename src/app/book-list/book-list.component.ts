import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(
    private bs: BookStoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const getAll$ = this.bs.getAll();
    getAll$.subscribe(result => this.books = result);
  }

  restoreList() {
    const restore$ = this.bs.restore();
    restore$.subscribe(result => window.location.reload());
  }

}
