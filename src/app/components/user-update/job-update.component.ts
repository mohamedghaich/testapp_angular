import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-job-update',
  templateUrl: './job-update.component.html',
  styleUrls: ['./job-update.component.css']
})
export class JobUpdateComponent {
  // iddelete!: number;
  // idupdate!: number;
  // showDeleteDialog = false;
  // showUpdateDialog = false;
  // updateForm: FormGroup = this.formBuilder.group({
  //   id: ['', Validators.required],
  //   title: ['', Validators.required],
  //   description: ['', Validators.required],
  //   image: ['', Validators.required]
  // });

  // constructor(
  //   private jobService: JobService,
  //   private formBuilder: FormBuilder
  //   // private modalService: NgbModal
  // ) { }

  // ngOnInit() {
  //   this.getJobs();
  //   this.updateForm = this.formBuilder.group({
  //     id: ['', Validators.required],
  //     title: ['', Validators.required],
  //     description: ['', Validators.required],
  //     image: ['', Validators.required]
  //   });
  // }
  // getJobs(): void {
  //   this.jobService.getJobs().subscribe(
  //     (jobs: Job[]) => {
  //       this.jobs = jobs;
  //     },
  //     (error: any) => {
  //       console.error('Error retrieving jobs:', error);
  //     }
  //   );
  // }

  // confirmDelete(job: Job) {
  //   this.iddelete = job.id;
  //   this.showDeleteDialog = true;
  // }

  // closeDeleteDialog() {
  //   this.showDeleteDialog = false;
  // }

  // deleteJob() {
  //   this.jobService.deleteJob(this.iddelete).subscribe(
  //     response => {
  //       console.log('Job deleted successfully!');
  //     },
  //     error => {
  //       console.log('Failed to delete job:', error);
  //     }
  //   );
  //   this.closeDeleteDialog();
  // }

  // openUpdateDialog(job: Job) {
  //   this.idupdate = job.id;
  //   this.updateForm.patchValue({
  //     id: job.id,
  //     title: job.title,
  //     description: job.description,
  //     image: job.image
  //   });
  //   this.showUpdateDialog = true;
  // }

  // closeUpdateDialog() {
  //   this.showUpdateDialog = false;
  // }

  // updateJob() {
  //   if (this.updateForm.valid) {
  //     const jobData = this.updateForm.value;
  //     console.log(jobData);
  //     this.jobService.updateJob(jobData).subscribe(
  //       response => {
  //         console.log('Job updated successfully!');
  //       },
  //       error => {
  //         console.log('Failed to update job:', error);
  //       }
  //     );
  //     this.closeUpdateDialog();
  //   }
  // }
}
