<template>
  <div>
    <h1>
      Hello World!
    </h1>

    <template v-for="(comic, index) of comics">
      <card v-bind:key="index" :comic="comic" />
    </template>
  </div>
</template>

<script>
import Connections from '../mixins/connections'
import Card from './Card'

export default {
  name: 'HelloWorld',

  props: {
    msg: String,
  },

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
