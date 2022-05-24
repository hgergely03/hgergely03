<script lang="ts">
	import { page } from '$app/stores';
	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink
	} from 'sveltestrap';
	import { MoonIcon } from 'svelte-feather-icons';
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

<header>
	<!-- TODO: Overwrite BS animation -->
	<!-- https://getbootstrap.com/docs/5.0/customize/sass/ Sigh -->
	<Navbar color="dark" dark expand="md">
		<NavbarBrand href="/">HG</NavbarBrand>
		<NavbarToggler on:click={() => (isOpen = !isOpen)} />
		<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
			<Nav class="mx-auto" navbar>
				<NavItem>
					<NavLink href="#components/">Home</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="https://github.com/bestguy/sveltestrap">Works</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="https://github.com/bestguy/sveltestrap">About</NavLink>
				</NavItem><NavItem>
					<NavLink href="https://github.com/bestguy/sveltestrap">Contact</NavLink>
				</NavItem>
			</Nav>
			<Nav>
				<NavItem>
					<NavLink href="https://github.com/bestguy/sveltestrap"><MoonIcon /></NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="https://github.com/bestguy/sveltestrap">HU</NavLink>
				</NavItem>
			</Nav>
		</Collapse>
	</Navbar>
</header>

<style lang="scss">
</style>
