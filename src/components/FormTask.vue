<template>
  <section class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <div class="field has-addons">
                <div class="control is-expanded">
                  <input type="text" class="input has-text-centered is-uppercase"/>
                </div>
                <div class="control">
                  <a class="button is-link">Inserir</a>
                </div>
              </div>
            </div>
            <!-- .content -->
          </div>
          <!-- .card-content -->
        </div>
        <!-- .card -->
      </div>
      <!-- .container -->
    </div>
    <!-- .hero-body -->
  </section>
</template>

<script>
export default {
  name: "FormTask"
};
</script>

<style scoped>
input:focus {
  outline: none;
}
</style>
