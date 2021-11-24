import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class GifsService {
	private _history: string[] = []

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
		}
	}
}
