<template>
  <b-notification :closable="false" class="container">
    <article v-for="post in posts" :key="post.id" class="has-background-light media">
        <figure v-if="post.featured_image_url"  class="media-left">
          <p class="image is-300x300">
            <img :src="post.featured_image_url" >
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
              <strong>{{post.title.rendered}}</strong>
              <br>
              <span v-html="post.excerpt.rendered"></span>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-reply"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-retweet"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
    </article>
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
  </b-notification>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PostSummary',
  data() {
    return {
      isFullPage: false

    }
  },
  methods: {
    
  },
  computed: {
    ...mapState([
      'isLoading',
      'posts'
    ])
  }
}
</script>

<style scoped lang="scss">
.flex-is-column {
  flex-direction: column;
}
</style>

