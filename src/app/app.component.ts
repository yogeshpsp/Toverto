import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
selectedItem;
users;
list;
update;
hide=false;
hideupdateform=false;
  constructor(private service:UserService,private router:Router){
   
  }
addVendor(){
  this.hide=true;
}
onSubmit(data){
this.service.newuser(data).subscribe((d)=>{
  return console.warn("Added Successfully");
})
}
deleteUser(data){
  this.service.deleteuser(data).subscribe((data)=>{
    return console.warn("Deleted Successfully");
  });
}
updateUser(data){
this.hideupdateform=true;
this.update=data;
console.warn("just checking"+this.update.id)
}

putUpdate(data){
this.service.updateuser(this.update.id,data).subscribe((data)=>{
  return console.warn("Updated Successfully")
})
}
  ngOnInit(){
    this.selectedItem=2;
    this.service.getUser().subscribe(d=>this.users=d);
  }
}
