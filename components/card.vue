<template>
  <div>
    <div class="card">
      <NuxtLink :to="`detail/${product?.slug}`" class="card__img">
        <img :src="product?.imageUrl" :alt="product?.name" />
        <h4 class="discount" v-if="product?.discount">{{ product?.discount?.toFixed() }}%</h4>
      </NuxtLink>
      <div class="card__product">
        <h2 class="product-price">{{ product?.priceFormat }}</h2>
        <h3 class="product-old-price" v-if="product?.oldPriceFormat">{{ product?.oldPriceFormat }}</h3>
        <NuxtLink :to="`detail/${product?.slug}`" class="product-title">
          {{ product?.name }}
        </NuxtLink>
      </div>
      <div class="card__active-btns">
        <button class="cart-btn">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.14282 3.21428H6.42854L9.29997 17.5607C9.39794 18.054 9.6663 18.4971 10.0581 18.8125C10.4498 19.1278 10.94 19.2953 11.4428 19.2857H21.8571C22.3599 19.2953 22.8501 19.1278 23.2419 18.8125C23.6336 18.4971 23.902 18.054 24 17.5607L25.7143 8.57142H7.49997M11.7857 24.6428C11.7857 25.2346 11.306 25.7143 10.7143 25.7143C10.1225 25.7143 9.64282 25.2346 9.64282 24.6428C9.64282 24.0511 10.1225 23.5714 10.7143 23.5714C11.306 23.5714 11.7857 24.0511 11.7857 24.6428ZM23.5714 24.6428C23.5714 25.2346 23.0917 25.7143 22.5 25.7143C21.9082 25.7143 21.4285 25.2346 21.4285 24.6428C21.4285 24.0511 21.9082 23.5714 22.5 23.5714C23.0917 23.5714 23.5714 24.0511 23.5714 24.6428Z"
              stroke="#202020"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button class="like-btn">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.0619 7.06214C23.5383 6.52161 22.9166 6.09282 22.2324 5.80027C21.5481 5.50772 20.8147 5.35715 20.0741 5.35715C19.3334 5.35715 18.6 5.50772 17.9158 5.80027C17.2316 6.09282 16.6099 6.52161 16.0863 7.06214L14.9997 8.18342L13.913 7.06214C12.8554 5.97082 11.4209 5.35771 9.92522 5.35771C8.42952 5.35771 6.99507 5.97082 5.93744 7.06214C4.87981 8.15347 4.28564 9.63363 4.28564 11.177C4.28564 12.7204 4.87981 14.2005 5.93744 15.2919L7.02408 16.4131L14.9997 24.6429L22.9752 16.4131L24.0619 15.2919C24.5857 14.7516 25.0013 14.1101 25.2848 13.4041C25.5683 12.698 25.7142 11.9413 25.7142 11.177C25.7142 10.4128 25.5683 9.65599 25.2848 8.94995C25.0013 8.24391 24.5857 7.60242 24.0619 7.06214V7.06214Z"
              stroke="#202020"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
const store = useStore();
const {product} = defineProps(["product"])
</script>

<style lang="scss" scoped></style>
