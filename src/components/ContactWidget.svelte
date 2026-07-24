<div>
	<a href="mailto:didi@musikunterricht-holzkirchen.de">
		E-Mail <i>didi@musikunterricht-holzkirchen.de</i>
	</a>
	<a href="tel:+4980247887">Telefon <i>08024 / 7887</i></a>
</div>

<style lang="scss">
	div {
		display: flex;
		text-align: center;
		justify-content: center;
		align-items: stretch;
		font-size: 1.8rem;

		@media (max-width: 650px) {
			flex-direction: column;
			align-items: center;
		}

		a {
			display: inline-block;
			padding: 1.5rem 0.5rem 1rem;
			border-radius: 1rem;
			margin: 1rem 1rem 3rem;
			width: 12rem;

			@media (max-width: 650px) {
				margin-bottom: 0;

				& + a {
					margin-bottom: 3rem;
				}
			}

			i {
				display: block;
				font-style: normal;
				font-size: 1rem;
				margin-top: 0.6rem;
				color: var(--text-color);
			}

			&:hover {
				text-decoration: none;
				background-color: var(--color-bg-transparent);
			}
		}
	}
</style>
