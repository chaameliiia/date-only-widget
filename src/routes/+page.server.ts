export const prerender = true;

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
	let reqPage = 0;
	const unsubscribe: Unsubscriber = page.subscribe((value) => {
		reqPage = value;
	});

	try {
		const res = await fetch(
			`${PUBLIC_BASE_URL}/search?query=contemporary%20art&per_page=1&page=${reqPage}}`
		);
		const data = await res.json();

		return data;
	} catch (err) {
		console.error('error::', err);
	}

	onDestroy(unsubscribe);
}
