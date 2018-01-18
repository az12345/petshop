import { Component, OnInit } from '@angular/core';

import { AppPetService } from '../shared/pet.service'
import { Pet } from '../shared/pet.project';
import { ToastrService } from 'ngx-toastr';
import {delay} from "rxjs/operator/delay";
@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html'
})
export class PetListComponent implements OnInit {

  constructor(public petService: AppPetService,public toastr : ToastrService) { }

  ngOnInit() {
    this.petService.getPetList();
  }

  showForEdit(pet: Pet) {
    this.petService.selectedPet = Object.assign({}, pet);
  }


  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.petService.deletePet(id)
        .subscribe(x => {
          // setTimeout(()=>{
            this.petService.getPetList();
          // },3000);
        });

      // console.log(this.petService.getPetList());
      this.toastr.warning("Deleted Successfully","Pet Register");
    }
  }

}
