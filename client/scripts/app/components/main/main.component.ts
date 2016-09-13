import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'main',
    template: require('./main.component.ngux'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

}