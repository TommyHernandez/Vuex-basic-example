<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <section class="container">
      <aside>
        <button @click="getCharacters">Get Characters</button>
        <button @click="getPlanets">Get Planets</button>
        <button @click="getMovies">Get Movies</button>
      </aside>
      <div class="sec-two">
        <h1>{{ section | capitalize}}</h1>
        <List />
      </div>
    </section>
  </div>
</template>

<script>
// in full builds helpers are exposed as Vuex.mapState
import store from "./store/index";
import List from "./components/List.vue";

export default {
  name: "app",
  store,
  components: {
    List
  },
  methods: {
    getCharacters() {
      this.$store.dispatch("getPeopleList");
    },
    getPlanets() {
      this.$store.dispatch("getPlanets");
    },
    getMovies() {
      this.$store.dispatch("getMovies");
    }
  },
  beforeMount() {
    this.getPlanets();
  },
  computed: {
    section() {
      return this.$store.state.actualSearch;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container,
.sec-two,
aside {
  box-sizing: border-box;
}

.container {
  display: grid;
  column-gap: 24px;
  grid-template-columns: 250px auto;
}
aside {
  padding-top: 57px;
}
aside button {
  background: #00766c;
  padding: 8px 16px;
  color: #fff;
  display: block;
  margin: 4px auto;
  min-width: 115px;
  border: none;
  cursor: pointer;
  transition: all linear 0.4s 0s;
}
aside button:hover {
  background: #26a69a;
}
</style>
