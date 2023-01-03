<script lang="ts">
	/** @type {import('./$types').PageData} */

	import { beforeUpdate, onDestroy } from 'svelte';
	import type { Unsubscriber } from 'svelte/store';

	import { getPalette } from '$lib/utils/getPalette';
	import { date, days, month, year } from '../stores';

	import '../styles/style.css';

	export let data;
	export let src = data.photos[0].src.original;
	export let vibrant = '';
	export let textColor = '';

	let subDate = '';
	const unSubDate: Unsubscriber = date.subscribe((value) => (subDate = String(value)));

	switch (subDate.slice(-1)) {
		case '1':
			subDate = subDate + 'st';
			break;
		case '2':
			subDate = subDate + 'nd';
			break;
		case '3':
			subDate = subDate + 'rd';
			break;
		default:
			subDate = subDate + 'th';
	}

	beforeUpdate(async () => {
		try {
			const palette = await getPalette(src);

			vibrant = palette?.get('vibrant').hex;
			textColor = palette?.get('vibrant').text;
		} catch (err) {
			console.log('error:', err);
		}
	});

	onDestroy(unSubDate);
</script>

<div class="wrapper" style="--url: url({src}); --color: {vibrant};">
	<div class="text_container" style="--textColor: {textColor}">
		<div class="year_wrapper">
			<span class="year">{`${$year}`.slice(0, 2)}</span>
			<span class="year">{`${$year}`.slice(2)}</span>
		</div>
		<div class="col_wrapper">
			<div class="row_wrapper">
				<span class="month">{$month}</span>
				<span class="date">{subDate}</span>
			</div>
			<span class="days">{$days}</span>
		</div>
	</div>
</div>

<style src="../styles/style.css"></style>
