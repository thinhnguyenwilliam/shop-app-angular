import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.scss']
})
export class TestApiComponent implements OnInit {
  posts: any[] = [];

  constructor(private readonly apiService: ApiService) { }

  ngOnInit() {
    this.fetchPosts();
  }

  // Fetch all posts
  fetchPosts() {
    this.apiService.getPosts().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    });
  }

  // Create a new post
  createPost() {
    const newPost = {
      title: 'New Post',
      body: 'This is a newly created post.',
      userId: 1,
    };

    this.apiService.createPost(newPost).subscribe((post) => {
      this.posts.unshift(post); // Add new post to the top
      console.log('Post Created:', post);
    });
  }

  // Update an existing post
  updatePost(post: any) {
    const updatedData = {
      ...post,
      title: 'Updated Title',
      body: 'This post has been updated.',
    };

    this.apiService.updatePost(post.id, updatedData).subscribe((updatedPost) => {
      this.posts = this.posts.map((p) => (p.id === post.id ? updatedPost : p));
      console.log('Post Updated:', updatedPost);
    });
  }

  // Delete a post
  deletePost(postId: number) {
    this.apiService.deletePost(postId).subscribe(() => {
      this.posts = this.posts.filter((post) => post.id !== postId);
      console.log(`Post with ID ${postId} deleted.`);
    });
  }
}
