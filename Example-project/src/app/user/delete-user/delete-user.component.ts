import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})

export class DeleteUserComponent {
  @Input("UserId")
  UserId:number=0
  @Output()
  close=new EventEmitter()
  @Output()
  save=new EventEmitter()
  closeAction(){
    this.close.emit(true)
  }
  saveAction(){
    this.close.emit(true)
    this.save.emit("deleted")
  }
}
