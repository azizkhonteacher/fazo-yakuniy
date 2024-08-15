<template>
  <div class="profile" >
    <div class="container">
      <div class="profile-nav">
        <div class="profile-item" @click="logOut()">
          <div class="profile-icon">
            <LogoutSvg />
          </div>
          <div class="profile-info">
            <h4>Logout</h4>
          </div>
        </div>
      </div>

      <div class="profile-main">
        <!-- user information -->
        <div class="user-info">
          <div class="user-info-header">
            <div class="profile-item">
              <div class="profile-icon">
                <userIcon />
              </div>
              <div class="profile-info">
                <h4>Personal Information</h4>
              </div>
            </div>
            <button
              @click="(store.showModal = true), (store.updateUserInfo = true)"
            >
              Change
            </button>
          </div>
          <div class="user-info-main">
            <h4>
              {{
                store.userInfo
                  ? store.userInfo?.lastname + " " + store.userInfo?.firstname
                  : "Name"
              }}
            </h4>
            <h5>
              Phone Number: {{ store.userInfo ? store.userInfo?.username : "" }}
            </h5>
          </div>
        </div>
        <!-- my orders -->
        <div class="user-info">
          <div class="user-info-header">
            <div class="profile-item">
              <div class="profile-icon">
                <documentSvg />
              </div>
              <div class="profile-info">
                <h4>My Orders</h4>
              </div>
            </div>
            <button style="margin-right: 10px" class="active-user-btn">
              Current
            </button>
            <button>All</button>
          </div>
          <div class="user-info-main cards">
            <!-- bu yerda card lar bo'ladi -->
          </div>
        </div>
      </div>
    </div>
    <VerifyCode v-show="store.updateUserPhoneCode" />
    <Register v-show="store.updateUserPhone" />
    <update-user-info v-if="store.updateUserInfo" />
    <Modal
      v-show="store.showModal"
      @click="(store.updateUserInfo = false), (store.showModal = false)"
    />
  </div>
</template>

<script setup>
// import icon's
import userIcon from "~/components/icons/userIcon.vue";
import documentSvg from "~/components/icons/documentSvg.vue";
import LogoutSvg from "~/components/icons/LogoutSvg.vue";
//
import { useStore } from "~/store/store";
const store = useStore();

async function logOut() {
  localStorage.clear();
  window.location = "/"
}
</script>

<style lang="scss" scoped></style>
