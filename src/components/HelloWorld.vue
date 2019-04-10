<template>
  <div class="container">
    <div class="row">
      <template v-for="(comic, index) of comics">
        <div v-bind:key="index" class="form-group col-4">
          <card :comic="comic" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Connections from '../mixins/connections'
import Card from './Card'

export default {
  name: 'HelloWorld',

  components: {
    Card,
  },

  data() {
    return {
      comics: [],
    }
  },

  mixins: [
    Connections,
  ],

  mounted() {
    this.$http.get(`https://gateway.marvel.com/v1/public/comics?${this.hash}`)
      .then(({ data: { data: { results: response } } }) => {
        this.comics = response;
        console.log(response);
      })
      .catch(e => {
        console.error(e);
      })
  }
};
</script>
