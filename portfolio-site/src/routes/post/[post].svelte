<script lang="ts">
	import { page } from '$app/stores';
	import { posts } from '$lib/posts';
	import PostCover from '$lib/PostCover.svelte';
	import PostSummary from '$lib/PostSummary.svelte';

	const slug = $page.params.post;
	let post = posts.find((p) => p.slug === slug);
</script>

<section>
	{#if post}
		<PostCover title={post.title}>{post.motto}</PostCover>
		<PostSummary summaryTitle={post.summaryTitle}>{post.summary}</PostSummary>
		<div class="container" id="post-body">
			{#each post.content as paragraph}
				<div class="row">
					<div class="col">
						<h2 class="large-heading">{paragraph.title}</h2>
					</div>
				</div>
				<div class="row left-line">
					<div class="col-md-6 gx-md-5">
						<p>
							{paragraph.text}
						</p>
					</div>
					<div class="col-md-6">
						<img class="img-fluid" src={paragraph.imageUrl} alt={paragraph.title} />
					</div>
				</div>
			{/each}
			<div class="row pt-5">
				<div class="col">
					<h2 class="large-heading">Stack</h2>
				</div>
			</div>
			<div class="row left-line">
				{#each post.stack as stackItem}
					<div class="col-sm stack-item">
						<img class="img-fluid rounded-circle pb-1" src={stackItem.imageUrl} alt={stackItem.title} />
						<p>{stackItem.title}</p>
					</div>
				{/each}
			</div>
		</div>
	{:else}
		<div id="post-not-found">
			<h2 class="large-heading">Post not found!</h2>
		</div>
	{/if}
</section>

<style lang="scss">
	p {
		text-align: justify;
	}

	#post-body {
		margin-top: 2rem;
	}

	#post-not-found {
		height: 90vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
