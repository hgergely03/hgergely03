<script lang="ts">
	export let title: string;
	export let backgroundUrl: string =
		'https://cdn.pixabay.com/photo/2022/05/21/10/17/beach-7211174_960_720.jpg';
</script>

<div style="background-image: url({backgroundUrl});">
	<section id="post-cover">
		<h1>{title}</h1>
		<p class="light-text">
			<slot />
		</p>
	</section>
</div>

<style lang="scss">
	div {
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	#post-cover {
		min-height: 75vh;
		background: -moz-linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
		background: -webkit-linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-weight: 600;
		font-size: 3rem;
	}

	p {
		font-weight: 300;
		font-size: 2rem;
		text-align: center;
	}
</style>
