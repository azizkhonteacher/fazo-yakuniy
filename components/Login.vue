<template>
  <div class="login modal">
    <div class="modal-top">
      <h2 class="modal-title">Enter</h2>
      <button
        class="modal-close"
        @click="(store.loginModal = false), (store.showModal = false)"
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
      <form class="modal-form" @submit.prevent="PostLogin()">
        <!-- number -->
        <div>
          <label class="modal-label" for="phone">Phone Number</label>
          <div class="input__wrap">
            <input
              v-model="username"
              @input="mask"
              @focus="mask"
              @blur="mask"
              @keydown="mask"
              type="text"
              autocomplete="false"
              id="phone"
              placeholder="+998"
              class="modal-input"
            />
          </div>
        </div>
        <!-- password -->
        <div>
          <div class="fcs">
            <label class="modal-label" for="password">Password</label>
            <button type="button" @click="store.loginModal = false, store.enterPhoneReset = true" class="modal-label__btn">Forgot Your Password</button>
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

        <button class="modal-login-btn">Login</button>
        <button
          @click="(store.enterPhone = true), (store.loginModal = false)"
          type="button"
          class="modal-register"
        >
          Register
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
const username = ref("");
const password = ref("");

// fetch
async function PostLogin() {
  let tel = username.value.split("-").join("");
  const t = tel.split(" ").join("");
  const pNum = t.split(")").join("");
  const p = pNum.split("(").join("");

  const res = await services.LoginPost(p, password.value);
  if (res.status == 200) {
    localStorage.setItem("authKey", res.data.auth_key);
    store.token = res.data.auth_key;
    store.loginModal = false;
    store.showModal = false;
  }
}

// maska
const mask = (event) => {
  let keyCode;
  event.keyCode && (keyCode = event.keyCode);
  let pos = event.target.selectionStart;
  if (pos < 3) event.preventDefault();
  let matrix = "+998 (__) ___-__-__",
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = event.target.value.replace(/\D/g, ""),
    newValue = matrix.replace(/[_\d]/g, function (a) {
      return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
    });
  i = newValue.indexOf("_");
  if (i !== -1) {
    i < 5 && (i = 3);
    newValue = newValue.slice(0, i);
  }
  let reg = matrix
    .substr(0, event.target.value.length)
    .replace(/_+/g, function (a) {
      return "\\d{1," + a.length + "}";
    })
    .replace(/[+()]/g, "\\$&");
  reg = new RegExp("^" + reg + "$");
  if (
    !reg.test(event.target.value) ||
    event.target.value.length < 5 ||
    (keyCode > 47 && keyCode < 58)
  ) {
    event.target.value = newValue;
  }
  if (event.type === "blur" && event.target.value.length < 5) {
    event.target.value = "";
  }
};
</script>

<style lang="scss" scoped></style>
