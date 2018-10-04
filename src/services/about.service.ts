import {Injectable} from '@angular/core';

@Injectable()
export class  AboutService {
  info = {
    nom: 'Mohamed El Moustapha',
    email: 'med.mostafaa@gmail.com',
    tel: 56324195
  };

  comments = [
    {date: new Date(), message: 'AAAAA'},
    {date: new Date(), message: 'BBBBB'},
    {date: new Date(), message: 'CCCCC'},
  ];

  addCommante(c) {
    c.date = new Date();
    this.comments.push(c);
  }
  getAllComments() {
    return this.comments;
  }
  getInfo() {
    return this.info;
  }
}
