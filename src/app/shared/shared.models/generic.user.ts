export class GenericUser {
    id: string;
    created_at: string;
    name: string;
    email: string;
    birth_date: string;
    phone_number: string;
    last_login: number;
    last_sync: number;
    selected_pilot_study: string;
    total_pilot_studies: number;
    language: string;

    constructor() {
        this.id = '';
        this.created_at = '';
        this.name = '';
        this.email = '';
        this.birth_date = '';
        this.phone_number = '';
        this.last_login = 0;
        this.last_sync = 0;
        this.selected_pilot_study = '';
        this.total_pilot_studies = 0;
        this.language = '';
    }
}
