import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { subscribeOn} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  iduser:any
  show:boolean=false
  message:string=''
  users: any;

  //  users=[{name:"Ali",id:1,color:"Blue"},
  //        {name:"Sami",id:2,color:"Red"},
  //        {name:"Wafa",id:3,color:"Green"}
  //      ]
  constructor( private userService:UserService){}
  ngOnInit(): void {
    this.userService.getListUser().subscribe (data=>{
      this.users=data
      console.log(data)
    });
    
  }
  onDelete(id:any){
console.log("id",id)
this.iduser=id
this.show=true
  }
  cancelAction(){
    this.show=false
  }
}