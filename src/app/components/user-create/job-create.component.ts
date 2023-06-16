import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css']
})
export class JobCreateComponent {
  // jobForm: FormGroup= this.formBuilder.group({
  //   title: ['', Validators.required],
  //   description: ['', Validators.required],
  //   image:['',Validators.required]
  // });;

  // constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  // ngOnInit() {
  //   this.jobForm = this.formBuilder.group({
  //     title: ['', Validators.required],
  //     description: ['', Validators.required],
  //     image:['',Validators.required]
  //   });
  // }

  // addJob() {
  //   if (this.jobForm.valid) {
  //     const jobData = this.jobForm.value;
  //     this.api.createJob(jobData).subscribe(
  //       response => {
  //         console.log('Job added successfully!');
  //         this.jobForm.reset();
  //       },
  //       error => {
  //         console.log('Failed to add job:', error);
  //       }
  //     );
  //   }
  // }
}
