<script context="module" lang="ts">
	import { locale, loadTranslations } from '$lib/translations';
	import { browser } from '$app/env';
	import { theme } from '$lib/Navbar.svelte';

	export const load = async ({ url }: { url: any }) => {
		const { pathname } = url;

		const defaultLocale = 'en'; // get from cookie, user session, ...
		if (browser) {
			let storedLocale = localStorage.getItem('locale');
			if (storedLocale) {
				locale.forceSet(storedLocale);
			}
		}

		const initLocale = locale.get() || defaultLocale; // set default if no locale already set

		await loadTranslations(initLocale, pathname); // keep this just before the `return`

		return {};
	};
</script>

<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import '../app.scss';

	let currentTheme: string;
	theme.subscribe((value) => {
		currentTheme = value;
	});
	if (browser) {
		currentTheme = localStorage.getItem('theme') || 'light';
	}
</script>

<Navbar />

<main class={currentTheme === 'light' ? 'light-theme' : 'dark-theme'}>
	<slot />
</main>

<Footer />

<style lang="scss">
	.dark-theme {
		background-color: $dark-page-background;
		background-color: var(--dark-page-background);
	}

	.light-theme {
		background-color: $light-page-background;
		background-color: var(--light-page-background);
	}
</style>
