<template>
  <div>
    <Navbar />
    <div class="row mb-5">
      <div class="col-md-4 " v-for="(card, index) in collection" :key="index">
        <div class="card mb-4 shadow-sm">
          <img
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="340"
            style="object-fit: cover; object-position: 0 0"
            :src="card.img"
          />
          <div class="card-body">
            <h5 class="card-title text-center">
              {{ card.name }}
            </h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Card Number: {{ card.card_number }}
              </li>
              <li class="list-group-item">Card Set: {{ card.card_set }}</li>
              <li class="list-group-item">{{ card.rarity }}</li>
            </ul>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group mx-auto mt-3">
                <button
                  @click="deleteById(card._id)"
                  type="button"
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "Collection",
  components: {
    Navbar
  },
  data() {
    return {
      collection: []
    };
  },
  methods: {
    fetchCollection() {
      Axios({
        method: "get",
        url: "http://localhost:3000/cards/collection",
        headers: { access_token: this.$store.state.token }
      }).then(({ data }) => {
        this.collection = data;
      });
    },
    deleteById(id) {
      Axios({
        method: "delete",
        url: `http://localhost:3000/cards/collection/${id}`,
        headers: { access_token: this.$store.state.token }
      })
        .then(({ data }) => {
          const { message } = data;
          Swal.fire("Yay!", message, "success");
          this.fetchCollection();
        })
        .catch(console.log);
    }
  },
  mounted() {
    this.fetchCollection();
  }
};
</script>

<style></style>
