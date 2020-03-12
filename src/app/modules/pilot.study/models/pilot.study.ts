import { TimeSeriesType } from '../../activity/models/time.series'
import { EnumMeasurementType } from '../../measurement/models/measurement'

export enum EnumPilotStudyDataTypes {
    physical_activity = 'physical_activity',
    sleep = 'sleep',
    quest_nutritional = 'quest_nutritional',
    quest_odontological = 'quest_odontological'
}

const mergeEnum = { ...EnumMeasurementType, ...TimeSeriesType, ...EnumPilotStudyDataTypes };

export type PilotStudyDataTypes = typeof mergeEnum;

export class PilotStudy {
    /* required */
    private _name: string;
    private _start: string;
    private _end: string;
    private _is_active: boolean;
    private _data_types: PilotStudyDataTypes[];
    /* optional */
    private _location?: string;
    /* readonly */
    private readonly _id: string;
    private readonly _created_at: string;
    private readonly _total_health_professionals: number;
    private readonly _total_patients: number;


    get name(): string {
        return this._name
    }

    set name(value: string) {
        this._name = value
    }

    get start(): string {
        return this._start
    }

    set start(value: string) {
        this._start = value
    }

    get end(): string {
        return this._end
    }

    set end(value: string) {
        this._end = value
    }

    get is_active(): boolean {
        return this._is_active
    }

    set is_active(value: boolean) {
        this._is_active = value
    }

    get location(): string {
        return this._location
    }

    set location(value: string) {
        this._location = value
    }

    get id(): string {
        return this._id
    }

    get created_at(): string {
        return this._created_at
    }

    get total_health_professionals(): number {
        return this._total_health_professionals
    }

    get total_patients(): number {
        return this._total_patients
    }

    get data_types(): PilotStudyDataTypes[] {
        return this._data_types
    }

    set data_types(value: PilotStudyDataTypes[]) {
        this._data_types = value
    }
}
