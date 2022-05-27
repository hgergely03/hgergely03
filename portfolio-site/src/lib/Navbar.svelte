<script lang="ts">
	import { page } from '$app/stores';
	import { t } from '$lib/translations';
	import { locale } from '$lib/translations';
	import FaRegMoon from 'svelte-icons/fa/FaRegMoon.svelte';
	import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'sveltestrap';

	let currentLocale = locale.get();
	function loc() {
		currentLocale = currentLocale === 'en' ? 'hu' : 'en';
		locale.set(currentLocale);
	}

	let isOpen = false;

	function handleUpdate(event: any) {
		isOpen = event.detail.isOpen;
	}

	let scroll = 0;
	let transparent = true;

	$: transparent = scroll < 500;
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

<svelte:window bind:scrollY={scroll} />

<header class={transparent ? 'nav-transparent' : 'nav-filled'}>
	<!-- TODO: Overwrite BS animation -->
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
					<NavLink href="/work">{$t('common.works')}</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/about">{$t('common.about')}</NavLink>
				</NavItem><NavItem>
					<NavLink href="/contact">{$t('common.contact')}</NavLink>
				</NavItem>
			</Nav>
			<Nav>
				<NavItem>
					<NavLink href="https://github.com/bestguy/sveltestrap"
						><div id="dark-mode-icon"><FaRegMoon /></div></NavLink
					>
				</NavItem>
				<NavItem>
					<NavLink on:click={loc}>{currentLocale.toUpperCase()}</NavLink>
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

	.nav-transparent {
		background-color: transparent !important;
	}

	.nav-filled {
		background-color: $hero-background !important;
		background-color: var(--hero-background) !important;
	}

	#dark-mode-icon {
		width: 24px;
	}
</style>
