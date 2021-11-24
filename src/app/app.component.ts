import { Component } from '@angular/core'

@Component({
	selector: 'app-root',
	template: `
		<section class="d-flex">
			<app-sidenav></app-sidenav>
			<app-gifs class="container mt-4"></app-gifs>
			<!-- <router-outlet></router-outlet> -->
		</section>
	`,
	styleUrls: [],
})
export class AppComponent {
	title = 'angular-gifs'
}
