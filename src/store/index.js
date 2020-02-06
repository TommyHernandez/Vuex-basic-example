import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api/api.js';


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    page: 1,
    list: [],
    actualSearch:'planets'
  },
  mutations: {
    setPage (state,payload) {
      state.page = payload.page
    },
    setList(state,payload) {
      state.list = payload;
      //Vue.set(state.listado,'list',payload)
    },
    setActualSearch(state,payload){
      state.actualSearch = payload;
    },
    nextPage(state){
      state.page++
    },
    pageBefore(state){
      state.page--
    }
  },
  actions: {
    setPage (context) {
      context.commit('setPage');
    },
    getPeopleList (context) {
      Api.getList('people', this.state.page).then((data) => {
        context.commit('setList',data.results);
        context.commit('setActualSearch','people');
      });
    },
    getPlanets(context){
      Api.getList('planets', this.state.page).then((data) => {
        context.commit('setList',data.results);
        context.commit('setActualSearch','planets');
      });
    },
    getMovies(context){
      Api.getList('films', this.state.page).then((data) => {
        context.commit('setList',data.results);
        context.commit('setActualSearch','films');
      });
    },
    getListWithPage(context) {
      Api.getList(this.state.actualSearch, this.state.page).then((data) => {
        context.commit('setList',data.results);
      });
    },
    nextPage(context) {
      context.commit('nextPage');
      store.dispatch('getListWithPage');
    },
    pageBefore(context) {
      context.commit('pageBefore');
      store.dispatch('getListWithPage');
    }
  }
});
export default store;