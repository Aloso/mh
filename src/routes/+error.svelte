<script lang="ts">
	import { page } from '$app/state'
</script>

<svelte:head>
	<title>Fehler | Musikunterricht Holzkirchen</title>
</svelte:head>

<h1>{page.status}</h1>
<p class="desc">
	{page.status === 404 ? 'Die Seite konnte nicht gefunden werden.' : page.error?.message}
</p>

<style lang="scss">
	h1 {
		font-size: 5rem;
		margin-bottom: 0;
	}
	.desc {
		text-align: center;
		font-size: 1.4rem;
		margin-bottom: 5rem;
	}
</style>
