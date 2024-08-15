<template>
  <div class="login modal">
    <div class="modal-top">
      <h2 class="modal-title">
        {{ store.updateUserPhone ? "Dial a phone number" : "Register" }}
      </h2>
      <button
        @click="
          (store.enterPhone = false),
            (store.showModal = false),
            (store.enterPhoneReset = false),
            (store.updateUserPhone = false)
        "
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
      <form class="modal-form" @submit.prevent="postPhoneNumber()">
        <!-- number -->
        <div>
          <label class="modal-label" for="phone">Phone Number</label>
          <div class="input__wrap">
            <input
              v-model="phone"
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

        <button class="modal-login-btn">Next</button>
      </form>
    </div>
  </div>
</template>

<script setup>
// import's
import { useStore } from "~/store/store";
import services from "~/services/services";

// varivles
const store = useStore();
const phone = ref(store.userInfo?.username ? store.userInfo?.username : "");
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
function postPhoneNumber() {
  if (store.enterPhone) {
    async function postPhone() {
      let tel = phone.value.split("-").join("");
      const t = tel.split(" ").join("");
      const pNum = t.split(")").join("");
      const p = pNum.split("(").join("");

      const res = await services.postEnterPhone(p);
      if (res.status == 200) {
        store.phone = p;
        store.enterPhone = false;
        store.verifyCode = true;
      }
    }
    return postPhone();
  } else if (store.enterPhoneReset) {
    async function postPhoneReset() {
      let tel = phone.value.split("-").join("");
      const t = tel.split(" ").join("");
      const pNum = t.split(")").join("");
      const p = pNum.split("(").join("");

      const res = await services.postResetEnterPhone(p);
      if (res.status == 200) {
        store.phone = p;
        store.enterPhoneReset = false;
        store.verifyCodeReset = true;
      }
    }
    return postPhoneReset();
  } else if (store.updateUserPhone) {
    async function updatePhone() {
      let tel = phone.value.split("-").join("");
      const t = tel.split(" ").join("");
      const pNum = t.split(")").join("");
      const p = pNum.split("(").join("");

      const res = await services.postUpdateUserPhone(store.token, p);
      if (res.status == 200) {
        store.phone = p;
        store.updateUserPhone = false;
        store.updateUserPhoneCode = true;
        getUserInfoFetch();
      }
    }
    return updatePhone();
  }
}

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
