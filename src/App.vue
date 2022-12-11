<script>
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  computed: {
    ...mapGetters({
      fakeID: 'baseModuleStore/fakeID',
    }),
  },
})
</script>

<template>
  <div id="app">
    <img src="@/assets/logo.svg" alt="Vite logo" />
    <h2>{{ `APP.VUE - FAKE ID: ${fakeID}` }}</h2>
    <HelloWorld msg="Hello Vue 2 + Vite" />
  </div>
</template>

<style>
html {
  background: #222021;
}
img {
  max-width: 200px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: lime;
  margin-top: 60px;
}
</style>
