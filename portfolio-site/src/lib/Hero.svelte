<script lang="ts">
	import Typewriter from 'svelte-typewriter';
    import { animateScroll } from 'svelte-scrollto-element';
    import { linear } from 'svelte/easing';
	import IoIosArrowDropdown from 'svelte-icons/io/IoIosArrowDropdown.svelte';
	import { t } from '$lib/translations';

	const color = '#FF6161';
</script>

<section>
	<div id="hero-content">
		<div id="name">
			<h1 id="last-name">Horváth</h1>
			<h1 id="first-name">Gergely</h1>
			<Typewriter interval={40} cursor={color} loop={60000}
				><p id="typewrite" class="light-text">{$t('home.typewriter')}</p></Typewriter
			>
		</div>
		<div id="scroll-down">
			<!-- svelte-ignore a11y-missing-attribute -->
			<a
				on:click={() =>
					animateScroll.scrollTo({
						// @ts-ignore
						element: '#latest-works',
						easing: linear,
						duration: 200,
						offset: -24,
					})}
			>
				<div class="icon mx-auto">
					<IoIosArrowDropdown />
				</div>
			</a>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		background-color: $hero-background;
		background-color: var(--hero-background);
		width: 100%;
		min-height: 85vh;
	}

	#hero-content {
		padding-top: 27vh;
	}

	#name {
		position: relative;
		left: 15%;
		max-width: 85%;
		overflow-wrap: break-word;
	}

	#name > h1 {
		font-size: 4rem;
	}

	#first-name {
		font-weight: 500;
	}

	#last-name {
		color: #a3a3a3;
		font-weight: 400;
	}

	#typewrite {
		font-size: 1.3rem;
	}

	#scroll-down {
		padding-top: 25vh;
		padding-bottom: 5vh;
	}

	.icon:hover {
		cursor: pointer;
		color: #a3a3a3;
	}

	@media only screen and (max-width: 512px) {
		#name {
			left: 10%;
		}
		#name > h1 {
			font-size: 3rem;
		}

		#scroll-down {
			padding-top: 10vh;
		}
	}
</style>
