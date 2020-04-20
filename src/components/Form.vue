<template>
  <section class="hero is-link is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="box">
          <form @submit.prevent="onSubmit">
            <div class="field is-grouped">
              <p class="control is-expanded">
                <input type="text" class="input has-text-centered is-uppercase" v-model="task"/>
              </p>
              <p class="control">
                <button type="submit" class="button is-info">Inserir</button>
              </p>
            </div>
          </form>
          <!-- form -->
        </div>
        <!-- .box -->
      </div>
      <!-- .container -->
    </div>
    <!-- .hero-body -->
  </section>
</template>

<script>
import bus from '@/tools/eventBus'

export default {
  name: "FormTask",
  data() {
    return {
      task: null
    }
  },
  methods: {
    onSubmit() {
      bus.handleSubmit(this.task)
      this.task = ''
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
</style>
