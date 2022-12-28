import { createClient } from 'pexels';

/** @type {import('./$types').PageLoad} */

export async function load() {
	const client = createClient('563492ad6f91700001000001873e36164dd245c4a24865d752a33f56');

	try {
		const image = await client.photos.curated({ per_page: 1 });

		return image;
	} catch (err) {
		console.error('error::', err);
	}
}
