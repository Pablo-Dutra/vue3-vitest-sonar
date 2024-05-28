<template>
  <div id="app">
    <h1>Título da Página</h1>
    <input v-model="inputText" placeholder="Escreva algo.." />
    <button @click="showAlert">Chamar função</button>
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
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
