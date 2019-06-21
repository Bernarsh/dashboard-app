import {Component, OnInit} from '@angular/core';

import {HttpErrorResponse} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {AdminService} from '../services/admin.service';
import {HealthProfessionalService} from '../services/health-professional.service';
import {IUser, HealtArea, Admin} from '../models/users';
import {UserService} from '../services/users.service';
import {AuthService} from 'app/security/auth/services/auth.service';
import {LocalStorageService} from "../../../shared/shared-services/localstorage.service";

@Component({
    selector: 'admin-configurations',
    templateUrl: './configurations.component.html',
    styleUrls: ['./configurations.component.scss']
})
export class AdminConfigurationsComponent implements OnInit {
    userId: string;

    visibilityButtonSave: boolean;
    disabledButtonEdit: boolean;
    user: IUser;

    healthAreaOptions = Object.keys(HealtArea);

    email: string;
    password: string;  

    constructor(
        private adminService: AdminService,
        private healthService: HealthProfessionalService,
        private userService: UserService,
        private authService: AuthService,
        private toastr: ToastrService,
        private localStorageService: LocalStorageService
    ) {
        this.user = new Admin();
    }

    ngOnInit() {
        this.getUser();
    }

    getUser() {
        this.userId = this.localStorageService.getItem('user');
        this.adminService.getById(this.userId)
            .then(admin => this.user = admin)
            .catch(HttpError => {
                // console.log('Não foi possível carregar usuário logado!', HttpError);
            });

    }

    enabledEdit() {
        this.disabledButtonEdit = true;
        this.visibilityButtonSave = true;
    }

    onSubmit(form) {
        const admin = form.value;
        admin.id = this.localStorageService.getItem('user');
        this.adminService.update(admin)
            .then((userAdmin) => {
                this.user = userAdmin;
                this.toastr.info('Informações atualizadas!');
                this.visibilityButtonSave = false;
                this.disabledButtonEdit = false;
            })
            .catch((errorResponse: HttpErrorResponse) => {
                this.toastr.error('Não foi possível atualizar informações!');
            });
    }

}
