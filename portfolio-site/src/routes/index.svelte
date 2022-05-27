<script context="module">
	import { browser, dev } from '$app/env';
	import Hero from '$lib/Hero.svelte';
	import Works from '$lib/Works.svelte';
	import About from '$lib/AboutMe.svelte';
	import { t } from '$lib/translations';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>{$t('home.title')}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero/>
<Works/>
<About/>

<style lang="scss">
</style>
