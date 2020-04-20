<template>
  <div id="app">
    <nav-bar />
    <form-task />
    <progress-bar />
    <cards/>
  </div>
</template>

<script>
import NavBar from "@/components/Navbar.vue"
import FormTask from "@/components/FormTask.vue"
import ProgressBar from "@/components/ProgressBar.vue"
import Cards from '@/components/Cards.vue'

export default {
  name: "App",
  components: { NavBar, FormTask, ProgressBar, Cards }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
