<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer>
	<div class="container">
		<div class="row justify-content-md-center">
			<div class="col-md-auto">
				<a href="https://github.com/hgergely03" target="_blank">GitHub</a>
			</div>
			<div class="col-md-auto"><a href="/contact">Contact</a></div>
			<div class="col-md-auto"><a href="/privacy">Privacy</a></div>
		</div>
		<div class="row mt-4">
			<p>&copy; Horváth Gergely {year}</p>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		background-color: $hero-background;
		background-color: var(--hero-background);
		color: $light-text-color;
		color: var(--light-text-color);
		text-align: center;
		margin-top: auto;
	}

	a {
		padding-left: 24px;
		padding-right: 24px;
		font-size: 24px;
		color: $light-text-color;
		color: var(--light-text-color);
		text-decoration: none;
	}

	p {
		font-size: 20px;
		font-weight: 200;
	}

	@media only screen and (min-width: 480px) {
		footer {
			padding: 20px 0;
		}
	}
</style>
