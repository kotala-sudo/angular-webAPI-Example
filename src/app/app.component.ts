import { HttpClient } from '@angular/common/http';
//import { error } from '@angular/compiler/src/util';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: any[] = [];

  constructor(private http: HttpClient) {
    // this.loadPosts();
  }

  loadPosts() {
    // this.http
    //   .get('https://jsonplaceholder.typicode.com/posts')
    //   .subscribe((response) => {
    //     // alert(JSON.stringify(response));
    //   });

    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((posts: any[]) => {
        this.posts = posts;
      });
  }

  createPosts() {
    this.http.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'Hello World',
      body: 'This is body'

    }).subscribe(
      (response) => {
        alert(JSON.stringify(response));
      }
      // ,
      // (error) => {
      //   alert(JSON.stringify(error));
      // }
    );
  }
}
