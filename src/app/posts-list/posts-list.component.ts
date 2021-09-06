import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { IPost } from './post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  public posts: IPost[] = [];

  constructor(private _postsService: PostsService) { }

  ngOnInit(): void {
    this._postsService.getPosts()
      .subscribe(data => this.posts = data);
  }

}
