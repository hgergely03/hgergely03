<script lang="ts">
	import WorksGrid from '$lib/WorksGrid.svelte';
	import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';
	import { t } from '$lib/translations';
</script>

<section>
	<div class="container" id="latest-works">
		<div class="row">
			<div class="col-md-6">
				<h2 class="large-heading">{$t('home.latestWorks')}</h2>
			</div>
			<div class="col-md-6" id="all-works">
				<a href="/works" id="all-works-link">
					{$t('home.all')}
					<div class="icon" id="all-works-icon"><FaArrowRight /></div>
				</a>
			</div>
		</div>
	</div>
	<WorksGrid />
</section>

<style lang="scss">
	#all-works-link {
		text-decoration: none;
		font-size: 1.5rem;
	}

	#all-works {
		display: flex;
		justify-content: end;
		align-items: center;
	}

	#latest-works {
		padding-top: 2rem;
		padding-bottom: 1rem;
	}

	.icon {
		width: 16px;
		height: 16px;
		display: inline-block;
	}

	@media only screen and (max-width: 512px) {
		#all-works {
			justify-content: start;
		}
	}
</style>
