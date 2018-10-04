import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
       info: any;
       commentaire = {date: null, message: ''};
       comments = [];
  constructor(private aboutService: AboutService) {
    this.info = this.aboutService.getInfo();
    this.comments = this.aboutService.getAllComments();

  }

  onAddCommentaire(c) {
    this.aboutService.addCommante(c);
    this.commentaire.message = '';

  }
  ngOnInit() {
  }

}
