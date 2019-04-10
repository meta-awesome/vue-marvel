<template>
  <div class="home">
    <img alt="Vue logo" src="http://www.stickpng.com/assets/images/585f9357cb11b227491c3582.png" width="300" style="margin-bottom: 30px"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
