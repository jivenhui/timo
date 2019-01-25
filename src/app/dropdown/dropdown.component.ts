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
        if (!this.isCollapsedSauzen) {
            this.isCollapsedSauzen = true;
        }
    }


    openDropdownSoepen() {
        if (!this.isCollapsedSoepen) {
            this.isCollapsedSoepen = true;
        }
    }

    openDropdownVega() {
        if (!this.isCollapsedVega) {
            this.isCollapsedVega = true;

        }
    }

    openDropdownAardappel() {
        if (!this.isCollapsedAardappel) {
            this.isCollapsedAardappel = true;

        }
    }
}
