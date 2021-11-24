import {
	Component,
	ElementRef,
	ViewChild,
} from '@angular/core'

import { GifsService } from '../../../services/gifs.service'

@Component({
	selector: 'app-search-input',
	templateUrl: './search-input.component.html',
	styleUrls: ['./search-input.component.sass'],
})
export class SearchInputComponent {
	@ViewChild('inputText')
	inputText!: ElementRef<HTMLInputElement>

	constructor(private gifsService: GifsService) {}

	search = () => {
		const inputTextElement: HTMLInputElement =
			this.inputText.nativeElement
		this.gifsService.searchGifs(inputTextElement.value)
		inputTextElement.value = ''
	}
}
