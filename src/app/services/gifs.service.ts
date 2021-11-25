import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface'

@Injectable({
	providedIn: 'root',
})
export class GifsService {
	private apiKey: string =
		'9chDD8olIUVEQ4vHGZ8jqe5VxBSJ80tx'
	private _history: string[] = []
	public results: Gif[] = []

	constructor(private httpClient: HttpClient) {}

	get history() {
		return [...this._history]
	}

	searchGifs = (query: string) => {
		if (query !== '') {
			query = query.trim().toLowerCase()
			if (!this._history.includes(query)) {
				this._history.unshift(query)
				if (this._history.length >= 10) this._history.pop()
			}
			this.httpClient
				.get<SearchGifsResponse>(
					`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`
				)
				.subscribe((res) => (this.results = res.data))
		}
	}
}
