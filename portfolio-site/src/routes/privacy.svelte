<script lang="ts">
	import { t } from '$lib/translations';
</script>

<section>
	<div id="privacy">
        <h2 class="large-heading">Privacy</h2>
    </div>
</section>
<svelte:head>
	<title>{$t('privacy.title')}</title>
</svelte:head>

<style lang="scss">
	#privacy {
		height: 90vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
