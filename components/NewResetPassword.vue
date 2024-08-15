<template>
  <div class="login modal">
    <div class="modal-top">
      <h2 class="modal-title">Update Password</h2>
      <button
        @click="(store.showModal = false), (store.CodeReset = false)"
        class="modal-close"
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
      <form class="modal-form" @submit.prevent="postResetPass()">
        <!-- password -->
        <div>
          <div class="fcs">
            <label class="modal-label" for="password">Password</label>
            <p v-if="false" class="modal-error">parol 8 ta belgidan kam!</p>
          </div>
          <div class="input__wrap">
            <input
              v-model="password"
              type="password"
              autocomplete="false"
              id="password"
              class="modal-input"
            />
          </div>
        </div>

        <!-- password_repeat -->
        <div>
          <div class="fcs">
            <label class="modal-label" for="password_repeat"
              >Confirm Password</label
            >
            <p v-if="false" class="modal-error">parollar mos emas!</p>
          </div>
          <div class="input__wrap">
            <input
              v-model="passwordRepeat"
              type="password"
              autocomplete="false"
              id="password_repeat"
              class="modal-input"
            />
          </div>
        </div>

        <button class="modal-login-btn">Update</button>
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
const password = ref("");
const passwordRepeat = ref("");

// fetch
async function postResetPass() {
  const res = await services.postResetPassword(
    password.value,
    passwordRepeat.value,
    store.phone,
    store.code
  );
  if (res.status == 200) {
    store.CodeReset = false;
    store.loginModal = true;
  }
}
</script>

<style lang="scss" scoped></style>
