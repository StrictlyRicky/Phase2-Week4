import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import Swal from "sweetalert2";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    login(state, token) {
      state.token = token;
    },
    logout(state) {
      state.token = null;
    }
  },
  actions: {
    login({ commit }, payload) {
      Axios({
        method: "post",
        url: "http://localhost:3000/login",
        data: payload
      })
        .then(({ data }) => {
          commit("login", data.access_token);
        })
        .catch(({ response }) => {
          Swal.fire("oops", response.data.message, "error");
        });
    }
  }
});
