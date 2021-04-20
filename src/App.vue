<template>

  <HelloWorld/>


</template>

<script>
import {ref} from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {}
  },
  setup() {
    const msg = ref("Welcome to Element Plus, a Vue 3.0 based component library")
    const startHacking = () => {
      msg.value = "Start coding with Element Plus with 💖"
    }
    return {
      msg,
      startHacking
    }
  },
  created() {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: 江城圆体;
}

.logo {
  width: 50%;
}

.btn {
  margin-top: 100px;
}

body {
  font-size: 18px;
  color: beige;
  background-color: #ebf1f5;
  background-image: url('assets/background.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  min-height: 800px;
  background-position: center;
}


</style>
