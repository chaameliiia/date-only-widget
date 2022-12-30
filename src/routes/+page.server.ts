import { PUBLIC_BASE_URL } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export async function load({
	fetch
}:
{
	fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>;
}) {
	try {
		const res = await fetch(`${PUBLIC_BASE_URL}/curated?per_page=1`);
		const data = res.json();

		return data;
	} catch (err) {
		console.error('error::', err);
	}
}
