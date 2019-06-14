import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'overweigthClassification',
    pure: true
})
export class OverweigthClassificationPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        switch (value) {

            case 'normal':
                return 'Normal';

            case 'overweight_obesity_risk':
                return 'Risco de obesidade';

            default:
                return 'Fora dos padrões definidos';
        }
    }

}
