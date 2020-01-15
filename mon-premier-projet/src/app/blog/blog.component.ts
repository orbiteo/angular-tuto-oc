import { Component, OnInit, Input } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postDetail: string;

  nbLikes : number = 0;
  nbDislikes : number = 0;
  date = new Date();

  constructor() { }

  ngOnInit() {
  }

  likeIt() {
    this.nbLikes++;
    this.getColor();
  }
  DontLikeIt() {
    this.nbDislikes++;
    this.getColor();
  }

  getColor() {
    if(this.nbLikes > this.nbDislikes) {
      return 'green';
    } else if(this.nbLikes < this.nbDislikes) {
      return 'red';
    }
  }

}
