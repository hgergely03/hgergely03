<script lang="ts">
	export let title = 'Lorem';
	export let description = 'ipsum';
	export let href = '/about';
	export let halfSize = false;
	export let backgroundImage =
		'https://cdn.pixabay.com/photo/2022/03/23/13/43/bird-7087260_960_720.jpg';
</script>

<a href={href}>
	<article style="background-image: url({backgroundImage}); min-height: {halfSize ? 15 : 27}vh;">
		<div class="grid-content" style="height: {halfSize ? 7 : 10}rem;">
			<h3 class="grid-title">{title}</h3>
			<p class="grid-description">{description}</p>
		</div>
	</article>
</a>

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

	/* TODO: Create hover effect */
	a {
		color: $dark-text-color;
		color: var(--dark-text-color);
		text-decoration: none;
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
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		border-radius: 3px;
	}

	@media only screen and (max-width: 512px) {
		article {
			min-height: 27vh !important;
		}
	}
</style>
