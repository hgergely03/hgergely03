<script lang="ts" context="module">
	export const theme = writable('light');
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/env';
	import { t } from '$lib/translations';
	import { locale } from '$lib/translations';
	import FaMoon from 'svelte-icons/fa/FaMoon.svelte';
	import FaSun from 'svelte-icons/fa/FaSun.svelte';
	import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'sveltestrap';
	import { writable } from 'svelte/store';

	let currentLocale = locale.get();
	function setLocale() {
		currentLocale = currentLocale === 'en' ? 'hu' : 'en';
		locale.set(currentLocale);
		if (browser) {
			localStorage.setItem('locale', currentLocale);
		}
	}

	let currentTheme: string;
	theme.subscribe((value) => {
		currentTheme = value;
	});

	function setTheme() {
		currentTheme = currentTheme === 'light' ? 'dark' : 'light';
		theme.set(currentTheme);
		if (browser) {
			localStorage.setItem('theme', currentTheme);
		}
	}

	let isOpen = false;

	function handleUpdate(event: any) {
		isOpen = event.detail.isOpen;
	}
</script>

<!-- 
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">Todos</a>
			</li>
 -->

<header class="nav-filled">
	<!-- TODO: Overwrite BS .nav-link animation -->
	<!-- https://getbootstrap.com/docs/5.0/customize/sass/ Sigh -->
	<Navbar dark expand="md">
		<NavbarBrand href="/">HG</NavbarBrand>
		<NavbarToggler on:click={() => (isOpen = !isOpen)} />
		<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
			<Nav class="mx-auto" navbar>
				<NavItem>
					<NavLink href="/">{$t('common.home')}</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/works">{$t('common.works')}</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/about">{$t('common.about')}</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/contact">{$t('common.contact')}</NavLink>
				</NavItem>
			</Nav>
			<Nav>
				<NavItem>
					<NavLink on:click={setTheme}>
						<div class="nav-icon" id="dark-mode-icon">
							{#if currentTheme === 'light'}
								<FaSun />
							{:else}
								<FaMoon />
							{/if}
						</div></NavLink
					>
				</NavItem>
				<NavItem>
					<NavLink on:click={setLocale}>{currentLocale.toUpperCase()}</NavLink>
				</NavItem>
			</Nav>
		</Collapse>
	</Navbar>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
	}

	/* .nav-transparent {
		background-color: transparent;
	} */

	.nav-filled {
		background-color: $hero-background;
		background-color: var(--hero-background);
	}

	#dark-mode-icon {
		color: $light-text-color;
		color: var(--light-text-color);
		width: 24px;
	}
</style>
