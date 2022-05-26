<script lang="ts">
	import GridItem from '$lib/GridItem.svelte';
</script>

<section>
	<div class="container" id="border">
        <!-- Top row -->
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
					<div class="col-sm-12 mt-2 mt-sm-0">
						<GridItem title={'Title'} description={'Lorem ipsum dolor sit amet consectetur elit Lorem ipsum dolor sit amet consectetur elit'} halfSize={true} />
					</div>
					<div class="col-sm-12 gy-sm-2 mt-2">
						<GridItem title={'Title'} description={'Desc'} halfSize={true} />
					</div>
				</div>
			</div>
		</div>
        <!-- Middle row -->
		<div class="row my-sm-2">
			<div class="col mt-2 mt-sm-0">
				<GridItem title={'Title'} description={'Desc'} />
			</div>
		</div>
        <!-- Bottom row -->
		<div class="row g-sm-2">
			<div class="col-sm-4 mt-2">
				<GridItem title={'Title'} description={'Desc'} />
			</div>
			<div class="col-sm-8 mt-2">
				<GridItem title={'Title'} description={'Desc'} />
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		min-height: 40vh;
	}

	#border {
		padding-bottom: 1rem;
		border-left: 1px solid rgba(48, 48, 48, 0.4);
	}
</style>
