<template>
    <div>
        <h4>{{ comic.title }}</h4>
        <img height="300" :src="imageUrl" />
    </div>
</template>

<style scoped>

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