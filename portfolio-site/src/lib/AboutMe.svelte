<script lang="ts">
	import GridItem from '$lib/GridItem.svelte';
	import { t } from '$lib/translations';
</script>

<section id="about-me">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<h2 class="large-heading">{$t('home.about')}</h2>
			</div>
		</div>
	</div>
	<div class="container left-line">
		<div class="row my-sm-3">
			<div class="col mt-2 mt-sm-0">
				<GridItem
					title={$t('home.about')}
					description={$t('home.aboutDescription')}
					href={'/about'}
				/>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	// TODO: Unify font sizes with variables
	// TODO: Unify padding as well

	#about-me {
		margin-top: 3rem;
	}
</style>
