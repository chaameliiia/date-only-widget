<script lang="ts">
	import type { IData } from '$lib/types';
	import { getCompColor } from '$lib/utils/getCompColor';
	import { year, month, date, days } from '../stores';
	import '../styles/style.css';

	/** @type {import('./$types').PageData} */

	export let data: IData;
	export let src = data.photos[0].src.original;
	export let color = getCompColor(data.photos[0].avg_color.slice(1));
</script>

<div class="wrapper" style="--url: url({src})">
	<p class="month" style="--color: {color}">
		{$month}
	</p>
	<div class="col_wrapper">
		<p class="year">{$year}</p>
		<div class="row_wrapper">
			<p class="date">{$date}</p>
			<p class="days">{$days}</p>
		</div>
	</div>
</div>

<style src="../styles/style.css"></style>
