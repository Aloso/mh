<script lang="ts">
	import { resolve } from '$app/paths'
	import { page } from '$app/state'
	import type { Pathname } from '$app/types'
	import logo from '../lib/assets/logo.svg'
	import navAnimation from './navAnimation'

	const headerItems: { url: Pathname; name: string }[] = [
		{ url: '/', name: 'Start' },
		{ url: '/ueber-uns', name: 'Über uns' },
		{ url: '/instrumente', name: 'Instrumente' },
		{ url: '/kinder-und-musik', name: 'Kinder & Musik' },
		{ url: '/gebuehren', name: 'Gebühren' },
		{ url: '/duo-facile', name: 'Duo Facile' },
		{ url: '/kontakt', name: 'Kontakt' },
	]

	let ulElem = $state<HTMLElement>()
	let isOpen = $state(false)

	function toggle() {
		isOpen = !isOpen
	}
</script>

<header>
	<a id="logo-link" href={resolve('/')}>
		<img src={logo} alt="Musikunterricht Holzkirchen" />
	</a>
</header>
<nav class:isOpen use:navAnimation={{ ulElem, isOpen, minHeight: '3rem' }}>
	<ul bind:this={ulElem}>
		{#each headerItems as item (item.url)}
			<li class:active={page.url.pathname === item.url}>
				<a href={resolve(item.url)}>{item.name}</a>
			</li>
		{/each}
	</ul>
	<button id="expand" onclick={toggle}>Mehr</button>
</nav>

<style lang="scss">
	$nav-height: 3rem;
	$nav-item-gap: 0.25rem;

	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #f9f5e9;
		padding: 1.5rem;

		#logo-link {
			display: block;
			width: 400px;
			max-width: 70%;

			img {
				width: 100%;
				aspect-ratio: 633 / 242;
			}
		}

		@media (max-width: 870px) {
			padding: 1rem;

			#logo-link {
				width: 350px;
				max-width: 80%;
			}
		}
	}

	#expand {
		display: none;
	}

	nav {
		position: sticky;
		top: 0;
		display: flex;
		background-color: #f9f5e9;
		justify-content: space-around;
		border: 2px solid var(--color-bg-transparent);
		border-width: 0 0 2px 0;
		margin: none;
		height: 3rem;
		overflow: hidden;

		@media (max-width: 870px) {
			justify-content: space-between;
			align-items: start;

			#expand {
				display: block;
				background-color: transparent;
				margin: 0.25rem 0.5rem;
				padding: 0 1rem;
				height: calc($nav-height - 0.5rem);
				border: none;
				font: inherit;
				font-weight: 500;
				cursor: pointer;
				white-space: nowrap;
				background-color: #0001;
				border-radius: 2rem;

				&::before {
					content: '';
					display: inline-block;
					width: 0.45rem;
					height: 0.45rem;
					margin: 0 0.5rem 0 0;
					vertical-align: 0.1rem;
					border: 2px solid currentColor;
					border-width: 0 2px 2px 0;
					transform: rotate(45deg);
					transform-origin: 0.35rem 0.35rem;
					transition: transform 0.2s;
				}

				&:hover,
				&:focus {
					color: var(--theme-color);
				}

				&:focus-visible {
					outline: 2px solid var(--theme-color);
				}
			}

			ul {
				margin-bottom: 0;

				li {
					border: none;

					a {
						margin-bottom: 0;
					}
				}
			}
		}

		&.isOpen {
			height: auto;

			#expand::before {
				transform: rotate(225deg);
			}
		}
	}

	ul {
		padding: 0 0.5rem;
		margin: 0 0 -2px 0;
		display: flex;
		list-style: none;
		gap: 0 $nav-item-gap;
		white-space: nowrap;
		overflow: auto;
		flex-wrap: wrap;
	}

	li {
		color: var(--text-color);
		border-bottom: 2px solid transparent;

		&.active {
			color: var(--theme-color);
			border-color: var(--theme-color);
		}

		a {
			display: flex;
			align-items: center;
			height: $nav-height;
			vertical-align: middle;
			padding: 0 0.5rem;
			margin: 0;
			color: inherit;
			font-weight: 500;
			text-decoration: none;
			transition: color 0.2s linear;

			&:hover {
				color: var(--theme-color);
			}
		}
	}
</style>
