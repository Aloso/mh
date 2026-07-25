<script lang="ts">
	import Gertrud from './Gertrud.jpg?url'
	import Diethart from './Diethart.jpg?url'
</script>

<svelte:head>
	<title>Über uns | Musikunterricht Holzkirchen</title>
</svelte:head>

<div class="content">
	<h1>Über uns</h1>

	<p class="subheading">Wir stellen uns vor</p>

	<img src={Gertrud} alt="Frau Stecher bei einem Konzert in einer Kirche" class="floating" />

	<h2>Gertrud Stecher</h2>
	<p>Violoncello, Klavier</p>
	<p>
		Ich studierte von 1986 bis 1992 Violoncello, Klavier und Chorleitung am
		Richard-Strauss-Konservatorium und an der Musikhochschule München. Mein Diplom machte ich in
		Musikpädagogik.
	</p>
	<p>
		Ab 1984 arbeitete ich in der elterlichen Musikschule Pförtsch mit. Seit 1988 engagiere ich mich
		als Chorleiterin und Organistin in der evangelischen Kirchgemeinde Holzkirchen. 1994 entschied
		ich mich gemeinsam mit meinem Ehemann für die berufliche Selbständigkeit.
	</p>
	<p>
		Zusammen mit meinem Mann, Diethart Stecher, bilden wir das »Duo Facile«. Darüber hinaus wirkte
		ich in den Ensembles »La Rose Rouge«, »Deauville Ballhausorchester«, »Quadro Magico« u. a. mit.
	</p>

	<img src={Diethart} alt="Herr Stecher bei einem Konzert in einer Kirche" class="floating" />

	<h2>Diethart Stecher</h2>
	<p>Klarinette, Saxophon</p>

	<p>
		Von 1977 bis 1982 studierte ich an der »Franz Liszt«-Musikhochschule in Weimar mit Abschluss als
		Diplom-Musikpädagoge.
	</p>

	<p>
		Von 1982 bis 1989 war ich an verschiedenen Musikschulen und als freiberuflicher Musiker tätig.
		Seit 1990 arbeite ich in der eigenen privaten Musikschule in Holzkirchen.
	</p>

	<p>
		Ich bin in fast allen Musikrichtungen beheimatet und war bereits Mitglied in vielen Ensembles,
		darunter dem »Odeon-Tanzorchester«, »La Rose Rouge«, dem »Deauville Ballhausorchester« und
		»Quadro Magico«.
	</p>

	<p>
		Mein Unterrichtskonzept hat eine fundierte und umfassende instrumentale Ausbildung zum Ziel,
		wobei vor allem Befähigungen in vielseitigen Spielarten und Ensembletätigkeiten entwickelt
		werden sollen.
	</p>

	<p>
		Besonders im Fach Saxophon sind die Erarbeitung stilistischer Ausdrucksmittel und die Einführung
		in die verschiedenen Improvisationstechniken ein wichtiger Unterrichtsbestandteil. Dazu stehen
		entsprechende technische und elektronische Mittel zur Verfügung, wodurch die Schüler auch beim
		Musizieren entsprechend motiviert werden können.
	</p>
</div>

<style lang="scss">
	.floating {
		float: right;
		width: 30%;
		margin: 0 0 1.5rem 1.5rem;

		@media (max-width: 600px) {
			margin: 0 0 1rem 1rem;
		}
	}
</style>
