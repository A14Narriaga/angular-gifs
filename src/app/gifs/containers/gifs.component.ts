import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-gifs',
	template: `
		<div class="row p-3">
			<div class="col">
				<app-search-input></app-search-input>
			</div>
		</div>
		<hr />
		<div class="row">
			<div class="col">
				<app-results></app-results>
			</div>
		</div>
	`,
	styleUrls: [],
})
export class GifsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
