import { Component, OnInit } from '@angular/core'
import { GifsService } from 'src/app/services/gifs.service'

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.sass'],
})
export class SidenavComponent implements OnInit {
	constructor(private gifsService: GifsService) {}

	ngOnInit(): void {}

	get history() {
		return this.gifsService.history
	}
}
