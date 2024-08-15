<template>
  <div class="po-r">
    <header>
      <div class="top-nav">
        <div class="container">
          <NuxtLink to="/" class="site-logo">
            <div class="logo">
              <img src="@/assets/images/logo.png" alt="logo" />
            </div>
          </NuxtLink>
          <div class="location-top__nav">
            <div class="top-navbar">
              <ul class="top-navbar-list">
                <li v-for="category in pageCategoryInfo?.data" :key="category">
                  <NuxtLink :to="`/page/${category?.id}`" class="top-nav-link">
                    {{ category?.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="right-btns">
            <div class="contact">
              <a href="tel:+998 95 123 55 88" class="contact-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_98_1823)">
                    <path
                      d="M18.2999 14.1449V16.6539C18.3008 16.8868 18.2531 17.1174 18.1598 17.3308C18.0665 17.5442 17.9297 17.7358 17.758 17.8932C17.5864 18.0507 17.3837 18.1706 17.1631 18.2451C16.9425 18.3198 16.7087 18.3475 16.4767 18.3265C13.9031 18.0469 11.4311 17.1675 9.2591 15.759C7.23837 14.475 5.52515 12.7617 4.24109 10.741C2.82766 8.55916 1.94806 6.07507 1.67354 3.48996C1.65263 3.25868 1.68012 3.02559 1.75425 2.80552C1.82837 2.58545 1.94749 2.38322 2.10406 2.21171C2.26061 2.04021 2.45117 1.90318 2.66358 1.80936C2.876 1.71553 3.10563 1.66696 3.33785 1.66674H5.84686C6.25273 1.66274 6.64622 1.80648 6.95397 2.07114C7.26171 2.33579 7.46272 2.70333 7.51953 3.10524C7.62543 3.90818 7.82182 4.69656 8.10497 5.45534C8.21749 5.75469 8.24184 6.08001 8.17514 6.39278C8.10843 6.70554 7.95348 6.99262 7.72861 7.22001L6.66646 8.28216C7.85704 10.376 9.59065 12.1096 11.6844 13.3002L12.7466 12.238C12.974 12.0131 13.2611 11.8582 13.5739 11.7915C13.8866 11.7248 14.212 11.7492 14.5113 11.8617C15.27 12.1448 16.0584 12.3412 16.8614 12.4471C17.2677 12.5044 17.6387 12.7091 17.904 13.0221C18.1692 13.3351 18.3101 13.7347 18.2999 14.1449Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_98_1823">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <p class="contact-number">+998 95 123 55 88</p>
            </div>

            <div class="language lang">
              <button class="language-btn">
                <p class="language-btn-text">Рус</p>
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.63668 4.35355C3.83194 4.54882 4.14853 4.54882 4.34379 4.35355L7.52577 1.17157C7.72103 0.976311 7.72103 0.659728 7.52577 0.464466C7.33051 0.269204 7.01392 0.269204 6.81866 0.464466L3.99023 3.29289L1.16181 0.464466C0.966545 0.269204 0.649963 0.269204 0.4547 0.464466C0.259438 0.659728 0.259438 0.976311 0.4547 1.17157L3.63668 4.35355ZM3.49023 3V4H4.49023V3H3.49023Z"
                    fill="white"
                  />
                </svg>
              </button>
              <ul class="language-list d-n">
                <li class="language-list-li">Ru</li>
                <li class="language-list-li">Uz</li>
                <li class="language-list-li">Eng</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="header-navbar">
        <div class="container">
          <div class="site-burger">
            <button class="burger-btn">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66675 9.33333H25.3334"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M6.66675 16H25.3334"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M6.66675 22.6667H25.3334"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
          <NuxtLink to="/" class="site-logo">
            <div class="logo">
              <img src="@/assets/images/logo.png" alt="logo" />
            </div>
          </NuxtLink>

          <div class="search-wrap">
            <div class="search-input">
              <input
                class="search-input__input"
                type="text"
                placeholder="Телефоны и бытовая"
              />
              <button class="search-input__icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0.833328C9.33696 0.833328 8.70107 1.09672 8.23223 1.56556C7.76339 2.0344 7.5 2.67029 7.5 3.33333V10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10V3.33333C12.5 2.67029 12.2366 2.0344 11.7678 1.56556C11.2989 1.09672 10.663 0.833328 10 0.833328V0.833328Z"
                    stroke="#BDBDBD"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.8334 8.33333V10C15.8334 11.5471 15.2188 13.0308 14.1249 14.1248C13.0309 15.2187 11.5472 15.8333 10.0001 15.8333C8.45299 15.8333 6.96925 15.2187 5.87529 14.1248C4.78133 13.0308 4.16675 11.5471 4.16675 10V8.33333"
                    stroke="#BDBDBD"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 15.8333V19.1667"
                    stroke="#BDBDBD"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.66675 19.1667H13.3334"
                    stroke="#BDBDBD"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div class="search-btn">
              <button class="search-btn__btn">
                <span class="search-btn__icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 17.5L13.875 13.875"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p class="search-btn__text">Поиск</p>
              </button>
            </div>
          </div>

          <div class="header-navbar__active-btns">
            <!-- user -->
            <NuxtLink
              class="user-btn hna-btns"
              to="/profile"
              v-if="store.userInfo"
            >
              <span class="user-btn__icon hna-i">
                <userIcon />
              </span>
              <p
                style="
                  width: 80px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                "
                class="user-btn__text hna-t"
              >
                {{
                  store.userInfo
                    ? store.userInfo?.firstname + " " + store.userInfo?.lastname
                    : "Войти"
                }}
              </p>
            </NuxtLink>
            <button
              v-else
              class="user-btn hna-btns"
              @click="(store.loginModal = true), (store.showModal = true)"
            >
              <span class="user-btn__icon hna-i">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.5713 24.6429V22.5C23.5713 21.3634 23.1198 20.2733 22.3161 19.4695C21.5123 18.6658 20.4223 18.2143 19.2856 18.2143H10.7142C9.57754 18.2143 8.48745 18.6658 7.68372 19.4695C6.88 20.2733 6.42847 21.3634 6.42847 22.5V24.6429M19.2856 9.64286C19.2856 12.0098 17.3668 13.9286 14.9999 13.9286C12.633 13.9286 10.7142 12.0098 10.7142 9.64286C10.7142 7.27593 12.633 5.35715 14.9999 5.35715C17.3668 5.35715 19.2856 7.27593 19.2856 9.64286Z"
                    stroke="#202020"
                    stroke-width="2.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p class="user-btn__text hna-t">
                {{
                  store.userInfo
                    ? store.userInfo?.firstname + " " + store.userInfo?.lastname
                    : "Войти"
                }}
              </p>
            </button>

            <!-- like -->
            <button class="like-btn hna-btns">
              <span class="like-btn__icon hna-i">
                <span class="like-btn__count hna-c">12</span>
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
              </span>

              <p class="like-btn__text hna-t">Избранное</p>
            </button>

            <!-- cart -->
            <button class="cart-btn hna-btns">
              <span class="cart-btn__icon hna-i">
                <span class="cart-btn__count hna-c">32</span>
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
              </span>

              <p class="cart-btn__text hna-t">Корзина</p>
            </button>
          </div>
        </div>
      </div>

      <div class="header-bottom">
        <div class="container">
          <div class="header-bottom_navbar-category">
            <button
              class="header-bottom_navbar-btn"
              @click="openKatalog = !openKatalog"
            >
              <category_list />
              <p>Категории</p>
            </button>

            <ul class="header-bottom_navbar-list-wrap">
              <li v-for="item in categories?.data" :key="item">
                <NuxtLink
                  :to="`/categorys/${item?.slug}`"
                  class="header-bottom_navbar-list-link"
                >
                  {{ item?.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <!-- category -->
          <div class="category" :class="{ open: openKatalog }">
            <ul class="catalog-wrapper">
              <li
              class="catalog-wrapper-item"
              v-for="catalog in katalog?.data"
              :key="catalog"
              @click="(openCategory = !openCategory)"
              :class="{ liBg: openCategory }"
              >
                <span class="catalog-wrapper-span">
                  <img :src="catalog?.iconUrl" alt="img" />
                  <p>{{ catalog?.name }}</p>
                  <rightArrowCatalog />
                </span>
                <ul class="catalog-wrapper__sub-menu" v-if="(openCategory)">
                  <div class="catalog-wrapper__sub-menu-wrapper">
                    <a href="#" class="catalog-wrapper__sub-menu__title">{{
                      catalog?.name
                    }}</a>
                    <li
                      v-for="categories in catalog?.categories"
                      :key="categories"
                    >
                      <div class="catalog-wrapper__sub-menu__name">
                        <NuxtLink
                          @click="openKatalog = false"
                          :to="`/categorys/${categories?.slug}`"
                          >{{ categories?.name }}</NuxtLink
                        >
                      </div>
                    </li>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <NuxtPage />
    <Login v-if="store.loginModal" />
    <Register v-if="store.enterPhone || store.enterPhoneReset" />
    <VerifyCode v-if="store.verifyCode || store.verifyCodeReset" />
    <SignUp v-if="store.signUp" />
    <NewResetPassword v-show="store.CodeReset" />
    <Loader v-if="store.loader" />

    <footer class="footer">
      <div class="container">
        <div class="footer-info">
          <NuxtLink to="/" class="footer-logo">
            <img src="@/assets/images/logo.png" alt="logo" />
          </NuxtLink>
          <p class="footer-desc">Dushanba - Shanba: 9:00-18:00</p>
          <p class="footer-desc">Колл-центр: +998991013010</p>

          <ul class="footer-social">
            <!-- telegram -->
            <li>
              <a class="footer-social-link" href="#">
                <telegram />
              </a>
            </li>
            <!-- instagram -->
            <li>
              <a class="footer-social-link" href="#">
                <instagram />
              </a>
            </li>
            <!-- facebook -->
            <li>
              <a class="footer-social-link" href="#">
                <facebook />
              </a>
            </li>
            <!-- youtobe -->
            <li>
              <a class="footer-social-link" href="#">
                <youtobe />
              </a>
            </li>
          </ul>
        </div>
        <ul class="footer-list">
          <h4 class="footer-list-title">Kategoriyalar</h4>
          <li v-for="item in categories?.data" :key="item">
            <NuxtLink
              class="footer-list-link"
              :to="`/categorys/${item?.slug}`"
              >{{ item?.name }}</NuxtLink
            >
          </li>
        </ul>
        <ul class="footer-list">
          <h4 class="footer-list-title">Umumiy Ma'lumot</h4>
          <li v-for="category in pageCategoryInfo?.data" :key="category">
            <NuxtLink class="footer-list-link" :to="`/page/${category?.id}`">
              {{ category?.name }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </footer>
    <Modal
      @click="
        (store.showModal = false),
          (store.loginModal = false),
          (store.enterPhone = false),
          (store.verifyCode = false),
          (store.signUp = false),
          (store.enterPhoneReset = false),
          (store.CodeReset = false),
          (store.updateUserInfo = false),
          (store.updateUserPhone = false),
          (store.updateUserPhoneCode = false)
      "
      v-show="store.showModal"
    />
  </div>
</template>

<script setup>
// icons import
import userIcon from "~/components/icons/userIcon.vue";
import category_list from "~/components/icons/category_list.vue";
import rightArrowCatalog from "~/components/icons/right-arrow-catalog.vue";
import telegram from "~/components/icons/telegram.vue";
import instagram from "~/components/icons/instagram.vue";
import facebook from "~/components/icons/facebook.vue";
import youtobe from "~/components/icons/youtobe.vue";
// import's
import services from "~/services/services";
import { useStore } from "~/store/store";
import Modal from "~/components/Modal.vue";
import Loader from "~/components/loader.vue";
// varibles
const store = useStore();
const openCategory = ref(false);
const openKatalog = ref(false);
const categories = ref({});
const katalog = ref({});
const pageCategoryInfo = ref({});
// fetch
async function getHeaderCategories() {
  store.loader = true;
  const res = await services.getHeaderCategories();
  store.loader = false;
  categories.value = res;
}
async function getCategories() {
  store.loader = true;
  const res = await services.getCategories();
  store.loader = false;
  katalog.value = res;
  console.log(res)
}
async function getCategoryInfo() {
  store.loader = true;
  const res = await services.getPageInfoCategory();
  store.loader = false;
  pageCategoryInfo.value = res;
}

getCategories();
getHeaderCategories();
getCategoryInfo();
</script>

<style lang="scss" scoped></style>
