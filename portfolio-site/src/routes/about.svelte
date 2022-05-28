<script lang="ts">
	import { competitions } from '$lib/competitions';
	import PostCover from '$lib/PostCover.svelte';
	import PostSummary from '$lib/PostSummary.svelte';
	import { t } from '$lib/translations';
</script>

<!-- TODO: About page could be unified with [post] -->

<section>
	<PostCover title={$t('about.title')} backgroundUrl="assets/about_me.jpg">{$t('about.motto')}</PostCover>
	<PostSummary summaryTitle={$t('about.summaryTitle')}>
		{$t('about.summary')}
	</PostSummary>
	<div class="container" id="about">
		<div class="row">
			<div class="col">
				<h2 class="large-heading">{$t('about.education')}</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6 gx-md-5">
				<p class="text-start text-md-end school">{$t('about.neumann')}</p>
				<p class="text-start text-md-end school-years">2017-2022</p>
			</div>
			<div class="col-md-6">
				<p>
					{$t('about.neumannDescription')}
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<h2 class="large-heading">{$t('about.skills')}</h2>
			</div>
		</div>
		<div class="row left-line">
			<div class="col-sm stack-item">
				<img class="img-fluid rounded-circle pb-1" src="https://picsum.photos/150/150" alt="img" />
				<p>C#</p>
			</div>
			<div class="col-sm stack-item">
				<img class="img-fluid rounded-circle pb-1" src="https://picsum.photos/150/150" alt="img" />
				<p>Dart & Flutter</p>
			</div>
			<div class="col-sm stack-item">
				<img class="img-fluid rounded-circle pb-1" src="https://picsum.photos/150/150" alt="img" />
				<p>HTML, CSS, JS, TS</p>
			</div>
			<div class="col-sm stack-item">
				<img class="img-fluid rounded-circle pb-1" src="https://picsum.photos/150/150" alt="img" />
				<p>Java, Angular (basic)</p>
			</div>
			<div class="col-sm stack-item">
				<img class="img-fluid rounded-circle pb-1" src="https://picsum.photos/150/150" alt="img" />
				<p>Git</p>
			</div>
			<div class="col-sm stack-item">
				<img class="img-fluid rounded-circle pb-1" src="https://picsum.photos/150/150" alt="img" />
				<p>Linux</p>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<h2 class="large-heading">{$t('about.competitions')}</h2>
			</div>
		</div>
		{#each competitions as competition}
			<div class="row">
				<div class="col-md-6 gx-md-5">
					<p class="text-start text-md-end school">{competition.title}</p>
					<p class="text-start text-md-end school-years">{competition.date}</p>
				</div>
				<div class="col-md-6">
					<p>
						{competition.summary}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	p {
		text-align: justify;
	}

	.school {
		margin-bottom: 0px;
		font-weight: 700;
	}

	#about {
		margin-top: 2rem;
	}
</style>
