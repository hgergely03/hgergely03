<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import '../app.scss';
</script>

<Navbar/>

<main>
	<slot />
</main>

<Footer/>

<style>
	
</style>
