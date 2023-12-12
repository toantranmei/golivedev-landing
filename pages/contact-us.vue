<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'default-layout',
})

useHead({
  title: 'Liên hệ với chúng tôi - GoLiveDev',
})

const supportOption = ref('customer')

</script>
<template>
    <div class="contact-us toc-enabled" dir="ltr">
      <div class="layout">
        <div class="layout__content">
          <main role="main">
            <div class="container article-page">
              <div class="container-inner">
                <div class="article-container" id="main-content">
                  <div class="article-container__column article-container__sidenav">
                  </div>
                  <div class="article-container__column article-container__article">
                    <article class="article clearfix" itemtype="http://schema.org/Article">
                      <header class="article-header">
                        <h1 class="article__title" itemprop="name" id="get-instant-help-0-0">
                          Liên hệ với đội ngũ hỗ trợ
                        </h1>
  
                        <div class="lt-d-sm-flex lt-justify-content-between lt-mb-4 lt-align-items-start">
                          <div class="lt-mb-2 lt-me-sm-4">
                            <div class="lt-entry-info ">
                              <div class="lt-entry-info__content">
                                <div class="lt-meta">
                                </div>
                              </div>
                            </div>
                          </div>
  
                          <div class="lt-article-subscribe lt-d-flex lt-d-print-none lt-align-items-center">
  
                          </div>
                        </div>
                      </header>
  
                      <div class="article__body markdown" itemprop="articleBody" data-article=""
                        style="position: relative;">
                        <div class="lt-toc-mobile lt-toc-mobile_start"></div>
                        <h3>Hỗ trợ ngay lập tức</h3>
                        <ul class="list-bullet">
                          <li>Tìm kiếm câu hỏi hoặc chủ đề của bạn trong Trung tâm trợ giúp - chúng tôi có câu trả lời cho những câu hỏi thường gặp nhất</li>
                          <li>Hãy dùng thử bot hỗ trợ tức thì của chúng tôi bằng cách truy cập vào nút trò chuyện ở góc dưới bên phải (bạn cũng có thể gửi tin nhắn cho chúng tôi qua nút này)</li>
                          <li id="contact-options-0-1">Nếu bạn đang chia sẻ phản hồi hoặc ý tưởng, vui lòng sử dụng các nút phản hồi tích hợp có trong hầu hết các sản phẩm của chúng tôi</li>
                        </ul>
                        <h3>Tuỳ chọn</h3>
                        <div class="tabs tabs--colored-2">
                          <div class="tabs-menu">
                            <span class="tabs-link" :class="{ 'is-active': supportOption === 'customer' }" @click="supportOption = 'customer'">Hỗ trợ khách hàng</span> 
                            <span class="tabs-link" :class="{ 'is-active': supportOption === 'other' }" @click="supportOption = 'other'">Những hỗ trợ khác</span>
                          </div>
                          <div class="tab" :class="{ 'is-hidden': supportOption !== 'customer' }">Cách dễ nhất để liên lạc là thông qua bot hỗ trợ của chúng tôi bằng cách nhấp vào nút trò chuyện ở góc dưới cùng bên phải. Bạn có thể dễ dàng kết nối với một thành viên trong nhóm nếu bạn cần nói chuyện với ai đó.&nbsp;<br><br>
                            Ngoài ra, bạn có thể sử dụng biểu mẫu liên hệ với chúng tôi để chúng tôi có thể phản hồi trong vòng vài ngày (thường nhanh hơn nhiều):<br><br>
                            Vui lòng gửi email tới cskh@golivedev.com<br><br></div>
                          <div class="tab" :class="{ 'is-hidden': supportOption !== 'other' }">Vui lòng gửi email tới support@golivedev.com<br><br>If you need
                            Instructor related help, visit the <a href="https://instructor-support.datacamp.com/en/"
                              target="_self">dedicated help site.</a><br><br></div>
                        </div>
                        <div class="lt-toc-mobile lt-toc-mobile_end"></div>
                      </div>
  
                      <div class="article__attachments">
  
                      </div>
                    </article>
  
                    <footer class="article-footer clearfix">
  
                    </footer>
  
  
  
                  </div>
                  <div class="article-container__column article-container__toc">
                    <div data-toc="{&quot;mobileBreakpoint&quot;: 991}">
                      <div class="lt-toc lt-toc_is-desktop">
                        <div class="lt-toc--container">
                          <h4 class="lt-toc--title">Mục lục</h4>
                          <div class="lt-toc--current">Nhận trợ giúp ngay lập tức</div>
                          <ul class="lt-toc--list" style="max-height: 664px;">
  
                            <li class="lt-toc--item lt-toc--item-h3">
                              <a href="#get-instant-help-0-0" class="lt-toc--link"><span>Nhận trợ giúp ngay lập tức</span></a>
                            </li>
  
                            <li class="lt-toc--item lt-toc--item-h3">
                              <a href="#contact-options-0-1" class="lt-toc--link"><span>Tùy chọn liên hệ</span></a>
                            </li>
  
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div class="article-container__column article-container__sidebar">
                    <div class="article-sidebar">
  
  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
    <organisms-redirect-to-try-it-section></organisms-redirect-to-try-it-section>

    <iframe height="1" width="1"
      style="position: absolute; top: 0px; left: 0px; border: none; visibility: hidden;"></iframe>
    <iframe data-product="web_widget" title="No content" role="presentation" tabindex="-1" allow="microphone *"
      aria-hidden="true" src="about:blank"
      style="width: 0px; height: 0px; border: 0px; position: absolute; top: -9999px;"></iframe>
    <div style="visibility: visible;">
      <div></div>
      <div><iframe title="Button to launch messaging window" id="launcher"
          style="color-scheme: light; height: 64px; width: 64px; position: fixed; bottom: 16px; right: 16px; transform: none; transform-origin: right bottom; border: 0px; margin-top: 0px; opacity: 0; box-shadow: rgba(23, 73, 77, 0.15) 0px 20px 30px; animation: 0.2s ease-in 0.5s 1 normal forwards running ww-d312db1e-ee4a-4cea-a992-3c22beb3f40c-widgetOnLoad; z-index: 999999; border-radius: 50%;"></iframe>
      </div>
    </div>
