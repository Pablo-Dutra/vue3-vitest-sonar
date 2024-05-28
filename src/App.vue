<template>
  <div id="app" class="container mt-5">
    <h1 class="text-center mb-4">Título da Página</h1>
    <div class="mb-3">
      <input
        v-model="inputText"
        type="text"
        class="form-control"
        placeholder="Escreva algo..."
      />
    </div>
    <button class="btn btn-primary" @click="showAlert">Chamar função</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      inputText: '',
    };
  },
  methods: {
    showAlert() {
      alert(this.inputText);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
