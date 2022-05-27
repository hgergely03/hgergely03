<script lang="ts">
	export let title = 'Lorem';
	export let description = 'ipsum';
	export let halfSize = false;
	export let backgroundImage =
		'https://cdn.pixabay.com/photo/2022/03/23/13/43/bird-7087260_960_720.jpg';
</script>

<article style="background-image: url({backgroundImage}); min-height: {halfSize ? 15 : 27}vh;">
	<div class="grid-content" style="height: {halfSize ? 7 : 10}rem;">
		<h3 class="grid-title">{title}</h3>
		<p class="grid-description">{description}</p>
	</div>
</article>

<style lang="scss">
	article {
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
		color: $light-text-color;
		color: var(--light-text-color);
		text-decoration: none;
		margin: 0px;
		padding-left: 12px;
		padding-right: 12px;
	}

	.grid-title {
		font-size: 2.2rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.grid-description {
		padding-bottom: 12px;
		font-size: 1.2rem;
		font-weight: 200;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/* Todo: create hover animations */
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
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		border-radius: 3px;
	}
</style>
