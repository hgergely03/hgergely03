<script lang="ts">
	import GridItem from '$lib/GridItem.svelte';
	import { works } from '$lib/content/works';

	const featuredWorks = [
		works.find((p) => p.slug === 'hello-world'),
		works.find((p) => p.slug === 'hello-world-2'),
		works.find((p) => p.slug === 'hello-world'),
		works.find((p) => p.slug === 'hello-world-2'),
		works.find((p) => p.slug === 'hello-world-3'),
		works.find((p) => p.slug === 'hello-world-2')
	];
</script>

<section>
	<div class="container left-line">
		<!-- Top row -->
		<div class="row g-sm-2">
			<div class="col-sm-6">
				<GridItem
					title={featuredWorks[0]?.title}
					description={featuredWorks[0]?.motto}
					href={'/works/' + featuredWorks[0]?.slug}
					backgroundImage={featuredWorks[0]?.coverImageUrl}
				/>
			</div>
			<div class="col-sm-6">
				<div class="row">
					<div class="col-sm-12 mt-2 mt-sm-0">
						<GridItem
							title={featuredWorks[1]?.title}
							description={featuredWorks[1]?.motto}
							href={'/works/' + featuredWorks[1]?.slug}
							backgroundImage={featuredWorks[1]?.coverImageUrl}
							halfSize={true}
						/>
					</div>
					<div class="col-sm-12 gy-sm-2 mt-2">
						<GridItem
							title={featuredWorks[2]?.title}
							description={featuredWorks[2]?.motto}
							href={'/works/' + featuredWorks[2]?.slug}
							backgroundImage={featuredWorks[2]?.coverImageUrl}
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
					title={featuredWorks[3]?.title}
					description={featuredWorks[3]?.motto}
					href={'/works/' + featuredWorks[3]?.slug}
					backgroundImage={featuredWorks[3]?.coverImageUrl}
				/>
			</div>
		</div>
		<!-- Bottom row -->
		<div class="row g-sm-2">
			<div class="col-sm-4 mt-2">
				<GridItem
					title={featuredWorks[4]?.title}
					description={featuredWorks[4]?.motto}
					href={'/works/' + featuredWorks[4]?.slug}
					backgroundImage={featuredWorks[4]?.coverImageUrl}
				/>
			</div>
			<div class="col-sm-8 mt-2">
				<GridItem
					title={featuredWorks[5]?.title}
					description={featuredWorks[5]?.motto}
					href={'/works/' + featuredWorks[5]?.slug}
					backgroundImage={featuredWorks[5]?.coverImageUrl}
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
