<template>
  <div class="modal">
    <div class="modal-top">
      <h2 class="modal-title">Register</h2>
      <button
        class="modal-close"
        @click="
          (store.showModal = false),
            (store.verifyCode = false),
            (store.verifyCodeReset = false),
            (store.updateUserPhoneCode = false)

        "
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
      <form class="modal-form" @submit.prevent="VerifyCode()">
        <p class="model-p">
          A 4-Digit Code Has Been Sent For Phone Verification
          <span class="fw500">{{ store.phone }}</span>
        </p>
        <!-- code -->
        <div>
          <div class="modal-otp__inputs">
            <v-otp-input
              ref="otpInput"
              input-classes="otp-input"
              :conditionalClass="['one', 'two', 'three', 'four']"
              separator="-"
              input-type="Number"
              inputmode="numeric"
              :num-inputs="4"
              v-model:value="code"
              :should-auto-focus="true"
              :should-focus-order="true"
              @on-complete="handleOnComplete"
            />
          </div>
        </div>

        <span id="timer" class="waiting-time">2:00</span>

        <button
          type="button"
          @click="
            if (store.verifyCode) {
              store.verifyCode = false;
              store.enterPhone = true;
            } else if (store.verifyCodeReset) {
              store.verifyCodeReset = false;
              store.enterPhoneReset = true;
            }
          "
          class="modal-login-btn"
        >
          Back
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
// import's
import VOtpInput from "vue3-otp-input";
import services from "~/services/services";
import { useStore } from "~/store/store";

// varibles
const store = useStore();
const code = ref("");
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
function VerifyCode() {
  if (store.verifyCodeReset) {
    async function postResetVerifyPhone() {
      const res = await services.postResetVerifyPhone(store.phone, code.value);
      if (res.status == 200) {
        store.code = code.value;
        store.verifyCodeReset = false;
        store.CodeReset = true;
      }
    }
    return postResetVerifyPhone();
  } else if (store.updateUserPhoneCode) {
    async function updatePhoneCode() {
      const res = await services.postUpdateUserPhoneCode(
        store.token,
        code.value,
        store.phone
      );
      if (res.status == 200) {
        store.verifyCode = false;
        store.updateUserPhoneCode = false;
        store.showModal = false;
        getUserInfoFetch();
      }
    }
    return updatePhoneCode();
  } else {
    async function postVerifyPhone() {
      const res = await services.postVerifyPhone(store.phone, code.value);
      if (res.status == 200) {
        store.code = code.value;
        store.verifyCode = false;
        store.signUp = true;
      }
    }
    return postVerifyPhone();
  }
}

const handleOnComplete = () => {
  VerifyCode();
};

// out timer
let timerInterval;

function startTimer() {
  let time = 120; // 2 minutes in seconds
  const display = document.getElementById("timer");

  function updateTimer() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    display.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    if (time > 0) {
      time--;
    } else {
      clearInterval(timerInterval);
      alert("Time is up!");
    }
  }

  updateTimer(); // Initial display
  timerInterval = setInterval(updateTimer, 1000);
}
</script>

<style lang="scss" scoped></style>
