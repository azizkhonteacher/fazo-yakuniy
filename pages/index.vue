<template>
  <div>
    <main style="display: flex; flex-direction: column">
      <!-- hero swiper -->
      <div class="fazo__hero_wrapper">
        <div class="container">
          <div class="fazo__hero_navbar">
            <!-- order 2/2 -->
            <div class="fazo__hero_swiper-wrap">
              <Swiper
                class="fazo__hero_swiper"
                :modules="[SwiperNavigation, SwiperAutoplay, SwiperPagination]"
                :loop="true"
                :slides-per-view="1"
                :pagination="{ clickable: true }"
                navigation
                :speed="2000"
                :autoplay="{
                  delay: 3000,
                  disableOnInteraction: true,
                }"
                :space-between="10"
              >
                <SwiperSlide v-for="item in heroSwiper?.data" :key="item">
                  <a href="#" class="fazo__hero_swiper-img">
                    <img :src="item?.imageUrl" :alt="item?.title" />
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div class="card-wrapper latest-news">
        <div class="container">
          <div class="card-wrapper-title">
            <h2 class="c-w-title">Qiziqarli Takliflar</h2>
          </div>
          <div class="card-wrap">
            <Card v-for="item in ourEffers?.data" :key="item" :product="item" />
          </div>
        </div>
      </div>

      <div class="popular-category">
        <div class="container">
          <h2 class="popular-category__title">Mashhur Kategoriyalar</h2>

          <Swiper
            style="width: 100%"
            :modules="[SwiperNavigation]"
            :loop="false"
            :slides-per-view="3.4"
            :space-between="20"
            navigation
          >
            <SwiperSlide v-for="item in popularCategory?.data" :key="item">
              <NuxtLink :to="`categorys/${item?.slug}`" class="popular-card">
                <p class="category-name">{{ item?.name }}</p>
                <img
                  :src="item?.iconUrl"
                  :alt="item?.name"
                  class="category-img"
                />
              </NuxtLink>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div class="bodyBanner">
        <div class="container">
          <Swiper
            style="width: 100%"
            :modules="[SwiperNavigation]"
            :loop="false"
            :slides-per-view="1"
            :space-between="10"
            navigation
          >
            <SwiperSlide v-for="item in BodyBanner?.data" :key="item">
              <div class="swiper-card">
                <div class="product-text">
                  <h2 class="product-title">{{ item?.title }}</h2>
                  <p class="product-desc">{{ item?.description }}</p>
                </div>
                <div class="product-img">
                  <img :src="item?.imageUrl" alt="img" />
                </div>
                <div class="product-info">
                  <h3 class="product-price">{{ item?.price }}</h3>
                  <button class="product-more-info">
                    {{ item?.button_label }}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div class="card-wrapper CheapProducts">
        <div class="container">
          <div class="card-wrapper-title">
            <h2 class="c-w-title">Arzon Mahsulotlar:</h2>
          </div>
          <div class="card-wrap">
            <Card
              v-for="item in CheapProducts?.data"
              :key="item"
              :product="item"
            />
          </div>
        </div>
      </div>

      <div class="brands">
        <div class="container">
          <h2 class="popular-category__title" style="margin-bottom: 50px">
            Brendlar
          </h2>

          <Swiper
            style="width: 100%"
            :modules="[SwiperNavigation]"
            :loop="false"
            :slides-per-view="4"
            :space-between="30"
            navigation
          >
            <SwiperSlide v-for="item in brands?.data" :key="item">
              <div class="brand-card">
                <img :src="item?.imageUrl" :alt="item?.name" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import services from "~/services/services";
import { useStore } from "~/store/store";
// icons import
import swiper_arrow from "~/components/icons/swiper_arrow.vue";

// varibles
const store = useStore();
const heroSwiper = ref({});
const ourEffers = ref({});
const popularCategory = ref({});
const BodyBanner = ref({});
const CheapProducts = ref({});
const brands = ref({});

// fetch
async function getHeroSwiper() {
  store.loader = true;
  const res = await services.getWebSiteBanner();
  store.loader = false;
  heroSwiper.value = res;
}
async function OurEffers() {
  store.loader = true;
  const res = await services.getOurEffers();
  store.loader = false;
  ourEffers.value = res;
}
async function PopularCategory() {
  store.loader = true;
  const res = await services.getPopularCategory();
  store.loader = false;
  popularCategory.value = res;
}
async function getBodyBanner() {
  store.loader = true;
  const res = await services.getBodyBanner();
  store.loader = false;
  BodyBanner.value = res;
}
async function getCheapProducts() {
  store.loader = true;
  const res = await services.getCheapProducts();
  store.loader = false;
  CheapProducts.value = res;
}
async function getBrends() {
  store.loader = true;
  const res = await services.getBrands();
  store.loader = false;
  brands.value = res;
}

getCheapProducts();
getBodyBanner();
PopularCategory();
getHeroSwiper();
OurEffers();
getBrends();
</script>

<style lang="scss" scoped>
.latest-news,
.CheapProducts {
  padding: 62px 0 80px;
}
.P {
  margin: 62px 0 80px;
}

.swiper-pagination-bullet-active {
  background: #ed3729 !important;
}
</style>
