<template>
  <div>
    <Navbar class="row" />
    <div class="row">
      <Sidebar class="col-4" @responseFromSidebar="setCardNumber" />
      <Detail class="col" :cardNumber="cardNumber" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Detail from "@/components/Detail.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Sidebar,
    Detail
  },
  data() {
    return {
      cardNumber: null
    };
  },
  methods: {
    setCardNumber(number) {
      this.cardNumber = number;
    }
  },
  mounted() {
    if (!this.$store.state.token) {
      this.$router.push("/login");
    }
  }
};
</script>
