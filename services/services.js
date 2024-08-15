// const baseURL = ref("");
// if (process.client) {
//   baseURL.value = useRuntimeConfig().public.apiBase;
// }
const baseURL = "https://vadalar.uz/api";

export default {
  LoginPost(username, password) {
    return $fetch(`${baseURL}/auth/login/index`, {
      method: "POST",
      body: {
        username: username,
        password: password,
      },
    });
  },
  postEnterPhone(username) {
    return $fetch(`${baseURL}/auth/register/enter-phone`, {
      method: "POST",
      body: {
        phone: username,
      },
    });
  },
  postVerifyPhone(phone, code) {
    return $fetch(`${baseURL}/auth/register/verify`, {
      method: "POST",
      body: {
        phone: phone,
        code: code,
      },
    });
  },
  postSignUp(firstname, lastname, password, password_repeat, phone, code) {
    return $fetch(`${baseURL}/auth/register/sign-up`, {
      method: "POST",
      body: {
        firstname: firstname,
        lastname: lastname,
        password: password,
        password_repeat: password_repeat,
        phone: phone,
        code: code,
      },
    });
  },
  // reset password
  postResetEnterPhone(phone) {
    return $fetch(`${baseURL}/auth/reset/phone`, {
      method: "POST",
      body: {
        phone: phone,
      },
    });
  },
  postResetVerifyPhone(phone, code) {
    return $fetch(`${baseURL}/auth/reset/verify`, {
      method: "POST",
      body: {
        phone: phone,
        code: code,
      },
    });
  },
  postResetPassword(password, password_repeat, phone, code) {
    return $fetch(`${baseURL}/auth/reset/reset-password`, {
      method: "POST",
      body: {
        password: password,
        password_repeat: password_repeat,
        phone: phone,
        code: code,
      },
    });
  },
  postUpdateUserName(token, firstname, lastname) {
    return $fetch(`${baseURL}/profile-manager/profile/update-name`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        firstname: firstname,
        lastname: lastname,
      },
    });
  },
  postUpdateUserPhone(token, phone) {
    return $fetch(`${baseURL}/profile-manager/update-username/phone`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        phone: phone,
      },
    });
  },
  postUpdateUserPhoneCode(token, code, phone) {
    return $fetch(`${baseURL}/profile-manager/update-username/verify`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        code: code,
        phone: phone,
      },
    });
  },
  // get
  getUserInfo(token) {
    return $fetch(`${baseURL}/profile-manager/profile/index`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getPageInfoCategory() {
    return $fetch(`${baseURL}/page-info/category`);
  },
  getHeaderCategories() {
    return $fetch(`${baseURL}/category-manager/category/header-categories`);
  },
  getCategories() {
    return $fetch(`${baseURL}/category-manager/category/index?searchKey=sm`);
  },
  getWebSiteBanner() {
    return $fetch(`${baseURL}/banner/web-site-banners`);
  },
  getOurEffers(parentCategoryKey, searchKey) {
    return $fetch(
      `${baseURL}/product-manager/our-offers/index?parentCategoryKey=smartfon-va-gadjetlar`
    );
  },
  getPopularCategory() {
    return $fetch(`${baseURL}/category-manager/category/popular-categories`);
  },
  getBodyBanner() {
    return $fetch(`${baseURL}/banner/body-banners`);
  },
  getCheapProducts() {
    return $fetch(`${baseURL}/product-manager/cheap-product/index`);
  },
  getBrands() {
    return $fetch(`${baseURL}/brand/index`);
  },
};
