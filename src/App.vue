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
      baseName: 'baseModuleStore/baseName',
      gettersLong: 'baseModuleStore/gettersLong',
    }),
  },
})
</script>

<template>
  <div id="app">
    <img src="@/assets/logo.svg" alt="Vite logo" />
    <h5>App.vue </br> baseModuleStore/baseName </br><span>{{ baseName }}</span></h5>
    <hr>
    <HelloWorld :msg="`${baseName}`" />
  </div>
</template>

<style scoped="true">
html {
  background: #363636;
}
h5 {
  color: red;
}
hr {
  width: 50%;
  margin: auto;
  border-color: tomato;
}
span {
  color: orange;
}

img {
  max-width: 200px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: turquoise;
  margin-top: 60px;
}
</style>
