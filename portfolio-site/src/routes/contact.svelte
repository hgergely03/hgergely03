<script lang="ts">
		import { t } from '$lib/translations';
</script>
<svelte:head>
	<title>{$t('contact.title')}</title>
</svelte:head>

<section>
	<div id="contact-me">
        <h2 class="large-heading">Contact me</h2>
    </div>
</section>

<style lang="scss">
	#contact-me {
		height: 90vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
