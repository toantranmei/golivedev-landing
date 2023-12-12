<script>
// import axios from "axios";
export default {
  data() {
    return {
      formData: {
        username: "",
        email: "",
        phone: "",
      },
      isLoading: false,
      isRequested: false,
      randomID: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    };
  },
  methods: {
    async submitForm() {
      try {
        this.isLoading = true;
        await $fetch(
          "https://sheet.best/api/sheets/87f40c08-38e1-45d2-8610-422e4747fd51",
          {
            method: "POST",
            body: this.formData,
          }
        );
      } catch (error) {
      } finally {
        this.isLoading = false;
        this.isRequested = true;
      }
    },
    onClose() {
      this.isRequested = false;
      this.formData = {
        username: "",
        email: "",
        phone: "",
      };
    },
  },
};
</script>
<template>
  <div class="css-16nysgj-FormSignUp">
    <h2 class="css-1r5q13f-FormSignUp">Trải nghiệm miễn phí</h2>
    <form
      class="snowplow_tracked ds-snowplow-form-home-create-account css-1peva9n-Box"
      @submit.prevent="submitForm"
      method="post"
    >
      <fieldset class="css-a85r1y-FormSignUp">
        <label :for="`intro-user_fullname-${randomID}`" class="css-ofdml2-labelStyle"
          ><span class="css-93ekd2-Label"
            ><span class="css-u1kbnq-Label"
              ><span class="css-1nnvhqq-baseStyle-textStyle-textStyle"
                >Họ và Tên</span
              ></span
            ></span
          >
          <div class="css-1pesyxn-inputElement">
            <input
              autocomplete="new-password"
              class="css-o6y3vg-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle _ar_hide_"
              :id="`intro-user_fullname-${randomID}`" 
              name="user[fullname]"
              placeholder="Nhập họ và tên"
              required
              type="text"
              _ar_hide_="width:408px;height:48px;margin:0px;position:static;display:inline-block;"
              v-model="formData.username"
              :disabled="isLoading"
            />
          </div>
        </label>
      </fieldset>
      <fieldset class="css-a85r1y-FormSignUp">
        <label :for="`intro-user_email-${randomID}`"  class="css-ofdml2-labelStyle"
          ><span class="css-93ekd2-Label"
            ><span class="css-u1kbnq-Label"
              ><span class="css-1nnvhqq-baseStyle-textStyle-textStyle"
                >Địa chỉ email</span
              ></span
            ></span
          >
          <div class="css-1pesyxn-inputElement">
            <input
              autocomplete="new-password"
              class="css-o6y3vg-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle _ar_hide_"
              :id="`intro-user_email-${randomID}`"
              name="user[email]"
              placeholder="Nhập địa chỉ email"
              required
              type="email"
              _ar_hide_="width:408px;height:48px;margin:0px;position:static;display:inline-block;"
              v-model="formData.email"
              :disabled="isLoading"
            />
          </div>
        </label>
      </fieldset>
      <fieldset class="css-a85r1y-FormSignUp">
        <label :for="`intro-user_phone-${randomID}`" class="css-ofdml2-labelStyle"
          ><span class="css-93ekd2-Label"
            ><span class="css-u1kbnq-Label"
              ><span class="css-1nnvhqq-baseStyle-textStyle-textStyle"
                >Số điện thoại</span
              ></span
            ></span
          >
          <div class="css-1pesyxn-inputElement">
            <input
              autocomplete="new-password"
              class="css-o6y3vg-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle _ar_hide_"
              :id="`intro-user_phone-${randomID}`"
              name="user[phone]"
              placeholder="Nhập số điện thoại"
              required
              type="text"
              _ar_hide_="width:408px;height:48px;margin:0px;position:static;display:inline-block;"
              v-model="formData.phone"
              :disabled="isLoading"
            />
          </div>
        </label>
      </fieldset>
      <button class="css-v9clva-FormSignUp" type="submit">
        <span class="css-u8ltki-ButtonInternal">
          <span v-if="!isLoading">Đăng ký học thử</span>
          <div v-else class="lds-dual-ring"></div>
        </span>
      </button>
    </form>
    
  </div>
