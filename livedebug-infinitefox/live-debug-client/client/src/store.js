import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/apis/server.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: {},
    favorites: []
  },
  mutations: {
    INITIALCARS (state, payload) {
      state.cars = payload
    },
    INITIALFAVORITES (state, payload) {
      state.favorites = payload
    },
    ADDFAVORITE (state, payload) {
      state.favorites.push(payload)
    },
    REMOVEFAVORITE (state, payload) {
      state.favorites = state.favorites.filter(favorite => favorite.id !== payload.id)
    }
  },
  actions: {
    fetchCars ({ commit }, payload) {
      axios.get('http://localhost:3000/cars')
        .then(({ data }) => {
          commit('INITIALCARS', data)
        })
        .catch(console.log)
    },
    fetchFavorites ({ commit }, payload) {
      axios.get('http://localhost:3000/favorites')
        .then(({ data }) => {
          commit('INITIALFAVORITES', data)
        })
        .catch(console.log)
    },
    addFavorite ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/favorites', payload)
          .then(({ data }) => {
            commit('ADDFAVORITE', data)
            resolve('success')
          })
          .catch(reject)
      })
    },
    deleteFavorite ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios.delete('http://localhost:3000/favorites/' + payload)
          .then(({ data }) => {
            commit('REMOVEFAVORITE', data)
            resolve('success')
          })
          .catch(reject)
      })
    }
  }
})
