import { defineStore } from "pinia";
export const useStore = defineStore("store", () => {
  const loader = ref(false);
  const phone = ref("");
  const code = ref("");
  const token = ref("");
  const userInfo = ref("");

  // modal's
  const showModal = ref(false);
  const loginModal = ref(false);
  const enterPhone = ref(false);
  const enterPhoneReset = ref(false);
  const verifyCode = ref(false);
  const verifyCodeReset = ref(false);
  const CodeReset = ref(false);
  const signUp = ref(false);
  const updateUserInfo = ref(false);
  const updateUserPhone = ref(false);
  const updateUserPhoneCode = ref(false);

  return {
    loader,
    phone,
    code,
    token,
    showModal,
    loginModal,
    enterPhone,
    verifyCode,
    signUp,
    userInfo,
    enterPhoneReset,
    verifyCodeReset,
    CodeReset,
    updateUserInfo,
    updateUserPhone,
    updateUserPhoneCode
  };
});
