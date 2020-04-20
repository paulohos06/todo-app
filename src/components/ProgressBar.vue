<template>
  <div class="box cta">
    <div class="container">
      <progress class="progress is-success" :value="value" max="100"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: ['value'],
};
</script>

<style scoped>

</style>
