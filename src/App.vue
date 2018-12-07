<template>
  <div id="app">
    <Navbar></Navbar>
    <Hero></Hero>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'


export default {
  components: {
    Navbar,
    Hero
  }
}
</script>


<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$black: rgba(1, 22, 39, 1);
$white: rgba(253, 255, 252, 1);
$primary: rgba(46, 196, 182, 1);
$primary-invert: findColorInvert($primary);
$secondary: rgba(231, 29, 54, 1);
$secondary-invert: findColorInvert($secondary);
$tertiary: rgba(255, 159, 28, 1);
$tertiary-invert: findColorInvert($tertiary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "secondary": ($secondary, $secondary-invert),
    "tertiary": ($tertiary, $tertiary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

//Navbar
$navbar-height: 5rem;
$navbar-item-img-max-height: 3.5rem;
$navbar-item-hover-background-color: $tertiary;
$navbar-item-color: $secondary;
$navbar-item-hover-color: $white;

// Links
$link: $secondary;
$link-invert: $secondary-invert;
$link-focus-border: $secondary;

//Fonts
$family-primary: 'Space Mono', monospace;
.space-mono  {
  font-family: $family-primary;
  }
.rubik { 
  font-family: 'Rubik Mono One', sans-serif; 
  }

// Dimensions
$dimensions: 100 150 200 300 400 500;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
