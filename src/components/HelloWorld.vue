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
      fakeChildID: 'childModuleStore/fakeID',
      fakeGrandID: 'grandChildModuleStore/fakeID',
      baseName: 'childModuleStore/baseName',
      fakeBaseID: 'baseModuleStore/fakeID',
      dumbdata: 'childModuleStore/dumbdata',
      childName: 'childModuleStore/childName',
      grandchildName: 'grandChildModuleStore/grandchildName'
    }),
    updatr() {
      return this.updatefakeID()
    },
  },
  methods: {
    ...mapActions({
      updatefakeID: 'childModuleStore/updatefakeID',
      get: 'grandChildModuleStore/get',
      changeNameChild: 'childModuleStore/changeNameChild',
      changeNameGrandchild: 'grandChildModuleStore/changeNameGrandchild'

    }),

    bumpCount() {
      this.count = this.count++
      this.updatefakeID()
      return this.get
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
    <h3 style="color: turquoise">HelloWorld.vue </br> childModuleStore/baseName</br> <span>{{ baseName }}</span></h3><hr>
    <h3 style="color: red">HelloWorld.vue </br> childModuleStore/childName</br> <span>{{ childName }}</span></h3><hr>
    <h3 style="color: turquoise">HelloWorld.vue </br> grandChildModuleStore/baseName</br> <span>{{ baseName }}</span></h3><hr>
    <h3 style="color: red">HelloWorld.vue </br> grandChildModuleStore/childName</br> <span>{{ childName }}</span></h3><hr>
    <h3 style="color: turquoise">HelloWorld.vue </br> grandChildModuleStore/grandchildName</br> <span>{{ grandchildName }}</span></h3><hr>
    
    <button class="button-44" @click="changeNameChild('CHILD MODULE STORE')">SET CHILD NAME</button>
    <button class="button-44" @click="changeNameGrandchild('GRANDCHILD MODULE STORE')">SET GRANDCHILD NAME</button>
  </div>
</template>

<style scoped="true">
a {
  color: #42b983;
}

span {
  color: orange;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

/* CSS */
.button-44 {
  background: turquoise;
  border-radius: 11px;
  box-sizing: border-box;
  color: orange;
  cursor: pointer;
  display: flex;
  font-family: Mija,-apple-system,BlinkMacSystemFont,Roboto,"Roboto Slab","Droid Serif","Segoe UI",system-ui,Arial,sans-serif;
  font-size: 1.15em;
  font-weight: 800;
  justify-content: center;
  line-height: 33.4929px;
  padding: .8em 1em;
  text-align: center;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  text-underline-offset: 1px;
  transition: all .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 30%;
  margin: 39px auto;
  word-break: break-word;
  border: 0;
}

.button-44:active,
.button-44:focus {
  border-bottom-style: none;
  border-color: #dadada;
  box-shadow: rgba(0, 0, 0, .3) 0 3px 3px inset;
  outline: 0;
}

.button-44:hover {
  border-bottom-style: none;
  border-color: #dadada;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
hr {
  width: 50%;
  margin: auto;
  border-color: tomato;
}
</style>
