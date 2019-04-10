<template>
	<div class="card">
		<div class="thumb">
			<img width="100" :src="imageUrl" />
		</div>
		<div class="info">
			<span class="title">{{ comic.title }}</span>
			<hr>
			<a class="text-center" href="#">Ver Detalhes</a>
		</div>
	</div>
</template>

<style scoped>
	.card {
		display: flex;
		flex-direction: row;
	}

	.thumb {
		flex: 1;
	}

	img {
		width: 100%
	}
	
	.info {
		flex: 2;
	}
	
	.title {
		font-weight: bold;
	}
</style>


<script>
export default {
	name: 'Card',

	computed: {
		imageUrl() {
			return this.comic.thumbnail.path + '.' + this.comic.thumbnail.extension
		},
	},

	props: {
		comic: {
			required: true,
			default: () => {}
		}
	}
}
</script>