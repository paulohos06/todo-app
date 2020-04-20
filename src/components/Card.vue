<template>
  <section class="container">
    <div class="level-item">
      <div class="columns is-multiline is-centered cards-container" id="sectioncontainer">
        <div class="column is-narrow">
          <article class="message" :class="className">
            <div class="message-header">
              <p class="message-header-title">{{ titleUppercase }}</p>
            </div>
            <div class="message-body">
              <template v-if="tasks.length > 0">
                <div class="board-item" v-for="task in tasks" :key="task">
                  <div class="board-item-content" @click="conclude(task)">
                    <span>{{ task }}</span>
                  </div>
                </div>
              </template>
              <div class="board-item" v-else>
                <div class="board-item-content">
                  <span> - </span>
                </div>
              </div>
            </div>
          </article>
        </div>
        <!-- .column is-narrow -->
      </div>
      <!-- #sectioncontainer -->
    </div>
    <!-- .level-item -->
  </section>
</template>

<script>
export default {
  name: "Card",
  props: ['tasks', 'title', 'className'],
  data() {
    return {
    }
  },
  computed: {
    titleUppercase() {
      return this.title.toUpperCase()
    }
  },
  methods: {
    conclude(task) {
      this.$emit('onFinish', task)
    }
  }
}
</script>

<style scoped>
* {
  font-size: 1em;
}
.board-item-content {
  word-break: break-all;
  position: relative;
  padding: 15px;
  background: #fff;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  -webkit-box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.2);
  box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.2);
  margin: 5px;
  width: 15em;
}
</style>