<script context="module" lang="ts">
	import { locale, loadTranslations } from '$lib/translations';

	export const load = async ({ url }: { url: any }) => {
		const { pathname } = url;

		const defaultLocale = 'en'; // get from cookie, user session, ...

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
</script>

<Navbar />

<main>
	<slot />
</main>

<Footer />

<style>
</style>
