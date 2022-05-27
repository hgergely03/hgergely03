<script lang="ts">
	import GridItem from '$lib/GridItem.svelte';
	import { posts } from '$lib/posts';
</script>

<section>
	<div class="container">
		<div class="row">
			<div class="col">
				<h2 class="large-heading">All my works</h2>
			</div>
		</div>
		{#each posts as post}
			<div class="row pb-2">
				<div class="col">
					<GridItem
						title={post.title}
						description={post.motto}
						href={'/post/' + post.slug}
						backgroundImage={post.coverImageUrl}
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
