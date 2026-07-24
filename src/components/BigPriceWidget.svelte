<script lang="ts">
	interface Props {
		costs: number[]
		labels: string[]
	}

	let { costs, labels }: Props = $props()
</script>

<table class="price-table">
	<thead>
		<tr>
			{#each labels as label (label)}
				<td>{label}</td>
			{/each}
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Jährlich</td>
			{#each costs as cost (cost)}
				<td class="price">€ {cost}</td>
			{/each}
		</tr>
		<tr>
			<td>Halbjährlich</td>
			{#each costs as cost (cost)}
				<td class="price">€ {cost / 2}</td>
			{/each}
		</tr>
		<tr>
			<td>Vierteljährlich</td>
			{#each costs as cost (cost)}
				<td class="price">€ {cost / 4}</td>
			{/each}
		</tr>
	</tbody>
</table>

<style lang="scss">
	.price-table {
		font-size: 1.15rem;
		line-height: 1.5rem;
		display: table;
		table-layout: fixed;
		margin: 2rem auto;
		width: 100%;
		border: 2px solid #0002;
		border-radius: 1rem;
		border-spacing: 0.5rem;

		thead td:not(:first-child) {
			font-weight: bold;
		}

		td {
			text-align: center;
			padding: 0.5rem;
			text-wrap: balance;
			hyphens: auto;

			&.price {
				background-color: #e8f3ff;
				font-size: 1.35rem;
				line-height: 2rem;
				border-radius: 0.5rem;
			}
		}
	}
</style>
