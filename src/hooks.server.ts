import type { RequestEvent } from './routes/$types';

import { API_KEY } from '$env/static/private';
import { PUBLIC_BASE_URL } from '$env/static/public';

/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({
	request,
	fetch
}: {
	event: RequestEvent;
	request: Request;
	fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>;
}) {
	if (request.url.startsWith(PUBLIC_BASE_URL)) {
		const newHeaders = new Headers();

		newHeaders.set('Authorization', `Bearer ${API_KEY}`);
		request = new Request(request, {
			headers: newHeaders
		});
	}

	return await fetch(request);
}
