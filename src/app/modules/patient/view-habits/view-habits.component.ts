import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import { PilotStudyService } from 'app/modules/pilot-study/services/pilot-study.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient, Gender } from '../models/patient';
import { PilotStudy } from 'app/modules/pilot-study/models/pilot.study';
import { FeedingHabitsRecord } from '../../habits/models/feeding';
import { FeedingRecordService } from '../../habits/services/feeding-record.service';

@Component({
  selector: 'app-view-habits',
  templateUrl: './view-habits.component.html',
  styleUrls: ['./view-habits.component.scss']
})
export class ViewHabitsComponent implements OnInit {

  patientForm: FormGroup;
  
  optionsGender: Array<string> = Object.keys(Gender);
  listPilots: Array<PilotStudy>;

  patientId: string;
  pilotStudyId: string;
  
  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private pilotStudiesService: PilotStudyService,
    private feedingService: FeedingRecordService,
    private toastService: ToastrService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) { }


  ngOnInit() {
    this.createPatientFormInit();
    this.getAllPilotStudies();
    this.activeRouter.paramMap.subscribe((params) => {
      this.patientId = params.get('patientId');
      this.pilotStudyId = params.get('pilotstudy_id');
      this.patientService.getById(this.pilotStudyId,this.patientId)
        .then( patient => {
          this.createPatientForm(patient);
        })
        .catch(errorResponse => {
          this.toastService.error('Não foi possível buscar paciente!');
          //console.log('Não foi possível buscar paciente!',errorResponse);
        });
    });
  }

  /** Create  form patient */
  createPatientFormInit() {
    this.patientForm = this.fb.group({
      id: [''],
      pilotstudy_id: [{value:'', disabled:true}],
      first_name: [{value:'', disabled:true}],
      last_name: [{value:'', disabled:true}],
      gender: [{value:'', disabled:true}],
      birth_date: [{value:'', disabled:true}]
    });
  }

  createPatientForm(patient: Patient) {
    this.patientForm = this.fb.group({
      id: [patient.id],
      pilotstudy_id: [this.pilotStudyId],
      first_name: [{value:patient.first_name, disabled:true}],
      last_name: [{value:patient.last_name, disabled:true}],
      gender: [{value:patient.gender, disabled:true}],
      birth_date: [{value:patient.birth_date, disabled:true}]
    });
  }

  

  getAllPilotStudies() {
    const userId = atob(localStorage.getItem('user'));
    this.pilotStudiesService.getAllByUserId(userId)
      .then(pilots => {
        this.listPilots = pilots;
      })
      .catch(errorResponse => {
        console.log('Não foi possivel buscar estudos pilotos!', errorResponse);
      });
  }

}
