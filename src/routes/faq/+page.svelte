<script lang="ts">
	import { resolve } from '$app/paths'
	import ContactWidget from '../../components/ContactWidget.svelte'
</script>

<div class="content">
	<h1>Häufig gestellte Fragen</h1>

	<h2>Unterricht</h2>

	<details>
		<summary>Welche Instrumente werden unterrichtet?</summary>
		<p>
			Gertrud Stecher unterrichtet Violoncello und Klavier, Diethart Stecher unterrichtet
			Klarinette, Saxophon und Blockflöte. Die Blockflöte wird normalerweise in Gruppen von 4 bis 6
			Kindern unterrichtet.
		</p>
	</details>

	<details>
		<summary>Wo findet der Unterricht statt?</summary>
		<p>
			Gertrud Stecher unterrichtet am Spatzenweg 1. Diethart Stecher unterrichtet Montags und
			Dienstags in der Mittelschule Holzkirchen, ansonsten ebenfalls im Spatzenweg. Details zur
			Anfahrt finden Sie unter <a href={resolve('/kontakt')}>Kontakt</a>.
		</p>
	</details>

	<details>
		<summary>Wann findet der Unterricht statt?</summary>
		<p>
			Wir orientieren uns am Schuljahr, das heißt, wir unterrichten nicht an Feiertagen oder in den
			Schulferien. Der Unterricht beginnt im September. Auf Vereinbarung kann auch während des
			Schuljahres begonnen werden.
		</p>
		<p>Die Unterrichtszeiten vereinbaren wir individuell. Rufen Sie uns einfach an.</p>
	</details>

	<details>
		<summary>Wie viel kostet eine Schnupperstunde?</summary>
		<p>
			Eine Schnupperstunde kostet i.&thinsp;d.&thinsp;R. 25 Euro. Wenn Sie einen Unterrichtsvertrag
			abschließen, erhalten Sie dieses Geld zurück.
		</p>
	</details>

	<details>
		<summary>Wie kann ich den Unterricht bezahlen?</summary>
		<p>
			Wir akzeptieren Banküberweisung und Barzahlung. Sie entscheiden, ob Sie jährlich, halbjährlich
			oder vierteljährlich bezahlen wollen, die Preise werden dadurch nicht beeinflusst. Nach
			Absprache ist es auch möglich, einzelne Stunden zu bezahlen.
		</p>
	</details>

	<details>
		<summary>Was passiert, wenn ich eine Stunde nicht wahrnehmen kann?</summary>
		<p>
			Bitte informieren Sie uns darüber frühzeitig. Falls möglich, bieten wir Ihnen einen
			Ersatztermin an.
		</p>
	</details>

	<details>
		<summary>Werden Konzerte, Musikwettbewerbe etc. gefördert?</summary>
		<p>
			Wir veranstalten regelmäßige Schülerkonzerte. Außerdem unterstützen wir Sie bzw. Ihr Kind bei
			der Vorbereitung für Auftritte.
		</p>
	</details>

	<h2>Instrumente</h2>

	<details>
		<summary>Wie bekomme ich ein gutes, preiswertes Instrument zum Üben?</summary>
		<p>
			Blockflöten verkaufen wir an unsere Kunden zu einem günstigen Preis. Celli, Klarinetten und
			Saxophone bieten wir auch leihweise an. Wenn Sie ein eigenes Instrument kaufen wollen, beraten
			wir Sie gerne mit unserer langjährigen Erfahrung.
		</p>
	</details>

	<details>
		<summary>Sollte ich für mein Instrument eine Versicherung abschließen?</summary>
		<p>
			Falls ein teures Instrument beschädigt wird, ist es ärgerlich, nicht versichert zu sein. Eine
			Instrumentenversicherung empfehlen wir bei Saxophonen, Klarinetten und Celli. Dies gilt auch
			für die Leihinstrumente, da diese von uns nicht versichert sind.
		</p>
	</details>

	<details>
		<summary>Ab welchem Alter ist Blockflötenunterricht sinnvoll?</summary>
		<p>Wir empfehlen Blockflötenunterricht ab dem Vorschulalter, also ca. ab 5 Jahren.</p>
	</details>

	<details>
		<summary>Ab welchem Alter ist Cellounterricht sinnvoll?</summary>
		<p>
			Da es Celli in allen Größen gibt, können Kinder schon ab 4 Jahren mit dem Unterricht beginnen.
			Dabei ist es natürlich wichtig, dass das Kind von zuhause unterstützt wird.
		</p>
	</details>

	<details>
		<summary>Ab welchem Alter ist Klavierunterricht sinnvoll?</summary>
		<p>
			Wir empfehlen Klavierunterricht ab ca. 9 Jahren. Darüberhinaus ist es von großem Vorteil, wenn
			bereits musikalische Vorkenntnisse existieren, z.B. von einem Blockflötenkurs.
		</p>
	</details>

	<details>
		<summary>Ab welchem Alter ist Unterricht in Saxophon/Klarinette sinnvoll?</summary>
		<p>
			Wichtige Voraussetzungen sind voll ausgebildete bleibende Schneidezähne für die Lauterzeugung
			und eine ausreichend große Handspanne. Das ist bei jedem Kind individuell, das
			Durchschnittsalter liegt etwa bei 10 Jahren.
		</p>
		<p>
			Ob ein Instrument für Sie oder Ihr Kind das richtige ist, finden Sie am besten bei einer
			Schnupperstunde heraus.
		</p>
	</details>

	<h2>Antwort nicht gefunden?</h2>
	<p>Dann fragen Sie uns einfach direkt:</p>
	<ContactWidget />
</div>

<style lang="scss">
	summary {
		margin: 1rem 0;
		font-size: 1.4rem;
		cursor: pointer;
		font-weight: 600;

		&:hover,
		&:focus {
			color: darkred;
		}
	}
</style>
