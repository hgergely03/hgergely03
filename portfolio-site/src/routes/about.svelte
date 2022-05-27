<script lang="ts">
	import PostCover from '$lib/PostCover.svelte';
	import PostSummary from '$lib/PostSummary.svelte';
	import { t } from '$lib/translations';
</script>

<!-- TODO: About page could be unified with [post] -->

<section>
	<PostCover title={$t('about.title')}>{$t('about.motto')}</PostCover>
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad autem dolor
					necessitatibus sed culpa labore nemo numquam aut quia voluptates aperiam libero, sint
					cumque, unde distinctio odit quasi minima!
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<h2 class="large-heading">{$t('about.skills')}</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6 gx-md-5">
				<p class="text-start text-md-end school">BMSZC Neumann János Informatikai Technikum</p>
				<p class="text-start text-md-end school-years">2017-2022</p>
			</div>
			<div class="col-md-6">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad autem dolor
					necessitatibus sed culpa labore nemo numquam aut quia voluptates aperiam libero, sint
					cumque, unde distinctio odit quasi minima!
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<h2 class="large-heading">{$t('about.competitions')}</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6 gx-md-5">
				<p class="text-start text-md-end school">BMSZC Neumann János Informatikai Technikum</p>
				<p class="text-start text-md-end school-years">2017-2022</p>
			</div>
			<div class="col-md-6">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad autem dolor
					necessitatibus sed culpa labore nemo numquam aut quia voluptates aperiam libero, sint
					cumque, unde distinctio odit quasi minima!
				</p>
			</div>
		</div>
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
