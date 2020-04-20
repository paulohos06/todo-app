<template>
  <div id="app">
    <nav-bar />
    <form-task />
    <progress-bar :value="total" />
    <cards @progress="total = $event" />
  </div>
</template>

<script>
import NavBar from "@/components/Navbar.vue"
import FormTask from "@/components/Form.vue"
import ProgressBar from "@/components/ProgressBar.vue"
import Cards from '@/components/Cards.vue'

export default {
  name: "App",
  components: { NavBar, FormTask, ProgressBar, Cards },
  data() {
    return {
      total: 0
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Titillium Web', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
