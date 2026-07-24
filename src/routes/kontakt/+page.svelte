<script lang="ts">
	import ContactWidget from '../../components/ContactWidget.svelte'
</script>

<svelte:head>
	<title>Kontakt | Musikunterricht Holzkirchen</title>
	<meta
		name="description"
		content="Treten Sie mit uns in Verbindung. Wir bieten Musikunterricht in Blockflöte, Klarinette, Saxophon, Violoncello und Klavier an."
	/>
</svelte:head>

<div class="text-column">
	<h1>Kontakt</h1>

	<p class="subheading">Gerne nehmen wir Ihren Anruf entgegen oder beantworten Ihre E-Mail!</p>

	<ContactWidget />

	<div class="columns">
		<p class="column-paragraph">
			Anschrift:<br />
			<br />
			Diethart und Gertrud Stecher<br />
			Spatzenweg 1<br />
			83607 Holzkirchen<br />
			<br />
			<a
				href="https://search.google.com/local/writereview?placeid=ChIJT5GuCZ7unUcR6UkwgVUAt6I"
				target="_blank"
				rel="noopener noreferrer"
			>
				Bewerten Sie uns auf Google
			</a>
		</p>

		<iframe
			title="Google Maps"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.750993709043!2d11.68391747588579!3d47.88314807121654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479dee9e094bd41f%3A0xb883d7749cbec017!2sSpatzenweg%201%2C%2083607%20Holzkirchen!5e0!3m2!1sde!2sde!4v1684096565480!5m2!1sde!2sde"
			allowfullscreen
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
</div>

<style lang="scss">
	.columns {
		display: flex;
		gap: 2rem;
		align-items: center;
		align-content: space-between;
		flex-wrap: wrap;

		.column-paragraph {
			margin-left: 0;
			margin-right: 0;
			width: auto;
			flex-shrink: 1;
		}
	}

	iframe {
		width: 700px;
		height: 400px;
		flex-grow: 1;
		border: 0;
	}
</style>
