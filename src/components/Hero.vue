<template>
  <section class="hero is-small is-black is-bold">
    <div class="hero-body">
      <h1 class="title is-2 has-text-secondary rubik">// Projects //</h1>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiperSlide v-for="slide in projects" :key="slide.id" class="slide">
          <div class="slide-margin">
            <div class="swiper-zoom-container is-flex">
              <figure class="image is-500w is-hidden-mobile">
                <img :src="slide.project_image.url" class="bright-shadow">
              </figure>
              <figure class="image is-hidden-tablet">
                <img :src="slide.project_image.url" class="bright-shadow">
              </figure>
              <div class="title-wrap">
                <a :href="slide.project_link" target="_blank" class="on">
                  <h1 class="title is-4 has-text-primary rubik">{{slide.title.rendered}}</h1>
                </a>
                <div>
                <ul>
                  <li v-for="(tech, index) in slide.tech_used" :key="index" class="has-text-tertiary">{{tech.value}}</li>
                </ul>
              </div>
              </div>
            </div>
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
import { mapState } from 'vuex'

export default {
  name: 'Hero',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      isFullPage: false,
      swiperOption: {
        grabCursor: true,
        slidesPerView	: 'auto',
        zoom: {
          toggle: false
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        }
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

<style scoped lang="scss">

.swiper-zoom-container {
  flex-direction: column;
}

.slide-margin  {
  margin: 1.5rem;
}
// img {
//   margin-top:50%;
//   transform:translateY(-50%);
// }

.title-wrap {
  margin: 1.5rem;
}

.title {
  word-break: normal;
    text-align: center;
}

.swiper-button-next {
  background-image: url('../assets/circleArrowRight.svg')
}

.swiper-button-prev {
  background-image: url('../assets/circleArrowLeft.svg')
}

.swiper-button-prev, .swiper-button-next {
//  width: 44px;
//  background-size: 44px 44px;
}

/deep/ .swiper-pagination-bullet {
  background: #fff;
}

.is-500w {
  width: 500px;
}

.bright-shadow {
  box-shadow: 0 0 20px 4px #2ec4b5;
}

a {
  display: block;
}

.on:hover {
  background-color: #e71d36;
}

@media only screen and (min-width: 1024px) {
  .swiper-zoom-container {
    flex-direction: row;
    justify-content: space-evenly;
  }
}

</style>
