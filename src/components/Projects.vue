<template>
  <b-notification :closable="false">
    <div v-for="project in projects" :key="project.id" class="card is-flex">
      <div class="card-image">
        <figure class="image is-4x3">
          <img :src="project.project_image.url" alt="project image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content is-flex">
            <p class="title is-4">{{project.title.rendered}}</p>
            <p class="subtitle is-6"></p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
  </b-notification>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Projects',
  data() {
    return {
      isFullPage: false,
    }
  },
  methods: { 
  },
  computed: {
    ...mapState ([
      'isLoading',
      'projects'
    ])
  }
}
</script>

<style lang="scss" scoped>
  

</style>

