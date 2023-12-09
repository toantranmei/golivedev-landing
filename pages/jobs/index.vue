<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'default-layout',
})

useHead({
  title: 'Các vị trí tuyển dụng',
  meta: [
    {
      name: 'description',
      content: 'Giúp chúng tôi định hình lại tương lai của giáo dục? Chúng tôi luôn tìm kiếm những người tuyệt vời!',
    },
  ],
})
const typesOfWork = ref('all')

const { data: works } = await useFetch('/api/jobs')

</script>

<template>
  <div id="main">
    <header class="css-xjckqs-Header">
      <div class="css-t5mcc9-Box">
        <h1 class="css-1m6zrmc-Home">Tham gia cùng chúng tôi</h1>
      </div>
    </header>
    <main class="css-b5b9m6-Home">
      <form class="css-1l0r44n-Home">
        <div class="css-176sdm3-Home">
          <h2 class="css-a5vyrr-Home">Hình thức làm việc bạn muốn?</h2>
          <fieldset class="css-1icyc14-Home"><label class="css-vaab0e-Home">
              <div class="css-rhor0p-Box"><input v-model="typesOfWork" value="all" type="radio" name="office-filter"
                  class="css-1ers4sh-Box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="currentcolor" aria-hidden="true" class="css-1lm0t9q-Home">
                  <path
                    d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
                  </path>
                </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="currentcolor" aria-hidden="true" class="css-16bqau0-Home">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
                  </path>
                </svg></div><span class="css-1fhmwn4-Home">All</span>
            </label></fieldset>
          <fieldset class="css-1icyc14-Home"><label class="css-vaab0e-Home">
              <div class="css-rhor0p-Box"><input v-model="typesOfWork" value="Full-Time" type="radio" name="office-filter"
                  class="css-1ers4sh-Box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="currentcolor" aria-hidden="true" class="css-1lm0t9q-Home">
                  <path
                    d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
                  </path>
                </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="currentcolor" aria-hidden="true" class="css-16bqau0-Home">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
                  </path>
                </svg></div><span class="css-1fhmwn4-Home">Full-time</span>
            </label></fieldset>
          <fieldset class="css-1icyc14-Home"><label class="css-njad25-Home">
              <div class="css-rhor0p-Box"><input v-model="typesOfWork" value="Part-Time" type="radio" name="office-filter"
                  class="css-1ers4sh-Box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="currentcolor" aria-hidden="true" class="css-1lm0t9q-Home">
                  <path
                    d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
                  </path>
                </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="currentcolor" aria-hidden="true" class="css-16bqau0-Home">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
                  </path>
                </svg></div><span class="css-1fhmwn4-Home">Part-time</span>
            </label></fieldset>
          <fieldset class="css-1icyc14-Home"><label class="css-njad25-Home">
              <div class="css-rhor0p-Box"><input v-model="typesOfWork" value="Remote" type="radio" name="office-filter"
                  class="css-1ers4sh-Box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="currentcolor" aria-hidden="true" class="css-1lm0t9q-Home">
                  <path
                    d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
                  </path>
                </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="currentcolor" aria-hidden="true" class="css-16bqau0-Home">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
                  </path>
                </svg></div><span class="css-1fhmwn4-Home">Remote</span>
            </label></fieldset>
        </div>
      </form>
      <section>
        <div v-for="work in works" class="css-n1dexp-Home">
          <h2 class="css-1a86ujz-Home">{{ work.categoryName }}</h2>
          <div class="css-1f4dhw3-Home">
            <template v-for="job in work.jobs" :key="job.jobId">
              <NuxtLink v-if="typesOfWork == 'all' || job.acceptedType.includes(typesOfWork)" :to="`/jobs/${job.jobSlug}`"
                class="css-1p4f162-Home">
                <div class="css-1wbiuxt-Home">
                  <h3 class="css-1pxdwxe-Home">{{ job.jobTitle }} <br /> ({{ job.acceptedType.join(", ")
                  }})</h3>
                  <div class="css-1pci3bb-Home"><span class="css-1ue2ucy-Home"><svg viewBox="0 0 18 18" aria-hidden="true"
                        class="css-oe1j9s-Home" height="12" role="img" width="12">
                        <path fill="currentColor"
                          d="M9 18c-2.911 0-8-5.993-8-10a8 8 0 1116 0c0 4.007-5.089 10-8 10zm0-2c1.728 0 6-5.032 6-8A6 6 0 103 8c0 2.968 4.272 8 6 8zm0-5a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z"
                          fill-rule="evenodd"></path>
                      </svg><span class="css-qrl1qo-Box">{{ job.highlightType }}</span></span><span
                      class="css-1ly99l7-Home">Apply</span>
                  </div>
                </div>
              </NuxtLink>
            </template>
          </div>
        </div>
      </section>
      
    </main>
    <organisms-redirect-to-try-it-section></organisms-redirect-to-try-it-section>
    <!-- <section class="css-pyxk4w-CtaSection">
      <h2 class="css-2iapjn-CtaSection">Không tìm được công việc phù hợp?</h2>
      <div class="css-1jxpia2-CtaSection"><a href="https://boards.greenhouse.io/datacamp/jobs/1090498"
          class="css-vqqqnu-CtaSection"><span class="css-u8ltki-ButtonInternal">Tạo vị trí riêng</span></a><a
          href="https://cdn.datacamp.com/datacamp-recruitment-process.pdf" target="_blank"
          class="css-17heick-CtaSection"><span class="css-u8ltki-ButtonInternal">Quy trình tuyển dụng</span></a>
      </div>
    </section> -->
  </div>
</template>
<style scoped>
/*! CSS Used from: https://www.datacamp.com/_next/static/css/f002fb689e48bb62.css */
h1,
h2,
h3,
h4,
li,
p,
ul {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
}

fieldset {
  border: none;
  margin: 0;
  padding: 0;
}

main {
  min-height: 90vh;
}

img {
  display: block;
  max-width: 100%;
}

button {
  background: transparent;
  box-shadow: none;
  border: 0;
}

button,
button>span {
  font-family: inherit;
}

@media (prefers-reduced-motion:reduce) {
  * {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}

/*! CSS Used from: Embedded */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

/*! CSS Used from: Embedded */
.css-jeybs {
  position: fixed;
  right: 8px;
  top: 8px;
  z-index: 9999;
}

/*! CSS Used from: Embedded */
.css-1fnmr80-BotMegaMenuHydrationEnabled {
  display: none;
}

/*! CSS Used from: Embedded */
.css-1k8esy4-SkipToMainContentLink {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: #05192d;
  font-weight: 700;
  line-height: 1.5;
  -webkit-text-decoration: none;
  text-decoration: none;
  height: 1px;
  left: -999px;
  overflow: hidden;
  position: absolute;
  top: auto;
  width: 1px;
}

.css-1k8esy4-SkipToMainContentLink:active,
.css-1k8esy4-SkipToMainContentLink:focus,
.css-1k8esy4-SkipToMainContentLink:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}

