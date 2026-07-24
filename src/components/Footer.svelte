<script lang="ts">
	import { resolve } from '$app/paths'
</script>

<footer>
	<a href={resolve('/')}>Startseite</a>
	<a href={resolve('/datenschutz')}>Datenschutz</a>
	<a href={resolve('/impressum')}>Impressum</a>
	<a href={resolve('/faq')}>Häufige Fragen</a>
</footer>

<style lang="scss">
	footer {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 0.67rem 2rem;
		padding: 2rem;

		a {
			font-weight: 600;
		}
	}

	@media (min-width: 480px) {
		footer {
			padding: 2rem 0;
		}
	}
</style>
