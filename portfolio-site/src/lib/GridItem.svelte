<script lang="ts">
	export let title = 'Lorem';
	export let description = 'ipsum';
    export let halfSize = false;
	export let backgroundImage =
		'https://cdn.pixabay.com/photo/2022/03/23/13/43/bird-7087260_960_720.jpg';
</script>

<article style="background-image: url({backgroundImage}); min-height: {halfSize ? 15 : 24}vh;">
	<div class="grid-content">
		<h3 class="grid-title">{title}</h3>
		<p class="grid-description">{description}</p>
	</div>
</article>

<style lang="scss">
	article {
		min-height: 15vh;
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.25);
		border-radius: 3px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.grid-title,
	.grid-description {
		margin: 0px;
		padding-left: 6px;
	}

	.grid-description {
		padding-bottom: 6px;
	}

	.grid-title {
		padding-top: 6px;
	}

	.grid-content {
		background: rgb(48, 48, 48);
		background: -moz-linear-gradient(
			0deg,
			rgba(48, 48, 48, 1) 0%,
			rgba(48, 48, 48, 0.3) 50%,
			rgba(48, 48, 48, 0.15) 65%,
			rgba(48, 48, 48, 0.07) 75%,
			rgba(48, 48, 48, 0.04) 83%,
			rgba(48, 48, 48, 0.02) 88%,
			rgba(48, 48, 48, 0) 100%
		);
		background: -webkit-linear-gradient(
			0deg,
			rgba(48, 48, 48, 1) 0%,
			rgba(48, 48, 48, 0.3) 50%,
			rgba(48, 48, 48, 0.15) 65%,
			rgba(48, 48, 48, 0.07) 75%,
			rgba(48, 48, 48, 0.04) 83%,
			rgba(48, 48, 48, 0.02) 88%,
			rgba(48, 48, 48, 0) 100%
		);
		background: linear-gradient(
			0deg,
			rgba(48, 48, 48, 1) 0%,
			rgba(48, 48, 48, 0.3) 50%,
			rgba(48, 48, 48, 0.15) 65%,
			rgba(48, 48, 48, 0.07) 75%,
			rgba(48, 48, 48, 0.04) 83%,
			rgba(48, 48, 48, 0.02) 88%,
			rgba(48, 48, 48, 0) 100%
		);
		height: 7rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		border-radius: 3px;
	}

</style>
