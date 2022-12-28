<script>
	import { date } from '../stores';
	import '../styles/style.css';

	/** @type {import('./$types').PageData} */

	export let data;
	export let photo = data.photos?.[0];
</script>

<p>{$date}</p>
<img src={photo?.url || ''} alt={photo?.alt || ''} />

<style src="../styles/style.css"></style>
