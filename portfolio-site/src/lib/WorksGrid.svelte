<script lang="ts">
	import GridItem from '$lib/GridItem.svelte';
	import { posts } from '$lib/posts';

	const postList = [
		posts.find((p) => p.slug === 'hello-world'),
		posts.find((p) => p.slug === 'post-1'),
		posts.find((p) => p.slug === 'post-1'),
		posts.find((p) => p.slug === 'post-1'),
		posts.find((p) => p.slug === 'post-1'),
		posts.find((p) => p.slug === 'post-1'),
	];
</script>

<section>
	<div class="container left-line">
        <!-- Top row -->
		<div class="row g-sm-2">
			<div class="col-sm-6">
				<GridItem
					title={postList[0]?.title}
					description={postList[0]?.motto}
					href={'/post/' + postList[0]?.slug}
					backgroundImage={postList[0]?.coverImageUrl}
				/>
			</div>
			<div class="col-sm-6">
				<div class="row">
					<div class="col-sm-12 mt-2 mt-sm-0">
						<GridItem title={'Title'} description={'Lorem ipsum dolor sit amet consectetur elit Lorem ipsum dolor sit amet consectetur elit'} halfSize={true} />
					</div>
					<div class="col-sm-12 gy-sm-2 mt-2">
						<GridItem title={'Title'} description={'Desc'} halfSize={true} />
					</div>
				</div>
			</div>
		</div>
        <!-- Middle row -->
		<div class="row my-sm-2">
			<div class="col mt-2 mt-sm-0">
				<GridItem title={'Title'} description={'Desc'} />
			</div>
		</div>
        <!-- Bottom row -->
		<div class="row g-sm-2">
			<div class="col-sm-4 mt-2">
				<GridItem title={'Title'} description={'Desc'} />
			</div>
			<div class="col-sm-8 mt-2">
				<GridItem title={'Title'} description={'Desc'} />
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		min-height: 40vh;
	}
</style>
