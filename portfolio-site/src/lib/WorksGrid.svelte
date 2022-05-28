<script lang="ts">
	import GridItem from '$lib/GridItem.svelte';
	import { posts } from '$lib/posts';

	const postList = [
		posts.find((p) => p.slug === 'hello-world'),
		posts.find((p) => p.slug === 'hello-world-2'),
		posts.find((p) => p.slug === 'hello-world'),
		posts.find((p) => p.slug === 'hello-world-2'),
		posts.find((p) => p.slug === 'hello-world-3'),
		posts.find((p) => p.slug === 'hello-world-2')
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
						<GridItem
							title={postList[1]?.title}
							description={postList[1]?.motto}
							href={'/post/' + postList[1]?.slug}
							backgroundImage={postList[1]?.coverImageUrl}
							halfSize={true}
						/>
					</div>
					<div class="col-sm-12 gy-sm-2 mt-2">
						<GridItem
							title={postList[2]?.title}
							description={postList[2]?.motto}
							href={'/post/' + postList[2]?.slug}
							backgroundImage={postList[2]?.coverImageUrl}
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
					title={postList[3]?.title}
					description={postList[3]?.motto}
					href={'/post/' + postList[3]?.slug}
					backgroundImage={postList[3]?.coverImageUrl}
				/>
			</div>
		</div>
		<!-- Bottom row -->
		<div class="row g-sm-2">
			<div class="col-sm-4 mt-2">
				<GridItem
					title={postList[4]?.title}
					description={postList[4]?.motto}
					href={'/post/' + postList[4]?.slug}
					backgroundImage={postList[4]?.coverImageUrl}
				/>
			</div>
			<div class="col-sm-8 mt-2">
				<GridItem
					title={postList[5]?.title}
					description={postList[5]?.motto}
					href={'/post/' + postList[5]?.slug}
					backgroundImage={postList[5]?.coverImageUrl}
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
