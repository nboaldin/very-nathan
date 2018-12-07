<template>
  <b-notification :closable="false" class="container">
    <article v-for="post in $store.state.posts" :key="post.id" class="has-background-light media">
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
export default {
  name: 'PostSummary',
  data() {
    return {
      isLoading: true,
      isFullPage: false

    }
  },
  created () {
    this.$store.dispatch('setPosts').then(this.isLoading = false);
  },
  methods: {
    // getPosts: function () {
    //   let uri = 'https://verynathan.com/verynathan/wp-json/wp/v2/posts?per_page=100';

    //   this.axios.interceptors.request.use((config) => {
    //     this.isLoading = true;
    //     return config;
    //   });

    //   this.axios.get(uri).then((response) => {
    //     this.posts = response.data;
    //     this.isLoading = false;
    //   });
    // }
  },
  computed: {
    
  }
}
</script>

<style scoped lang="scss">
.flex-is-column {
  flex-direction: column;
}
</style>

