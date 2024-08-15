<template>
  <div class="login modal">
    <div class="modal-top">
      <h2 class="modal-title">Personal data</h2>
      <button
        class="modal-close"
        @click="(store.updateUserInfo = false), (store.showModal = false)"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.25208 6.23135L10.9984 9.9777L14.7453 6.23141L15.7676 7.25371L12.0207 11L15.7676 14.7463L14.7453 15.7686L10.9984 12.0223L7.25208 15.7686L6.23047 14.7462L9.97671 11L6.23047 7.25376L7.25208 6.23135Z"
            fill="#000000"
          />
        </svg>
      </button>
    </div>
    <div class="modal-bottom">
      <form class="modal-form" @submit.prevent="updateUserName()">
        <!-- firstname -->
        <div>
          <label class="modal-label" for="firstname">First Name</label>
          <div class="input__wrap">
            <input
              v-model="firstName"
              type="text"
              autocomplete="false"
              id="firstname"
              class="modal-input"
            />
          </div>
        </div>

        <!-- lastname -->
        <div>
          <label class="modal-label" for="lastname">Last Name</label>
          <div class="input__wrap">
            <input
              v-model="lastName"
              type="text"
              autocomplete="false"
              id="lastname"
              class="modal-input"
            />
          </div>
        </div>

        <button class="modal-login-btn">Update</button>
        <button
          @click="
            (store.updateUserInfo = false), (store.updateUserPhone = true)
          "
          type="button"
          class="modal-register"
        >
          Dial a phone number
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
// import's
import { useStore } from "~/store/store";
import services from "~/services/services";

// varibles
const store = useStore();
const firstName = ref(store.userInfo?.firstname);
const lastName = ref(store.userInfo?.lastname);

// fetch
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

async function updateUserName() {
  const res = await services.postUpdateUserName(
    store.token,
    firstName.value,
    lastName.value
  );
  if (res.status == 200) {
    store.showModal = false;
    store.updateUserInfo = false;
    getUserInfoFetch();
  }
}
</script>
