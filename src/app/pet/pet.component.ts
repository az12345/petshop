import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { AppPetService } from '../shared/pet.service'
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html'
})
export class PetComponent implements OnInit {

  constructor(public petService: AppPetService, public toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.petService.selectedPet = {
      id: null,
      name: '',
      age: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      this.petService.postPet(form.value)
        .subscribe(data => {
          console.log(data);
        });
      this.resetForm(form);
      this.petService.getPetList();
      this.toastr.success('New Record Added Succcessfully', 'Pet Register');
    }
    else {
      this.petService.putPet(form.value.id, form.value)
        .subscribe(data => {
          setTimeout(()=>{ console.log(data) }, 4000);
          // console.log(data);
        });
      this.resetForm(form);
      this.petService.getPetList();
      this.toastr.info('Record Updated Successfully!', 'Pet Register');
    }
  }
}
