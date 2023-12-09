<template>
  <div class="css-1q1yak2-CoreValues">
    <div class="css-cn48uc-CoreValues">
      <h2 class="css-j0y3nz-CoreValues">
        <span class="css-6ju6k7-CoreValues">Giá
          trị cốt lõi</span> của GoLiveDev
      </h2><span class="css-8dxfqt-CoreValues">Chúng
        tôi hoạt động dựa trên một bộ giá trị
        cốt
        lõi được thiết kế để đưa chúng tôi đi
        theo hướng tốt nhất, đạt được sứ mệnh
        của mình là thu hẹp khoảng cách giữa
        "nhu cầu" của doanh nghiệp và "khả
        năng đáp ứng" từ nhân lực.</span>
    </div>
    <div class="css-1cbu495-CoreValues">
      <div class="css-1i14p7k-CoreValues">
        <span :class="[current === 1 ? 'css-1fmv6ma-ValueLetter' : 'css-ift1xc-ValueLetter']" @click="currentActive(1)">T</span>
        <span :class="[current === 2 ? 'css-1fmv6ma-ValueLetter' : 'css-ift1xc-ValueLetter']" @click="currentActive(2)">T</span>
        <span :class="[current === 3 ? 'css-1fmv6ma-ValueLetter' : 'css-ift1xc-ValueLetter']" @click="currentActive(3)">C</span>
        <span :class="[current === 4 ? 'css-1fmv6ma-ValueLetter' : 'css-ift1xc-ValueLetter']" @click="currentActive(4)">H</span>
        <span class="css-7h01j7-ValueLetter" >-</span>
        <span :class="[current === 6 ? 'css-1fmv6ma-ValueLetter' : 'css-ift1xc-ValueLetter']" @click="currentActive(6)">H</span>
      </div>
      <div v-if="!isMobile" class="css-l420rp-CoreValues" :style="{transform: transformVertical}">
      </div>
      <div class="css-196m72i-CoreValues" :style="{transform}">
        <div v-if="(isMobile && current === 1) || !isMobile " :class="[current === 1 ? 'css-58pd9d-ValueCard' : 'css-kqj99j-ValueCard']">
          <svg viewBox="0 0 18 18"
            aria-hidden="false" height="18"
            role="img" width="18">
            <title>Bar Chart</title>
            <path fill="currentColor"
              d="M3 12a1 1 0 011 1v5H2v-5a1 1 0 011-1zm6-6a1 1 0 011 1v11H8V7a1 1 0 011-1zm6-6a1 1 0 011 1v17h-2V1a1 1 0 011-1z"
              fill-rule="evenodd"></path>
          </svg><span
            class="css-ofi6z3-ValueCard">Thật
            tâm</span><span
            class="css-wnxzai-ValueCard">Có một
            nghề nếu bạn không làm thật tâm, bạn
            sẽ giết chết cả một thế hệ, cả một
            đất nước, đó là nghề giáo, hay rộng
            hơn là doanh nghiệp làm về
            EdTech.</span>
        </div>
        <div v-if="(isMobile && current === 2) || !isMobile " :class="[current === 2 ? 'css-58pd9d-ValueCard' : 'css-kqj99j-ValueCard']">
          <svg viewBox="0 0 18 18"
            aria-hidden="false" height="18"
            role="img" width="18">
            <title>Rocket</title>
            <path fill="currentColor"
              fill-rule="nonzero"
              d="M13.207 3.127c.132.477.348.856.642 1.15.295.296.675.511 1.152.644.137-.654.225-1.34.263-2.057-.718.037-1.403.125-2.057.263zm-1.914.581a10.03 10.03 0 00-3.336 2.22c-.074.074-.614.043-1.62-.094a2 2 0 00-1.683.568L2.536 8.521l3.535.707c.35.82.704 1.41 1.061 1.767.357.358.947.711 1.768 1.061l.707 3.536 2.107-2.108a2 2 0 00.565-1.702c-.143-.984-.17-1.521-.08-1.611a10.028 10.028 0 002.22-3.336c-.78-.225-1.445-.604-1.984-1.143-.538-.538-.918-1.204-1.142-1.984zm2.965 7.786a4 4 0 01-1.13 3.404l-2.107 2.108c-1.13 1.13-3.062.544-3.375-1.022l-.512-2.557c-.572-.31-1.042-.643-1.416-1.017-.374-.374-.708-.845-1.018-1.417l-2.556-.511C.577 10.168-.008 8.236 1.122 7.106L3.24 4.988a4 4 0 013.366-1.135c.216.029.406.053.569.07 2.15-1.87 4.836-2.89 7.984-3.057A2 2 0 0117.26 2.97c-.166 3.156-1.192 5.848-3.072 8.001.017.15.04.326.07.524zM8.9 9.228a1.5 1.5 0 112.121-2.122A1.5 1.5 0 018.9 9.228zM3.764 11.82c.242.511.598 1.002 1.07 1.474.471.47.963.828 1.475 1.07l.16 1.338a.5.5 0 01-.789.465l-1.367-.982c-1.217.753-1.956 1.012-2.217.775-.261-.237-.053-1.017.624-2.338l-.806-1.19a.5.5 0 01.473-.776l1.377.164z">
            </path>
          </svg><span
            class="css-ofi6z3-ValueCard">Thực
            tế</span><span
            class="css-wnxzai-ValueCard">Nếu chỉ
            đào tạo về kiến thức mà không có
            kinh nghiệm thực tế, sự trải nghiệm,
            bạn đang đào tạo ra một thế hệ không
            khác gì máy móc là mấy.</span>
        </div>
        <div v-if="(isMobile && current === 3) || !isMobile " :class="[current === 3 ? 'css-58pd9d-ValueCard' : 'css-kqj99j-ValueCard']">
          <svg viewBox="0 0 49 48" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30.5 33.78a15.78 15.78 0 1 1 0-31.56 15.78 15.78 0 0 1 0 31.56Z"
              stroke="currentColor"
              stroke-width="4.44"></path>
            <path
              d="M18.5 45.78a15.78 15.78 0 1 1 0-31.56 15.78 15.78 0 0 1 0 31.56Z"
              stroke="currentColor"
              stroke-width="4.44"></path>
          </svg><span
            class="css-ofi6z3-ValueCard">Cam
            kết</span><span
            class="css-wnxzai-ValueCard">Cam kết
            với chính đội ngũ, lớn hơn là cam
            kết với những học viên - những khách
            hàng đặt sự tin tưởng ở GoLiveDev,
            đào tạo ra đúng với những gì đã cam
            kết.</span>
        </div>
        <div v-if="(isMobile && current === 4) || !isMobile " :class="[current === 4 ? 'css-58pd9d-ValueCard' : 'css-kqj99j-ValueCard']">
          <svg viewBox="0 0 18 18"
            aria-hidden="false" height="18"
            role="img" width="18">
            <title>Flag</title>
            <path fill="currentColor"
              d="M5 4v5h9V4H5zm0 7v6a1 1 0 01-2 0V1a1 1 0 112 0v1h9a2 2 0 012 2v5a2 2 0 01-2 2H5z"
              fill-rule="evenodd"></path>
          </svg><span
            class="css-ofi6z3-ValueCard">Học
            hỏi</span><span
            class="css-wnxzai-ValueCard">Là
            doanh nghiệp về đào tạo, nhưng
            GoLiveDev luôn theo đuổi việc “không
            ngừng học hỏi”, tìm ra các phương
            pháp mới, yếu tố mới, sự sáng tạo
            mới giúp các học viên có được kiến
            thức phù hợp và thực tế nhất.</span>
        </div>
        <div v-if="(isMobile && current === 6) || !isMobile " :class="[current === 6 ? 'css-58pd9d-ValueCard' : 'css-kqj99j-ValueCard']">
          <svg viewBox="0 0 18 18"
            aria-hidden="false" height="18"
            role="img" width="18">
            <title>Group</title>
            <path fill="currentColor"
              d="M9 17v-5a1 1 0 00-1-1H4a1 1 0 00-1 1v5c0 .667-.333 1-1 1s-1-.333-1-1v-5a3 3 0 013-3h4a3 3 0 013 3v5c0 .667-.333 1-1 1-.666 0-1-.333-1-1zm6 0v-3a1 1 0 00-1-1h-1c-.667 0-1-.333-1-1s.333-1 1-1h1a3 3 0 013 3v3c0 .667-.333 1-1 1-.666 0-1-.333-1-1zM6 6a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8zm8 0a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 110-6 3 3 0 010 6z"
              fill-rule="evenodd"></path>
          </svg><span
            class="css-ofi6z3-ValueCard">Hành
            động</span><span
            class="css-wnxzai-ValueCard">Hành
            động ở GoLiveDev được khuyến khích,
            dám hành động. Để có được sự thực tế
            trong đào tạo luôn cần sự học hỏi và
            quan trọng kèm theo đó là dám thay
            đổi, hành động để phát triển, hành
            động để tạo ra sự khác biệt.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const current = ref(1)
