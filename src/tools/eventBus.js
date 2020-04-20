import Vue from 'vue'
export default new Vue({
  methods: {
    handleSubmit(task) {
      this.$emit('formSubmit', task)
    },
    insert(callback) {
      this.$on('formSubmit', callback)
      this
    }
  }
})