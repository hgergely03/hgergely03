<script lang="ts">
	import { competitions } from '$lib/content/competitions';
	import PostCover from '$lib/PostCover.svelte';
	import PostSummary from '$lib/PostSummary.svelte';
	import { t } from '$lib/translations';
</script>

<!-- TODO: About page could be unified with [post] -->

<section>
	<PostCover title={$t('about.title')} backgroundUrl="assets/about_me.jpg"
		>{$t('about.motto')}</PostCover
	>
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
				<p class="paragraph">
					{$t('about.neumannDescription')}
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<h2 class="large-heading">{$t('about.skills')}</h2>
			</div>
		</div>
		<div class="left-line">
			<div class="row px-2 px-lg-0">
				<div class="col-sm stack-item">
					<img
						class="img-fluid rounded-circle mb-3 stack-img"
						src="/assets/csharp-logo.png"
						alt="img"
					/>
					<p>{$t('about.cSharp')}</p>
				</div>
				<div class="col-sm stack-item">
					<img
						class="img-fluid rounded-circle mb-3 stack-img"
						src="/assets/dart-flutter.png"
						alt="img"
					/>
					<p>{$t('about.dartFlutter')}</p>
				</div>
				<div class="col-sm stack-item">
					<img
						class="img-fluid rounded-circle mb-3 stack-img"
						src="/assets/html-css-js.png"
						alt="img"
					/>
					<p>{$t('about.webTechs')}</p>
				</div>
				<div class="col-sm stack-item">
					<img
						class="img-fluid rounded-circle mb-3 stack-img"
						src="/assets/bootstrap.png"
						alt="img"
					/>
					<p>{$t('about.bootstrap')}</p>
				</div>
			</div>
			<div class="row mt-sm-5 d-flex justify-content-center">
				<div class="col-sm stack-item">
					<img
						class="img-fluid rounded-circle mb-3 stack-img"
						src="/assets/svelte.png"
						alt="img"
					/>
					<p>{$t('about.svelte')}</p>
				</div>
				<div class="col-sm stack-item">
					<img
						class="img-fluid rounded-circle mb-3 stack-img"
						src="/assets/figma.png"
						alt="img"
					/>
					<p>{$t('about.figma')}</p>
				</div>
				<div class="col-sm stack-item">
					<img
						class="img-fluid rounded-circle mb-3 stack-img"
						src="/assets/git-linux.png"
						alt="img"
					/>
					<p>{$t('about.gitAndLinux')}</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<h2 class="large-heading" id="competitions">{$t('about.competitions')}</h2>
			</div>
		</div>
		<div class="mx-auto pb-2" id="awards">
			{#each competitions as competition}
				<div class="row award-item d-flex align-items-center mb-2 p-2">
					<div class="col-8 award-name">{$t('competitions.' + competition + '.title')}</div>
					<div class="col-4 d-flex justify-content-end">
						<div class="align-right">
							<span class="badge award-bubble rounded-pill">
								{$t('competitions.' + competition + '.date')}
							</span>
							<span class="badge award-bubble rounded-pill">
								{$t('competitions.' + competition + '.place')}
							</span>
						</div>
					</div>
				</div>
				<!-- <ul class="list-group">
					<li class="list-group-item d-flex align-items-center mb-2">
						<div class="me-auto"></div>
						<span class="badge award-bubble rounded-pill mx-4"></span>
						<div class="place"><span class="badge award-bubble rounded-pill"></span></div>
					</li>
				</ul> -->
				<!-- <div class="row">
					<div class="col-md-6 gx-md-5">
						<p class="text-start text-md-end school">
							{$t('competitions.' + competition + '.title')}
						</p>
						<p class="text-start text-md-end">{$t('competitions.' + competition + '.date')}</p>
					</div>
					<div class="col-md-6">
						<p class="paragraph">
							{$t('competitions.' + competition + '.place')}
						</p>
					</div>
				</div> -->
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.paragraph {
		text-align: justify;
	}

	.school {
		margin-bottom: 0px;
		font-weight: 700;
	}

	#awards {
		max-width: 60vw;
	}

	#about {
		margin-top: 2rem;
	}

	.align-right {
		text-align: right;
	}

	@media only screen and (max-width: 768px) {
		#awards {
			max-width: 90vw;
		}
	}
</style>