.css-1k8esy4-SkipToMainContentLink:focus {
  background-color: #ffffff;
  border-color: #fcce0d;
  border-style: solid;
  border-width: 4px;
  color: #05192D;
  height: auto;
  left: 20px;
  outline: none;
  overflow: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  -webkit-text-decoration: none;
  text-decoration: none;
  top: 20px;
  width: auto;
  z-index: 9999;
}

/*! CSS Used from: Embedded */
.css-1x4vkwz-MegaMenu {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  background-color: #05192d;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 800;
}

/*! CSS Used from: Embedded */
.css-1v9ce6z-MegaMenu {
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
  padding-bottom: 12px;
  position: relative;
  padding-top: 14px;
}

/*! CSS Used from: Embedded */
.css-17ampua-MegaMenu {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

/*! CSS Used from: Embedded */
.css-ay23op-MegaMenu {
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
}

/*! CSS Used from: Embedded */
.css-1xive5u-MegaMenu {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: #05192d;
  font-weight: 700;
  line-height: 1.5;
  -webkit-text-decoration: none;
  text-decoration: none;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.css-1xive5u-MegaMenu:active,
.css-1xive5u-MegaMenu:focus,
.css-1xive5u-MegaMenu:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}

.css-1xive5u-MegaMenu:active,
.css-1xive5u-MegaMenu:focus,
.css-1xive5u-MegaMenu:hover {
  border-bottom: 0;
}

/*! CSS Used from: Embedded */
.css-n4i0zt-MegaMenu {
  -webkit-transform: translateY(-3px);
  -moz-transform: translateY(-3px);
  -ms-transform: translateY(-3px);
  transform: translateY(-3px);
}

/*! CSS Used from: Embedded */
.css-ox6aos-MegaMenu {
  margin-left: 8px;
}

/*! CSS Used from: Embedded */
.css-u1w6zh-MegaMenu {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: #05192d;
  font-weight: 700;
  line-height: 1.5;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: none;
  margin-left: 8px;
  margin-right: 0;
}

.css-u1w6zh-MegaMenu:active,
.css-u1w6zh-MegaMenu:focus,
.css-u1w6zh-MegaMenu:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}

@media screen and (min-width: 1200px) {
  .css-u1w6zh-MegaMenu {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-right: 42px;
  }
}

/*! CSS Used from: Embedded */
.css-uaatxz-HiringLink {
  background-color: #213147;
  border-radius: 4px;
  color: #03ef62;
  display: inline-block;
  font-size: 14px;
  padding-left: 4px;
  padding-right: 4px;
  text-transform: uppercase;
  -webkit-transition: color 0.3s cubic-bezier(0.85, 0, 0.15, 1);
  transition: color 0.3s cubic-bezier(0.85, 0, 0.15, 1);
}

.css-uaatxz-HiringLink:hover {
  color: #65ff8f;
}

