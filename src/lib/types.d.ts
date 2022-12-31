export interface IData {
	photos: Array<IPhoto>;
	page: number;
	per_page: number;
	total_results: number;
	prev_page?: string;
	next_page?: string;
}

export interface IPhoto {
	id: number;
	width: number;
	height: number;
	url: string;
	photographer: string;
	photographer_url: string;
	photographer_id: number;
	avg_color: string;
	src: ISrc;
	alt: string;
}

export interface ISrc {
	original: string;
	large: string;
	large2x: string;
	medium: string;
	small: string;
	portrait: string;
	landscape: string;
	tiny: string;
}
