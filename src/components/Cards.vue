<template>
  <section class="container">
    <div class="level-item">
      <div class="columns is-multiline is-centered cards-container" id="sectioncontainer">
        <div class="column is-narrow" v-for="card in cards" :key="card.id">
          <article class="message" :class="card.style">
            <div class="message-header">
              <p class="message-header-title">{{ card.title }}</p>
            </div>
            <div class="message-body">
              <div class="board-item" v-for="task in tasks" :key="task">
                <div class="board-item-content">
                  <span>{{ task }}</span>
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
  name: "Cards",
  data() {
    return {
      cards: [
        { id: 0, style: 'is-link', title: 'TO DO' },
        { id: 1, style: 'is-black', title: 'DONE' }
      ],
      tasks: [
        'IR AO MERCADO',
        'JOGAR VIDEOGAME',
        'CORTAR O CABELO',
        'DORMIR'
      ]
    }
  }
}
</script>

<style scoped>
.message-header-title {
  text-align: center;
}
.board-item-content {
  word-break: break-all;
  position: relative;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  font-size: 17px;
  text-align: center;
  cursor: pointer;
  -webkit-box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.2);
  box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.2);
  margin: 5px;
}
</style>
