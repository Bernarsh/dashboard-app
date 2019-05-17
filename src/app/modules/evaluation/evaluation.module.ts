import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatPaginatorModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { EvaluationComponentComponent } from './evaluation-component/evaluation-component.component';
import { EvaluationRoutingModule } from './evaluation-routing/evaluation-routing.module';
import { NutritionEvaluationComponent } from './nutrition-evaluation/nutrition-evaluation.component';
import { NutritionEvaluationTableComponent } from './nutrition-evaluation-table/nutrition-evaluation-table.component';
import { SharedModule } from 'app/shared/shared.module';
import { EvaluationService } from './services/evaluation.service';
import { NutritionEvaluationService } from './services/nutrition-evaluation.service';
import { EvaluationStatustPipe } from './pipes/evaluation-status.pipe';
import { EvaluationListComponent } from './evaluation-list/evaluation-list.component';
import { StudiesComponent } from './studies/studies.component';
import { PatientsComponent } from './patients/patients.component';
import { NutritionClassificationtPipe } from './pipes/nutrition-classification.pipe';
import { OverweigthClassificationPipe } from './pipes/overweigth-classification.pipe';
import { BloodglucoseClassificationPipe } from './pipes/bloodglucose-classification.pipe';
import { BloodpressureClassificationPipe } from './pipes/bloodpressure-classification.pipe';
import { MeasurementModule } from '../measurement/measurement.module';

@NgModule({
  declarations: [
    /** components */
    EvaluationComponentComponent,
    NutritionEvaluationComponent,
    NutritionEvaluationTableComponent,
    EvaluationListComponent,
    StudiesComponent,
    PatientsComponent,
    /** pipes */
    EvaluationStatustPipe,
    NutritionClassificationtPipe,
    OverweigthClassificationPipe,
    BloodglucoseClassificationPipe,
    BloodpressureClassificationPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatPaginatorModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,

    SharedModule,
    EvaluationRoutingModule,
    MeasurementModule
  ],
  providers: [
    /** services */
    EvaluationService,
    NutritionEvaluationService,
    /** pipes */
    EvaluationStatustPipe,
    DatePipe,
    NutritionClassificationtPipe,
    OverweigthClassificationPipe,
    BloodglucoseClassificationPipe,
    BloodpressureClassificationPipe
  ]
})
export class EvaluationModule { }