/*! CSS Used from: Embedded */
.css-160yyp8-MegaMenu {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

/*! CSS Used from: Embedded */
.css-durw4u-MegaMenu {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

@media screen and (min-width: 600px) {
  .css-durw4u-MegaMenu {
    display: none;
  }
}

/*! CSS Used from: Embedded */
.css-iggpgb-LanguageSelector {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: inherit;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 2px;
  padding-bottom: 2px;
  color: #ffffff;
  background-color: #33e;
  border: 0;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  height: 36px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #ffffff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 32px;
  margin-left: 8px;
  padding: 0 8px;
}

.css-iggpgb-LanguageSelector:active,
.css-iggpgb-LanguageSelector:focus,
.css-iggpgb-LanguageSelector:hover {
  background-color: #213147;
  border-radius: 4px;
}

.css-iggpgb-LanguageSelector:focus {
  outline: 0;
}

@media screen and (min-width: 768px) {
  .css-iggpgb-LanguageSelector {
    height: 36px;
  }
}

/*! CSS Used from: Embedded */
.css-ripltb-LanguageSelector {
  color: #ffffff;
  margin-right: 6px;
}

/*! CSS Used from: Embedded */
.css-5zo32s-MegaMenu {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: inherit;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 2px;
  padding-bottom: 2px;
  color: #ffffff;
  background-color: #33e;
  border: 0;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  height: 36px;
  margin-left: 8px;
}

.css-5zo32s-MegaMenu:active,
.css-5zo32s-MegaMenu:focus,
.css-5zo32s-MegaMenu:hover {
  background-color: #213147;
  border-radius: 4px;
}

.css-5zo32s-MegaMenu:focus {
  outline: 0;
}

/*! CSS Used from: Embedded */
.css-t4dzju-MegaMenu {
  height: 27px;
  opacity: 0.5;
  width: 27px;
}

/*! CSS Used from: Embedded */
.css-1lfcarp-MegaMenu {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  display: none;
}

@media screen and (min-width: 600px) {
  .css-1lfcarp-MegaMenu {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}

/*! CSS Used from: Embedded */
.css-bgz6fn-MegaMenu {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: inherit;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 2px;
  padding-bottom: 2px;
  color: #ffffff;
  background-color: #33e;
  border: 0;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  height: 36px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 36px;
}

.css-bgz6fn-MegaMenu:active,
.css-bgz6fn-MegaMenu:focus,
.css-bgz6fn-MegaMenu:hover {
  background-color: #213147;
  border-radius: 4px;
}

.css-bgz6fn-MegaMenu:focus {
  outline: 0;
}

/*! CSS Used from: Embedded */
.css-1kleywy-MegaMenu {
  color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/*! CSS Used from: Embedded */
.css-xjckqs-Header {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  background-color: #05192d;
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
.css-1m6zrmc-Home {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.05;
  margin: 0;
  color: #ffffff;
  padding-bottom: 96px;
  padding-top: 48px;
  text-align: center;
}

@media screen and (min-width: 992px) {
  .css-1m6zrmc-Home {
    font-size: 3.125rem;
  }
}

@media screen and (min-width: 992px) {
  .css-1m6zrmc-Home {
    padding-bottom: 128px;
    padding-top: 80px;
  }
}

/*! CSS Used from: Embedded */
.css-b5b9m6-Home {
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
  padding-bottom: 32px;
}

/*! CSS Used from: Embedded */
.css-1l0r44n-Home {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  background-color: #ffffff;
  border: 1px solid #e5e1da;
  border-radius: 4px;
  box-shadow: default;
  margin-bottom: 48px;
  margin-top: -48px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 36px;
  padding-bottom: 36px;
  width: 100%;
}

/*! CSS Used from: Embedded */
.css-176sdm3-Home {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

/*! CSS Used from: Embedded */
.css-a5vyrr-Home {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 16px;
  margin-right: 10px;
  width: 100%;
}

@media screen and (min-width: 992px) {
  .css-a5vyrr-Home {
    margin-bottom: 0;
    width: auto;
  }
}

/*! CSS Used from: Embedded */
.css-1icyc14-Home {
  margin-left: 6px;
}

/*! CSS Used from: Embedded */
.css-vaab0e-Home {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 12px;
  margin-bottom: 0;
  margin-right: 16px;
  white-space: normal;
  width: auto;
}

.css-vaab0e-Home>div {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

/*! CSS Used from: Embedded */
.css-rhor0p-Box {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  min-width: -webkit-min-content;
  min-width: -moz-min-content;
  min-width: min-content;
}

/*! CSS Used from: Embedded */
.css-1ers4sh-Box {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  position: absolute;
  opacity: 0;
  z-index: -1;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

/*! CSS Used from: Embedded */
.css-1lm0t9q-Home {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: none;
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  margin-right: 2px;
  border-radius: 9999px;
  color: gray;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  color: #05192D;
  height: 14px;
  width: 14px;
}

input:checked~.css-1lm0t9q-Home {
  display: block;
}

input:checked~.css-1lm0t9q-Home {
  color: #33e;
}

input:focus~.css-1lm0t9q-Home {
  background-color: highlight;
}

input:checked~.css-1lm0t9q-Home {
  color: #009bd8;
}

/*! CSS Used from: Embedded */
.css-16bqau0-Home {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: block;
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  margin-right: 2px;
  border-radius: 9999px;
  color: gray;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  color: #05192D;
  height: 14px;
  width: 14px;
}

input:checked~.css-16bqau0-Home {
  display: none;
}

input:checked~.css-16bqau0-Home {
  color: #33e;
}

input:focus~.css-16bqau0-Home {
  background-color: highlight;
}

input:checked~.css-16bqau0-Home {
  color: #009bd8;
}

/*! CSS Used from: Embedded */
.css-1fhmwn4-Home {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 0;
  font-weight: normal;
}

/*! CSS Used from: Embedded */
.css-njad25-Home {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #05192D;
  margin-bottom: 0;
  margin-right: 16px;
  white-space: normal;
  width: auto;
}

.css-njad25-Home>div {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

/*! CSS Used from: Embedded */
.css-n1dexp-Home {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  padding-bottom: 32px;
}

/*! CSS Used from: Embedded */
.css-1a86ujz-Home {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin-top: 0;
  border-bottom: 1px solid #e5e1da;
  margin-bottom: 4px;
  padding-bottom: 16px;
}

/*! CSS Used from: Embedded */
.css-1f4dhw3-Home {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-left: -16px;
  margin-right: -16px;
}

/*! CSS Used from: Embedded */
.css-1p4f162-Home {
  color: #05192D;
  margin: 16px;
  -webkit-text-decoration: none;
  text-decoration: none;
  width: 358px;
}

/*! CSS Used from: Embedded */
.css-1wbiuxt-Home {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  background-color: #ffffff;
  border: 1px solid #e5e1da;
  border-radius: 4px;
  box-shadow: default;
  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  box-shadow: default;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  min-height: 140px;
  padding: 20px;
  padding-bottom: 10px;
}

.css-1wbiuxt-Home:hover {
  -webkit-transform: translate(0, -4px);
  -moz-transform: translate(0, -4px);
  -ms-transform: translate(0, -4px);
  transform: translate(0, -4px);
}

/*! CSS Used from: Embedded */
.css-1pxdwxe-Home {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin-top: 0;
  display: block;
  margin-bottom: 16px;
}

/*! CSS Used from: Embedded */
.css-1pci3bb-Home {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

/*! CSS Used from: Embedded */
.css-1ue2ucy-Home {
  -webkit-align-items: flex-start;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

/*! CSS Used from: Embedded */
.css-oe1j9s-Home {
  margin-right: 6px;
  margin-top: 5px;
}

/*! CSS Used from: Embedded */
.css-qrl1qo-Box {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: #05192D;
  font-size: 16px;
  line-height: 1.5;
}

/*! CSS Used from: Embedded */
.css-1ly99l7-Home {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 0;
  color: #009bd8;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-weight: 700;
  margin-left: 16px;
}

/*! CSS Used from: Embedded */
.css-pyxk4w-CtaSection {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  background-color: #fcce0d;
  margin-bottom: 0;
  padding-top: 84px;
  padding-bottom: 84px;
  text-align: center;
}

@media screen and (min-width: 992px) {
  .css-pyxk4w-CtaSection {
    padding-top: 104px;
    padding-bottom: 104px;
  }
}

/*! CSS Used from: Embedded */
.css-2iapjn-CtaSection {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 16px;
}

@media screen and (min-width: 992px) {
  .css-2iapjn-CtaSection {
    font-size: 2.5rem;
  }
}

/*! CSS Used from: Embedded */
.css-1jxpia2-CtaSection {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  margin-left: 16px;
  margin-right: 16px;
}

@media screen and (min-width: 600px) {
  .css-1jxpia2-CtaSection {
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-left: 0;
    margin-right: 0;
  }
}

/*! CSS Used from: Embedded */
.css-vqqqnu-CtaSection {
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
  font-family: Studio-Feixen-Sans, Arial, sans-serif;
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
  color: #FFFFFF;
  background-color: transparent;
  border-color: rgba(255, 255, 255, 0.6);
  background-color: #05192d;
  border: none;
  margin-top: 8px;
}

.css-vqqqnu-CtaSection::after {
  content: '';
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

.css-vqqqnu-CtaSection:hover {
  background-color: rgba(255, 255, 255, 0.06);
}

.css-vqqqnu-CtaSection:active {
  background-color: transparent;
}

.css-vqqqnu-CtaSection:disabled {
  opacity: 0.6;
  cursor: default;
  pointer-events: none;
}

.css-vqqqnu-CtaSection:hover:not(:disabled) {
  background-color: #213147;
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
.css-17heick-CtaSection {
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
  font-family: Studio-Feixen-Sans, Arial, sans-serif;
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
  color: #05192D;
  background-color: transparent;
  border-color: rgba(5, 25, 45, 0.6);
  margin-left: 0;
  margin-top: 16px;
}

.css-17heick-CtaSection::after {
  content: '';
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

.css-17heick-CtaSection:hover {
  background-color: rgba(48, 57, 105, 0.06);
}

.css-17heick-CtaSection:active {
  background-color: transparent;
}

.css-17heick-CtaSection:disabled {
  opacity: 0.6;
  cursor: default;
  pointer-events: none;
}

@media screen and (min-width: 600px) {
  .css-17heick-CtaSection {
    margin-left: 16px;
    margin-top: 8px;
  }
}

/*! CSS Used from: Embedded */
.css-1x23egn-Footer {
  background-color: #000820;
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
.css-1ad34j9-Footer {
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
  padding-bottom: 16px;
  padding-top: 64px;
}

@media screen and (min-width: 1200px) {
  .css-1ad34j9-Footer {
    padding-bottom: 48px;
  }
}

/*! CSS Used from: Embedded */
.css-1hbyei0-Footer {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  margin-bottom: 40px;
}

@media screen and (min-width: 1200px) {
  .css-1hbyei0-Footer {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 0;
  }
}

/*! CSS Used from: Embedded */
.css-1ub7xs7-Footer {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

@media screen and (min-width: 600px) {
  .css-1ub7xs7-Footer {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-left: 48px;
  }
}

@media screen and (min-width: 1200px) {
  .css-1ub7xs7-Footer {
    -webkit-box-flex-wrap: nowrap;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    gap: 28px;
    margin-left: 0;
  }
}

/*! CSS Used from: Embedded */
.css-v7pd86-LinkList {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
}

@media screen and (min-width: 600px) {
  .css-v7pd86-LinkList {
    width: 50%;
  }
}

@media screen and (min-width: 768px) {
  .css-v7pd86-LinkList {
    width: 33.3333%;
  }
}

@media screen and (min-width: 1200px) {
  .css-v7pd86-LinkList {
    width: 160px;
  }
}

/*! CSS Used from: Embedded */
.css-rmizgr-LinkList {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.2;
  margin-top: 0;
  text-transform: uppercase;
  color: #ffffff;
  display: block;
  padding-bottom: 16px;
  padding-top: 36px;
  white-space: nowrap;
}

/*! CSS Used from: Embedded */
.css-1qicpez-LinkList {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  border: 0;
  color: #ffffff;
  font-weight: 400;
  opacity: 0.75;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: block;
  padding-top: 9px;
  padding-bottom: 9px;
}

.css-1qicpez-LinkList:active,
.css-1qicpez-LinkList:focus,
.css-1qicpez-LinkList:hover {
  border: 0;
  color: #ffffff;
  opacity: 1;
}

/*! CSS Used from: Embedded */
.css-fws3xr-Footer {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
}

@media screen and (min-width: 600px) {
  .css-fws3xr-Footer {
    width: 50%;
  }
}

@media screen and (min-width: 768px) {
  .css-fws3xr-Footer {
    width: 33.3333%;
  }
}

@media screen and (min-width: 1200px) {
  .css-fws3xr-Footer {
    width: 160px;
  }
}

/*! CSS Used from: Embedded */
.css-1qt6pw5-Footer {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

@media screen and (min-width: 600px) {
  .css-1qt6pw5-Footer {
    margin-left: 48px;
  }
}

@media screen and (min-width: 1200px) {
  .css-1qt6pw5-Footer {
    margin-left: 0;
    margin-top: 36px;
  }
}

/*! CSS Used from: Embedded */
.css-znb028-Footer {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  grid-column-gap: 0;
  grid-row-gap: 0;
  grid-template-columns: 75% 25%;
  grid-template-rows: auto auto;
}

@media screen and (min-width: 1200px) {
  .css-znb028-Footer {
    display: grid;
    padding-top: 64px;
  }
}

/*! CSS Used from: Embedded */
.css-fkog9e {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  margin-left: -16px;
  martin-top: 48px;
}

.css-fkog9e a {
  border-bottom: 0;
}

@media screen and (min-width: 1200px) {
  .css-fkog9e {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    margin-top: 0;
  }
}

.css-fkog9e a {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 0;
  color: #ffffff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 44px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  width: 44px;
}

.css-fkog9e a:active svg,
.css-fkog9e a:focus svg,
.css-fkog9e a:hover svg {
  fill: #03ef62;
}

/*! CSS Used from: Embedded */
.css-10u6x3f-Box {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: #05192d;
  font-weight: 700;
  line-height: 1.5;
  -webkit-text-decoration: none;
  text-decoration: none;
}

.css-10u6x3f-Box:active,
.css-10u6x3f-Box:focus,
.css-10u6x3f-Box:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}

/*! CSS Used from: Embedded */
.css-181z9ja-VisuallyHidden {
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

/*! CSS Used from: Embedded */
.css-cdgue-Legal {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  grid-area: 1/1/2/2;
  margin-left: -12px;
  margin-top: 20px;
}

@media screen and (min-width: 480px) {
  .css-cdgue-Legal {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
}

@media screen and (min-width: 1200px) {
  .css-cdgue-Legal {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
  }
}

/*! CSS Used from: Embedded */
.css-4zwat0-Legal {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  border: 0;
  color: #ffffff;
  font-weight: 400;
  opacity: 0.75;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 0.875rem;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 9px;
  padding-bottom: 9px;
}

.css-4zwat0-Legal:active,
.css-4zwat0-Legal:focus,
.css-4zwat0-Legal:hover {
  border: 0;
  color: #ffffff;
  opacity: 1;
}

/*! CSS Used from: Embedded */
.css-1o6mg2n-Copyright {
  color: #ffffff;
  font-size: 0.75rem;
  grid-area: 2/1/3/2;
  margin-top: 16px;
  opacity: 0.5;
}

@media screen and (min-width: 480px) {
  .css-1o6mg2n-Copyright {
    text-align: center;
  }
}

@media screen and (min-width: 1200px) {
  .css-1o6mg2n-Copyright {
    margin-top: 0;
    padding-top: 25px;
    text-align: left;
  }
}

/*! CSS Used from: Embedded */
.css-12yghq1 {
  display: flex;
  gap: 8px;
  -webkit-box-align: center;
  align-items: center;
}

.css-evebs5 {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  color: rgb(5, 25, 45);
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none;
}

.css-evebs5:active,
.css-evebs5:focus,
.css-evebs5:hover {
  text-decoration: underline;
}

.css-kek3bb {
  clip: rect(0px, 0px, 0px, 0px);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.css-1gz6iy4 {
  position: relative;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-shrink: 0;
  vertical-align: middle;
  text-decoration: none;
  font-family: Studio-Feixen-Sans, Arial, sans-serif;
  font-weight: 800;
  line-height: 1;
  margin: 0px 8px;
  padding: 0px 16px;
  outline: 0px;
  border-style: solid;
  border-radius: 4px;
  border-width: 2px;
  user-select: none;
  transition: background-color 125ms ease-out 0s;
  cursor: pointer;
  min-width: 36px;
  width: auto;
  flex-direction: column;
  font-size: 14px;
  color: rgb(255, 255, 255);
  background-color: transparent;
  border-color: rgba(255, 255, 255, 0.6);
  height: 36px;
}

.css-1gz6iy4::after {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  inset: 0px;
  margin: -4px;
  border-radius: 6px;
  pointer-events: none;
  transition: box-shadow 125ms ease-out 0s;
}

.css-1gz6iy4:hover {
  background-color: rgba(255, 255, 255, 0.06);
}

.css-1gz6iy4:active {
  background-color: transparent;
}

.css-1gz6iy4:disabled {
  opacity: 0.6;
  cursor: default;
  pointer-events: none;
}

.css-1gz6iy4:active,
.css-1gz6iy4:focus,
.css-1gz6iy4:hover {
  border-color: rgb(3, 239, 98);
}

.css-1gz6iy4>span {
  color: rgb(255, 255, 255);
  line-height: 36px;
}

.css-ijsv0u {
  position: relative;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-shrink: 0;
  vertical-align: middle;
  text-decoration: none;
  font-family: Studio-Feixen-Sans, Arial, sans-serif;
  font-weight: 800;
  line-height: 1;
  margin: 0px;
  padding: 0px 16px;
  outline: 0px;
  border-style: solid;
  border-radius: 4px;
  border-width: 2px;
  user-select: none;
  transition: background-color 125ms ease-out 0s;
  cursor: pointer;
  min-width: 36px;
  width: auto;
  flex-direction: column;
  font-size: 14px;
  color: rgb(255, 255, 255);
  border-color: rgba(255, 255, 255, 0.6);
  height: 36px;
  background-color: white !important;
}

.css-ijsv0u::after {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  inset: 0px;
  margin: -4px;
  border-radius: 6px;
  pointer-events: none;
  transition: box-shadow 125ms ease-out 0s;
}

.css-ijsv0u:hover {
  background-color: rgba(255, 255, 255, 0.06);
}

.css-ijsv0u:active {
  background-color: transparent;
}

.css-ijsv0u:disabled {
  opacity: 0.6;
  cursor: default;
  pointer-events: none;
}

.css-ijsv0u:active,
.css-ijsv0u:focus,
.css-ijsv0u:hover {
  border-color: rgb(3, 239, 98);
  background-color: rgb(3, 239, 98) !important;
}

.css-ijsv0u>span {
  color: rgb(5, 25, 45);
  line-height: 36px;
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

.css-swfldn {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  -webkit-box-flex: 2;
  flex-grow: 2;
}

.css-lgbo0i {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
}

.css-1wr5rq {
  box-sizing: border-box;
  margin: 0px 8px;
  min-width: 0px;
  appearance: none;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  font-size: inherit;
  color: rgb(255, 255, 255);
  border: 0px;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  height: 36px;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  padding: 12px 16px;
}

.css-1wr5rq:active,
.css-1wr5rq:focus,
.css-1wr5rq:hover {
  background-color: rgb(33, 49, 71);
  border-radius: 4px;
}

.css-1wr5rq:focus {
  outline: 0px;
}

.css-1wr5rq>span {
  pointer-events: none;
}

@media screen and (min-width: 768px) {
  .css-1wr5rq {
    margin-left: 18px;
  }
}

@media screen and (min-width: 1200px) {
  .css-1wr5rq {
    margin-left: 0px;
  }
}

.css-nsihx3 {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-size: 1rem;
  line-height: 1.5;
  color: rgb(255, 255, 255);
}

.css-12vx6k8 {
  margin-left: 4px;
  margin-top: 1px;
}

.css-sgjqul {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: none;
  left: 12px;
  pointer-events: auto;
  position: absolute;
  padding-top: 18px;
  top: 50px;
  transition: visibility 0.15s ease 0s, opacity 0.3s ease 0s, top 0.25s ease 0s;
  width: calc(100% - 32px);
  z-index: 800;
}

@media screen and (min-width: 1200px) {
  .css-sgjqul {
    left: 16px;
  }
}

.css-8g6o94 {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: rgba(5, 25, 45, 0.3) 0px 0px 1px, rgba(5, 25, 45, 0.3) 0px 8px 12px -4px;
  color: rgb(5, 25, 45);
  flex-direction: row;
  overflow: hidden scroll;
}

.css-19o24jy {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 0px 16px 10px;
  width: 327px;
}

.css-19o24jy b {
  padding-top: 8px;
}

@media screen and (min-width: 480px) {
  .css-19o24jy {
    width: 432px;
  }
}

@media screen and (min-width: 768px) {
  .css-19o24jy {
    background-color: rgb(239, 239, 245);
    padding-left: 8px;
    padding-right: 0px;
    padding-top: 10px;
    width: 26%;
  }
}

@media screen and (min-width: 1200px) {
  .css-19o24jy {
    width: 21%;
  }
}

.css-motbsw {
  box-sizing: border-box;
  margin: 0px 0px 3px;
  min-width: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: auto;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.css-p54nsm {
  height: 18px;
  margin-bottom: -3px;
  margin-left: 0px;
  width: 18px;
}

@media screen and (min-width: 768px) {
  .css-p54nsm {
    margin-left: 16px;
  }
}

.css-1ul7cv2 {
  box-sizing: border-box;
  margin: 8px 0px 0px;
  min-width: 0px;
  color: rgb(5, 25, 45);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 20px;
  padding-left: 6px;
  padding-top: 8px;
  padding-bottom: 8px;
}

@media screen and (min-width: 768px) {
  .css-1ul7cv2 {
    margin-top: 0px;
  }
}

.css-nqi670 {
  border-bottom: 1px solid rgb(204, 207, 210);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.css-1oan9zb {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  text-decoration: none;
  -webkit-box-align: center;
  align-items: center;
  background: transparent;
  border-color: transparent;
  border-left-width: 4px;
  border-left-style: solid;
  display: flex;
  padding: 12px 0px 12px 12px;
  text-align: left;
  color: rgb(5, 25, 45);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 22px;
}

.css-1oan9zb:active,
.css-1oan9zb:focus,
.css-1oan9zb:hover {
  text-decoration: underline;
}

.css-1oan9zb:active,
.css-1oan9zb:focus,
.css-1oan9zb:hover {
  outline: none;
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  .css-1oan9zb {
    padding-top: 11px;
    padding-bottom: 11px;
  }
}

@media screen and (min-width: 1200px) {
  .css-1oan9zb {
    padding-top: 8px;
    padding-bottom: 8px;
  }
}

.css-1frl2a7 {
  color: rgb(101, 112, 124);
  opacity: 0;
  transition: visibility 0.3s ease 0s;
  vertical-align: middle;
  width: 11px;
}

.css-1xexd56 {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  appearance: none;
  text-decoration: none;
  border-width: 0px 0px 0px 4px;
  border-top-style: initial;
  border-right-style: initial;
  border-bottom-style: initial;
  border-image: initial;
  border-radius: 4px;
  -webkit-box-align: center;
  align-items: center;
  background: transparent;
  border-color: transparent;
  border-left-style: solid;
  display: flex;
  padding: 12px 0px 12px 12px;
  text-align: left;
  color: rgb(5, 25, 45);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 22px;
}

.css-1xexd56:active,
.css-1xexd56:focus,
.css-1xexd56:hover {
  outline: none;
  text-decoration: none;
}

.css-1xexd56:last-child {
  margin-bottom: 12px;
}

@media screen and (min-width: 768px) {
  .css-1xexd56 {
    padding-top: 11px;
    padding-bottom: 11px;
  }
}

@media screen and (min-width: 1200px) {
  .css-1xexd56 {
    padding-top: 8px;
    padding-bottom: 8px;
  }
}

.css-d5s66b {
  box-sizing: border-box;
  margin: 12px 0px 0px;
  min-width: 0px;
  color: rgb(5, 25, 45);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 20px;
  padding-left: 0px;
  padding-top: 8px;
  padding-bottom: 8px;
}

@media screen and (min-width: 768px) {
  .css-d5s66b {
    padding-left: 16px;
    margin-top: 4px;
  }
}

.css-1mfcvtw {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  -webkit-box-align: center;
  align-items: center;
  display: inline-flex;
}

.css-17ys945 {
  margin-right: 10px !important;
}

.css-153qvhs {
  border-bottom: 1px solid rgb(204, 207, 210);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-top: 0px;
}

@media screen and (min-width: 768px) {
  .css-153qvhs {
    margin-top: 8px;
  }
}

.css-1390eeh {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  text-decoration: none;
  -webkit-box-align: center;
  align-items: center;
  background: transparent;
  border-color: transparent;
  border-left-width: 4px;
  border-left-style: solid;
  display: flex;
  padding: 8px 0px 8px 12px;
  text-align: left;
  color: rgb(5, 25, 45);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 20px;
}

.css-1390eeh:active,
.css-1390eeh:focus,
.css-1390eeh:hover {
  text-decoration: underline;
}

.css-1390eeh:active,
.css-1390eeh:focus,
.css-1390eeh:hover {
  outline: none;
  text-decoration: none;
}

.css-101ddq2 {
  height: 18px;
  margin-right: 6px;
  width: 18px;
}

.css-83bpc1 {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  appearance: none;
  text-decoration: none;
  border-width: 0px 0px 0px 4px;
  border-top-style: initial;
  border-right-style: initial;
  border-bottom-style: initial;
  border-image: initial;
  border-radius: 4px;
  -webkit-box-align: center;
  align-items: center;
  background: transparent;
  border-color: transparent;
  border-left-style: solid;
  display: flex;
  padding: 8px 0px 8px 12px;
  text-align: left;
  color: rgb(5, 25, 45);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 20px;
}

.css-83bpc1:active,
.css-83bpc1:focus,
.css-83bpc1:hover {
  outline: none;
  text-decoration: none;
}

.css-83bpc1:last-child {
  margin-bottom: 12px;
}

.css-3lxwnt {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  text-decoration: none;
  -webkit-box-align: center;
  align-items: center;
  background: transparent;
  border-color: transparent;
  border-left-width: 4px;
  border-left-style: solid;
  display: flex;
  padding: 8px 0px 8px 12px;
  text-align: left;
  color: rgb(5, 25, 45);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 20px;
}

.css-3lxwnt:active,
.css-3lxwnt:focus,
.css-3lxwnt:hover {
  text-decoration: underline;
}

.css-3lxwnt:active,
.css-3lxwnt:focus,
.css-3lxwnt:hover {
  outline: none;
  text-decoration: none;
}

@media screen and (min-width: 1200px) {
  .css-3lxwnt {
    margin-top: 8px;
  }
}

.css-1g7rliv {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  appearance: none;
  text-decoration: none;
  border-width: 0px 0px 0px 4px;
  border-top-style: initial;
  border-right-style: initial;
  border-bottom-style: initial;
  border-image: initial;
  border-radius: 4px;
  -webkit-box-align: center;
  align-items: center;
  background: transparent;
  border-color: transparent;
  border-left-style: solid;
  display: flex;
  padding: 8px 0px 8px 12px;
  text-align: left;
  color: rgb(5, 25, 45);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 20px;
}

.css-1g7rliv:active,
.css-1g7rliv:focus,
.css-1g7rliv:hover {
  outline: none;
  text-decoration: none;
}

.css-1g7rliv:last-child {
  margin-bottom: 12px;
}

@media screen and (min-width: 1200px) {
  .css-1g7rliv {
    margin-top: 8px;
  }
}

.css-qklso4 {
  width: 327px;
}

@media screen and (min-width: 480px) {
  .css-qklso4 {
    width: 432px;
  }
}

@media screen and (min-width: 768px) {
  .css-qklso4 {
    width: 37%;
  }
}

@media screen and (min-width: 1200px) {
  .css-qklso4 {
    width: 29%;
  }
}

.css-1h1mdj8 {
  position: relative;
  width: 327px;
}

@media screen and (min-width: 480px) {
  .css-1h1mdj8 {
    width: 432px;
  }
}

@media screen and (min-width: 768px) {
  .css-1h1mdj8 {
    width: 37%;
  }
}

@media screen and (min-width: 1200px) {
  .css-1h1mdj8 {
    width: 29%;
  }
}

.css-3fxgyc {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: none;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 16px;
  width: 21%;
}

@media screen and (min-width: 768px) {
  .css-3fxgyc {
    display: flex;
  }
}

.css-6qmdkp {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  padding-left: 2px;
  padding-right: 2px;
}

.css-1n7u9rx {
  box-sizing: border-box;
  margin: 0px 0px 10px;
  min-width: 0px;
  color: rgb(98, 109, 121);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.css-1dxiz7d {
  list-style-type: none;
  margin: 0px 0px 25px;
  padding: 0px;
}

.css-1r2fo6r {
  margin-bottom: 6px;
}

.css-1lcrj79 {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  line-height: 1.5;
  text-decoration: none;
  color: rgb(5, 25, 45);
  font-size: 14px;
  font-weight: 400;
}

.css-1lcrj79:active,
.css-1lcrj79:focus,
.css-1lcrj79:hover {
  text-decoration: underline;
}

.css-4h8bcm {
  box-sizing: border-box;
  margin: 10px 0px 0px;
  min-width: 0px;
  color: rgb(5, 25, 45);
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none;
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  width: 100%;
}

.css-4h8bcm:active,
.css-4h8bcm:focus,
.css-4h8bcm:hover {
  text-decoration: underline;
}

.css-29p02j {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  position: absolute;
}

.css-29p02j {
  max-width: 100% !important;
  min-width: 100% !important;
}

.css-e5sjnw {
  box-sizing: border-box;
  margin: 0px 4px;
  min-width: 0px;
  border: 0px;
  color: rgb(255, 255, 255);
  font-weight: 400;
  line-height: 36px;
  padding-left: 4px;
  padding-right: 4px;
  text-decoration: none;
  display: none;
}

.css-e5sjnw:active,
.css-e5sjnw:focus,
.css-e5sjnw:hover {
  background-color: rgb(33, 49, 71);
  border: 0px;
  border-radius: 4px;
  color: rgb(255, 255, 255);
}

@media screen and (min-width: 1200px) {
  .css-e5sjnw {
    padding-left: 12px;
    padding-right: 12px;
  }
}

@media screen and (min-width: 768px) {
  .css-e5sjnw {
    display: flex;
  }
}

.css-1vbvvtz {
  box-sizing: border-box;
  margin: 0px 4px;
  min-width: 0px;
  border: 0px;
  color: rgb(255, 255, 255);
  font-weight: 400;
  line-height: 36px;
  padding-left: 4px;
  padding-right: 4px;
  text-decoration: none;
  display: none;
}

.css-1vbvvtz:active,
.css-1vbvvtz:focus,
.css-1vbvvtz:hover {
  background-color: rgb(33, 49, 71);
  border: 0px;
  border-radius: 4px;
  color: rgb(255, 255, 255);
}

@media screen and (min-width: 1200px) {
  .css-1vbvvtz {
    padding-left: 12px;
    padding-right: 12px;
  }
}

@media screen and (min-width: 992px) {
  .css-1vbvvtz {
    display: flex;
  }
}

.css-16r9ejh {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  -webkit-box-align: center;
  align-items: center;
  background: rgb(255, 255, 255);
  border-color: transparent transparent transparent rgb(3, 239, 98);
  border-left-width: 4px;
  border-left-style: solid;
  display: flex;
  padding: 12px 0px 12px 12px;
  text-align: left;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  cursor: pointer;
  -webkit-box-pack: justify;
  justify-content: space-between;
  text-decoration: none;
  color: rgb(5, 25, 45);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 22px;
}

.css-16r9ejh:active,
.css-16r9ejh:focus,
.css-16r9ejh:hover {
  text-decoration: underline;
}

.css-16r9ejh:active,
.css-16r9ejh:focus,
.css-16r9ejh:hover {
  outline: none;
  text-decoration: none;
}

.css-16r9ejh>svg:last-child {
  margin-right: 16px;
  opacity: 1;
}

@media screen and (min-width: 768px) {
  .css-16r9ejh {
    padding-top: 11px;
    padding-bottom: 11px;
  }
}

@media screen and (min-width: 1200px) {
  .css-16r9ejh {
    padding-top: 8px;
    padding-bottom: 8px;
  }
}

.css-19e41zp {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  padding: 20px 16px 16px;
}

@media screen and (min-width: 768px) {
  .css-19e41zp {
    padding-top: 16px;
  }
}

.css-h1dyzs {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  flex-flow: column;
  flex-shrink: 0;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
}

.css-lpb1f9 {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  appearance: none;
  display: inline-block;
  line-height: inherit;
  text-decoration: none;
  font-size: inherit;
  padding: 2px 6px 20px 0px;
  border-radius: 4px;
  -webkit-box-align: center;
  align-items: center;
  background: none;
  border: none;
  color: rgb(5, 25, 45);
  cursor: pointer;
  text-align: left;
  transition: all 0.1s ease-in-out 0s;
  width: 100%;
}

.css-lpb1f9:active,
.css-lpb1f9:focus {
  border-radius: 4px;
}

@media screen and (min-width: 768px) {

  .css-lpb1f9:active,
  .css-lpb1f9:focus {
    background: rgba(5, 25, 45, 0.1);
  }
}

.css-lpb1f9:active,
.css-lpb1f9:focus,
.css-lpb1f9:hover {
  box-shadow: none;
  outline: none;
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  .css-lpb1f9 {
    padding-bottom: 11px;
    padding-left: 8px;
    padding-top: 11px;
  }
}

@media screen and (min-width: 1200px) {
  .css-lpb1f9 {
    padding-bottom: 6px;
    padding-top: 6px;
  }
}

.css-1nyn9hn {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
}

.css-1263pte {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  align-items: flex-start;
}

.css-1io53po {
  box-sizing: border-box;
  margin: 9px 5px 0px 0px;
  min-width: 0px;
  display: flex;
}

.css-x59lyk {
  box-sizing: border-box;
  margin: 0px 3px 0px 0px;
  min-width: 0px;
  background-color: rgb(0, 197, 59);
  border-radius: 50%;
  height: 6px;
  width: 6px;
}

.css-ytjwi3 {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  color: rgb(5, 25, 45);
  line-height: 1.5;
  flex-shrink: 20;
  font-size: 0.875rem;
  font-weight: 400;
}

.css-101f3vf {
  fill: rgb(5, 25, 45);
  float: right;
  margin-right: 4px;
  width: 12px;
}

@media screen and (min-width: 768px) {
  .css-101f3vf {
    margin-right: 10px;
  }
}

.css-ev7h8v {
  box-sizing: border-box;
  margin: 15px 0px 0px;
  min-width: 0px;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 8px 6px;
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  .css-ev7h8v {
    padding-top: 24px;
  }
}

@media screen and (min-width: 1200px) {
  .css-ev7h8v {
    padding-top: 20px;
  }
}

.css-1htg4he {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  color: rgb(101, 112, 124);
  font-size: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

@media screen and (min-width: 1200px) {
  .css-1htg4he {
    font-size: 10px;
  }
}

.css-57cvlt {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  -webkit-box-align: center;
  align-items: center;
  border-bottom-width: 0px;
  border-color: rgb(247, 247, 252);
  color: rgb(5, 25, 45);
  display: flex;
  line-height: 14px;
  padding-right: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  text-align: right;
}

.css-57cvlt:active,
.css-57cvlt:focus,
.css-57cvlt:hover {
  border-bottom-width: 0px;
  text-decoration: underline;
}

@media screen and (min-width: 768px) {
  .css-57cvlt {
    font-size: 12px;
  }
}

.css-glwa2k {
  margin-left: 12px;
  width: 11px;
}

.css-e6epo3 {
  box-sizing: border-box;
  margin: 4px 0px 0px 8px;
  min-width: 0px;
  font-size: 0.75rem;
  background-color: rgb(252, 206, 13);
  border-radius: 4px;
  color: rgb(5, 25, 45);
  flex-shrink: 0;
  float: right;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 1;
  padding: 2px 4px;
  text-decoration: none;
  text-transform: uppercase;
}

/*! CSS Used from: Embedded */
body {
  margin: 0;
}

.dc-ps-banner-wrapper {
  font-family: Studio-Feixen-Sans, Arial;
  overflow: hidden;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  -webkit-font-smoothing: antialiased;
  z-index: 1080;
}

.dc-ps-banner {
  animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0.5s forwards slideIn;
  border: 0;
  background-color: #974dff;
  background-image: url(https://images.datacamp.com/image/upload/v1698785125/freeweek_banner_bg_gradient_b070f39ba5.svg);
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  max-height: 0;
  opacity: 0.25;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  text-decoration: none;
}

.dc-ps-banner:hover {
  text-decoration: none;
}

.dc-ps-banner-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 9px 0;
  position: relative;
  text-align: center;
}

.dc-ps-close {
  background: none;
  border: 0;
  cursor: pointer;
  position: absolute;
  right: 8px;
  top: calc(50% - 10px);
  transition: opacity 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 1090;
}

.dc-ps-close:hover {
  opacity: 0.8;
}

.dc-ps-banner-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1140px;
  padding-left: 16px;
  padding-right: 48px;
  width: 100%;
  min-height: 62px;
}

.dc-ps-banner-heading {
  display: none;
}

.img-left-container {
  align-items: center;
  display: flex;
  flex-shrink: 0;
  max-width: 100px;
  overflow: hidden;
}

.img-left {
  max-height: 60px;
  max-width: 100%;
}

.img-right-container {
  align-items: center;
  display: none;
  flex-shrink: 0;
  max-width: 100px;
  overflow: hidden;
}

.img-right {
  max-height: 60px;
  max-width: 100%;
}

@media screen and (min-width: 600px) {
  .dc-ps-banner-heading {
    display: block;
    font-size: 16px;
    margin: 0 8px;
  }

  .dc-ps-banner-heading>p {
    margin: 0;
  }
}

@media screen and (min-width: 768px) {
  .img-right-container {
    display: flex;
  }
}

@media screen and (min-width: 992px) {
  .dc-ps-banner-heading {
    display: block;
    font-size: 20px;
    margin: 0 8px;
  }

  .img-left-container {
    max-width: 220px;
  }

  .img-left {
    max-height: 70px;
  }

  .img-right-container {
    max-width: 220px;
  }

  .img-right {
    max-height: 70px;
  }

  .dc-ps-banner-flex {
    min-height: 80px;
  }
}

@media screen and (min-width: 1200px) {
  .dc-ps-banner-heading {
    font-size: 24px;
  }

  .dc-ps-banner-flex {
    padding-right: 20;
    min-height: 80px;
  }

  .img-left-container {
    max-width: 260px;
  }

  .img-left {
    max-height: 80px;
  }

  .img-right-container {
    max-width: 260px;
  }

  .img-right {
    max-height: 80px;
  }

  .img-right-container {
    padding: 0;
  }
}

/*! CSS Used fontfaces */
@font-face {
  font-family: Studio-Feixen-Sans;
  src: url(https://dcmfe.datacamp.com/assets/fonts/StudioFeixenSansRegular-latin-v2.woff2) format("woff2"), url(https://dcmfe.datacamp.com/assets/fonts/StudioFeixenSansRegular-latin-v2.woff) format("woff");
  font-display: swap;
  font-weight: 400;
  font-style: normal;
  unicode-range: U+00a1, U+00aa-00ab, U+00af, U+00b8, U+00bb, U+00bf-00d6, U+00d8-00f6, U+00f8-00ff, U+0131, U+0152-0153, U+02b0-02ff;
}

@font-face {
  font-family: Studio-Feixen-Sans;
  src: url(https://dcmfe.datacamp.com/assets/fonts/StudioFeixenSansRegular-latin-extended-v2.woff2) format("woff2"), url(https://dcmfe.datacamp.com/assets/fonts/StudioFeixenSansRegular-latin-extended-v2.woff) format("woff");
  font-display: swap;
  font-weight: 400;
  font-style: normal;
  unicode-range: U+0100-0130, U+0132-0151, U+0154-017f, U+0180-024f, U+1e??;
}

@font-face {
  font-family: Studio-Feixen-Sans;
  src: url(https://dcmfe.datacamp.com/assets/fonts/StudioFeixenSansRegular-rest-v2.woff2) format("woff2"), url(https://dcmfe.datacamp.com/assets/fonts/StudioFeixenSansRegular-rest-v2.woff) format("woff");
  font-display: swap;
  font-weight: 400;
  font-style: normal;
  unicode-range: U+0259, U+0300-03c0, U+2070-2073, U+2075-20ab, U+20ad-2121, U+2123-218f, U+21bc-2211, U+2213-2214, U+2216-f8fe, U+fb01-fb02;
}

@font-face {
  font-family: Studio-Feixen-Sans;
  src: url(https://dcmfe.datacamp.com/assets/fonts/StudioFeixenSansRegular-english-v2.woff2) format("woff2"), url(https://dcmfe.datacamp.com/assets/fonts/StudioFeixenSansRegular-english-v2.woff) format("woff");
  font-display: swap;
  font-weight: 400;
  font-style: normal;
  unicode-range: U+0000-00a0, U+00a2-00a9, U+00ac-00ae, U+00b0-00b7, U+00b9-00ba, U+00bc-00be, U+00d7, U+00f7, U+2000-206f, U+2074, U+20ac, U+2122, U+2190-21bb, U+2212, U+2215, U+f8ff, U+feff, U+fffd;
}

@font-face {
  font-family: Studio-Feixen-Sans;
  src: url(https://dcmfe.datacamp.com/assets/fonts/StudioFeixenSans-Semibold-latin.woff2) format("woff2"), url(https://dcmfe.datacamp.com/assets/fonts/StudioFeixenSans-Semibold-latin.woff) format("woff");
  font-display: swap;
  font-weight: 800;
  font-style: normal;
  unicode-range: U+00a1, U+00aa-00ab, U+00af, U+00b8, U+00bb, U+00bf-00d6, U+00d8-00f6, U+00f8-00ff, U+0131, U+0152-0153, U+02b0-02ff;
}

@font-face {
  font-family: Studio-Feixen-Sans;
  src: url(https://dcmfe.datacamp.com/assets/fonts/StudioFeixenSans-Semibold-latin-extended.woff2) format("woff2"), url(https://dcmfe.datacamp.com/assets/fonts/StudioFeixenSans-Semibold-latin-extended.woff) format("woff");
  font-display: swap;
  font-weight: 800;
  font-style: normal;
  unicode-range: U+0100-0130, U+0132-0151, U+0154-017f, U+0180-024f, U+1e??;
}

@font-face {
  font-family: Studio-Feixen-Sans;
  src: url(https://dcmfe.datacamp.com/assets/fonts/StudioFeixenSans-Semibold-rest.woff2) format("woff2"), url(https://dcmfe.datacamp.com/assets/fonts/StudioFeixenSans-Semibold-rest.woff) format("woff");
  font-display: swap;
  font-weight: 800;
  font-style: normal;
  unicode-range: U+0259, U+0300-03c0, U+2070-2073, U+2075-20ab, U+20ad-2121, U+2123-218f, U+21bc-2211, U+2213-2214, U+2216-f8fe, U+fb01-fb02;
}

@font-face {
  font-family: Studio-Feixen-Sans;
  src: url(https://dcmfe.datacamp.com/assets/fonts/StudioFeixenSans-Semibold-english.woff2) format("woff2"), url(https://dcmfe.datacamp.com/assets/fonts/StudioFeixenSans-Semibold-english.woff) format("woff");
  font-display: swap;
  font-weight: 800;
  font-style: normal;
  unicode-range: U+0000-00a0, U+00a2-00a9, U+00ac-00ae, U+00b0-00b7, U+00b9-00ba, U+00bc-00be, U+00d7, U+00f7, U+2000-206f, U+2074, U+20ac, U+2122, U+2190-21bb, U+2212, U+2215, U+f8ff, U+feff, U+fffd;
}
</style>