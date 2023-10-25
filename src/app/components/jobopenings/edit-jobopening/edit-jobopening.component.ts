import { Component } from '@angular/core';
import { JobOpening } from 'src/models/JobOpening';

@Component({
  selector: 'app-edit-jobopening',
  templateUrl: './edit-jobopening.component.html',
  styleUrls: ['./edit-jobopening.component.css']
})
export class EditJobopeningComponent {

  jobOpening: JobOpening = new JobOpening('', '', '', false); // Initialize with empty values

onSubmit(){}
}
