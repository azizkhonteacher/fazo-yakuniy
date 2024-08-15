<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
import services from "~/services/services";
import { onMounted, watch } from "vue";

const store = useStore();

async function getUserInfoFetch() {
  if (store.token) {
    try {
      const res = await services.getUserInfo(store.token);
      store.userInfo = res.data;
    } catch (error) {
      console.error("Failed to fetch user info:", error);
      // Handle error (e.g., show a notification or redirect)
    }
  }
}

onMounted(() => {
  if (process.client) {
    store.token = localStorage.getItem("authKey") || null;
  }
  getUserInfoFetch();
});

watch(
  () => store.token,
  () => {
    getUserInfoFetch();
  }
);
</script>
