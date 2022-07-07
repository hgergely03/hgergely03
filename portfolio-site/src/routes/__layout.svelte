<script context="module" lang="ts">
	import { locale, loadTranslations } from '$lib/translations';
	import { browser } from '$app/env';
	import { theme } from '$lib/Navbar.svelte';

	export const load = async ({ url }: { url: any }) => {
		const { pathname } = url;

		let defaultLocale;
		if (browser) {
			defaultLocale = navigator.language; // get from cookie, user session, ...
			let storedLocale = localStorage.getItem('locale');
			if (storedLocale) {
				locale.forceSet(storedLocale);
			}
		}

		const initLocale = locale.get() || defaultLocale || 'en'; // set default if no locale already set

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
		let storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			currentTheme = storedTheme;
		} else {
			currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
		theme.set(currentTheme);
	}
</script>

<Navbar />

<main class={currentTheme === 'light' ? 'light-theme' : 'dark-theme'}>
	<slot />
</main>

<Footer />

<style lang="scss">
</style>
