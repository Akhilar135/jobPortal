import { Component, OnInit } from '@angular/core';

import { Job } from '../job';

import { JobServiceService } from '../services/job.service';

@Component({
selector: 'app-job-items',
templateUrl: './job-items.component.html',
styleUrls: ['./job-items.component.css']

})

export class JobItemsComponent implements OnInit{
jobs: Job[]=[]
constructor(private jobServices: JobServiceService){

}
ngOnInit(): void {
this.jobServices.getJobs().subscribe((job)=> this.jobs = job)
}




}