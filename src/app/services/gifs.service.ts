import {
	HttpClient,
	HttpParams,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import {
	SearchGifsResponse,
	Gif,
} from '../interfaces/gifs.interface'

@Injectable({
	providedIn: 'root',
})
export class GifsService {
	private url: string = 'https://api.giphy.com/v1/gifs'
	private apiKey: string =
		'9chDD8olIUVEQ4vHGZ8jqe5VxBSJ80tx'
	private _history: string[] =
		JSON.parse(localStorage.getItem('history')!) || []
	public results: Gif[] =
		JSON.parse(localStorage.getItem('results')!) || []

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
				localStorage.setItem(
					'history',
					JSON.stringify(this._history)
				)
			}

			const params = new HttpParams()
				.set('api_key', this.apiKey)
				.set('limit', 10)
				.set('q', query)

			this.httpClient
				.get<SearchGifsResponse>(`${this.url}/search`, {
					params,
				})
				.subscribe((res) => {
					this.results = res.data
					localStorage.setItem(
						'results',
						JSON.stringify(res.data)
					)
				})
		}
	}
}
