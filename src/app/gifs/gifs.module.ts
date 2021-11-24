import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { GifsComponent } from './containers/gifs.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ResultsComponent } from './containers/results/results.component'

@NgModule({
	declarations: [GifsComponent, SearchInputComponent, ResultsComponent],
	imports: [CommonModule],
	exports: [GifsComponent],
})
export class GifsModule {}