const windowWidth = ref(window.innerWidth);
const currentActive = (slide: number) => {
  current.value = slide
}
const transformVertical = computed(() => {
  if(current.value === 6) {
    return `translateX(calc(50% - 200px + ${(current.value - 3)*88}px + 132px))`
  }
  return `translateX(calc(50% - 200px + ${(current.value - 1)*88}px))`
})
const transform = computed(() => {
  if(windowWidth.value < 992) {
    return 'none'
  }
  if(current.value === 6) {
    return `translateX(calc(50% - 200px + ${(current.value - 1)*88 - (388 + 24)*current.value/2 - (current.value - 1)*194 + 132 + 184}px))`
  }
  return `translateX(calc(50% - 200px + ${(current.value - 1)*88 - (388 + 24)*current.value/2 - (current.value - 1)*194}px))`
})
const isMobile = computed(() => {
  return windowWidth.value < 992
})
const handleResize = () => {
  windowWidth.value = window.innerWidth;
};
window.addEventListener('resize', handleResize);

</script>

<style scoped>
blockquote,
figcaption,
figure,
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

@media (-ms-high-contrast:active),
(-ms-high-contrast:none) {
.ie-vsWrapper {
  display: none !important;
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
.css-4v2hry-AboutPage {
box-sizing: border-box;
margin: 0;
min-width: 0;
background-color: #05192d;
padding-bottom: 244px;
position: relative;
padding-top: 48px;
}

@media screen and (min-width: 992px) {
.css-4v2hry-AboutPage {
  padding-bottom: 223px;
  padding-top: 150px;
}
}

/*! CSS Used from: Embedded */
.css-otej1j-AboutPage {
box-sizing: border-box;
margin: 0;
min-width: 0;
margin: 0 auto;
max-width: 910px;
text-align: center;
width: 100%;
}

/*! CSS Used from: Embedded */
.css-1bfmlbs-AboutPage {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 2.5rem;
font-weight: 700;
margin: 0;
color: #ffffff;
margin-bottom: 24px;
}

@media screen and (min-width: 992px) {
.css-1bfmlbs-AboutPage {
  font-size: 3.125rem;
}
}

/*! CSS Used from: Embedded */
.css-1t07pf-AboutPage {
color: #7933FF;
}

/*! CSS Used from: Embedded */
.css-8v0hcz-AboutPage {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 1.5rem;
margin-top: 0;
color: #ffffff;
margin: 0 auto;
max-width: 800px;
}

/*! CSS Used from: Embedded */
.css-cw4b55-AboutPage {
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
bottom: 0;
}

.css-cw4b55-AboutPage>svg {
-webkit-flex-shrink: 0;
-ms-flex-negative: 0;
flex-shrink: 0;
}

@media screen and (min-width: 992px) {
.css-cw4b55-AboutPage {
  bottom: -187px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}
}

/*! CSS Used from: Embedded */
@media screen and (min-width: 992px) {
.css-1ffhm6w-AboutPage {
  display: none;
}
}

/*! CSS Used from: Embedded */
.css-19qg88z-AboutPage {
display: none;
}

@media screen and (min-width: 992px) {
.css-19qg88z-AboutPage {
  display: block;
  -webkit-transform: translateX(-340px);
  -moz-transform: translateX(-340px);
  -ms-transform: translateX(-340px);
  transform: translateX(-340px);
}
}

/*! CSS Used from: Embedded */
.css-1p5bsj3-AboutPage {
display: none;
}

@media screen and (min-width: 992px) {
.css-1p5bsj3-AboutPage {
  display: block;
  -webkit-transform: translate(140px, 11px);
  -moz-transform: translate(140px, 11px);
  -ms-transform: translate(140px, 11px);
  transform: translate(140px, 11px);
}
}

/*! CSS Used from: Embedded */
.css-rqfpn9-AboutPage {
box-sizing: border-box;
margin: 0;
min-width: 0;
width: 100%;
max-width: container;
margin-left: auto;
margin-right: auto;
max-width: 800px;
padding-left: 16px;
padding-right: 16px;
padding-bottom: 160px;
position: relative;
padding-top: 64px;
text-align: left;
z-index: 10;
}

@media screen and (min-width: 992px) {
.css-rqfpn9-AboutPage {
  padding-top: 130px;
}
}

/*! CSS Used from: Embedded */
.css-k8gyg-AboutPage {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 2rem;
font-weight: 600;
line-height: 1.2;
margin: 0;
margin-bottom: 24px;
}

@media screen and (min-width: 992px) {
.css-k8gyg-AboutPage {
  font-size: 2.5rem;
}
}

/*! CSS Used from: Embedded */
.css-10bkmjn-Box {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 1.125rem;
line-height: 1.5;
margin-top: 0;
}

/*! CSS Used from: Embedded */
.css-z22p4o-AboutPage {
box-sizing: border-box;
margin: 0;
min-width: 0;
background-color: #05192d;
color: #ffffff;
position: relative;
}

.css-z22p4o-AboutPage footer {
color: #7933FF;
}

@media screen and (min-width: 992px) {
.css-z22p4o-AboutPage {
  padding-top: 40px;
}
}

.css-z22p4o-AboutPage .forsyth_svg__p1 {
fill: #7933FF;
}

.css-z22p4o-AboutPage .forsyth_svg__p2 {
fill: #7933ff;
}

/*! CSS Used from: Embedded */
.css-c787lg-Testimonials {
box-sizing: border-box;
margin: 0;
min-width: 0;
position: relative;
}

/*! CSS Used from: Embedded */
.css-wfca1j-Testimonials {
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
position: relative;
}

/*! CSS Used from: Embedded */
.css-1aatpxu-Testimonials {
box-sizing: border-box;
margin: 0;
min-width: 0;
padding-top: 64px;
padding-bottom: 64px;
}

/*! CSS Used from: Embedded */
.css-r55se8-Testimonial {
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
max-width: 782px;
}

/*! CSS Used from: Embedded */
.css-1mq1ykf-Testimonial {
box-sizing: border-box;
margin: 0;
min-width: 0;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-align-items: flex-start;
-webkit-box-align: flex-start;
-ms-flex-align: flex-start;
align-items: flex-start;
}

.css-1mq1ykf-Testimonial::before {
background-color: #7933FF;
border-radius: 50%;
content: "";
display: block;
height: 100px;
width: 100px;
}

.css-1mq1ykf-Testimonial>span {
-webkit-transform: translateX(-50px);
-moz-transform: translateX(-50px);
-ms-transform: translateX(-50px);
transform: translateX(-50px);
}

.css-1mq1ykf-Testimonial>span img {
width: 100px;
}

/*! CSS Used from: Embedded */
.css-1kjhtih-Testimonial {
border-radius: 50%;
display: block;
}

/*! CSS Used from: Embedded */
.css-c6hbjh-Testimonial {
margin-top: 24px;
}

/*! CSS Used from: Embedded */
.css-1mnyko6-Testimonial {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 1.75rem;
font-weight: 700;
letter-spacing: -0.5px;
line-height: 1.2;
margin-top: 0;
}

.css-1mnyko6-Testimonial::after {
content: "”";
}

.css-1mnyko6-Testimonial::before {
content: "“";
}

/*! CSS Used from: Embedded */
.css-1ew903a-Testimonial {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 1rem;
font-weight: 700;
letter-spacing: 2px;
line-height: 1.2;
margin-top: 0;
text-transform: uppercase;
font-size: 0.875rem;
margin-top: 24px;
margin-bottom: 24px;
}

/*! CSS Used from: Embedded */
.css-rbnyar-VsTestimonial {
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
top: -47px;
}

.css-rbnyar-VsTestimonial>svg {
-webkit-flex-shrink: 0;
-ms-flex-negative: 0;
flex-shrink: 0;
}

@media screen and (min-width: 992px) {
.css-rbnyar-VsTestimonial {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  top: -35px;
}
}

/*! CSS Used from: Embedded */
@media screen and (min-width: 992px) {
.css-1a5mo1l-VsTestimonial {
  display: none;
}
}

/*! CSS Used from: Embedded */
.css-weovtx-VsTestimonial {
display: none;
}

@media screen and (min-width: 992px) {
.css-weovtx-VsTestimonial {
  display: block;
  margin-right: 526px;
  -webkit-transform: 526px;
  -moz-transform: 526px;
  -ms-transform: 526px;
  transform: 526px;
}
}

@media screen and (min-width: 1200px) {
.css-weovtx-VsTestimonial {
  margin-right: 0;
  -webkit-transform: translateX(-510px);
  -moz-transform: translateX(-510px);
  -ms-transform: translateX(-510px);
  transform: translateX(-510px);
}
}

/*! CSS Used from: Embedded */
.css-1voo7ve-VsTestimonial {
display: none;
}

@media screen and (min-width: 992px) {
.css-1voo7ve-VsTestimonial {
  display: block;
  margin-left: 156px;
  -webkit-transform: 526px;
  -moz-transform: 526px;
  -ms-transform: 526px;
  transform: 526px;
}
}

@media screen and (min-width: 1200px) {
.css-1voo7ve-VsTestimonial {
  margin-left: 0;
  -webkit-transform: translateX(384px);
  -moz-transform: translateX(384px);
  -ms-transform: translateX(384px);
  transform: translateX(384px);
}
}

/*! CSS Used from: Embedded */
.css-rex8ql-AboutPage {
box-sizing: border-box;
margin: 0;
min-width: 0;
background-color: #05192d;
}

/*! CSS Used from: Embedded */
.css-13cijtg-AboutPage {
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

.css-13cijtg-AboutPage>* {
margin-top: 0;
}

@media screen and (min-width: 992px) {
.css-13cijtg-AboutPage>* {
  width: 25%;
}
}

@media screen and (min-width: 992px) {
.css-13cijtg-AboutPage>*:not(:first-of-type) {
  margin-left: 28px;
}
}

@media screen and (min-width: 992px) {
.css-13cijtg-AboutPage {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
}

/*! CSS Used from: Embedded */
.css-1st17y-StatsCard {
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
}

/*! CSS Used from: Embedded */
.css-3de1js-StatsCard {
box-sizing: border-box;
margin: 0;
min-width: 0;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
background-color: #fcce0d;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
height: 100%;
margin-bottom: 16px;
padding-bottom: 24px;
padding-top: 24px;
padding-left: 24px;
padding-right: 24px;
text-align: center;
}

@media screen and (min-width: 992px) {
.css-3de1js-StatsCard {
  margin-bottom: 32px;
  min-height: 200px;
  padding-bottom: 48px;
  padding-top: 48px;
}
}

@media screen and (min-width: 1200px) {
.css-3de1js-StatsCard {
  min-height: 187px;
}
}

/*! CSS Used from: Embedded */
.css-umzbdm-StatsCard {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 2.5rem;
font-weight: 700;
letter-spacing: -1px;
line-height: 1.05;
margin: 0;
max-width: 274px;
margin-left: auto;
margin-right: auto;
}

@media screen and (min-width: 992px) {
.css-umzbdm-StatsCard {
  font-size: 3.125rem;
}
}

/*! CSS Used from: Embedded */
.css-lkv1do-StatsCard {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 0.875rem;
font-weight: 700;
letter-spacing: 2px;
line-height: 1.2;
margin-top: 0;
text-transform: uppercase;
display: block;
margin-top: 16px;
}

/*! CSS Used from: Embedded */
.css-1w4z9xn-StatsCard {
box-sizing: border-box;
margin: 0;
min-width: 0;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
background-color: #ff6ea9;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
height: 100%;
margin-bottom: 16px;
padding-bottom: 24px;
padding-top: 24px;
padding-left: 24px;
padding-right: 24px;
text-align: center;
}

@media screen and (min-width: 992px) {
.css-1w4z9xn-StatsCard {
  margin-bottom: 32px;
  min-height: 200px;
  padding-bottom: 48px;
  padding-top: 48px;
}
}

@media screen and (min-width: 1200px) {
.css-1w4z9xn-StatsCard {
  min-height: 187px;
}
}

/*! CSS Used from: Embedded */
.css-1q2a6n5-StatsCard {
box-sizing: border-box;
margin: 0;
min-width: 0;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
background-color: #ff931e;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
height: 100%;
margin-bottom: 16px;
padding-bottom: 24px;
padding-top: 24px;
padding-left: 24px;
padding-right: 24px;
text-align: center;
}

@media screen and (min-width: 992px) {
.css-1q2a6n5-StatsCard {
  margin-bottom: 32px;
  min-height: 200px;
  padding-bottom: 48px;
  padding-top: 48px;
}
}

@media screen and (min-width: 1200px) {
.css-1q2a6n5-StatsCard {
  min-height: 187px;
}
}

/*! CSS Used from: Embedded */
.css-jg0jj0-StatsCard {
box-sizing: border-box;
margin: 0;
min-width: 0;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
background-color: #06bdfc;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
height: 100%;
margin-bottom: 16px;
padding-bottom: 24px;
padding-top: 24px;
padding-left: 24px;
padding-right: 24px;
text-align: center;
}

@media screen and (min-width: 992px) {
.css-jg0jj0-StatsCard {
  margin-bottom: 32px;
  min-height: 200px;
  padding-bottom: 48px;
  padding-top: 48px;
}
}

@media screen and (min-width: 1200px) {
.css-jg0jj0-StatsCard {
  min-height: 187px;
}
}

/*! CSS Used from: Embedded */
.css-10hde0v-CoreValues {
box-sizing: border-box;
margin: 0;
min-width: 0;
background-color: #05192d;
position: relative;
padding-top: 96px;
padding-bottom: 96px;
}

/*! CSS Used from: Embedded */
.css-1ex6t95-CoreValues {
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
-webkit-box-pack: center;
-ms-flex-pack: center;
-webkit-justify-content: center;
justify-content: center;
overflow-x: hidden;
top: 60px;
}

.css-1ex6t95-CoreValues>svg {
-webkit-flex-shrink: 0;
-ms-flex-negative: 0;
flex-shrink: 0;
}

@media screen and (min-width: 992px) {
.css-1ex6t95-CoreValues {
  top: 30px;
}
}

/*! CSS Used from: Embedded */
.css-1q1yak2-CoreValues {
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
background-color: #213147;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
overflow-x: hidden;
padding-top: 84px;
padding-bottom: 84px;
}

@media screen and (min-width: 992px) {
.css-1q1yak2-CoreValues {
  padding-top: 150px;
  padding-bottom: 150px;
}
}

/*! CSS Used from: Embedded */
.css-cn48uc-CoreValues {
box-sizing: border-box;
margin: 0;
min-width: 0;
max-width: 684px;
padding-left: 16px;
padding-right: 16px;
text-align: center;
}

/*! CSS Used from: Embedded */
.css-j0y3nz-CoreValues {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 2rem;
font-weight: 700;
letter-spacing: -1px;
line-height: 1.2;
margin: 0;
color: #ffffff;
margin-bottom: 24px;
}

@media screen and (min-width: 992px) {
.css-j0y3nz-CoreValues {
  font-size: 2.5rem;
}
}

/*! CSS Used from: Embedded */
.css-6ju6k7-CoreValues {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 2rem;
font-weight: 700;
letter-spacing: -1px;
line-height: 1.2;
margin: 0;
color: #7933FF;
}

@media screen and (min-width: 992px) {
.css-6ju6k7-CoreValues {
  font-size: 2.5rem;
}
}

/*! CSS Used from: Embedded */
.css-8dxfqt-CoreValues {
box-sizing: border-box;
margin: 0;
min-width: 0;
color: #05192D;
font-size: 16px;
line-height: 1.5;
color: #ffffff;
}

/*! CSS Used from: Embedded */
.css-1cbu495-CoreValues {
box-sizing: border-box;
margin: 0;
min-width: 0;
max-width: 100%;
}

@media screen and (min-width: 992px) {
.css-1cbu495-CoreValues {
  max-width: unset;
}
}

/*! CSS Used from: Embedded */
.css-1i14p7k-CoreValues {
box-sizing: border-box;
margin: 0;
min-width: 0;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
gap: 16px;
-webkit-box-pack: center;
-ms-flex-pack: center;
-webkit-justify-content: center;
justify-content: center;
padding-bottom: 24px;
position: relative;
padding-top: 32px;
padding-left: 16px;
padding-right: 16px;
}

@media screen and (min-width: 992px) {
.css-1i14p7k-CoreValues {
  gap: 24px;
}
}

/*! CSS Used from: Embedded */
.css-1fmv6ma-ValueLetter {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 2.5rem;
font-weight: 700;
letter-spacing: -1px;
line-height: 1.05;
margin: 0;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
background-color: #7933FF;
border-radius: 4px;
color: #05192d;
cursor: pointer;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
height: 50px;
-webkit-box-pack: center;
-ms-flex-pack: center;
-webkit-justify-content: center;
justify-content: center;
-webkit-transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
width: 50px;
}

@media screen and (min-width: 992px) {
.css-1fmv6ma-ValueLetter {
  font-size: 3.125rem;
}
}

@media screen and (min-width: 992px) {
.css-1fmv6ma-ValueLetter {
  height: 64px;
  width: 64px;
}
}

/*! CSS Used from: Embedded */
.css-ift1xc-ValueLetter {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 2.5rem;
font-weight: 700;
letter-spacing: -1px;
line-height: 1.05;
margin: 0;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
background-color: rgba(255, 255, 255, 0.15);
border-radius: 4px;
color: #ffffff;
cursor: pointer;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
height: 50px;
-webkit-box-pack: center;
-ms-flex-pack: center;
-webkit-justify-content: center;
justify-content: center;
-webkit-transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
width: 50px;
}

@media screen and (min-width: 992px) {
.css-ift1xc-ValueLetter {
  font-size: 3.125rem;
}
}

@media screen and (min-width: 992px) {
.css-ift1xc-ValueLetter {
  height: 64px;
  width: 64px;
}
}

/*! CSS Used from: Embedded */
.css-7h01j7-ValueLetter {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 2.5rem;
font-weight: 700;
letter-spacing: -1px;
line-height: 1.05;
margin: 0;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
color: #ffffff;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
height: 50px;
-webkit-box-pack: center;
-ms-flex-pack: center;
-webkit-justify-content: center;
justify-content: center;
width: 12px;
}

@media screen and (min-width: 992px) {
.css-7h01j7-ValueLetter {
  font-size: 3.125rem;
}
}

@media screen and (min-width: 992px) {
.css-7h01j7-ValueLetter {
  height: 64px;
  width: 20px;
}
}

/*! CSS Used from: Embedded */
.css-l420rp-CoreValues {
box-sizing: border-box;
margin: 0;
min-width: 0;
border-left: 2px dashed white;
height: 40px;
-webkit-transform: translateX(calc(50% - 200px + 0px));
-moz-transform: translateX(calc(50% - 200px + 0px));
-ms-transform: translateX(calc(50% - 200px + 0px));
transform: translateX(calc(50% - 200px + 0px));
-webkit-transition: -webkit-transform 0.3s ease-in-out;
transition: transform 0.3s ease-in-out;
}

/*! CSS Used from: Embedded */
.css-196m72i-CoreValues {
box-sizing: border-box;
margin: 0;
min-width: 0;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
gap: 16px;
-webkit-box-pack: center;
-ms-flex-pack: center;
-webkit-justify-content: center;
justify-content: center;
padding-bottom: 24px;
padding-top: 32px;
-webkit-transform: translateX(calc(50% - 147px - 148px - 0px + 0px));
-moz-transform: translateX(calc(50% - 147px - 148px - 0px + 0px));
-ms-transform: translateX(calc(50% - 147px - 148px - 0px + 0px));
/* transform: translateX(calc(50% - 147px - 148px - 0px + 0px)); */
-webkit-transition: -webkit-transform 0.3s ease-in-out;
transition: transform 0.3s ease-in-out;
}

@media screen and (min-width: 992px) {
.css-196m72i-CoreValues {
  gap: 24px;
  padding-bottom: 0;
  -webkit-transform: translateX(calc(50% - 194px - 200px - 0px + 0px));
  -moz-transform: translateX(calc(50% - 194px - 200px - 0px + 0px));
  -ms-transform: translateX(calc(50% - 194px - 200px - 0px + 0px));
}
}

/*! CSS Used from: Embedded */
.css-58pd9d-ValueCard {
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
background-color: rgba(255, 255, 255, 0.15);
color: #7933FF;
cursor: auto;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
height: 100%;
max-width: 388px;
margin-left: auto;
margin-right: auto;
opacity: 1;
padding-left: 16px;
padding-right: 16px;
padding-top: 24px;
padding-bottom: 24px;
text-align: center;
-webkit-transition: opacity 0.3s ease-in-out;
transition: opacity 0.3s ease-in-out;
width: 100%;
}

@media screen and (min-width: 992px) {
.css-58pd9d-ValueCard {
  height: auto;
  padding-left: 32px;
  padding-right: 32px;
  width: 388px;
}
}

.css-58pd9d-ValueCard span {
color: #ffffff;
}

.css-58pd9d-ValueCard svg {
height: 48px;
width: 48px;
}

/*! CSS Used from: Embedded */
.css-ofi6z3-ValueCard {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 1.5rem;
font-weight: 700;
letter-spacing: -0.5px;
line-height: 1.2;
margin-top: 0;
margin-top: 24px;
}

/*! CSS Used from: Embedded */
.css-wnxzai-ValueCard {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 1rem;
line-height: 1.5;
margin-top: 0;
margin-top: 8px;
}

/*! CSS Used from: Embedded */
.css-kqj99j-ValueCard {
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
background-color: rgba(255, 255, 255, 0.15);
color: #7933FF;
cursor: pointer;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
height: 100%;
max-width: 388px;
margin-left: auto;
margin-right: auto;
opacity: 0.3;
padding-left: 16px;
padding-right: 16px;
padding-top: 24px;
padding-bottom: 24px;
text-align: center;
-webkit-transition: opacity 0.3s ease-in-out;
transition: opacity 0.3s ease-in-out;
width: 100%;
}

@media screen and (min-width: 992px) {
.css-kqj99j-ValueCard {
  height: auto;
  padding-left: 32px;
  padding-right: 32px;
  width: 388px;
}
}

.css-kqj99j-ValueCard span {
color: #ffffff;
}

.css-kqj99j-ValueCard svg {
height: 48px;
width: 48px;
}

/*! CSS Used from: Embedded */
.css-1y490ay-CoreValues {
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
bottom: 72px;
-webkit-box-pack: center;
-ms-flex-pack: center;
-webkit-justify-content: center;
justify-content: center;
}

.css-1y490ay-CoreValues>svg {
-webkit-flex-shrink: 0;
-ms-flex-negative: 0;
flex-shrink: 0;
}

@media screen and (min-width: 600px) {
.css-1y490ay-CoreValues {
  bottom: 40px;
}
}

/*! CSS Used from: Embedded */
.css-z0dlwj-AboutPage {
box-sizing: border-box;
margin: 0;
min-width: 0;
background-color: #05192d;
padding-bottom: 128px;
text-align: left;
}

@media screen and (min-width: 992px) {
.css-z0dlwj-AboutPage {
  text-align: center;
}
}

/*! CSS Used from: Embedded */
.css-1t3owwo-Box {
box-sizing: border-box;
margin: 0;
min-width: 0;
width: 100%;
max-width: container;
margin-left: auto;
margin-right: auto;
max-width: 830px;
padding-left: 16px;
padding-right: 16px;
}

/*! CSS Used from: Embedded */
.css-gqyrb8-AboutPage {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 2rem;
font-weight: 700;
letter-spacing: -1px;
line-height: 1.2;
margin: 0;
color: #ffffff;
margin-bottom: 24px;
}

@media screen and (min-width: 992px) {
.css-gqyrb8-AboutPage {
  font-size: 2.5rem;
}
}

.css-gqyrb8-AboutPage span {
color: #06bdfc;
}

/*! CSS Used from: Embedded */
.css-1de683n-AboutPage {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 1.125rem;
line-height: 1.5;
margin-top: 0;
color: #ffffff;
}

/*! CSS Used from: Embedded */
.css-17c93p5-AboutPage {
box-sizing: border-box;
margin: 0;
min-width: 0;
padding-bottom: 164px;
position: relative;
padding-top: 128px;
text-align: center;
}

@media screen and (min-width: 992px) {
.css-17c93p5-AboutPage {
  padding-bottom: 128px;
}
}

/*! CSS Used from: Embedded */
.css-1xrtypp-AboutPage {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 2.5rem;
font-weight: 700;
letter-spacing: -1px;
line-height: 1.05;
margin: 0;
margin-bottom: 24px;
}

@media screen and (min-width: 992px) {
.css-1xrtypp-AboutPage {
  font-size: 3.125rem;
}
}

/*! CSS Used from: Embedded */
.css-1g0zlof-AboutPage {
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
color: #eee9f7;
background-color: #7933FF;
border-color: transparent;
margin-bottom: 24px;
}

.css-1g0zlof-AboutPage::after {
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

.css-1g0zlof-AboutPage:hover:not(:disabled) {
background-color: #6f25f7;
}

.css-1g0zlof-AboutPage:active:not(:disabled) {
background-color: #7933FF;
}

.css-1g0zlof-AboutPage:disabled {
opacity: 0.6;
cursor: default;
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
.css-ld7pdg-AboutPage {
box-sizing: border-box;
margin: 0;
min-width: 0;
color: #05192d;
font-weight: 700;
line-height: 1.5;
-webkit-text-decoration: none;
text-decoration: none;
display: block;
font-size: 1.125rem;
}

.css-ld7pdg-AboutPage:active,
.css-ld7pdg-AboutPage:focus,
.css-ld7pdg-AboutPage:hover {
-webkit-text-decoration: underline;
text-decoration: underline;
}

/*! CSS Used from: Embedded */
.css-exd4l8-AboutPage {
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
bottom: -36px;
-webkit-box-pack: end;
-ms-flex-pack: end;
-webkit-justify-content: flex-end;
justify-content: flex-end;
padding-right: 50%;
}

.css-exd4l8-AboutPage>svg {
-webkit-flex-shrink: 0;
-ms-flex-negative: 0;
flex-shrink: 0;
}

.css-exd4l8-AboutPage .beekman-left_svg__p1 {
fill: #efebe4;
}

.css-exd4l8-AboutPage .beekman-left_svg__p2 {
fill: #ff931e;
}

/*! CSS Used from: Embedded */
.css-1kbohuk-AboutPage {
margin-right: -160px;
}

@media screen and (min-width: 768px) {
.css-1kbohuk-AboutPage {
  margin-right: 220px;
}
}

@media screen and (min-width: 992px) {
.css-1kbohuk-AboutPage {
  margin-right: 320px;
}
}

@media screen and (min-width: 1200px) {
.css-1kbohuk-AboutPage {
  margin-right: 370px;
}
}

/*! CSS Used from: Embedded */
.css-rh9j0z-BusinessCTA {
box-sizing: border-box;
margin: 0;
min-width: 0;
background-color: #05192d;
padding-top: 86px;
padding-bottom: 86px;
}

@media screen and (min-width: 992px) {
.css-rh9j0z-BusinessCTA {
  padding-top: 128px;
  padding-bottom: 128px;
}
}

/*! CSS Used from: Embedded */
.css-uc595h-BusinessCTA {
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
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-pack: justify;
-webkit-justify-content: space-between;
justify-content: space-between;
}

@media screen and (min-width: 992px) {
.css-uc595h-BusinessCTA {
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
}
}

/*! CSS Used from: Embedded */
.css-9k6a9v-BusinessCTA {
box-sizing: border-box;
margin: 0;
min-width: 0;
text-align: center;
width: 100%;
}

@media screen and (min-width: 992px) {
.css-9k6a9v-BusinessCTA {
  text-align: left;
  width: 50%;
}
}

/*! CSS Used from: Embedded */
.css-xr1hwa-BusinessCTA {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 0.875rem;
font-weight: 700;
letter-spacing: 2px;
line-height: 1.2;
margin-top: 0;
text-transform: uppercase;
color: #ff5400;
margin-bottom: 24px;
}

/*! CSS Used from: Embedded */
.css-1l5n4mp-BusinessCTA {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 2rem;
font-weight: 700;
letter-spacing: -1px;
line-height: 1.2;
margin: 0;
color: #ffffff;
margin-bottom: 8px;
}

@media screen and (min-width: 992px) {
.css-1l5n4mp-BusinessCTA {
  font-size: 2.5rem;
}
}

/*! CSS Used from: Embedded */
.css-wqfqd6-BusinessCTA {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 1.125rem;
line-height: 1.5;
margin-top: 0;
color: #ffffff;
margin-bottom: 16px;
}

/*! CSS Used from: Embedded */
.css-c4vz5q-ButtonInternal {
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
height: 36px;
min-width: 36px;
width: auto;
padding-left: 16px;
padding-right: 16px;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
font-size: 14px;
color: #FFFFFF;
background-color: transparent;
border-color: rgba(255, 255, 255, 0.6);
}

.css-c4vz5q-ButtonInternal::after {
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

.css-c4vz5q-ButtonInternal:hover {
background-color: rgba(255, 255, 255, 0.06);
}

.css-c4vz5q-ButtonInternal:active {
background-color: transparent;
}

.css-c4vz5q-ButtonInternal:disabled {
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
.css-ycegee-BusinessCTA {
color: rgba(255, 255, 255, 0.65);
color: #ffffff;
max-width: 500px;
opacity: 0.8;
}

@media screen and (min-width: 992px) {
.css-ycegee-BusinessCTA {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}
}

.css-ycegee-BusinessCTA>div {
max-width: 500px;
}

@media screen and (min-width: 992px) {
.css-ycegee-BusinessCTA {
  margin-top: -48px;
}
}

@media screen and (min-width: 992px) {
.css-ycegee-BusinessCTA svg {
  margin-top: 48px;
}
}

/*! CSS Used from: Embedded */
.css-39ns84-CompaniesMd {
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
-webkit-box-flex-wrap: wrap;
-webkit-flex-wrap: wrap;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-webkit-box-pack: justify;
-webkit-justify-content: space-between;
justify-content: space-between;
max-width: 340px;
margin-left: auto;
margin-right: auto;
padding-top: 24px;
}

.css-39ns84-CompaniesMd>* {
margin-top: 12px;
margin-left: 16px;
margin-right: 16px;
}

@media screen and (min-width: 1200px) {
.css-39ns84-CompaniesMd>* {
  margin-top: 21px;
}
}

@media screen and (min-width: 992px) {
.css-39ns84-CompaniesMd {
  margin-left: 0;
  margin-right: 0;
}
}

@media screen and (min-width: 1200px) {
.css-39ns84-CompaniesMd {
  max-width: 430px;
  padding-top: 8px;
}
}

/*! CSS Used from: Embedded */
.css-1yr41f9-CompaniesMd {
width: 74px;
}

@media screen and (min-width: 1200px) {
.css-1yr41f9-CompaniesMd {
  width: 99px;
}
}

/*! CSS Used from: Embedded */
.css-1shc6iq-CompaniesMd {
width: 100px;
}

@media screen and (min-width: 1200px) {
.css-1shc6iq-CompaniesMd {
  width: 143px;
}
}

/*! CSS Used from: Embedded */
.css-1bq3hu1-CompaniesMd {
width: 63px;
}

@media screen and (min-width: 1200px) {
.css-1bq3hu1-CompaniesMd {
  width: 84px;
}
}

/*! CSS Used from: Embedded */
.css-ukby4s-CompaniesMd {
border-color: transparent;
margin: 0 !important;
width: 100%;
}

/*! CSS Used from: Embedded */
.css-q2rja6-CompaniesMd {
width: 69px;
}

@media screen and (min-width: 1200px) {
.css-q2rja6-CompaniesMd {
  width: 104px;
}
}

/*! CSS Used from: Embedded */
.css-19eze85-CompaniesMd {
-webkit-transform: translateY(-4px);
-moz-transform: translateY(-4px);
-ms-transform: translateY(-4px);
transform: translateY(-4px);
width: 30px;
}

@media screen and (min-width: 1200px) {
.css-19eze85-CompaniesMd {
  -webkit-transform: translateY(-6px);
  -moz-transform: translateY(-6px);
  -ms-transform: translateY(-6px);
  transform: translateY(-6px);
  width: 40px;
}
}

/*! CSS Used from: Embedded */
.css-1iet20f-CompaniesMd {
width: 62px;
}

@media screen and (min-width: 1200px) {
.css-1iet20f-CompaniesMd {
  width: 79px;
}
}

/*! CSS Used from: Embedded */
.css-clhvrg-AboutPage {
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
padding-top: 72px;
padding-bottom: 72px;
text-align: center;
}

@media screen and (min-width: 768px) {
.css-clhvrg-AboutPage {
  padding-top: 128px;
  padding-bottom: 128px;
}
}

/*! CSS Used from: Embedded */
.css-1oi6jn9-AboutPage {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 2rem;
font-weight: 700;
letter-spacing: -1px;
line-height: 1.2;
margin: 0;
margin-bottom: 48px;
}

@media screen and (min-width: 992px) {
.css-1oi6jn9-AboutPage {
  font-size: 2.5rem;
}
}

/*! CSS Used from: Embedded */
.css-zhpn5u-AboutPage {
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
-webkit-box-pack: space-around;
-ms-flex-pack: space-around;
-webkit-justify-content: space-around;
justify-content: space-around;
}

@media screen and (min-width: 768px) {
.css-zhpn5u-AboutPage {
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
}
}

/*! CSS Used from: Embedded */
.css-qnw2sv-AboutPage {
box-sizing: border-box;
margin: 0;
min-width: 0;
margin-bottom: 48px;
}

@media screen and (min-width: 768px) {
.css-qnw2sv-AboutPage {
  margin-bottom: 0;
}
}

/*! CSS Used from: Embedded */
.css-89ubip-AboutPage {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 1.25rem;
font-weight: 700;
letter-spacing: -0.5px;
line-height: 1.2;
margin-top: 0;
margin-bottom: 8px;
text-transform: uppercase;
}

/*! CSS Used from: Embedded */
.css-10bkmjn-Box {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 1.125rem;
line-height: 1.5;
margin-top: 0;
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
fill: #7933FF;
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
.css-swrglv {
height: 66px;
width: 100px;
}

@media screen and (min-width: 992px) {
.css-swrglv {
  height: 139px;
  transform: translateX(-550px);
  width: 208px;
}
}

.css-76257b {
height: 35px;
transform: translateX(225px);
}

@media screen and (min-width: 600px) {
.css-76257b {
  height: 85px;
  transform: translateX(15px);
}
}

.css-i0hdhs {
height: 35px;
transform: translateX(290px);
}

@media screen and (min-width: 600px) {
.css-i0hdhs {
  height: 85px;
  transform: translateX(490px);
}
}

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
font-family: "Be Vietnam Pro", Arial, sans-serif;
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
font-family: "Be Vietnam Pro", Arial, sans-serif;
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

.css-uxdrkw {
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

.css-uxdrkw:active,
.css-uxdrkw:focus,
.css-uxdrkw:hover {
background-color: rgb(33, 49, 71);
border-radius: 4px;
}

.css-uxdrkw:focus {
outline: 0px;
}

.css-uxdrkw>span {
pointer-events: none;
}

@media screen and (min-width: 768px) {
.css-uxdrkw {
  margin-left: 18px;
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

.css-vxqqlo {
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
.css-vxqqlo {
  left: 16px;
  margin-left: 186px;
  width: 908px;
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

.css-gssjf9 {
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

.css-gssjf9 b {
margin-top: 4px;
}

@media screen and (min-width: 480px) {
.css-gssjf9 {
  width: 432px;
}
}

@media screen and (min-width: 768px) {
.css-gssjf9 {
  background-color: rgb(239, 239, 245);
  padding-left: 8px;
  padding-right: 0px;
  padding-top: 10px;
  width: 26%;
}
}

@media screen and (min-width: 1200px) {
.css-gssjf9 {
  width: 240px;
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

.css-1oan9zb:last-child {
margin-bottom: 12px;
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

.css-olwst6 {
box-sizing: border-box;
margin: 12px 0px 3px;
min-width: 0px;
display: flex;
-webkit-box-align: center;
align-items: center;
height: 24px;
}

@media screen and (min-width: 768px) {
.css-olwst6 {
  margin-bottom: 6px;
}
}

.css-1l5yi0h {
height: 16px;
margin-bottom: -3px;
margin-left: 0px;
width: 16px;
}

@media screen and (min-width: 768px) {
.css-1l5yi0h {
  margin-left: 16px;
}
}

.css-5h58i {
box-sizing: border-box;
margin: 0px;
min-width: 0px;
color: rgb(5, 25, 45);
font-size: 0.875rem;
font-weight: 600;
line-height: 20px;
padding-left: 8px;
padding-top: 8px;
padding-bottom: 8px;
}

.css-1mfcvtw {
box-sizing: border-box;
margin: 0px;
min-width: 0px;
-webkit-box-align: center;
align-items: center;
display: inline-flex;
}

.css-1ih1qqa {
height: 28px;
margin-bottom: -3px;
margin-left: 0px;
width: 18px;
}

@media screen and (min-width: 768px) {
.css-1ih1qqa {
  margin-left: 16px;
}
}

.css-1603m9t {
box-sizing: border-box;
margin: 0px;
min-width: 0px;
color: rgb(5, 25, 45);
font-size: 0.875rem;
font-weight: 600;
line-height: 20px;
padding-left: 6px;
padding-top: 8px;
padding-bottom: 8px;
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

.css-7d6t10 {
width: 327px;
}

@media screen and (min-width: 480px) {
.css-7d6t10 {
  width: 432px;
}
}

@media screen and (min-width: 768px) {
.css-7d6t10 {
  width: 37%;
}
}

@media screen and (min-width: 1200px) {
.css-7d6t10 {
  width: 330px;
}
}

.css-jj9llm {
position: relative;
width: 327px;
}

@media screen and (min-width: 480px) {
.css-jj9llm {
  width: 432px;
}
}

@media screen and (min-width: 768px) {
.css-jj9llm {
  width: 37%;
}
}

@media screen and (min-width: 1200px) {
.css-jj9llm {
  width: 338px;
}
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

.css-1glov1r {
box-sizing: border-box;
margin: 0px 8px 0px auto;
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
font-family: "Be Vietnam Pro", Arial;
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
background-color: #7933ff;
background-image: url(https://images.datacamp.com/image/upload/v1699561653/black_friday_nov_2023_bg_banner_02_9015b1d93a.svg);
background-size: cover;
background-position: center center;
display: flex;
justify-content: center;
max-height: 0;
opacity: 0;
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
padding-right: 48px;
width: 100%;
min-height: 62px;
}

.dc-ps-banner-heading {
display: none;
}

.dc-ps-banner-countdown {
margin: 0;
}

.dc-ps-banner-countdown>p {
margin: 0;
}

.dc-ps-banner-time {
background-color: #7933ff;
border-radius: 4px;
color: #ffffff;
display: flex;
font-variant-numeric: tabular-nums;
font-weight: bold;
gap: 4px;
padding: 2px 0 0 4px;
}

.img-left-container {
align-items: center;
display: flex;
flex-shrink: 1;
margin-left: 16px;
margin-right: 8px;
max-width: 180px;
overflow: hidden;
}

.img-left {
max-height: 60px;
max-width: 100%;
}

.img-right-container {
align-items: center;
display: none;
max-height: 80px;
flex-shrink: 1;
margin-left: 8px;
margin-right: 8px;
overflow: hidden;
}

.img-right {
height: auto;
max-width: 100%;
}

@media screen and (min-width: 992px) {
.img-right-container {
  display: flex;
}
}

.fake-button-container {
display: flex;
align-items: center;
flex-shrink: 0;
}

.fake-button {
align-items: center;
background-color: #7933ff;
border: 0;
border-radius: 4px;
box-shadow: none;
color: #ffffff;
display: flex;
height: 36px;
font-family: "Be Vietnam Pro", Arial;
font-size: 14px;
font-weight: bold;
justify-content: center;
padding: 0 8px;
transition: background-color 0.3s cubic-bezier(0.77, 0, 0.175, 1);
}

.fake-button-icon {
margin-left: 8px;
}

.fake-button:active,
.fake-button:focus,
.fake-button:hover {
background-color: undefined;
cursor: pointer;
}

@media screen and (min-width: 480px) {
.dc-ps-banner-countdown {
  align-items: center;
  display: flex;
  gap: 4px;
}
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

.dc-ps-banner-flex {
  min-height: 80px;
}
}

@media screen and (min-width: 1200px) {
.dc-ps-banner-heading {
  font-size: 24px;
}

.dc-ps-banner-flex {
  padding-right: 0;
  min-height: 80px;
}

.img-left-container {
  max-width: 260px;
}

.img-left {
  max-height: 80px;
}

.fake-button {
  font-size: 16px;
  height: 42px;
  padding-left: 16px;
  padding-right: 16px;
}
}

/*! CSS Used from: https://www.datacamp.com/_next/static/css/f002fb689e48bb62.css */
h1,
p {
margin: 0;
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

@media (-ms-high-contrast:active),
(-ms-high-contrast:none) {
.ie-vsWrapper {
  display: none !important;
}
}

/*! CSS Used from: Embedded */
* {
box-sizing: border-box;
}

/*! CSS Used from: Embedded */
.css-x87f1w {
box-sizing: border-box;
margin: 0;
min-width: 0;
background-color: #05192d;
position: relative;
}

/*! CSS Used from: Embedded */
.css-1ur2rgz {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 2.4rem;
font-weight: 700;
letter-spacing: -1px;
line-height: 1.05;
margin: 0;
color: #fffbf3;
padding-bottom: 250px;
padding-top: 64px;
text-align: center;
}

@media screen and (min-width: 992px) {
.css-1ur2rgz {
  font-size: 3rem;
}
}

/*! CSS Used from: Embedded */
.css-1yr8ezy {
box-sizing: border-box;
margin: 0;
min-width: 0;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
bottom: -62px;
display: none;
height: 124px;
-webkit-box-pack: center;
-ms-flex-pack: center;
-webkit-justify-content: center;
justify-content: center;
left: 0;
overflow: hidden;
pointer-events: none;
position: absolute;
right: 0;
}

@media screen and (min-width: 992px) {
.css-1yr8ezy {
  -webkit-align-items: flex-end;
  -webkit-box-align: flex-end;
  -ms-flex-align: flex-end;
  align-items: flex-end;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
}

/*! CSS Used from: Embedded */
.css-hxcjrr {
-webkit-flex-shrink: 0;
-ms-flex-negative: 0;
flex-shrink: 0;
}

@media screen and (min-width: 992px) {
.css-hxcjrr {
  margin-right: 460px;
}
}

@media screen and (min-width: 1200px) {
.css-hxcjrr {
  margin-right: 618px;
}
}

/*! CSS Used from: Embedded */
.css-1mfly0h {
-webkit-flex-shrink: 0;
-ms-flex-negative: 0;
flex-shrink: 0;
-webkit-transform: translateY(-31px);
-moz-transform: translateY(-31px);
-ms-transform: translateY(-31px);
transform: translateY(-31px);
}

@media screen and (min-width: 992px) {
.css-1mfly0h {
  margin-left: 460px;
}
}

@media screen and (min-width: 1200px) {
.css-1mfly0h {
  margin-left: 618px;
}
}

/*! CSS Used from: Embedded */
.css-1246nfb {
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
margin-top: -186px;
}

/*! CSS Used from: Embedded */
.css-2n9l76 {
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
-webkit-box-pack: center;
-ms-flex-pack: center;
-webkit-justify-content: center;
justify-content: center;
margin-left: auto;
margin-right: auto;
padding-bottom: 64px;
}

/*! CSS Used from: Embedded */
.css-phmvkp {
background-color: #ffffff;
overflow: hidden;
position: relative;
width: 267px;
height: 267px;
border-radius: 4px;
margin: 8px;
padding: 8px;
box-sizing: border-box;
border: 1px solid #e5e1da;
}

.css-phmvkp:hover>div,
.css-phmvkp:active>div,
.css-phmvkp:focus>div {
background-color: rgba(12, 22, 38, 0.8);
}

.css-phmvkp:hover>div div,
.css-phmvkp:active>div div,
.css-phmvkp:focus>div div {
-webkit-transform: translateY(0);
-moz-transform: translateY(0);
-ms-transform: translateY(0);
transform: translateY(0);
}

/*! CSS Used from: Embedded */
.css-vo63oz {
box-sizing: border-box;
margin: 0;
min-width: 0;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
background-image: linear-gradient(to top, #0c1626 0%, rgba(0, 0, 0, 0) 200px, rgba(0, 0, 0, 0) 100%);
border-radius: 4px;
bottom: 6px;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-pack: end;
-ms-flex-pack: end;
-webkit-justify-content: flex-end;
justify-content: flex-end;
left: 8px;
padding-bottom: 24px;
position: absolute;
right: 8px;
top: 8px;
-webkit-transition: background-image 0.3s;
transition: background-image 0.3s;
width: 250px;
z-index: 10;
}

/*! CSS Used from: Embedded */
.css-1fbf9km {
box-sizing: border-box;
margin: 0;
min-width: 0;
text-align: center;
-webkit-transform: translateY(90px);
-moz-transform: translateY(90px);
-ms-transform: translateY(90px);
transform: translateY(90px);
-webkit-transition: -webkit-transform 0.3s;
transition: transform 0.3s;
}

/*! CSS Used from: Embedded */
.css-1do7sju {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 1.25rem;
font-weight: 700;
letter-spacing: -0.5px;
line-height: 1.2;
margin-top: 0;
color: #ffffff;
display: block;
margin-bottom: 8px;
}

/*! CSS Used from: Embedded */
.css-nsihx3 {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 1rem;
line-height: 1.5;
margin-top: 0;
color: #ffffff;
}

/*! CSS Used from: Embedded */
.css-ltj8v9 {
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
color: #ffffff;
-webkit-box-pack: center;
-ms-flex-pack: center;
-webkit-justify-content: center;
justify-content: center;
margin-top: 16px;
-webkit-text-decoration: none;
text-decoration: none;
}

/*! CSS Used from: Embedded */
.css-l3synv {
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 1.125rem;
font-weight: 700;
letter-spacing: -0.5px;
line-height: 1.2;
margin-top: 0;
margin-left: 8px;
}

/*! CSS Used from: Embedded */
.css-8gnmw0 {
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
height: 36px;
min-width: 36px;
width: auto;
padding-left: 16px;
padding-right: 16px;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
font-size: 14px;
color: #FFFFFF;
background-color: transparent;
border-color: rgba(255, 255, 255, 0.6);
margin-top: 10px;
}

.css-8gnmw0::after {
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

.css-8gnmw0:hover:not(:disabled) {
background-color: rgba(255, 255, 255, 0.06);
}

.css-8gnmw0:active:not(:disabled) {
background-color: transparent;
}

.css-8gnmw0:disabled {
opacity: 0.6;
cursor: default;
}

/*! CSS Used from: Embedded */
.css-12yghq1 {
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
.css-afesvu {
border-radius: 4px;
}

/*! CSS Used from: Embedded */
.css-12yghq1 {
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
</style>