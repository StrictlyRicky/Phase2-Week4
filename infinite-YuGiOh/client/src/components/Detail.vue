<template>
  <div class="col">
    <div class="row">
      <div class="col-sm-5">
        <img :src="Card.img" />
      </div>
      <div class="col p-0">
        <table class="table" style="max-width: 25vw !important;">
          <tbody>
            <tr>
              <th scope="row">Name</th>
              <td>{{ Card.name }}</td>
            </tr>
            <tr>
              <th scope="row">Price</th>
              <td>$ {{ Card.price }}</td>
            </tr>
            <tr>
              <th scope="row">Card Number</th>
              <td>{{ Card.card_number }}</td>
            </tr>
            <tr>
              <th scope="row">Card Set</th>
              <td>{{ Card.card_set }}</td>
            </tr>
            <tr>
              <th scope="row">Rarity</th>
              <td>{{ Card.rarity }}</td>
            </tr>
          </tbody>
        </table>
        <button @click="add(Card)" class="btn btn-success">
          ADD TO COLLECTION
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "Detail",
  props: {
    cardNumber: String
  },
  data() {
    return {
      Card: null
    };
  },
  methods: {
    add(data) {
      Axios({
        method: "post",
        url: "http://localhost:3000/cards/collection",
        headers: { access_token: this.$store.state.token },
        data
      })
        .then(({ data }) => {
          Swal.fire("Yay!", data.msg, "success");
        })
        .catch(({ response }) => {
          const { data } = response;
          Swal.fire("Too bad!", data.message, "error");
        });
    }
  },
  watch: {
    cardNumber() {
      Axios({
        method: "get",
        url: `http://localhost:3000/cards/detail/${this.cardNumber}`,
        headers: { access_token: this.$store.state.token }
      })
        .then(({ data }) => {
          this.Card = data.card;
        })
        .catch(console.log);
    }
  }
};
</script>

<style></style>
