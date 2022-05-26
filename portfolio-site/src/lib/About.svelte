<script lang="ts">
	import GridItem from '$lib/GridItem.svelte';
</script>

<section>
	<div class="container" id="about-me">
		<div class="row mx-auto">
			<div class="col-md-6">
				<h2>About me</h2>
			</div>
		</div>
		<div class="row my-sm-2">
			<div class="col mt-2 mt-sm-0">
				<GridItem
					title={'About me'}
					description={'Knowledge, education, competitions, fun facts'}
				/>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	// TODO: Unify font sizes with variables
	// TODO: Unify padding as well
	h2 {
		color: $dark-text-color;
		color: var(--dark-text-color);
		text-decoration: underline;
		text-decoration-color: $underline-red;
		text-decoration-color: var(--underline-red);
		font-size: 2.5rem;
	}

	#about-me {
		padding-top: 2rem;
		padding-bottom: 1rem;
	}
</style>
