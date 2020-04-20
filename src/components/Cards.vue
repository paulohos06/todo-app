<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <card :tasks="incomplete" :title="'to do'" :className="'is-warning'" @onFinish="finish($event)" />
      </div>
      <div class="column is-6">
        <card :tasks="complete" :title="'done'" :className="'is-success'" />
      </div>
    </div>
    <!-- .columns -->
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import bus from '@/tools/eventBus'

export default {
  name: "Cards",
  components: { Card },
  data() {
    return {
      incomplete: [],
      complete: []
    }
  },
  mounted() {
    bus.insert(item => {
      return this.addTask(item)
    })
  },
  methods: {
    addTask(task) {
      this.incomplete.push(task.toUpperCase())
      this.progress()
    },
    finish(task) {
      this.complete.push(task)
      const index = this.incomplete.indexOf(task)
      if (index > -1) this.incomplete.splice(index, 1)
      this.progress()
    },
    progress() {
      const total = parseInt(this.incomplete.length) + parseInt(this.complete.length)
      const value = this.complete.length/total * 100
      this.$emit('progress', value)
    }
  }
}
</script>

<style scoped>
</style>
