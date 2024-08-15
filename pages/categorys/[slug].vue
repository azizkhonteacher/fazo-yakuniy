<template>
  <div>
    <main>
      <div class="cards">
        <div class="container">
          <h2 class="category">{{ slug }}</h2>

          <div class="card-wrapper">
            <h1>card</h1>
          </div>
          <div class="card-add-more">
            <!-- <button role="button" @click="addProducts()" v-if="limit < detail?.total" class="button-71">more</button> -->
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import services from "~/services/services";
import { useStore } from "~/store/store";
const store = useStore();
const { slug } = useRoute().params;
</script>

<style lang="scss" scoped></style>
