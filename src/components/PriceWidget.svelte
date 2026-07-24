<script lang="ts">
	interface Props {
		cost: number
	}

	let { cost }: Props = $props()
</script>

<table class="price-table">
	<tbody>
		<tr>
			<td>Jährlich</td>
			<td class="price">€ {cost}</td>
		</tr>
		<tr>
			<td>Halbjährlich</td>
			<td class="price">€ {cost / 2}</td>
		</tr>
		<tr>
			<td>Vierteljährlich</td>
			<td class="price">€ {cost / 4}</td>
		</tr>
	</tbody>
</table>

<style lang="scss">
	.price-table {
		font-size: 1.15rem;
		display: table;
		margin: 2rem auto;
		width: 100%;
		max-width: 450px;
		border: 2px solid #0002;
		border-radius: 1rem;
		border-spacing: 0.5rem;

		td {
			text-align: center;
			padding: 0.5rem;
			width: 50%;

			&.price {
				background-color: #e8f3ff;
				font-size: 1.35rem;
				border-radius: 0.5rem;
			}
		}
	}
</style>
