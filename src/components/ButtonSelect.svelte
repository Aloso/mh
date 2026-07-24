<script lang="ts" generics="T extends string">
	interface Props {
		options: { name: string; value: T }[]
		selected: T | undefined
	}
	let { options, selected = $bindable() }: Props = $props()
</script>

{#each options as option (option.value)}
	<button
		class="select-btn"
		class:active={option.value === selected}
		onclick={() => (selected = option.value)}
	>
		{option.name}
	</button>
{/each}

<style lang="scss">
	.select-btn {
		display: inline-block;
		border: 1px solid #0002;
		background-color: #fff3dc;
		padding: 0.33rem 0.67rem;
		border-radius: 0.33rem;
		margin: 0 0.2rem 0.6rem;
		font: inherit;
		font-size: 1.08rem;

		@media (max-width: 600px) {
			display: block;
			width: 100%;
			margin: 0.5rem 0;
		}

		&:hover,
		&:focus {
			background-color: #ffe8bd;
		}

		&.active {
			background-color: #a0270c;
			color: white;
			font-weight: 600;
		}
	}
</style>
