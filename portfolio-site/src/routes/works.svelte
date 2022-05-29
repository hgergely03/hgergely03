<script lang="ts">
	import GridItem from '$lib/GridItem.svelte';
	import { works } from '$lib/content/works';
	import { t } from '$lib/translations';
</script>

<section>
	<div class="container">
		<div class="row">
			<div class="col">
				<h2 class="large-heading">{$t('work.allWorks')}</h2>
			</div>
		</div>
		{#each works as work}
			<div class="row pb-2">
				<div class="col">
					<GridItem
						title={work.title}
						description={work.motto}
						href={'/works/' + work.slug}
						backgroundImage={work.coverImageUrl}
					/>
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		padding-top: 5rem;
	}
</style>
