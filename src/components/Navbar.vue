<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      <img src="https://verynathan.com/verynathan/wp-content/uploads/2018/12/very-nathan-logo7-e1544213923376.png">
    </a>

    <a @click="toggleMenu" role="button" v-bind:class="{'is-active': isActive}" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="navbarBasicExample" v-bind:class="{'is-active': isActive}" class="navbar-menu">
    <div class="navbar-start">
      <router-link @click.native="animate" ref="home" :class="{'animated bounce' : animated}" class="navbar-item" to="/">Home</router-link>
      <router-link @click.native="animate" ref="about" :class="{'animated bounce' : animated}" class="navbar-item" to="/about">About</router-link>
      <router-link @click.native="animate" ref="contact" :class="{'animated bounce' : animated}" class="navbar-item" to="/contact">Contact</router-link>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-secondary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isActive: false,
      animated: false
    }
  },
  methods: {
    toggleMenu: function () {
      this.isActive = !this.isActive;
    },
    animate: function() {
      this.animated = true;
      setTimeout(()=> { this.animated = false }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>


</style>
