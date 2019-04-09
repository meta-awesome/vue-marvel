<template>
  <div>
    <h1>
      Hello World!
    </h1>
  </div>
</template>

<script>
import Connections from '../mixins/connections'

export default {
  name: 'HelloWorld',

  props: {
    msg: String,
  },

  mixins: [
    Connections,
  ],

  mounted() {
    this.$http.get(`https://gateway.marvel.com/v1/public/comics?${this.hash}`)
      .then(({ data: { data: { results: response } } }) => {
        console.log(response);
      })
      .catch(e => {
        console.error(e);
      })
  }
};
</script>
