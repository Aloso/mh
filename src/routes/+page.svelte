<script>
	import photo from '../lib/assets/lehrer_innen.jpg'
	import ContactWidget from '../components/ContactWidget.svelte'
	import { resolve } from '$app/paths'
</script>

<svelte:head>
	<title>Wir stellen uns vor | Musikunterricht Holzkirchen</title>
	<meta
		name="description"
		content="Wir bieten Musikunterricht in Blockflöte, Klarinette, Saxophon, Violoncello und Klavier an, geeignet für Kinder, Jugendliche und Erwachsene."
	/>
</svelte:head>

<div class="content">
	<h1>Musik begeistert</h1>
	<p class="subheading">
		Immer wieder beobachten wir, wie Menschen aufblühen, wenn sie Musik nicht nur konsumieren,
		sondern
		<i>selbst gestalten</i> können.
	</p>

	<img src={photo} alt="Foto von Diethart und Gertrud Stecher im Garten" />
	<p class="img-description">Gertrud und Diethart Stecher, Musikpädagogen</p>

	<p>
		Seit mehr als drei Jahrzehnten leben und arbeiten wir gemeinsam in Holzkirchen. Musik ist sowohl
		im Unterrichtsraum, als auch auf der Bühne ein bedeutender Teil unseres Lebens.
	</p>
	<p>
		Jeder Mensch kann die Musik für sich erschließen und ihre vielen positiven Wirkungen auf sich
		selbst erfahren. Die kompetente Anleitung und Unterstützung durch ausgebildete und erfahrene
		Lehrer ist dabei eine wichtige Voraussetzung für den Erfolg.
	</p>
	<p>
		Gerne begleiten wir Sie oder Ihr Kind auf Ihrer musikalischen Reise, egal ob als Karriere oder
		als Hobby. Rufen Sie einfach an oder schreiben Sie eine E-Mail.
	</p>

	<ContactWidget />

	<p>Weiter informieren:</p>
	<p class="big-link">
		<a href={resolve('/ueber-uns')}>Wer wir sind</a>
		Unser Leben und Engagement
	</p>
	<p class="big-link">
		<a href={resolve('/kinder-und-musik')}>Kinder und Musik</a>
		So hilft musikalische Früherziehung Kindern bei der Entwicklung.
	</p>
	<p class="big-link">
		<a href={resolve('/instrumente')}>Instrumente</a>
		Blockflöte, Klavier, Cello, Saxophon oder Klarinette?
	</p>
	<p class="big-link">
		<a href={resolve('/gebuehren')}>Preise</a>
		Wie viel kostet ein Unterrichtsvertrag, oder erst mal eine Schnupperstunde?
	</p>
	<p class="big-link">
		<a href={resolve('/faq')}>Häufige Fragen</a>
		Wenn Ihre Frage nicht beantwortet wurde, schauen Sie hier – oder rufen Sie einfach an!
	</p>
	<p class="big-link">
		<a href={resolve('/duo-facile')}>Duo Facile</a>
		Planen Sie eine Feier? Wir können Ihre Veranstaltung musikalisch aufwerten.
	</p>
</div>

<style lang="scss">
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
