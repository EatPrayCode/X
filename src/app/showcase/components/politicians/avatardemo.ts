import { Component } from '@angular/core';

@Component({
    templateUrl: './avatardemo.html'
})
export class AvatarDemo {

    value = '';

    activeIndex1: number = 0;

    activeIndex2: number = 0;

    scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` }));

    OnSearch() {
        console.log("OnSearch", this.value);
    }

    OnSearchNext() {
        console.log("OnSearchNext", this.value);
    }

    OnSearchPrevious() {
        console.log("OnSearchPrevious", this.value);
    }

    OnClear() {
        console.log("OnClear");
        this.value = "";
    }
}