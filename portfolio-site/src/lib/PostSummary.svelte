<script lang="ts">
	export let summaryTitle: string;
</script>

<section id="post-summary">
	<h1 class="pt-5 pb-2">{summaryTitle}</h1>
	<p class="pb-5 light-text" id="summary-text">
		<slot/>
	</p>
</section>

<style lang="scss">
	#post-summary {
		min-height: 30vh;
		background-color: $hero-background;
		background-color: var(--hero-background);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 400;
		text-align: center;
	}

	#summary-text {
		font-weight: 200;
		font-size: 1.3rem;
		max-width: 30vw;
		text-align: justify;
		margin: 0px;
	}

	@media only screen and (max-width: 1024px) {
		#summary-text {
			max-width: 40vw;
		}
	}

	@media only screen and (max-width: 768px) {
		#summary-text {
			max-width: 70vw;
			text-align: center;
		}
	}
</style>
