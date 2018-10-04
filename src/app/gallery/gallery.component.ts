import { Component, OnInit,Pipe } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {INT_TYPE} from '@angular/compiler/src/output/output_ast';
import {GallerySrvice} from '../../services/gallery.srvice';
// import { map } from 'rxjs/operator';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  curentPage:number=1;
  size:number=12;
  dataform={};
  totalPages:number=0;
  pages:Array<number>=[];
  motCle:String="";
  pagePhotos:any;
  constructor(private galleryService:GallerySrvice){ }
  onCherch(dataForm){
     this.galleryService.cherch(dataForm.motCle,this.size,this.curentPage)
       .subscribe(data=>{

       this.pagePhotos=data;
       this.totalPages=data.totalHits/this.size;

       if(data.totalHits % this.size !=0) this.totalPages=Math.round(this.totalPages);
         console.log(this.totalPages);
       this.pages=new Array(this.totalPages);


       },err=>{
         console.log(err);
       });

  }
  goToPage(i){
    this.curentPage=i+1;

    this.onCherch(this.dataform={motCle:this.motCle});
  }
  ngOnInit() {
  }

}
