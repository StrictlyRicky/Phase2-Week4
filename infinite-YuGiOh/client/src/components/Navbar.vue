<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
    <div class="container" style="justify-content: center !important">
      <p @click="home" class="navbar-brand mb-0">Infinite - YuGiOh!</p>
      <div class="navbar-nav ml-auto">
        <button
          class="nav-item btn btn-success text-white mr-2"
          @click="login"
          v-if="!this.$store.state.token"
        >
          login
        </button>
        <button
          @click="redirectToCollection"
          v-else
          class="nav-item btn btn-success text-white ml-auto mr-2"
        >
          My Account
        </button>
        <button
          class="nav-item btn btn-primary text-white ml-auto"
          @click="logout"
          v-if="this.$store.state.token"
        >
          logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    home() {
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    },
    login() {
      if (!this.$store.state.token) {
        this.$router.push("/login");
      }
    },
    logout() {
      this.$store.commit("logout");
      if (this.$route.path !== "/") {
        this.$router.push("/login");
      }
    },
    redirectToCollection() {
      this.$router.push("/collection");
    }
  }
};
</script>
