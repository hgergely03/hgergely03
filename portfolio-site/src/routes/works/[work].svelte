<script lang="ts">
	import { page } from '$app/stores';
	import { works } from '$lib/content/works';
	import PostCover from '$lib/PostCover.svelte';
	import PostSummary from '$lib/PostSummary.svelte';
	import { t } from '$lib/translations';

	const slug = $page.params.work;
	let post = works.find((p) => p.slug === slug);
	let url = '';
	if (post) {
		url = 'work.' + post.slug;
	}
</script>

<svelte:head>
	<title>{$t(url + '.title')}</title>
</svelte:head>

<section>
	{#if post}
		<PostCover title={$t(url + '.title')} backgroundUrl={$t(url + '.coverImageUrl')}>{$t(url + '.motto')}</PostCover>
		<PostSummary summaryTitle={$t(url + '.summaryTitle')}>{$t(url + '.summary')}</PostSummary>
		<div class="container" id="post-body">
				<div class="row">
					<div class="col">
						<h2 class="large-heading">{$t(url + '.p1' + '.title')}</h2>
					</div>
				</div>
				<div class="row left-line">
					<div class="col-md-6 gx-md-5">
						<p>
							{$t(url + '.p1' + '.content')}
						</p>
					</div>
					<div class="col-md-6">
						<img class="img-fluid post-image d-block d-md-inline mx-auto" src={$t(url + '.p1' + '.imgUrl')} alt={$t(url + '.p1' + '.title')} />
					</div>
				</div>
			<div class="row pt-5">
				<div class="col">
					<h2 class="large-heading">Stack</h2>
				</div>
			</div>
			<div class="row left-line">
				{#each Array(post.stackNumber) as _, index}
					<div class="col-sm stack-item">
							<img
								class="img-fluid rounded-circle mb-3 stack-img"
								src={$t(url + '.stack' + index + '.imgUrl')}
								alt={$t(url + '.stack' + index + '.title')}
							/>
						<p>{$t(url + '.stack' + index + '.title')}</p>
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
