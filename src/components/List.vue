<template>
  <section class="e-list" v-if="eList.length">
    <p>
      <strong>Actual Page:</strong> {{actualPage}}
    </p>
    <Card v-bind:element="obj" v-for="(obj,index) in eList" :key="index"></Card>
    <footer>
      <button @click="backPage"> &lt; Back</button>
      <button @click="nextPage">Next &gt; </button>
    </footer>
  </section>
</template>
<script>
import Card from './Card.vue';
export default {
  name: 'List',
  methods: {
    nextPage(){
      this.$store.dispatch('nextPage');
    },
    backPage(){
      this.$store.dispatch('pageBefore');
    }
  },
  computed: {
    eList () {
      return this.$store.state.list;
    },
    actualPage() {
      return this.$store.state.page;
    }
  },
  components: {
    Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .e-list {
    max-width: 85%;
    margin: 16px auto;
  }
</style>