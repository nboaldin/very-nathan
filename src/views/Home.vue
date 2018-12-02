<template>
  <div class="container">
    <Projects></Projects>
    <PostSummary></PostSummary>
  </div>
</template>

<script>
// @ is an alias to /src
import Projects from '../components/Projects.vue'
import PostSummary from '../components/PostSummary.vue'


export default {
  name: 'home',
  components: {
    Projects,
    PostSummary
  }
}
</script>
