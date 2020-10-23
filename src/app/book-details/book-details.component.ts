import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(
    private bs: BookStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  book: Book;

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const getSingle$ = this.bs.getSingle(params.get('isbn'));
    getSingle$.subscribe(result => this.book = result);
  }

  getRating(): Array<undefined> {
      return new Array(this.book.rating || 0);
  }

  removeBook() {
    if (confirm('Buch wirklich löschen?')) {
        const remove$ = this.bs.remove(this.book.isbn);
        remove$.subscribe(result => this.router.navigateByUrl('/books'));
    }
  }

}
