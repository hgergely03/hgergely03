<script lang="ts">
	import { t } from '$lib/translations';

    export let src: string;
    export let alt: string;
    export let title: string;
</script>

<div class="col-sm stack-item">
    <img
        class="img-fluid rounded-circle mb-3 stack-img"
        src="{src}"
        alt="{alt}"
    />
    <p>{$t(title.toString())}</p>
</div>

<style lang="scss">

</style>
