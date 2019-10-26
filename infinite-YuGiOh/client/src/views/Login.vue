<template>
  <div class="container">
    <Navbar />
    <form class="mb-5" @submit.prevent="login">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          v-model="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Login",
  components: {
    Navbar
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      const user = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("login", user);
    }
  },
  watch: {
    "$store.state.token"() {
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style></style>
