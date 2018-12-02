<template>
  <section class="hero is-small is-primary is-bold">
  <div class="hero-body">
    <!-- swiper -->
      <swiper :options="swiperOption">
        <swiperSlide v-for="slide in $store.state.projects" :key="slide.id">
          <div class="swiper-zoom-container">
            <figure class="image is-500x500">
              <img :src="slide.project_image.url">
            </figure>
          </div>
        </swiperSlide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
  </div>
</section>
</template>

<script>
// require styles
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Hero',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        zoom: true,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        }
    }
  },
  created() {
    this.$store.dispatch('setProjects').then(this.isLoading = false);
  },
  methods: {
    debug (event) {
      console.log(event);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .flex-is-column {
    flex-direction: column;
  }

  img {
    margin-top:50%;
    transform:translateY(-50%);
  }

</style>