</template>
<style scoped>
/*! CSS Used from: https://static.zdassets.com/hc/assets/application-1dcff57f34179d82a4935f28e3666e12.css ; media=all */
@media all {
  body {
    margin: 0;
  }
}

/*! CSS Used from: https://p23.zdassets.com/hc/theming_assets/2227047/360000175854/style.css?digest=19428453843735 */
/*! @import https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css */
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

a {
  background-color: transparent;
}

img {
  border-style: none;
}

button,
input {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button {
  text-transform: none;
}

button,
[type="button"],
[type="submit"] {
  -webkit-appearance: button;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

/*! end @import */
.contact-us {
  --gray-dark: #373a3c;
  --gray: #55595c;
  --gray-light: #818a91;
  --gray-lighter: #eceeef;
  --gray-lightest: #f7f7f9;
  --meta-text-color: #979797;
  --grid-columns: 12;
  --grid-gutter-width: 15px;
  --padding-base-horizontal: 12px;
  --font-size-small: calc(16px * 0.85);
  --font-size-h1: calc(16px * 2.5);
  --font-size-h2: calc(16px * 1.75);
  --font-size-h3: calc(16px * 1.5);
  --font-size-h4: calc(16px * 1.25);
  --font-size-h5: calc(16px * 1.1);
  --font-size-h6: calc(16px * 1);
  --line-height-computed: 16px * 1.5;
  --border-width: 1px;
  --strong-font-weight: 600;
  --hr-border: rgba(241, 241, 241, 1);
  --input-border-color: #dee1e3;
  --input-focus-border-color: #9ed5e7;
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html,
body {
  height: 100%;
}

.contact-us {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.contact-us {
  font-family: Studio-Feixen-Sans, Arial;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 1);
  background-color: rgba(247, 243, 235, 1);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

input,
button {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

a {
  color: #7933FF;
  text-decoration: none;
}

a:hover,
a:focus {
  color: #33e;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

iframe,
img,
svg {
  vertical-align: middle;
}

h1,
h3,
h4 {
  font-family: inherit;
  font-weight: 400;
  line-height: 1.2;
  color: inherit;
}

h1,
h3,
h4,
p,
ul,
ol {
  margin: 0 0 calc(var(--line-height-computed));
}

h1 {
  font-size: var(--font-size-h1);
}

h3 {
  font-size: var(--font-size-h3);
}

h4 {
  font-size: var(--font-size-h4);
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.is-hidden {
  display: none !important;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  display: inline-block;
  padding: 0;
  text-align: initial;
  vertical-align: middle;
  cursor: pointer;
  background: none;
  border: 0;
}

.dropdown-toggle:after {
  display: inline-block;
  font-family: "Font Awesome 5 Free";
  font-size: calc(16px - 4px);
  font-style: normal;
  font-weight: 900;
  line-height: 1;
  color: inherit;
  content: "\f107";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.dropdown-toggle:after {
  margin-left: 8px;
}

.dropdown-toggle:hover {
  text-decoration: none;
}
.article-container__toc {
  position: sticky;
  height: fit-content;
  top: 80px;
}
.dropdown-menu {
  position: absolute;
  z-index: 1000;
  display: none;
  min-width: 170px;
  padding: 10px 0;
  margin-top: 1px;
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  background: #fff;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.dropdown-menu {
  left: 0;
  text-align: left;
}

.dropdown-menu [role="menuitem"] {
  display: block;
  width: 100%;
  line-height: inherit;
  color: #333;
  text-align: start;
  white-space: nowrap;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  -webkit-appearance: none;
}

.dropdown-menu [role="menuitem"] {
  padding: 7px 40px 7px 20px;
}

.dropdown-menu [role="menuitem"]:hover,
.dropdown-menu [role="menuitem"]:focus {
  color: #333;
  text-decoration: none;
  background: #f3f3f3;
}

.layout {
  min-height: 100%;
  background-color: rgba(247, 243, 235, 1);
}

.layout__content {
  width: 100%;
  min-height: calc(100vh - 490px);
}

.layout__content:after {
  display: block;
  height: 0;
  visibility: hidden;
  content: "\00a0";
}

.layout__footer {
  flex: none;
}

input[type="search"] {
  box-sizing: border-box;
}

input[type="search"] {
  display: block;
  width: 100%;
  height: auto;
  padding: calc(var(--padding-base-horizontal) / 2) var(--padding-base-horizontal);
  font-size: 16px;
  line-height: 1.5;
  color: var(--gray);
  background-color: #fff;
  background-image: none;
  border: var(--border-width) solid var(--input-border-color);
  border-radius: 4px;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

input[type="search"]:focus {
  border-color: var(--input-focus-border-color);
  outline: 0;
}

input[type="search"] {
  -webkit-appearance: none;
}

.btn,
input[type="submit"] {
  display: inline-block;
  padding: 6px calc(var(--padding-base-horizontal) + var(--padding-base-horizontal) / 2);
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  text-transform: none;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all 0.3s ease;
  touch-action: manipulation;
}

.btn:focus,
.btn:active:focus,
input[type="submit"]:focus,
input[type="submit"]:active:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

.btn:hover,
.btn:focus,
input[type="submit"]:hover,
input[type="submit"]:focus {
  color: #fff;
  text-decoration: none;
}

.btn:active,
input[type="submit"]:active {
  outline: none;
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

input[type="submit"],
.btn--primary {
  color: #05192D;
  background-color: rgba(3, 239, 98, 1);
  border-color: rgba(3, 239, 98, 1);
}

input[type="submit"]:hover,
input[type="submit"]:focus,
input[type="submit"]:active,
.btn--primary:hover,
.btn--primary:focus,
.btn--primary:active {
  color: #05192D;
  background-color: #02b349;
  border-color: #02b349;
}

.btn--topbar {
  color: #fff;
  background-color: transparent;
  border: var(--border-width) solid #fff;
  border-width: 2px;
  border-radius: 4px;
}

.btn--topbar:hover {
  opacity: 1;
}

.btn--topbar:active {
  box-shadow: none;
}

.btn--topbar:hover,
.btn--topbar:focus,
.btn--topbar:active {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: #e0e0e0;
}

@media (min-width: 768px) {
  .btn--topbar {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: top;
  }
}

@media (max-width: 767px) {
  .btn--topbar {
    display: block;
    width: 100%;
    margin-bottom: calc(var(--line-height-computed) / 2);
  }
}

.container {
  padding-right: var(--grid-gutter-width);
  padding-left: var(--grid-gutter-width);
}

@media (min-width: 768px) {
  .container {
    padding-right: calc(var(--grid-gutter-width) * 2);
    padding-left: calc(var(--grid-gutter-width) * 2);
  }
}

.container-inner {
  max-width: 1172px;
  padding: 0 16px;
  margin: 0 auto;
}

.row {
  margin-right: calc(var(--grid-gutter-width) * -1);
  margin-left: calc(var(--grid-gutter-width) * -1);
}

.column {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: var(--grid-gutter-width);
  padding-left: var(--grid-gutter-width);
}

.column {
  float: left;
}

@media (min-width: 768px) {
  .column--sm-8 {
    width: 66.66667%;
  }
}

.lines-button {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 45px;
  padding: 7.5px;
  margin-top: 10px;
  margin-bottom: 0;
  font-size: calc(16px - 5px);
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  text-transform: none;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent !important;
  border: 0;
  border-radius: 4px;
  transition: all 0.3s ease;
  touch-action: manipulation;
}

.lines-button:focus,
.lines-button:active:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

.lines-button:hover,
.lines-button:focus {
  color: #fff;
  text-decoration: none;
}

.lines-button:active {
  outline: none;
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

@media (max-width: 767px) {
  .lines-button {
    float: right;
  }
}

@media (min-width: 768px) {
  .lines-button {
    display: none;
  }
}

.lines-button:hover {
  opacity: 1;
}

.lines-button:active {
  outline: 0;
  box-shadow: none;
  transition: none;
}

.lines-button:focus {
  outline: 0;
}

.lines {
  position: absolute;
  top: calc(50% - 1px);
  display: inline-block;
  width: 30px;
  height: 2px;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  transition: 0.3s;
}

.lines:before,
.lines:after {
  position: absolute;
  display: inline-block;
  width: 30px;
  height: 2px;
  content: "";
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  transition: 0.3s;
  transform-origin: 2px center;
}

.lines:before {
  top: 8px;
}

.lines:after {
  top: -8px;
}

.lines {
  left: calc(50% - 15px);
}

.lines:before,
.lines:after {
  left: 0;
}

.logo-wrapper {
  display: inline-block;
  padding-top: 15px;
  padding-bottom: 15px;
  vertical-align: middle;
}

.logo img {
  display: block;
  max-height: 40px !important;
}

.breadcrumbs {
  padding: 32px 0 0 0;
  margin-bottom: calc(var(--line-height-computed));
  list-style: none;
  background-color: transparent;
}

.breadcrumbs>li {
  display: inline-block;
  color: var(--gray-light);
}

.breadcrumbs>li+li:before {
  padding: 0 5px;
  color: #ccc;
  content: "›\00a0";
}

.breadcrumbs>li a {
  color: rgba(0, 117, 173, 1);
}

.breadcrumbs>li:last-child a {
  color: rgba(0, 117, 173, 1);
}

.help-center-name {
  display: inline-block;
  vertical-align: middle;
}

@media (max-width: 767px) {
  .help-center-name {
    display: none;
  }
}

.help-center-name {
  margin: 0 0 0 15px;
}

.hero-unit {
  position: relative;
  z-index: 3;
  padding: 15% var(--grid-gutter-width) 10%;
  margin-top: calc(var(--line-height-computed) * -1);
  margin-bottom: calc(var(--line-height-computed) * 2);
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

@media (min-width: 768px) {
  .hero-unit {
    padding-bottom: 5%;
    margin-top: calc(var(--line-height-computed) * -4);
  }
}

.hero-unit__title {
  margin-bottom: calc(var(--line-height-computed));
  font-size: var(--font-size-h3);
  font-weight: 400;
  line-height: 1.1;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}

@media (min-width: 768px) {
  .hero-unit__title {
    font-size: var(--font-size-h2);
  }
}

@media (min-width: 992px) {
  .hero-unit__title {
    margin-bottom: calc(var(--line-height-computed) * 1.4);
    font-size: var(--font-size-h1);
  }
}

.search {
  position: relative;
}

.search:before {
  position: absolute;
  top: 50%;
  width: 24px;
  height: 24px;
  content: "";
  background: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2223%22%20height%3D%2224%22%20viewBox%3D%220%200%2023%2024%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate%28-6%20-2%29%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2219.889%22%20cy%3D%2211.611%22%20r%3D%228%22%20stroke%3D%22%23BDBDBD%22%20stroke-width%3D%222%22%20transform%3D%22rotate%2845%2019.89%2011.61%29%22%3E%3C/circle%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23BDBDBD%22%20fill-rule%3D%22nonzero%22%20d%3D%22M9.34328327%2C15.6566781%20L11.3432833%2C15.6566781%20L11.3432833%2C25.6606781%20C11.3432833%2C26.2106781%2010.8992833%2C26.6566781%2010.3432833%2C26.6566781%20C9.79128327%2C26.6566781%209.34328327%2C26.2116781%209.34328327%2C25.6606781%20L9.34328327%2C15.6566781%20Z%22%20transform%3D%22rotate%2845%2010.343%2021.157%29%22%3E%3C/path%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/svg%3E) no-repeat;
  transform: translateY(-50%);
}

.search:before {
  left: 10px;
}

input[type="search"]:focus {
  border-color: var(--gray-lighter);
}

.search-box {
  position: relative;
}

.search-box #query {
  transition: border 0.3s ease;
}

.search-box #query {
  padding: 12px 16px 12px 36px;
}

.search-box--hero-unit {
  z-index: 2;
  max-width: 720px;
  margin: 0 auto;
  transition: top 0.3s ease;
}

.search-box--hero-unit .search {
  display: flex;
}

.search-box--hero-unit #query {
  height: 50px;
  padding-top: 0;
  padding-bottom: 0;
  background-color: #fff;
  border-color: #fff;
  transition: border 0.3s ease, background-color 0.3s ease;
}

.search-box--hero-unit #query:focus {
  background-color: #fff;
}

.search-box--hero-unit input[type="submit"] {
  display: inline-block;
  height: 50px;
  padding-right: 1rem;
  padding-left: 1rem;
  font-size: 16px;
  text-transform: capitalize;
  flex-shrink: 0;
}

@media (max-width: 991px) {
  .search-box--hero-unit input[type="submit"] {
    display: none;
  }
}

@media (min-width: 768px) {
  .search-box--hero-unit input[type="submit"] {
    padding-right: 38px;
    padding-left: 38px;
  }
}

.search-box--hero-unit .search:before {
  left: 20px;
}

.search-box--hero-unit #query {
  padding-left: 55px;
}

.search-box--hero-unit input[type="submit"] {
  margin-left: 20px;
}

.article-page {
  margin-bottom: calc(var(--line-height-computed) * 2);
}

.article {
  position: relative;
}

.article__title {
  font-size: var(--font-size-h3);
  font-weight: 600;
}

@media (min-width: 1200px) {
  .article__title {
    font-size: var(--font-size-h2);
  }
}

.article__body {
  margin-bottom: calc(var(--line-height-computed));
  word-break: break-word;
}

.article__body ul li {
  margin-bottom: calc(var(--line-height-computed) / 2);
}

.article__body ul {
  padding-left: 20px;
}

.article-footer {
  margin-bottom: calc(var(--line-height-computed));
}

.article__attachments {
  margin-bottom: calc(var(--line-height-computed));
}

@media (max-width: 767px) {
  .article-sidebar {
    padding-top: calc(var(--line-height-computed));
    border-top: var(--border-width) solid var(--hr-border);
  }
}

.article-container {
  padding-top: 80px;
  display: flex;
  margin-right: calc(var(--grid-gutter-width) * -1);
  margin-left: calc(var(--grid-gutter-width) * -1);
  flex-wrap: wrap;
}

.article-container__column {
  width: 100%;
  padding-right: var(--grid-gutter-width);
  padding-left: var(--grid-gutter-width);
}

.article-container__sidenav,
.article-container__toc {
  display: none;
}

.toc-enabled .article-container__toc {
  display: block;
}

@media (min-width: 992px) {
  .article-container__article {
    width: calc(100% / 12 * 8);
  }

  .article-container__sidebar {
    width: calc(100% / 12 * 4);
  }

  .toc-enabled .article-container__sidebar {
    width: calc(100% / 12 * 8);
  }

  .toc-enabled .article-container__toc {
    width: calc(100% / 12 * 4);
  }

  .article-sidebar {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
}

.share {
  white-space: nowrap;
  list-style: none;
}

.share {
  padding-left: 0;
}

.share li {
  position: relative;
  display: inline-block;
  margin-bottom: 5px;
  vertical-align: top;
}

.share a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  overflow: hidden;
  line-height: 30px;
  background-color: var(--hr-border);
  border-color: var(--hr-border);
  border-radius: 50%;
  touch-action: manipulation;
}

.share a:hover {
  text-decoration: none !important;
}

.share a:before {
  position: relative;
  display: inline-block;
  width: 100%;
  font-family: "Font Awesome 5 Brands";
  font-weight: 300;
  text-align: center;
}

.topbar {
  position: relative;
  width: 100%;
  color: #fff;
}

.topbar__container-inner {
  position: relative;
  z-index: 4;
}

.topbar__inner {
  width: 100%;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .topbar__inner {
    display: table;
  }
}

.topbar__col {
  position: relative;
  padding: calc(var(--line-height-computed) / 2) 0;
}

@media (min-width: 768px) {
  .topbar__col {
    display: table-cell;
    padding: 20px 0;
    vertical-align: middle;
  }
}

.topbar__controls {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

@media (min-width: 768px) {
  .topbar__controls {
    float: right;
    flex-direction: row;
    align-items: center;
  }
}

@media (max-width: 767px) {
  .topbar__controls>*+* {
    margin-top: 16px;
  }
}

@media (min-width: 768px) {
  .topbar__controls>*+* {
    margin-left: 16px;
  }
}

@media (max-width: 767px) {
  .topbar__collapse {
    display: none;
    padding-top: calc(var(--line-height-computed) / 2);
    padding-bottom: calc(var(--line-height-computed));
  }
}

@media (min-width: 768px) {
  .topbar__collapse {
    display: block !important;
  }
}

@media (max-width: 767px) {
  .topbar__menu {
    padding: 0;
  }
}

.topbar__search {
  height: 40px;
}

.topbar__search input[type="submit"] {
  display: none;
}

@media (max-width: 767px) {
  .topbar__search {
    display: block !important;
    width: 100%;
  }
}

@media (min-width: 768px) {
  .topbar__search {
    display: inline-block;
    height: auto;
  }
}

.topbar__search-bar {
  display: block;
  width: 100%;
}

@media (max-width: 767px) {
  .topbar__search-bar {
    display: block !important;
  }
}

@media (min-width: 768px) {
  .topbar__search-bar {
    width: auto;
    -webkit-animation-duration: 0.1s;
    animation-duration: 0.1s;
  }

  .topbar__search-bar:before {
    display: none;
  }
}

.topbar__btn-search {
  cursor: pointer;
  background-color: transparent;
  border: 0;
}

.topbar__btn-search:hover,
.topbar__btn-search:focus,
.topbar__btn-search:active {
  background-color: transparent;
  border-color: transparent;
}

.topbar__btn-search svg circle {
  stroke: rgba(255, 255, 255, 1);
}

.topbar__btn-search svg path {
  fill: rgba(255, 255, 255, 1);
}

@media (max-width: 767px) {
  .topbar__btn-search {
    display: none !important;
  }
}

.topbar__btn-search {
  padding-right: 0;
}

.topbar__link {
  color: #06BDFC;
}

.topbar__link:hover,
.topbar__link:active,
.topbar__link:focus {
  color: #0291c2;
}

@media (min-width: 768px) {
  .topbar__link {
    margin-right: calc(var(--padding-base-horizontal) * 2);
  }
}

.topbar--small {
  background-color: rgba(5, 25, 45, 1);
}

.lt-entry-info {
  display: flex;
  font-size: 14px;
}

.list-bullet {
  list-style-type: none;
  counter-reset: list;
}

.list-bullet {
  padding-left: 0 !important;
}

.list-bullet>li {
  position: relative;
  margin-bottom: 10px;
}

.list-bullet>li:before {
  position: absolute;
  top: -2px;
  font-family: "Font Awesome 5 Free";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  color: rgba(5, 25, 45, 1);
  content: "\f058";
}

.list-bullet>li {
  padding-left: 30px;
}

.list-bullet>li:before {
  left: 0;
}

.tabs {
  margin-bottom: calc(var(--line-height-computed));
}

.tab {
  display: block;
  padding: 30px;
  margin-top: -1px;
  border: 1px solid #ddd;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}

@media (min-width: 768px) {
  .tab {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
}

.tab:nth-child(2) {
  border-top-left-radius: 0;
}

.tabs-link {
  display: block;
  padding: 8px 30px;
  margin: 0;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
  cursor: pointer;
  border: 1px solid transparent;
  border-bottom-width: 0;
}

.tabs-link:hover {
  color: rgba(5, 25, 45, 1);
}

@media (max-width: 767px) {
  .tabs-link {
    border-top-color: #ddd;
    border-right-color: #ddd;
    border-left-color: #ddd;
  }

  .tabs-link:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
}

@media (min-width: 768px) {
  .tabs-link {
    display: inline-block;
  }
}

.tabs-link.is-active {
  color: rgba(5, 25, 45, 1);
  cursor: pointer;
  border-color: #ddd;
}

.tabs-link.is-active:hover {
  color: rgba(5, 25, 45, 1);
  cursor: default;
}

@media (min-width: 768px) {
  .tabs-link.is-active {
    border-bottom: 1px solid #fff;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
}

.tabs--colored-2 .tabs-link:hover {
  color: rgba(5, 25, 45, 1);
}

.tabs--colored-2 .tabs-link.is-active {
  color: #fff;
  background-color: rgba(5, 25, 45, 1);
  border-color: rgba(5, 25, 45, 1);
}

.tabs--colored-2 .tabs-link.is-active:hover {
  color: #fff;
}

.tabs--colored-2 .tab {
  background-color: var(--gray-lightest) !important;
}

.skip-navigation {
  position: absolute;
  top: auto;
  z-index: -999;
  display: flex;
  padding: 20px;
  margin: 20px;
  overflow: hidden;
  font-size: 14px;
  color: white;
  background-color: black;
  align-items: center;
  justify-content: center;
}

.skip-navigation {
  left: -999px;
}

.skip-navigation:focus,
.skip-navigation:active {
  top: auto;
  z-index: 999;
  overflow: auto;
  text-align: center;
  text-decoration: none;
}

.skip-navigation:focus,
.skip-navigation:active {
  left: auto;
}

@media (min-width: 768px) {
  .hero-unit {
    padding-top: 10%;
  }
}

.footer {
  padding-top: 0;
}

.footer {
  border-top: solid 1px #ededed;
  color: #fff;
  margin-top: 60px;
}

.footer a {
  color: rgba(255, 251, 243, 1);
  font-weight: 400;
}

.footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer p {
  margin: 12px 0;
}

.footer a:hover {
  text-decoration: underline;
}

.footer-inner {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 5%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

@media (min-width: 1160px) {
  .footer-inner {
    padding: 0;
    width: 90%;
  }
}

.footer-links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 16%;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

@media (min-width: 920px) {
  .footer-links {
    max-width: 50%;
  }
}

.footer-links>h3 {
  margin-bottom: 24px;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.footer-link-item {
  margin-bottom: 12px;
}

.footer-top {
  background-color: rgba(0, 8, 32, 1);
  padding: 64px 0 48px;
}

.footer-bottom {
  background-color: #000001;
  padding: 10px 0;
}

a.footer-learn-more {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-bottom>.footer-inner {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-align: center;
}

@media (min-width: 920px) {
  .footer-bottom>.footer-inner {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    text-align: justify;
  }
}

.footer-inner ul.share {
  margin-right: 0;
  margin-bottom: 0;
  margin-top: 32px;
}

.footer-inner ul.share,
.footer-inner ul.share>li {
  height: 48px;
  margin-right: 16px;
}

.footer-inner ul.share>li>a {
  background-color: rgba(0, 117, 173, 1);
  color: #fff;
  font-size: 18px;
  text-align: center;
}

.footer-inner ul.share>li>a:hover {
  color: #263e63;
}

.footer__mobile-badges {
  margin-top: 32px;
}

.footer__mobile-badges a:hover {
  text-decoration: none;
}

@media (min-width: 992px) {
  .footer__mobile-badges {
    margin-top: 0;
  }
}

p.copyright {
  font-size: 14px;
  margin: 0;
}

/*! CSS Used from: https://use.fontawesome.com/releases/v5.15.1/css/all.css */
.fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
}

.fa-facebook-f:before {
  content: "\f39e";
}

.fa-linkedin-in:before {
  content: "\f0e1";
}

.fa-twitter:before {
  content: "\f099";
}

.fa-youtube:before {
  content: "\f167";
}

.fab {
  font-family: "Font Awesome 5 Brands";
}

.fab {
  font-weight: 400;
}

/*! CSS Used from: https://use.fontawesome.com/releases/v5.15.1/css/all.css */
.fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
}

.fa-facebook-f:before {
  content: "\f39e";
}

.fa-linkedin-in:before {
  content: "\f0e1";
}

.fa-twitter:before {
  content: "\f099";
}

.fa-youtube:before {
  content: "\f167";
}

.fab {
  font-family: "Font Awesome 5 Brands";
}

.fab {
  font-weight: 400;
}

/*! CSS Used from: https://theme.zdassets.com/theme_assets/2227047/fd918156827ad74ceabe1a82da1dce99cc3cbedc.css */
.lt-d-flex {
  display: flex !important;
}

.lt-justify-content-between {
  justify-content: space-between !important;
}

.lt-align-items-start {
  align-items: flex-start !important;
}

.lt-align-items-center {
  align-items: center !important;
}

.lt-mb-2 {
  margin-bottom: 0.5rem !important;
}

.lt-mb-4 {
  margin-bottom: 1.5rem !important;
}

@media (min-width: 576px) {
  .lt-d-sm-flex {
    display: flex !important;
  }

  .lt-me-sm-4 {
    margin-right: 1.5rem !important;
  }
}

@media print {
  .lt-d-print-none {
    display: none !important;
  }
}

/*! CSS Used from: https://theme.zdassets.com/theme_assets/2227047/1ea49959d41256a7d7ceba71d62ad32bc34b9c18.css */
.lt-toc * {
  box-sizing: border-box;
}

.lt-toc--list {
  padding-left: 0;
  margin: 0;
  overflow-y: auto;
  list-style: none;
}

.lt-toc--link {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}

.lt-toc--link.is-active {
  background: currentColor;
}

.lt-toc--link.is-active span {
  color: #fff;
}

.lt-toc--current {
  padding: 6px 12px;
}

.lt-toc_is-desktop {
  position: relative;
}

.lt-toc_is-desktop .lt-toc--title {
  margin: 0 0 12px;
  font-size: 20px;
}

.lt-toc_is-desktop .lt-toc--current {
  display: none;
}

.lt-toc_is-desktop .lt-toc--item {
  margin-bottom: 6px;
}

.lt-toc_is-desktop .lt-toc--list {
  display: block !important;
}

.lt-toc_is-desktop .lt-toc--link {
  border-radius: 4px;
}

.lt-toc-mobile {
  display: none;
}

.lt-toc-mobile {
  width: 100%;
  height: 50px;
}

.lt-toc-mobile_start {
  margin-bottom: 24px;
}

.lt-toc-mobile_end {
  margin-top: 24px;
}

/*! CSS Used from: Embedded */
:root {
  --zd-color-black: #000;
  --zd-color-green-100: #edf8f4;
  --zd-color-green-200: #d1e8df;
  --zd-color-green-300: #aecfc2;
  --zd-color-green-400: #5eae91;
  --zd-color-green-500: #228f67;
  --zd-color-green-600: #038153;
  --zd-color-green-700: #186146;
  --zd-color-green-800: #0b3b29;
  --zd-color-grey-100: #f8f9f9;
  --zd-color-grey-200: #e9ebed;
  --zd-color-grey-300: #d8dcde;
  --zd-color-grey-400: #c2c8cc;
  --zd-color-grey-500: #87929d;
  --zd-color-grey-600: #68737d;
  --zd-color-grey-700: #49545c;
  --zd-color-grey-800: #2f3941;
  --zd-color-blue-100: #edf7ff;
  --zd-color-blue-200: #cee2f2;
  --zd-color-blue-300: #adcce4;
  --zd-color-blue-400: #5293c7;
  --zd-color-blue-500: #337fbd;
  --zd-color-blue-600: #1f73b7;
  --zd-color-blue-700: #144a75;
  --zd-color-blue-800: #0f3554;
  --zd-color-kale-100: #f5fcfc;
  --zd-color-kale-200: #daeded;
  --zd-color-kale-300: #bdd9d7;
  --zd-color-kale-400: #90bbbb;
  --zd-color-kale-500: #467b7c;
  --zd-color-kale-600: #17494d;
  --zd-color-kale-700: #03363d;
  --zd-color-kale-800: #012b30;
  --zd-color-red-100: #fff0f1;
  --zd-color-red-200: #f5d5d8;
  --zd-color-red-300: #f5b5ba;
  --zd-color-red-400: #e35b66;
  --zd-color-red-500: #d93f4c;
  --zd-color-red-600: #cc3340;
  --zd-color-red-700: #8c232c;
  --zd-color-red-800: #681219;
  --zd-color-yellow-100: #fff7ed;
  --zd-color-yellow-200: #ffeedb;
  --zd-color-yellow-300: #fed6a8;
  --zd-color-yellow-400: #ffb057;
  --zd-color-yellow-500: #f79a3e;
  --zd-color-yellow-600: #ed8f1c;
  --zd-color-yellow-700: #ad5918;
  --zd-color-yellow-800: #703815;
  --zd-color-white: #fff;
  --zd-color-secondary-azure-400: #3091ec;
  --zd-color-secondary-azure-600: #1371d6;
  --zd-color-secondary-crimson-400: #e34f32;
  --zd-color-secondary-crimson-600: #c72a1c;
  --zd-color-secondary-fuschia-400: #d653c2;
  --zd-color-secondary-fuschia-600: #a81897;
  --zd-color-secondary-lemon-400: #ffd424;
  --zd-color-secondary-lemon-600: #ffbb10;
  --zd-color-secondary-lime-400: #43b324;
  --zd-color-secondary-lime-600: #2e8200;
  --zd-color-secondary-mint-400: #00a656;
  --zd-color-secondary-mint-600: #058541;
  --zd-color-secondary-orange-400: #de701d;
  --zd-color-secondary-orange-600: #bf5000;
  --zd-color-secondary-pink-400: #ec4d63;
  --zd-color-secondary-pink-600: #d42054;
  --zd-color-secondary-purple-400: #b552e2;
  --zd-color-secondary-purple-600: #6a27b8;
  --zd-color-secondary-royal-400: #5d7df5;
  --zd-color-secondary-royal-600: #3353e2;
  --zd-color-secondary-teal-400: #02a191;
  --zd-color-secondary-teal-600: #028079;
  --zd-color-secondary-azure-M400: #5f8dcf;
  --zd-color-secondary-azure-M600: #3a70b2;
  --zd-color-secondary-crimson-M400: #cc6c5b;
  --zd-color-secondary-crimson-M600: #b24a3c;
  --zd-color-secondary-fuschia-M400: #cf62a8;
  --zd-color-secondary-fuschia-M600: #a8458c;
  --zd-color-secondary-lemon-M400: #e7a500;
  --zd-color-secondary-lemon-M600: #c38f00;
  --zd-color-secondary-lime-M400: #519e2d;
  --zd-color-secondary-lime-M600: #47782c;
  --zd-color-secondary-mint-M400: #299c66;
  --zd-color-secondary-mint-M600: #2e8057;
  --zd-color-secondary-orange-M400: #d4772c;
  --zd-color-secondary-orange-M600: #b35827;
  --zd-color-secondary-pink-M400: #d57287;
  --zd-color-secondary-pink-M600: #b23a5d;
  --zd-color-secondary-purple-M400: #b072cc;
  --zd-color-secondary-purple-M600: #9358b0;
  --zd-color-secondary-royal-M400: #7986d8;
  --zd-color-secondary-royal-M600: #4b61c3;
  --zd-color-secondary-teal-M400: #2d9e8f;
  --zd-color-secondary-teal-M600: #3c7873;
  --zd-color-chat-orange: #f79a3e;
  --zd-color-connect-red: #ff6224;
  --zd-color-explore-blue: #30aabc;
  --zd-color-gather-pink: #f6c8be;
  --zd-color-guide-pink: #ff6224;
  --zd-color-message-green: #37b8af;
  --zd-color-sell-gold: #c38f00;
  --zd-color-support-green: #00a656;
  --zd-color-talk-yellow: #efc93d;
  --zd-font-family-monospace: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  --zd-font-family-system: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Arial, sans-serif;
  --zd-font-size-xs: 10px;
  --zd-font-size-sm: 12px;
  --zd-font-size-md: 14px;
  --zd-font-size-lg: 18px;
  --zd-font-size-xl: 22px;
  --zd-font-size-xxl: 26px;
  --zd-font-size-xxxl: 36px;
  --zd-font-size-sm-monospace: 11px;
  --zd-font-size-md-monospace: 13px;
  --zd-font-size-lg-monospace: 17px;
  --zd-font-weight-thin: 100;
  --zd-font-weight-extralight: 200;
  --zd-font-weight-light: 300;
  --zd-font-weight-regular: 400;
  --zd-font-weight-medium: 500;
  --zd-font-weight-semibold: 600;
  --zd-font-weight-bold: 700;
  --zd-font-weight-extrabold: 800;
  --zd-font-weight-black: 900;
  --zd-font-weight-ultralight: 200;
  --zd-font-weight-ultrabold: 800;
  --zd-font-weight-heavy: 900;
  --zd-line-height-sm: 16px;
  --zd-line-height-md: 20px;
  --zd-line-height-lg: 24px;
  --zd-line-height-xl: 28px;
  --zd-line-height-xxl: 32px;
  --zd-line-height-xxxl: 44px;
  --zd-spacing-xxs: 4px;
  --zd-spacing-xs: 8px;
  --zd-spacing-sm: 12px;
  --zd-spacing: 20px;
  --zd-spacing-lg: 32px;
  --zd-spacing-xl: 40px;
  --zd-spacing-xxl: 48px;
}

/*! CSS Used from: Embedded */
:root {
  --reach-menu-button: 1;
}

/*! CSS Used from: Embedded */
:root {
  --reach-menu-button: 1;
}

/*! CSS Used fontfaces */
@font-face {
  font-family: Studio-Feixen-Sans;
  src: url('https://waffles.datacamp.com/fonts/StudioFeixenSans-Regular.woff2') format('woff2'), url('https://waffles.datacamp.com/fonts/StudioFeixenSans-Regular.woff') format('woff'), url('https://waffles.datacamp.com/fonts/StudioFeixenSans-Regular.ttf') format('truetype');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: Studio-Feixen-Sans;
  src: url('https://waffles.datacamp.com/fonts/StudioFeixenSans-Bold.woff2') format('woff2'), url('https://waffles.datacamp.com/fonts/StudioFeixenSans-Bold.woff') format('woff'), url('https://waffles.datacamp.com/fonts/StudioFeixenSans-Bold.ttf') format('truetype');
  font-weight: 800;
  font-display: swap;
}

@font-face {
  font-family: Studio-Feixen-Sans;
  src: url('https://waffles.datacamp.com/fonts/StudioFeixenSans-Book.woff2') format('woff2'), url('https://waffles.datacamp.com/fonts/StudioFeixenSans-Book.woff') format('woff'), url('https://waffles.datacamp.com/fonts/StudioFeixenSans-Book.ttf') format('truetype');
  font-weight: 100;
  font-display: swap;
}

@font-face {
  font-family: "Font Awesome 5 Free";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-regular-400.eot);
  src: url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-regular-400.eot?#iefix) format("embedded-opentype"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-regular-400.woff2) format("woff2"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-regular-400.woff) format("woff"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-regular-400.ttf) format("truetype"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-regular-400.svg#fontawesome) format("svg");
}

@font-face {
  font-family: "Font Awesome 5 Free";
  font-style: normal;
  font-weight: 900;
  font-display: block;
  src: url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-solid-900.eot);
  src: url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-solid-900.eot?#iefix) format("embedded-opentype"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-solid-900.woff2) format("woff2"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-solid-900.woff) format("woff"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-solid-900.ttf) format("truetype"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-solid-900.svg#fontawesome) format("svg");
}

@font-face {
  font-family: "Font Awesome 5 Free";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-regular-400.eot);
  src: url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-regular-400.eot?#iefix) format("embedded-opentype"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-regular-400.woff2) format("woff2"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-regular-400.woff) format("woff"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-regular-400.ttf) format("truetype"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-regular-400.svg#fontawesome) format("svg");
}

@font-face {
  font-family: "Font Awesome 5 Free";
  font-style: normal;
  font-weight: 900;
  font-display: block;
  src: url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-solid-900.eot);
  src: url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-solid-900.eot?#iefix) format("embedded-opentype"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-solid-900.woff2) format("woff2"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-solid-900.woff) format("woff"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-solid-900.ttf) format("truetype"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-solid-900.svg#fontawesome) format("svg");
}

@font-face {
  font-family: "Font Awesome 5 Brands";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-brands-400.eot);
  src: url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-brands-400.eot?#iefix) format("embedded-opentype"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-brands-400.woff2) format("woff2"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-brands-400.woff) format("woff"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-brands-400.ttf) format("truetype"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-brands-400.svg#fontawesome) format("svg");
}

@font-face {
  font-family: "Font Awesome 5 Brands";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-brands-400.eot);
  src: url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-brands-400.eot?#iefix) format("embedded-opentype"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-brands-400.woff2) format("woff2"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-brands-400.woff) format("woff"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-brands-400.ttf) format("truetype"), url(https://use.fontawesome.com/releases/v5.15.1/webfonts/fa-brands-400.svg#fontawesome) format("svg");
}</style>