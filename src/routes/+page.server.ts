import { onDestroy } from 'svelte';
import type { Unsubscriber } from 'svelte/store';

import { PUBLIC_BASE_URL } from '$env/static/public';
import { page } from '../stores';

/** @type {import('./$types').PageServerLoad} */
export async function load({
	fetch
}: {
	fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>;
}) {
	try {
		let reqPage = 0;
		const unsubscribe: Unsubscriber = await page.subscribe((value) => (reqPage = value));
		const res = await fetch(
			`${PUBLIC_BASE_URL}/search?query=colors&per_page=1&page=${reqPage}}`
		);
		const data = res.json();

		onDestroy(unsubscribe);

		return data;
	} catch (err) {
		console.error('error::', err);
	}
}
