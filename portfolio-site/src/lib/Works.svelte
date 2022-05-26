<script lang="ts">
    import WorksGrid from '$lib/WorksGrid.svelte';
	import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';
</script>

<section>
	<div class="container" id="latest-works">
		<div class="row mx-auto">
			<div class="col-md-6">
				<h2>Latest works</h2>
			</div>
			<div class="col-md-6" id="all-works">
				<a href="/allworks" id="all-works-link">
					See all my works
					<div class="icon"><FaArrowRight /></div>
				</a>
			</div>
		</div>
	</div>
    <WorksGrid />    
</section>

<style lang="scss">
    // TODO: Unify font sizes with variables
    // TODO: Unify padding as well
	h2 {
		color: $dark-text-color;
		color: var(--dark-text-color);
		text-decoration: underline;
		text-decoration-color: $underline-red;
		text-decoration-color: var(--underline-red);
        font-size: 2.5rem;
	}

	#all-works-link {
		color: $dark-text-color;
		color: var(--dark-text-color);
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
		color: $dark-text-color;
		color: var(--dark-text-color);
		width: 16px;
		height: 16px;
		display: inline-block;
	}

    @media (max-width: 512px) {
        #all-works {
        justify-content: start;
    }
    }
</style>
