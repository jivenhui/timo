import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'bresc-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
    isCollapsedSoepen = false;
    isCollapsedVega = false;
    isCollapsedSauzen = false;
    isCollapsedAardappel = false;

    ngOnInit() {
    }

    openDropdownSauzen() {
        window.dispatchEvent(new Event('resize'));
        if (!this.isCollapsedSauzen) {
            this.isCollapsedSauzen = true;
        }
    }


    openDropdownSoepen() {
        window.dispatchEvent(new Event('resize'));

        if (!this.isCollapsedSoepen) {
            this.isCollapsedSoepen = true;
        }
    }

    openDropdownVega() {
        window.dispatchEvent(new Event('resize'));
        if (!this.isCollapsedVega) {
            this.isCollapsedVega = true;

        }
    }
}
