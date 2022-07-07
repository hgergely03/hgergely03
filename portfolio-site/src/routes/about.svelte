<script lang="ts">
	import CompetitionItem from '$lib/CompetitionItem.svelte';
	import { competitions } from '$lib/content/competitions';
	import PostCover from '$lib/PostCover.svelte';
	import PostSummary from '$lib/PostSummary.svelte';
	import StackItem from '$lib/StackItem.svelte';
	import { t } from '$lib/translations';
	import { theme } from '$lib/Navbar.svelte';

	let currentTheme: string;
	theme.subscribe((value) => {
		currentTheme = value;
	});
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
				<!-- TODO: Translate alt -->
				<StackItem title="about.cSharp" src="/assets/logos/csharp-logo.png" alt="C# logo" />
				<StackItem
					title="about.dartFlutter"
					src="/assets/logos/dart-flutter.png"
					alt="Dart & Flutter logo"
				/>
				<StackItem
					title="about.webTechs"
					src="/assets/logos/html-css-js.png"
					alt="Web technology logos"
				/>
				<StackItem title="about.bootstrap" src="/assets/logos/bootstrap.png" alt="Bootstrap logo" />
			</div>
			<div class="row mt-sm-5 d-flex justify-content-center">
				<StackItem title="about.svelte" src="/assets/logos/svelte.png" alt="img" />
				<StackItem title="about.figma" src="/assets/logos/figma.png" alt="img" />
				<StackItem title="about.gitAndLinux" src="/assets/logos/git-linux.png" alt="img" />
			</div>
		</div>
		<div class="row">
			<div class="col">
				<h2 class="large-heading" id="competitions">{$t('about.competitions')}</h2>
			</div>
		</div>
		<div class="mx-auto pb-2" id="awards">
			{#each competitions as competition}
				<CompetitionItem {competition} {currentTheme} />
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

	@media only screen and (max-width: 768px) {
		#awards {
			max-width: 90vw;
		}
	}
</style>