</template>
<style scoped>
.modal--success {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  height: 100vh;
  width: 100vw;
}
.modal--success-wrap {
  border-radius: 1rem;
  text-align: center;
  width: 290px;
  background: #ffffff;
  overflow: hidden;
}
.modal--success-icon {
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal--success-content {
  padding: 1rem;
}
.btn--close {
  border-radius: 8px;
  width: 86px;
  color: #ffffff;
  height: 36px;
  background: #f37021;
  margin-top: 24px;
  cursor: pointer;
}
.thanks {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}
.lds-dual-ring {
  display: inline-block;
  width: 24px;
  height: 24px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 4px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
h1,
h2,
p {
  margin: 0;
}

fieldset {
  border: none;
  margin: 0;
  padding: 0;
}

button {
  background: transparent;
  box-shadow: none;
  border: 0;
}

button,
button > span {
  font-family: inherit;
}

.visually-hidden {
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

@media (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .ie-vsWrapper {
    display: none !important;
  }
}

/*! CSS Used from: Embedded */
* {
  box-sizing: border-box;
}

/*! CSS Used from: Embedded */
.css-3w7cd2-IntroSignup {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  background-color: #05192d;
  position: relative;
  padding-top: 16px;
}

@media screen and (min-width: 768px) {
  .css-3w7cd2-IntroSignup {
    padding-top: 64px;
  }
}

/*! CSS Used from: Embedded */
.css-t5mcc9-Box {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  width: 100%;
  max-width: container;
  margin-left: auto;
  margin-right: auto;
  max-width: 1172px;
  padding-left: 16px;
  padding-right: 16px;
}

/*! CSS Used from: Embedded */
.css-bdlptp-IntroSignup {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

@media screen and (min-width: 768px) {
  .css-bdlptp-IntroSignup {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }
}

@media screen and (min-width: 992px) {
  .css-bdlptp-IntroSignup {
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }
}

/*! CSS Used from: Embedded */
.css-gphpmd-Home {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  padding-bottom: 32px;
  text-align: left;
}

@media screen and (min-width: 480px) {
  .css-gphpmd-Home {
    text-align: center;
  }
}

@media screen and (min-width: 992px) {
  .css-gphpmd-Home {
    padding-bottom: 0;
    padding-right: 32px;
    text-align: left;
  }
}

/*! CSS Used from: Embedded */
.css-1mkuivt-Home {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.25;
  margin: 0;
  color: #ffffff;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (min-width: 992px) {
  .css-1mkuivt-Home {
    font-size: 3.125rem;
  }
}

@media screen and (min-width: 600px) {
  .css-1mkuivt-Home {
    max-width: 525px;
  }
}

@media screen and (min-width: 992px) {
  .css-1mkuivt-Home {
    margin-left: 0;
    margin-right: 0;
  }
}

/*! CSS Used from: Embedded */
.css-14a5ew7-Home {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 0;
  color: #ffffff;
  margin-bottom: 24px;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (min-width: 600px) {
  .css-14a5ew7-Home {
    max-width: 420px;
  }
}

@media screen and (min-width: 992px) {
  .css-14a5ew7-Home {
    margin-left: 0;
    margin-right: 0;
  }
}

/*! CSS Used from: Embedded */
.css-1u06dpx-Home {
  position: relative;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  vertical-align: middle;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-family: "Be Vietnam Pro", Arial, sans-serif;
  font-weight: 800;
  line-height: 1;
  margin: 0;
  padding: 0;
  outline: 0;
  border-style: solid;
  border-radius: 4px;
  border-width: 2px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: background-color 125ms ease-out;
  transition: background-color 125ms ease-out;
  cursor: pointer;
  height: 48px;
  min-width: 48px;
  width: auto;
  padding-left: 24px;
  padding-right: 24px;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  font-size: 16px;
  color: #fff;
  background-color: #7933FF;
  border-color: transparent;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}

.css-1u06dpx-Home::after {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: -4px;
  border-radius: 6px;
  pointer-events: none;
  -webkit-transition: box-shadow 125ms ease-out;
  transition: box-shadow 125ms ease-out;
}

.css-1u06dpx-Home:hover:not(:disabled) {
  background-color: #6f25f7;
}

.css-1u06dpx-Home:active:not(:disabled) {
  background-color: #7933FF;
}

.css-1u06dpx-Home:disabled {
  opacity: 0.6;
  cursor: default;
}

@media screen and (min-width: 480px) {
  .css-1u06dpx-Home {
    width: 365px;
  }
}

@media screen and (min-width: 992px) {
  .css-1u06dpx-Home {
    margin-left: 0;
    margin-right: 0;
  }
}

/*! CSS Used from: Embedded */
.css-u8ltki-ButtonInternal {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 8px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

/*! CSS Used from: Embedded */
.css-9czmw5-Home {
  position: relative;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  vertical-align: middle;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-family: "Be Vietnam Pro", Arial, sans-serif;
  font-weight: 800;
  line-height: 1;
  margin: 0;
  padding: 0;
  outline: 0;
  border-style: solid;
  border-radius: 4px;
  border-width: 2px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: background-color 125ms ease-out;
  transition: background-color 125ms ease-out;
  cursor: pointer;
  height: 48px;
  min-width: 48px;
  width: auto;
  padding-left: 24px;
  padding-right: 24px;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  font-size: 16px;
  color: #ffffff;
  background-color: transparent;
  border-color: rgba(255, 255, 255, 0.6);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
}

.css-9czmw5-Home::after {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: -4px;
  border-radius: 6px;
  pointer-events: none;
  -webkit-transition: box-shadow 125ms ease-out;
  transition: box-shadow 125ms ease-out;
}

.css-9czmw5-Home:hover:not(:disabled) {
  background-color: rgba(255, 255, 255, 0.06);
}

.css-9czmw5-Home:active:not(:disabled) {
  background-color: transparent;
}

.css-9czmw5-Home:disabled {
  opacity: 0.6;
  cursor: default;
}

@media screen and (min-width: 480px) {
  .css-9czmw5-Home {
    width: 365px;
  }
}

@media screen and (min-width: 992px) {
  .css-9czmw5-Home {
    margin-left: 0;
    margin-right: 0;
  }
}
/*! CSS Used from: Embedded */
.css-16nysgj-FormSignUp {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  background-color: #ffffff;
  border: 1px solid #e5e1da;
  border-radius: 4px;
  box-shadow: default;
  width: 450px;
  padding: 20px;
}

/*! CSS Used from: Embedded */
.css-1r5q13f-FormSignUp {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin-top: 0;
  text-align: center;
}

/*! CSS Used from: Embedded */
.css-h1v6tt-FormSignUp {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  container-type: inline-size;
  gap: 8px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
}

.css-h1v6tt-FormSignUp .text {
  display: none;
  font-size: 0.75rem;
}

@media screen and (min-width: 480px) {
  .css-h1v6tt-FormSignUp .text {
    font-size: 0.875rem;
  }
}

@media screen and (min-width: 600px) {
  .css-h1v6tt-FormSignUp .text {
    font-size: 1rem;
  }
}

.css-h1v6tt-FormSignUp a {
  border-color: #e5e1da;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  padding-left: 12px;
  padding-right: 12px;
}

.css-h1v6tt-FormSignUp a:active:not(:disabled),
.css-h1v6tt-FormSignUp a:focus:not(:disabled),
.css-h1v6tt-FormSignUp a:hover:not(:disabled) {
  background-color: rgba(229, 225, 218, 0.25);
}

.css-h1v6tt-FormSignUp svg {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

/*! CSS Used from: Embedded */
.css-d9pcj5-ButtonInternal {
  position: relative;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  vertical-align: middle;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-family: "Be Vietnam Pro", Arial, sans-serif;
  font-weight: 800;
  line-height: 1;
  margin: 0;
  padding: 0;
  outline: 0;
  border-style: solid;
  border-radius: 4px;
  border-width: 2px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: background-color 125ms ease-out;
  transition: background-color 125ms ease-out;
  cursor: pointer;
  height: 48px;
  min-width: 48px;
  width: auto;
  padding-left: 24px;
  padding-right: 24px;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  font-size: 16px;
  color: #05192d;
  background-color: transparent;
  border-color: rgba(5, 25, 45, 0.6);
}

.css-d9pcj5-ButtonInternal::after {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: -4px;
  border-radius: 6px;
  pointer-events: none;
  -webkit-transition: box-shadow 125ms ease-out;
  transition: box-shadow 125ms ease-out;
}

.css-d9pcj5-ButtonInternal:hover {
  background-color: rgba(48, 57, 105, 0.06);
}

.css-d9pcj5-ButtonInternal:active {
  background-color: transparent;
}

.css-d9pcj5-ButtonInternal:disabled {
  opacity: 0.6;
  cursor: default;
  pointer-events: none;
}

/*! CSS Used from: Embedded */
.css-1ctffle-FormSignUp {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-top: 0;
  margin-top: 9px;
  position: relative;
  text-align: center;
}

.css-1ctffle-FormSignUp::after {
  background-color: #e5e1da;
  content: "";
  height: 1px;
  left: 0;
  position: absolute;
  right: 0;
  top: 50%;
  width: 100%;
}

/*! CSS Used from: Embedded */
.css-2l0jk1-FormSignUp {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: #05192d;
  font-size: 16px;
  line-height: 1.5;
  background-color: #ffffff;
  display: inline-block;
  position: relative;
  padding-left: 8px;
  padding-right: 8px;
  z-index: 1;
}

/*! CSS Used from: Embedded */
.css-1peva9n-Box {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
}

/*! CSS Used from: Embedded */
.css-a85r1y-FormSignUp {
  margin-top: 16px;
}

/*! CSS Used from: Embedded */
.css-ofdml2-labelStyle {
  border: 0;
  display: block;
  margin: 0;
  margin-top: 0;
  min-width: 0;
  padding: 0;
}

/*! CSS Used from: Embedded */
.css-93ekd2-Label {
  display: block;
  margin-bottom: 12px;
  padding: 0;
  width: 100%;
}

/*! CSS Used from: Embedded */
.css-u1kbnq-Label {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  width: 100%;
}

/*! CSS Used from: Embedded */
.css-1nnvhqq-baseStyle-textStyle-textStyle {
  -webkit-font-smoothing: antialiased;
  color: rgb(5, 25, 45);
  font-family: "Be Vietnam Pro", Arial;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  color: #05192d;
  display: inline-block;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  font-weight: 800;
  margin-right: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/*! CSS Used from: Embedded */
.css-1pesyxn-inputElement {
  display: block;
  position: relative;
}

/*! CSS Used from: Embedded */
.css-o6y3vg-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle {
  font-size: 16px;
  height: 48px;
  padding-left: 16px;
  padding-right: 16px;
  background: white;
  border: 0;
  border-radius: 4px;
  box-shadow: inset 0 0 0 2px rgb(229, 225, 218);
  box-sizing: border-box;
  display: inline-block;
  font-family: Arial;
  font-family: "Be Vietnam Pro";
  margin: 0;
  vertical-align: baseline;
  -webkit-appearance: none;
  color: rgb(5, 25, 45);
  width: 100%;
}

.css-o6y3vg-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle:disabled,
.css-o6y3vg-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle:active:disabled,
.css-o6y3vg-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle:focus:disabled {
  cursor: not-allowed;
  opacity: 0.3;
}

.css-o6y3vg-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle:focus {
  box-shadow: inset 0 0 0 2px rgb(0, 155, 216);
  outline: none;
}

.css-o6y3vg-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle::placeholder {
  color: rgba(5, 25, 45, 0.6);
  font-family: inherit;
}

/*! CSS Used from: Embedded */
.css-19ce7ju-FormSignUp {
  margin-top: 12px;
}

/*! CSS Used from: Embedded */
.css-pmlsr3-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle-getInputStyle {
  font-size: 16px;
  height: 48px;
  padding-left: 16px;
  padding-right: 16px;
  background: white;
  border: 0;
  border-radius: 4px;
  box-shadow: inset 0 0 0 2px rgb(229, 225, 218);
  box-sizing: border-box;
  display: inline-block;
  font-family: Arial;
  font-family: "Be Vietnam Pro";
  margin: 0;
  vertical-align: baseline;
  -webkit-appearance: none;
  color: rgb(5, 25, 45);
  width: 100%;
  padding-right: 48px;
}

.css-pmlsr3-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle-getInputStyle:disabled,
.css-pmlsr3-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle-getInputStyle:active:disabled,
.css-pmlsr3-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle-getInputStyle:focus:disabled {
  cursor: not-allowed;
  opacity: 0.3;
}

.css-pmlsr3-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle-getInputStyle:focus {
  box-shadow: inset 0 0 0 2px rgb(0, 155, 216);
  outline: none;
}

.css-pmlsr3-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle-getInputStyle::placeholder {
  color: rgba(5, 25, 45, 0.6);
  font-family: inherit;
}

/*! CSS Used from: Embedded */
.css-tny1qy-showHidePasswordElement {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: transparent;
  border: 0;
  color: #05192d;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  right: 8px;
  top: 0;
  width: 36px;
}

.css-tny1qy-showHidePasswordElement:active,
.css-tny1qy-showHidePasswordElement:focus,
.css-tny1qy-showHidePasswordElement:hover {
  opacity: 1;
  outline: 0;
}

/*! CSS Used from: Embedded */
.css-ff9ubg-showHidePasswordElement {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

/*! CSS Used from: Embedded */
.css-v9clva-FormSignUp {
  position: relative;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  vertical-align: middle;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-family: "Be Vietnam Pro", Arial, sans-serif;
  font-weight: 800;
  line-height: 1;
  margin: 0;
  padding: 0;
  outline: 0;
  border-style: solid;
  border-radius: 4px;
  border-width: 2px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: background-color 125ms ease-out;
  transition: background-color 125ms ease-out;
  cursor: pointer;
  height: 48px;
  min-width: 36px;
  width: auto;
  padding-left: 16px;
  padding-right: 16px;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  font-size: 14px;
  color: #fff;
  background-color: #7933FF;
  border-color: transparent;
  margin-top: 24px;
  width: 100%;
}

.css-v9clva-FormSignUp::after {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: -4px;
  border-radius: 6px;
  pointer-events: none;
  -webkit-transition: box-shadow 125ms ease-out;
  transition: box-shadow 125ms ease-out;
}

.css-v9clva-FormSignUp:hover {
  background-color: #6f25f7;
}

.css-v9clva-FormSignUp:active {
  background-color: #7933FF;
}

.css-v9clva-FormSignUp:disabled {
  opacity: 0.6;
  cursor: default;
  pointer-events: none;
}

/*! CSS Used from: Embedded */
.css-1x3hzoq-LegalSnippet {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 0.75rem;
  line-height: 1.5;
  margin-top: 0;
  color: #05192d;
  display: block;
  line-height: 1.2;
  margin-top: 16px;
}

.css-1x3hzoq-LegalSnippet span {
  opacity: 0.5;
}

/*! CSS Used from: Embedded */
.css-19cg5tr-LegalSnippet {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: #05192d;
  font-weight: 700;
  line-height: 1.5;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #0065d1;
  font-weight: 700;
  -webkit-text-decoration: underline;
  text-decoration: underline;
}

.css-19cg5tr-LegalSnippet:active,
.css-19cg5tr-LegalSnippet:focus,
.css-19cg5tr-LegalSnippet:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}

.css-19cg5tr-LegalSnippet:active,
.css-19cg5tr-LegalSnippet:focus,
.css-19cg5tr-LegalSnippet:hover {
  color: #0065d1;
  opacity: 0.75;
}

/*! CSS Used from: Embedded */
.css-66y3kd-IntroSignup {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  -webkit-box-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 56px;
}

.css-66y3kd-IntroSignup > * {
  margin: 8px;
}

@media screen and (min-width: 1200px) {
  .css-66y3kd-IntroSignup {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    max-width: 100%;
    margin-left: -8px;
    margin-right: -8px;
  }
}

/*! CSS Used from: Embedded */
.css-77vkw0-IntroSignup {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
  -webkit-align-items: flex-end;
  -webkit-box-align: flex-end;
  -ms-flex-align: flex-end;
  align-items: flex-end;
  bottom: -70px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.css-77vkw0-IntroSignup > svg {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

@media screen and (min-width: 992px) {
  .css-77vkw0-IntroSignup {
    bottom: -36px;
  }
}

/*! CSS Used from: Embedded */
.css-1l0u86z-IntroSignup {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.css-1l0u86z-IntroSignup .sm-beach_svg__p2 {
  fill: #7933ff;
}

@media screen and (min-width: 992px) {
  .css-1l0u86z-IntroSignup {
    display: none;
  }
}

/*! CSS Used from: Embedded */
.css-rvzsl8-IntroSignup {
  display: none;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

@media screen and (min-width: 992px) {
  .css-rvzsl8-IntroSignup {
    display: block;
  }
}

/*! CSS Used from: Embedded */
.css-10qez79-IntroSignup {
  display: none;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-transform: translate(390px, 0);
  -moz-transform: translate(390px, 0);
  -ms-transform: translate(390px, 0);
  transform: translate(390px, 0);
}

@media screen and (min-width: 992px) {
  .css-10qez79-IntroSignup {
    display: block;
  }
}

/*! CSS Used from: Embedded */
.css-yprdih-Box {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
}

@media screen and (min-width: 992px) {
  .css-yprdih-Box {
    padding-bottom: 170px;
  }
}

/*! CSS Used from: Embedded */
.css-3117p9-Box {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  background-color: #213147;
  margin-top: 60px;
  padding-bottom: 20px;
}

@media screen and (min-width: 992px) {
  .css-3117p9-Box {
    display: none;
  }
}

/*! CSS Used from: Embedded */
.css-nby3ea-DownloadAppBanner {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  background-color: #213147;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 0;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 64px;
  padding-bottom: 64px;
}

@media screen and (min-width: 1200px) {
  .css-nby3ea-DownloadAppBanner {
    margin-bottom: 40px;
  }
}

/*! CSS Used from: Embedded */
.css-1f5kwad-DownloadAppBanner {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin-top: 0;
  color: #ffffff;
  text-align: center;
}

@media screen and (min-width: 992px) {
  .css-1f5kwad-DownloadAppBanner {
    font-size: 2rem;
  }
}

/*! CSS Used from: Embedded */
.css-126ryhc-DownloadAppBanner {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 0;
  color: #ffffff;
  margin-bottom: 16px;
  margin-top: 8px;
  text-align: center;
}

/*! CSS Used from: Embedded */
.css-u8ltki-ButtonInternal {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 8px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

/*! CSS Used from: Embedded */
.css-u8ltki-ButtonInternal {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 8px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

/*! CSS Used from: Embedded */
.css-1peva9n-Box {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
}

/*! CSS Used from: Embedded */
.css-t5mcc9-Box {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  width: 100%;
  max-width: container;
  margin-left: auto;
  margin-right: auto;
  max-width: 1172px;
  padding-left: 16px;
  padding-right: 16px;
}

/*! CSS Used from: Embedded */
.css-1peva9n-Box {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
}

/*! CSS Used from: Embedded */
.css-u8ltki-ButtonInternal {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 8px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

/*! CSS Used from: Embedded */
.css-u8ltki-ButtonInternal {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 8px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

/*! CSS Used from: Embedded */
.css-u8ltki-ButtonInternal {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 8px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

/*! CSS Used from: Embedded */
.css-u8ltki-ButtonInternal {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 8px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

/*! CSS Used from: Embedded */
.css-16nysgj-FormSignUp {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  background-color: #ffffff;
  border: 1px solid #e5e1da;
  border-radius: 4px;
  box-shadow: default;
  max-width: 450px;
  padding: 20px;
}

/*! CSS Used from: Embedded */
.css-1r5q13f-FormSignUp {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin-top: 0;
  text-align: center;
}

/*! CSS Used from: Embedded */
.css-h1v6tt-FormSignUp {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  container-type: inline-size;
  gap: 8px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
}

.css-h1v6tt-FormSignUp .text {
  display: none;
  font-size: 0.75rem;
}

@media screen and (min-width: 480px) {
  .css-h1v6tt-FormSignUp .text {
    font-size: 0.875rem;
  }
}

@media screen and (min-width: 600px) {
  .css-h1v6tt-FormSignUp .text {
    font-size: 1rem;
  }
}

.css-h1v6tt-FormSignUp a {
  border-color: #e5e1da;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  padding-left: 12px;
  padding-right: 12px;
}

.css-h1v6tt-FormSignUp a:active:not(:disabled),
.css-h1v6tt-FormSignUp a:focus:not(:disabled),
.css-h1v6tt-FormSignUp a:hover:not(:disabled) {
  background-color: rgba(229, 225, 218, 0.25);
}

.css-h1v6tt-FormSignUp svg {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

/*! CSS Used from: Embedded */
.css-d9pcj5-ButtonInternal {
  position: relative;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  vertical-align: middle;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-family: "Be Vietnam Pro", Arial, sans-serif;
  font-weight: 800;
  line-height: 1;
  margin: 0;
  padding: 0;
  outline: 0;
  border-style: solid;
  border-radius: 4px;
  border-width: 2px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: background-color 125ms ease-out;
  transition: background-color 125ms ease-out;
  cursor: pointer;
  height: 48px;
  min-width: 48px;
  width: auto;
  padding-left: 24px;
  padding-right: 24px;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  font-size: 16px;
  color: #05192d;
  background-color: transparent;
  border-color: rgba(5, 25, 45, 0.6);
}

.css-d9pcj5-ButtonInternal::after {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: -4px;
  border-radius: 6px;
  pointer-events: none;
  -webkit-transition: box-shadow 125ms ease-out;
  transition: box-shadow 125ms ease-out;
}

.css-d9pcj5-ButtonInternal:hover {
  background-color: rgba(48, 57, 105, 0.06);
}

.css-d9pcj5-ButtonInternal:active {
  background-color: transparent;
}

.css-d9pcj5-ButtonInternal:disabled {
  opacity: 0.6;
  cursor: default;
  pointer-events: none;
}

/*! CSS Used from: Embedded */
.css-u8ltki-ButtonInternal {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 8px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

/*! CSS Used from: Embedded */
.css-1ctffle-FormSignUp {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-top: 0;
  margin-top: 9px;
  position: relative;
  text-align: center;
}

.css-1ctffle-FormSignUp::after {
  background-color: #e5e1da;
  content: "";
  height: 1px;
  left: 0;
  position: absolute;
  right: 0;
  top: 50%;
  width: 100%;
}

/*! CSS Used from: Embedded */
.css-2l0jk1-FormSignUp {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: #05192d;
  font-size: 16px;
  line-height: 1.5;
  background-color: #ffffff;
  display: inline-block;
  position: relative;
  padding-left: 8px;
  padding-right: 8px;
  z-index: 1;
}

/*! CSS Used from: Embedded */
.css-1peva9n-Box {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
}

/*! CSS Used from: Embedded */
.css-a85r1y-FormSignUp {
  margin-top: 16px;
}

/*! CSS Used from: Embedded */
.css-ofdml2-labelStyle {
  border: 0;
  display: block;
  margin: 0;
  margin-top: 0;
  min-width: 0;
  padding: 0;
}

/*! CSS Used from: Embedded */
.css-93ekd2-Label {
  display: block;
  margin-bottom: 12px;
  padding: 0;
  width: 100%;
}

/*! CSS Used from: Embedded */
.css-u1kbnq-Label {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  width: 100%;
}

/*! CSS Used from: Embedded */
.css-1nnvhqq-baseStyle-textStyle-textStyle {
  -webkit-font-smoothing: antialiased;
  color: rgb(5, 25, 45);
  font-family: "Be Vietnam Pro", Arial;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  color: #05192d;
  display: inline-block;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  font-weight: 800;
  margin-right: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/*! CSS Used from: Embedded */
.css-1pesyxn-inputElement {
  display: block;
  position: relative;
}

/*! CSS Used from: Embedded */
.css-o6y3vg-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle {
  font-size: 16px;
  height: 48px;
  padding-left: 16px;
  padding-right: 16px;
  background: white;
  border: 0;
  border-radius: 4px;
  box-shadow: inset 0 0 0 2px rgb(229, 225, 218);
  box-sizing: border-box;
  display: inline-block;
  font-family: Arial;
  font-family: "Be Vietnam Pro";
  margin: 0;
  vertical-align: baseline;
  -webkit-appearance: none;
  color: rgb(5, 25, 45);
  width: 100%;
}

.css-o6y3vg-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle:disabled,
.css-o6y3vg-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle:active:disabled,
.css-o6y3vg-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle:focus:disabled {
  cursor: not-allowed;
  opacity: 0.3;
}

.css-o6y3vg-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle:focus {
  box-shadow: inset 0 0 0 2px rgb(0, 155, 216);
  outline: none;
}

.css-o6y3vg-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle::placeholder {
  color: rgba(5, 25, 45, 0.6);
  font-family: inherit;
}

/*! CSS Used from: Embedded */
.css-19ce7ju-FormSignUp {
  margin-top: 12px;
}

/*! CSS Used from: Embedded */
.css-pmlsr3-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle-getInputStyle {
  font-size: 16px;
  height: 48px;
  padding-left: 16px;
  padding-right: 16px;
  background: white;
  border: 0;
  border-radius: 4px;
  box-shadow: inset 0 0 0 2px rgb(229, 225, 218);
  box-sizing: border-box;
  display: inline-block;
  font-family: Arial;
  font-family: "Be Vietnam Pro";
  margin: 0;
  vertical-align: baseline;
  -webkit-appearance: none;
  color: rgb(5, 25, 45);
  width: 100%;
  padding-right: 48px;
}

.css-pmlsr3-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle-getInputStyle:disabled,
.css-pmlsr3-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle-getInputStyle:active:disabled,
.css-pmlsr3-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle-getInputStyle:focus:disabled {
  cursor: not-allowed;
  opacity: 0.3;
}

.css-pmlsr3-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle-getInputStyle:focus {
  box-shadow: inset 0 0 0 2px rgb(0, 155, 216);
  outline: none;
}

.css-pmlsr3-inputSize-baseFormStyle-inputStyle-getInputStyle-getInputStyle-getInputStyle::placeholder {
  color: rgba(5, 25, 45, 0.6);
  font-family: inherit;
}

/*! CSS Used from: Embedded */
.css-tny1qy-showHidePasswordElement {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: transparent;
  border: 0;
  color: #05192d;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  right: 8px;
  top: 0;
  width: 36px;
}

.css-tny1qy-showHidePasswordElement:active,
.css-tny1qy-showHidePasswordElement:focus,
.css-tny1qy-showHidePasswordElement:hover {
  opacity: 1;
  outline: 0;
}

/*! CSS Used from: Embedded */
.css-ff9ubg-showHidePasswordElement {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

/*! CSS Used from: Embedded */
.css-v9clva-FormSignUp {
  position: relative;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  vertical-align: middle;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-family: "Be Vietnam Pro", Arial, sans-serif;
  font-weight: 800;
  line-height: 1;
  margin: 0;
  padding: 0;
  outline: 0;
  border-style: solid;
  border-radius: 4px;
  border-width: 2px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: background-color 125ms ease-out;
  transition: background-color 125ms ease-out;
  cursor: pointer;
  height: 48px;
  min-width: 36px;
  width: auto;
  padding-left: 16px;
  padding-right: 16px;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  font-size: 14px;
  color: #fff;
  background-color: #7933FF;
  border-color: transparent;
  margin-top: 24px;
  width: 100%;
}

.css-v9clva-FormSignUp::after {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: -4px;
  border-radius: 6px;
  pointer-events: none;
  -webkit-transition: box-shadow 125ms ease-out;
  transition: box-shadow 125ms ease-out;
}

.css-v9clva-FormSignUp:hover {
  background-color: #6f25f7;
}

.css-v9clva-FormSignUp:active {
  background-color: #7933FF;
}

.css-v9clva-FormSignUp:disabled {
  opacity: 0.6;
  cursor: default;
  pointer-events: none;
}

/*! CSS Used from: Embedded */
.css-1x3hzoq-LegalSnippet {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 0.75rem;
  line-height: 1.5;
  margin-top: 0;
  color: #05192d;
  display: block;
  line-height: 1.2;
  margin-top: 16px;
}

.css-1x3hzoq-LegalSnippet span {
  opacity: 0.5;
}

/*! CSS Used from: Embedded */
.css-19cg5tr-LegalSnippet {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: #05192d;
  font-weight: 700;
  line-height: 1.5;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #0065d1;
  font-weight: 700;
  -webkit-text-decoration: underline;
  text-decoration: underline;
}

.css-19cg5tr-LegalSnippet:active,
.css-19cg5tr-LegalSnippet:focus,
.css-19cg5tr-LegalSnippet:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}

.css-19cg5tr-LegalSnippet:active,
.css-19cg5tr-LegalSnippet:focus,
.css-19cg5tr-LegalSnippet:hover {
  color: #0065d1;
  opacity: 0.75;
}

/*! CSS Used from: Embedded */
.css-1f5kwad-DownloadAppBanner {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin-top: 0;
  color: #ffffff;
  text-align: center;
}

@media screen and (min-width: 992px) {
  .css-1f5kwad-DownloadAppBanner {
    font-size: 2rem;
  }
}

/*! CSS Used from: Embedded */
.css-126ryhc-DownloadAppBanner {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 0;
  color: #ffffff;
  margin-bottom: 16px;
  margin-top: 8px;
  text-align: center;
}

/*! CSS Used from: Embedded */
.css-kek3bb {
  clip: rect(0px, 0px, 0px, 0px);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.css-1u0dba1 {
  box-sizing: border-box;
  margin: 20px 0px 0px;
  min-width: 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  grid-area: 2 / 2 / 3 / 3;
  -webkit-box-pack: center;
  justify-content: center;
}

@media screen and (min-width: 1200px) {
  .css-1u0dba1 {
    margin-top: 0px;
  }
}

.css-1u0dba1 svg {
  fill: black;
}

.css-tdo78y {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  color: rgb(5, 25, 45);
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none;
  border-bottom: 0px;
}

.css-tdo78y:active,
.css-tdo78y:focus,
.css-tdo78y:hover {
  text-decoration: underline;
}

.css-tdo78y:active,
.css-tdo78y:focus,
.css-tdo78y:hover {
  border-bottom: 0px;
}
</style>