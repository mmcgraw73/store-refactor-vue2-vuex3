<script>
import { ref, defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.init = this.count
  },
  computed: {
    ...mapGetters({
      fakeID: 'grandChildModuleStore/fakeID',
      dumbdata: 'childModuleStore/dumbdata',
    }),
    updatr() {
      return this.updateFakeID(this.count)
    },
  },
  methods: {
    ...mapActions({
      updatefakeID: 'childModuleStore/updatefakeID',
    }),
    getdata() {
      return this.fakeID
    },
    bumpCount() {
      this.count = this.count++
      return this.updatr
    },
  },
  data() {
    return {
      count: ref(0),
      init: null,
    }
  },
})
</script>

<template>
  <div @click="bumpCount">
    <h5>HelloWorld Component Starts Here</h5>
    <h3 style="color: red">{{ `GRANDCHILD FAKE ID: ${fakeID}` }}</h3>
    <h3 style="color: green">{{ `CHILD FAKE ID: ${fakeID}` }}</h3>
    <h3 style="color: red">{{ `BASE FAKE ID: ${fakeID}` }}</h3>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
