<template>
  <div class="col-4 ml-3">
    <!-- pagination section -->
    <div class="row">
      <div class="col-sm-4">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" @click="fetch(1)">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" @click="fetch(2)">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" @click="fetch(3)">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" @click="fetch(4)">4</a>
          </li>
          <li class="page-item">
            <a class="page-link" @click="fetch(5)">5</a>
          </li>
          <li class="page-item">
            <a class="page-link" @click="fetch(6)">6</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Cards in that page and card list -->
    <div class="list-group" v-for="(Card, Index) in CardList" :key="Index">
      <b-button
        variant="primary"
        @click="sendCardNumber(Card.card_number)"
        class="list-group-item list-group-item-action active mt-3"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 text-left">{{ Card.name }}</h5>
          <small>{{ Card.card_number }}</small>
        </div>
        <p class="mb-1">{{ Card.rarity }}</p>
      </b-button>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "Sidebar",
  data() {
    return {
      CardList: []
    };
  },
  methods: {
    fetch(pageNum) {
      Axios({
        method: "get",
        url: `http://localhost:3000/cards/page/${pageNum}`,
        headers: { access_token: this.$store.state.token }
      })
        .then(({ data }) => {
          this.CardList = data;
        })
        .catch(console.log);
    },
    sendCardNumber(cardNumber) {
      this.$emit("responseFromSidebar", cardNumber);
    }
  },
  mounted() {
    this.fetch(1);
  }
};
</script>

<style></style>
