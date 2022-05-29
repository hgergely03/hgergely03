<script lang="ts">
	import GridItem from '$lib/GridItem.svelte';
	import { t } from '$lib/translations';

	const featuredWorks = ['parkmyst', 'elmesema', 'flutter-nameday-api', 'napp', 'hazizz', 'parkmyst'];
</script>

<section>
	<div class="container left-line">
		<!-- Top row -->
		<div class="row g-sm-2">
			<div class="col-sm-6">
				<GridItem
					title={$t('work.' + featuredWorks[0] + '.title')}
					description={$t('work.' + featuredWorks[0] + '.motto')}
					href={'/works/' + featuredWorks[0]}
					backgroundImage={$t('work.' + featuredWorks[0] + '.coverImageUrl')}
				/>
			</div>
			<div class="col-sm-6">
				<div class="row">
					<div class="col-sm-12 mt-2 mt-sm-0">
						<GridItem
							title={$t('work.' + featuredWorks[1] + '.title')}
							description={$t('work.' + featuredWorks[1] + '.motto')}
							href={'/works/' + featuredWorks[1]}
							backgroundImage={$t('work.' + featuredWorks[1] + '.coverImageUrl')}
							halfSize={true}
						/>
					</div>
					<div class="col-sm-12 gy-sm-2 mt-2">
						<GridItem
							title={$t('work.' + featuredWorks[2] + '.title')}
							description={$t('work.' + featuredWorks[2] + '.motto')}
							href={'/works/' + featuredWorks[2]}
							backgroundImage={$t('work.' + featuredWorks[2] + '.coverImageUrl')}
							halfSize={true}
						/>
					</div>
				</div>
			</div>
		</div>
		<!-- Middle row -->
		<div class="row my-sm-2">
			<div class="col mt-2 mt-sm-0">
				<GridItem
					title={$t('work.' + featuredWorks[3] + '.title')}
					description={$t('work.' + featuredWorks[3] + '.motto')}
					href={'/works/' + featuredWorks[3]}
					backgroundImage={$t('work.' + featuredWorks[3] + '.coverImageUrl')}
				/>
			</div>
		</div>
		<!-- Bottom row -->
		<div class="row g-sm-2">
			<div class="col-sm-4 mt-2">
				<GridItem
					title={$t('work.' + featuredWorks[4] + '.title')}
					description={$t('work.' + featuredWorks[4] + '.motto')}
					href={'/works/' + featuredWorks[4]}
					backgroundImage={$t('work.' + featuredWorks[4] + '.coverImageUrl')}
				/>
			</div>
			<div class="col-sm-8 mt-2">
				<GridItem
					title={$t('work.' + featuredWorks[5] + '.title')}
					description={$t('work.' + featuredWorks[5] + '.motto')}
					href={'/works/' + featuredWorks[5]}
					backgroundImage={$t('work.' + featuredWorks[5] + '.coverImageUrl')}
				/>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		min-height: 40vh;
	}
</style>
