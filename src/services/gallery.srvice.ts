import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export  class GallerySrvice {
  constructor(private http:Http){}
  cherch(motCle:String,size:number,page:number){
    return this.http.get('https://pixabay.com/api/?key=10299384-9b20d3389ff337fea6ad0a7b0&q='
      +motCle+'&per_page='+size+'&page='+page)
      .map(resp=>resp.json())
      ;

  }

}
