<script lang="ts">
	import { onMount } from 'svelte'
	import BigPriceWidget from '../../components/BigPriceWidget.svelte'
	import ContactWidget from '../../components/ContactWidget.svelte'
	import PriceWidget from '../../components/PriceWidget.svelte'
	import Terms from '../../components/Terms.svelte'
	import ButtonSelect from '../../components/ButtonSelect.svelte'

	const costTable = {
		blockfloete: {
			single: 720,
			two: 520,
			more: 400,
		},
		other: {
			'30': 880,
			'45': 1240,
			'60': 1660,
		},
	}

	let hasJs = $state(false)
	let isDesktop = $state(false)
	let interactive = $derived(hasJs && !isDesktop)

	onMount(() => {
		hasJs = true
		isDesktop = window.innerWidth > 750

		addEventListener('resize', () => {
			isDesktop = window.innerWidth > 750
		})
	})

	let instrument = $state<'blockfloete' | 'other'>()
	let duration = $state<'30' | '45' | '60'>()
	let groupSize = $state<'single' | 'two' | 'more'>()

	let cost = $derived.by(() => {
		if (instrument === 'blockfloete' && groupSize) {
			return costTable[instrument][groupSize]
		} else if (instrument === 'other' && duration) {
			return costTable[instrument][duration]
		}
	})
</script>

<div class="content" class:interactive>
	<h1>Gebühren- und Ferien&shy;ordnung</h1>
	<p class="subheading">Gültig ab 01.09.2026</p>

	{#if interactive}
		<p>Wählen Sie Ihr Instrument:</p>
		<p>
			<ButtonSelect
				options={[
					{ name: 'Blockflöte', value: 'blockfloete' },
					{ name: 'Violoncello, Klavier, Saxophon oder Klarinette', value: 'other' },
				]}
				bind:selected={instrument}
			/>
		</p>

		{#if instrument === 'blockfloete'}
			<p>Wählen Sie die Art des Unterrichts:</p>
			<p>
				<ButtonSelect
					options={[
						{ name: 'Einzelunterricht', value: 'single' },
						{ name: 'Gruppe aus 2 Kindern', value: 'two' },
						{ name: 'Gruppe aus 3-4 Kindern', value: 'more' },
					]}
					bind:selected={groupSize}
				/>
			</p>

			{#if groupSize === 'two' || groupSize === 'more'}
				<p class="info">
					Gruppen sind nur mit Kindern möglich, die über gleiche musikalische Voraussetzungen
					verfügen.
				</p>
			{/if}
		{/if}

		{#if instrument === 'other'}
			<p>Wählen Sie die Länge einer Unterrichtsstunde:</p>
			<p>
				<ButtonSelect
					options={[
						{ name: '30 Minuten', value: '30' },
						{ name: '45 Minuten', value: '45' },
						{ name: '60 Minuten', value: '60' },
					]}
					bind:selected={duration}
				/>
			</p>
		{/if}

		{#if cost}
			{#if instrument === 'blockfloete'}
				<p>Unterrichtsdauer: <b>30 Minuten</b></p>
			{:else}
				<p>Art: <b>Einzelunterricht</b></p>
			{/if}

			<h2>Unterrichts&shy;gebühren</h2>
			<PriceWidget {cost} />
		{/if}
	{:else}
		<h2>Blockflöte</h2>
		<p>Unterrichtsdauer: <b>30 Minuten</b></p>
		<BigPriceWidget
			costs={Object.values(costTable.blockfloete)}
			labels={['', 'Einzel\u{00AD}unterricht', 'Gruppe aus 2 Kindern', 'Gruppe aus 3-4 Kindern']}
		/>
		<p class="info">
			Gruppen sind nur mit Kindern möglich, die über gleiche musikalische Voraussetzungen verfügen.
		</p>

		<h2>Violoncello, Klavier, Saxophon oder Klarinette</h2>
		<p>Art: <b>Einzelunterricht</b></p>
		<BigPriceWidget
			costs={Object.values(costTable.other)}
			labels={['Unterrichtsdauer', '30 Minuten', '45 Minuten', '60 Minuten']}
		/>
	{/if}

	{#if cost || !interactive}
		<p>
			In den jährlichen Gebührensätzen enthalten ist eine Verwaltungskostenpauschale von 8,00 Euro.
			Für Geschwisterkinder entfällt dieser Betrag.
		</p>

		<p>Fälligkeit:</p>
		<ul>
			<li>jährlich am 15.10.</li>
			<li>½-jährlich am 15.10. und 01.03.</li>
			<li>
				¼-jährlich am 15.10., 01.12., 01.03., 01.06. (bei Dauerauftrag können auch vier
				Zahlungstermine selbst gewählt werden)
			</li>
		</ul>
		<p>Skonto bei Barzahlung möglich (bitte erfragen).</p>
		<Terms />

		<h2>Schuljahr</h2>
		<p>
			Der Musikunterricht (Schuljahr 2026/27) beginnt am <b>Montag, den 21. September 2026</b> und
			endet am <b>Freitag, den 23. Juli 2027</b>. Zusätzlich ist vom
			<b>21. bis 23. Dezemberr 2026</b> KEIN Unterricht. Ansonsten gelten die Ferienbestimmungen für die
			allgemeinen und weiterführenden Schulen in Bayern.
		</p>

		<h3>Möchten Sie eine Schnupperstunde vereinbaren?</h3>
		<p>Dann rufen Sie uns an oder schreiben eine E-Mail:</p>
		<ContactWidget />
	{/if}
</div>

<style lang="scss">
	.info {
		font-size: 1.05rem;
		line-height: 1.5rem;
		padding: 0.5rem 0.75rem;
		border-radius: 0.67rem;
		background-color: #fff2b8;
	}
</style>
