<script lang="ts">
	import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'sveltestrap';
	import { t } from '$lib/translations';

	export let competition: string;
	export let currentTheme: string;
	const base = 'competitions.' + competition;

	let teamMates: any = [];
	let number = $t(base + '.teamMates.number');
	for (let i = 0; i < number; i++) {
		teamMates.push({
			name: $t('competitions.teamMates.' + $t(base + '.teamMates.teamMate' + i) + '.name'),
			site: $t('competitions.teamMates.' + $t(base + '.teamMates.teamMate' + i) + '.site')
		});
	}

	let href: string;
	if ($t(base + '.noImage') !== 'true') {
		href = '/assets/awards/' + competition + '.png';
	} else {
		href = $t(base + '.fallBack');
	}

	let open = false;
	const toggle = () => (open = !open);
</script>

<div class="row award-item d-flex align-items-center mb-2 p-2">
	<a {href} class="col-8 award-name" on:click|preventDefault={toggle} target="_blank">
		{$t(base + '.title')}
	</a>
	<div class="col-4 d-flex justify-content-end">
		<div class="align-right">
			<span class="badge award-bubble rounded-pill">
				{$t(base + '.date')}
			</span>
			<span class="badge award-bubble rounded-pill">
				{$t(base + '.place')}
			</span>
		</div>
	</div>
</div>
<Modal
	isOpen={open}
	{toggle}
	size="md"
	class={currentTheme === 'light' ? 'modal-light' : 'modal-dark'}
>
	<ModalHeader {toggle}>{$t(base + '.title')}</ModalHeader>
	<ModalBody>
		{#if $t(base + '.noImage') === 'true'}
			<a href={$t(base + '.fallBack')} target="_blank">
				{$t('about.linkToAward')}
			</a>
			<br>
		{:else}
			<img src={'/assets/awards/' + competition + '.png'} alt={$t(base + '.title')} />
		{/if}

		{#if teamMates.length > 0}
			Team:
			{#each teamMates as mate}
				<span class="badge award-bubble rounded-pill">
					{#if mate.site !== 'false'}
						<a href={mate.site}>{mate.name}</a>
					{:else}
						{mate.name}
					{/if}
				</span>
			{/each}
		{/if}
	</ModalBody>
	{#if $t(base + '.noImage') !== 'true'}
		<ModalFooter>
			<Button color="primary" href={'/assets/awards/' + competition + '.png'} target="_blank"
				>{$t('about.seeLarger')}</Button
			>
		</ModalFooter>
	{/if}
</Modal>

<style lang="scss">
	.align-right {
		text-align: right;
	}

	.award-name {
		text-decoration: none;
	}

	.award-name:hover {
		cursor: pointer;
		text-decoration: underline;
	}

	img {
		display: block;
		margin: 0 auto;
		padding-bottom: 1rem;
		max-width: 100%;
	}
</style>
