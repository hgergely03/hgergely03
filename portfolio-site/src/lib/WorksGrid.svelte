<script lang="ts">
	import GridItem from '$lib/GridItem.svelte';
</script>

<section>
	<div class="container">
		<div class="row g-sm-2">
			<div class="col-sm-6">
				<GridItem
					title={'Title'}
					description={'Desc'}
					backgroundImage={'https://cdn.pixabay.com/photo/2022/05/12/13/04/fresh-strawberries-7191555_960_720.jpg'}
				/>
			</div>
			<div class="col-sm-6">
				<div class="row">
					<div class="col-sm-12">
						<GridItem title={'Title'} description={'Desc'} halfSize={true} />
					</div>
					<div class="col-sm-12 gy-2">
						<GridItem title={'Title'} description={'Desc'} halfSize={true} />
					</div>
				</div>
			</div>
		</div>
		<div class="row my-2">
			<div class="col">
				<GridItem title={'Title'} description={'Desc'} />
			</div>
		</div>
		<div class="row g-sm-2">
			<div class="col-sm-4">
				<GridItem title={'Title'} description={'Desc'} />
			</div>
			<div class="col-sm-8">
				<GridItem title={'Title'} description={'Desc'} />
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		min-height: 40vh;
	}
</style>
