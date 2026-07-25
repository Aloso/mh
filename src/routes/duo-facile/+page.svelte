<script lang="ts">
	import Largo from './audio/Largo.ogg?url'
	import MariaMari from './audio/Maria_Mari.ogg?url'
	import RegenFaellt from './audio/Regen_faellt.ogg?url'
	import Siciliana from './audio/Siciliana.ogg?url'
</script>

<svelte:head>
	<title>Duo Facile | Musikunterricht Holzkirchen</title>
</svelte:head>

<div class="content">
	<h1>Duo Facile</h1>

	<p>
		»Duo Facile« ist seit 2005 der Name, unter dem wir auf verschiedensten Bühnen mit Kammermusik
		auftreten, sei es in einer Kirche, in einem Weinkeller oder ‚Open Air‘ in der Toskana. Gertrud
		Stecher spielt dabei Klavier oder Orgel, Diethart spielt Klarinette und Saxophon.
	</p>

	<h2>Klangproben</h2>
	<p>Largo aus Xerxes</p>
	<audio src={Largo} controls></audio>
	<p>Maria Mari</p>
	<audio src={MariaMari} controls></audio>
	<p>Regen fällt</p>
	<audio src={RegenFaellt} controls></audio>
	<p>Siciliana</p>
	<audio src={Siciliana} controls></audio>

	<h2>Archivierte Inhalte</h2>
	<p class="big-link">
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a href="/Konzerte.html">Konzerte</a> Übersicht über unsere Konzerte zwischen 2009 und 2016
	</p>
	<p class="big-link">
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a href="/QM.html">Quadro Magico</a> Originale Seite des Holzkirchner Saxophonquartetts
	</p>
</div>

<style lang="scss">
	audio {
		display: block;
		width: 100%;
		margin-top: -0.5rem;
	}

	.big-link {
		padding-left: 1.5rem;

		a {
			display: block;
			width: auto;
			font-size: 1.3rem;
			margin-bottom: 0.3rem;

			&::before {
				content: '» ';
				display: block;
				float: left;
				margin-top: -0.2rem;
				margin-left: -1.5rem;
				font-size: 2rem;
			}
		}
	}
</style>
