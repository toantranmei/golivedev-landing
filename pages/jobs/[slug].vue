<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'default-layout',
})

useHead({
  title: 'Giới thiệu GoLiveDev - Hệ thống đào tạo lập trình sáng tạo',
})

const route = useRoute()

const { data: job } = await useFetch(`/api/jobs/${route.params.slug}`)
console.log(job);

</script>

<template>
  <div id="wrapper">
    <div id="main" class="">
      <div v-if="job" id="app_body" style="padding-left:20px" >
        <div class="logo-container">

        </div>
        <div id="header">
          <a href="#app" id="apply_button" class="button">
            Apply Now
          </a>
          <h1 class="app-title">{{ job.jobTitle }} ({{ job.acceptedType.join(", ")}})
          </h1>
          <span class="company-name">
            tại Golivedev
          </span>
          <div class="location">
            <svg data-v-1c4e71dc="" viewBox="0 0 18 18" aria-hidden="true" class="css-oe1j9s-Home" height="12" role="img" width="12"><path data-v-1c4e71dc="" fill="currentColor" d="M9 18c-2.911 0-8-5.993-8-10a8 8 0 1116 0c0 4.007-5.089 10-8 10zm0-2c1.728 0 6-5.032 6-8A6 6 0 103 8c0 2.968 4.272 8 6 8zm0-5a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z" fill-rule="evenodd"></path></svg>
            Remote
          </div>
        </div>
        <div id="content" class="">
          <div class="content-intro">
            <p><strong>Về chúng tôi:</strong></p>
            <p>Golive Dev là một doanh nghiệp trẻ phát triển trong lĩnh vực Education Technology.</p>
            <p>Với mô hình học tập hiện đại sẽ cung cấp cho học viên kiến thức vững chắc để làm việc thực tế. Cùng với sự support 24/7 của giảng viên và trợ giảng sẽ giúp học viên không gặp khó khăn trong quá trình tiếp cận kiến thức.</p>
          </div>

          <div class="col-sm-4 text-center">
            <div data-optly-2ac7d163-fbf6-437b-a910-0cd485f40f90="">
              <p><strong>Curious About Our Audition process?</strong></p>
              <p>Dive into our course audition process with this insightful <a
                  href="https://datacamp-1.wistia.com/medias/u8vr3ytbnd">video</a> and <a
                  href="https://cdn.datacamp.com/DC%20Instructor%20Hiring%20Process.pdf">document</a>.<br><br>
              </p>
              <!-- Mô tả công việc -->
              <p><strong>Mô tả công việc:</strong></p>
              <template v-for="content in job.jobBrief.description">
                <p v-if="content.type=='p'" v-for="contentParagraph in content.content">{{ contentParagraph }}</p>
                <ul v-if="content.type=='li'">
                  <li v-for="contentList in content.content">{{ contentList }}</li>
                </ul>
              </template>
              <!-- Yêu cầu ứng viên -->
              <p><strong>Yêu cầu ứng viên</strong>:</p>
              <template v-for="content in job.jobBrief.required">
                <p v-if="content.type=='p'" v-for="contentParagraph in content.content">{{ contentParagraph }}</p>
                <ul v-if="content.type=='li'">
                  <li v-for="contentList in content.content">{{ contentList }}</li>
                </ul>
              </template>
              <!-- Quyền lợi ứng viên -->
              <p><br><strong>Quyền lợi ứng viên</strong>:</p>
              <template v-for="content in job.jobBrief.right">
                <p v-if="content.type=='p'" v-for="contentParagraph in content.content">{{ contentParagraph }}</p>
                <ul v-if="content.type=='li'">
                  <li v-for="contentList in content.content">{{ contentList }}</li>
                </ul>
              </template>
              <p><br><strong>Please Note</strong>:</p>
              <template v-for="content in job.jobBrief.note">
                <p v-if="content.type=='p'" v-for="contentParagraph in content.content">{{ contentParagraph }}</p>
                <ul v-if="content.type=='li'">
                  <li v-for="contentList in content.content">{{ contentList }}</li>
                </ul>
              </template>
            </div>
          </div>

          <div class="content-conclusion">
            
            <p><em><span style="font-weight: 400;">Golivedev là một nhà tuyển dụng với cơ hội bình đẳng. Chúng tôi tôn
                  vinh sự đa dạng và cam kết tạo ra một môi trường hòa nhập cho tất cả nhân viên.</span></em></p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*! CSS Used from: https://boards.cdn.greenhouse.io/assets/application-37fb77937add45f47b8aa211c6e36baf590f4e1ddea883f7fa2967cb913854f4.css ; media=all */
@media all {
  .s3-upload-form {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .progress-bar {
    display: none;
  }

  .progress-bar .upload {
    border: none;
    margin: 0;
  }

  .progress-bar .upload .progress {
    margin: 0;
    border-radius: 0;
  }

  .progress-bar .upload .progress .bar {
    height: 8px;
    width: 397px;
  }

  .attach-or-paste button.remove {
    margin-left: 5px;
    display: none;
  }

  .attach-or-paste .chosen {
    display: none;
  }

  .attach-or-paste .unstyled-button {
    cursor: pointer;
    padding: 0;
    border-style: none;
    background-color: #FAFAFA;
  }

  .attach-or-paste .unstyled-button.link-button {
    color: #0942B0;
    font-size: 13px;
  }

  .attach-or-paste .unstyled-button.link-button:hover {
    text-decoration: underline;
  }

  .attach-or-paste .link-container a {
    font-size: 13px;
  }

  @media (min-width: 641px) {

    .attach-or-paste .link-container a:not(:last-child)::after,
    .attach-or-paste .link-container .link-button:not(:last-child)::after {
      content: ",";
    }
  }

  @media (max-width: 640px) {
    .attach-or-paste .link-container a {
      font-family: "Open Sans", sans-serif !important;
      font-weight: 600;
      background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#fafafa), to(#f4f4f4));
      background-image: -webkit-linear-gradient(top, #fafafa, #f4f4f4);
      background-image: -moz-linear-gradient(top, #fafafa, #f4f4f4);
      background-image: -ms-linear-gradient(top, #fafafa, #f4f4f4);
      background-image: -o-linear-gradient(top, #fafafa, #f4f4f4);
      filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#FFFAFAFA", endColorstr="#FFF4F4F4");
      border: solid 1px #ddd !important;
      color: #222222 !important;
      text-align: center;
      text-decoration: none;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      border-radius: 2px;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      width: 100%;
      padding: 6px 20px;
      font-size: 13px;
      line-height: 19px;
      margin-bottom: 1em;
    }

    .attach-or-paste .link-container a:hover {
      text-decoration: none;
    }

    .attach-or-paste .link-container a:active:not(.disabled-button) {
      -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    .attach-or-paste .link-container a:active {
      -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
    }
  }

  .upload {
    display: inline-block;
    border-top: solid 1px #CCC;
    width: 300px;
    padding-top: 10px;
    margin-top: 10px;
  }

  .upload .progress {
    margin-top: 8px;
    border: solid 1px #555;
    border-radius: 3px;
    -moz-border-radius: 3px;
  }

  .upload .progress .bar {
    height: 10px;
    background: #3EC144;
  }

  .file-types {
    color: #6e6e6e;
    margin-top: -10px;
  }

  #resume_fieldset {
    border: 0;
  }

  #resume_fieldset>legend {
    font-size: 13px;
    margin-bottom: 20px;
  }

  .select2-container {
    margin: 0;
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }

  .select2-container,
  .select2-drop {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .select2-drop {
    width: 100%;
    margin-top: -1px;
    position: absolute;
    z-index: 9999;
    top: 100%;
    background: #fff;
    color: #000;
    border: 1px solid #aaa;
    border-top: 0;
    border-radius: 0 0 4px 4px;
    -webkit-box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);
  }

  .select2-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .select2-results {
    max-height: 200px;
    padding: 0 0 0 4px;
    margin: 4px 4px 4px 0;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .select2-results li {
    list-style: none;
    display: list-item;
    background-image: none;
  }

  .select2-results .select2-no-results {
    background: #f4f4f4;
    display: list-item;
    padding-left: 5px;
  }

  .select2-container-multi .select2-choices {
    height: auto !important;
    height: 1%;
    margin: 0;
    padding: 0 5px 0 0;
    position: relative;
    border: 1px solid #aaa;
    cursor: text;
    overflow: hidden;
    background-color: #fff;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, color-stop(1%, #eee), color-stop(15%, #fff));
    background-image: -webkit-linear-gradient(top, #eee 1%, #fff 15%);
    background-image: -moz-linear-gradient(top, #eee 1%, #fff 15%);
    background-image: linear-gradient(to bottom, #eee 1%, #fff 15%);
  }

  .select2-container-multi .select2-choices {
    min-height: 26px;
  }

  .select2-container-multi .select2-choices li {
    float: left;
    list-style: none;
  }

  .select2-container-multi .select2-choices .select2-search-field {
    margin: 0;
    padding: 0;
    white-space: nowrap;
  }

  .select2-container-multi .select2-choices .select2-search-field input {
    padding: 5px;
    margin: 1px 0;
    font-family: sans-serif;
    font-size: 100%;
    color: #666;
    outline: 0;
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    background: transparent !important;
  }

  .select2-default {
    color: #999 !important;
  }

  .select2-offscreen,
  .select2-offscreen:focus {
    clip: rect(0 0 0 0) !important;
    width: 1px !important;
    height: 1px !important;
    border: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    position: absolute !important;
    outline: 0 !important;
    left: 0px !important;
    top: 0px !important;
  }

  .select2-display-none {
    display: none;
  }

  #location_autocomplete-items-popup {
    position: absolute;
    list-style: none;
    width: 407px;
    background-color: white;
    border: 1px solid #c5c5c5;
    padding-left: 0;
    margin: 0;
    z-index: 1;
  }

  body {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
  }

  a {
    text-decoration: none;
    color: #0942B0;
  }

  a:hover {
    text-decoration: underline;
  }

  body:before {
    content: "";
    height: 100%;
    float: left;
    width: 0;
    margin-top: -32767px;
  }

  #wrapper {
    max-width: 980px;
    margin: 0 auto;
    overflow: auto;
    padding: 0px 10px;
    min-height: 100%;
  }

  #main {
    max-width: 100%;
    padding-top: 20px;
    padding-bottom: 100px;
  }

  #main hr {
    margin: 0;
    padding: 0;
    border: none;
    height: 1px;
    background-color: #DADADA;
    margin: 25px 0;
  }

  .button {
    padding: 10px 20px;
    color: #FFF;
    background-color: #74A24B;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#8CC658), to(#74A24B));
    background-image: -webkit-linear-gradient(top, #8CC658, #74A24B);
    background-image: -moz-linear-gradient(top, #8CC658, #74A24B);
    background-image: -ms-linear-gradient(top, #8CC658, #74A24B);
    background-image: -o-linear-gradient(top, #8CC658, #74A24B);
    filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#FF8CC658", endColorstr="#FF74A24B");
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }

  .button:hover {
    text-decoration: none;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#74A24B), to(#8CC658));
    background-image: -webkit-linear-gradient(top, #74A24B, #8CC658);
    background-image: -moz-linear-gradient(top, #74A24B, #8CC658);
    background-image: -ms-linear-gradient(top, #74A24B, #8CC658);
    background-image: -o-linear-gradient(top, #74A24B, #8CC658);
    filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#FF74A24B", endColorstr="#FF8CC658");
  }

  .location {
    color: #757575;
    margin: 8px 0px;
  }

  .app-title {
    margin-bottom: 0;
  }

  .company-name {
    font-size: 16px;
  }

  #app_body {
    max-width: 600px;
    position: relative;
  }

  #app_body h1 {
    margin-bottom: 0px;
  }

  #header {
    padding-right: 200px;
  }

  #apply_button {
    position: absolute;
    right: 0;
    top: 0;
  }

  #application {
    padding: 25px 30px 30px 30px;
    background-color: #FAFAFA;
    max-width: 550px;
  }

  #application .heading {
    float: left;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    margin-top: 0;
  }

  #application div.required-fields {
    float: right;
    font-size: 12px;
    color: #000000;
  }

  #main_fields .asterisk,
  #custom_fields .asterisk {
    color: #DB2A3A;
  }

  #main_fields div.field,
  #custom_fields div.field,
  #eeoc_fields div.field {
    clear: both;
    overflow: auto;
    line-height: 30px;
    margin-bottom: 15px;
  }

  #main_fields div.field label,
  #custom_fields div.field label,
  #eeoc_fields div.field label {
    font-size: 12px;
  }

  #main_fields div.field label .asterisk,
  #custom_fields div.field label .asterisk {
    font-size: 18px;
    line-height: 18px;
  }

  #main_fields div.field input[type=text],
  #main_fields div.field textarea,
  #custom_fields div.field input[type=text],
  #custom_fields div.field textarea,
  #custom_fields div.field .select2-container-multi {
    margin: 0;
    padding: 5px;
    border: solid 1px #DDD;
    font-size: 13px;
    border-radius: 3px;
    font-family: inherit;
  }

  #main_fields div.field input[type=text]:focus,
  #main_fields div.field textarea:focus,
  #custom_fields div.field input[type=text]:focus,
  #custom_fields div.field textarea:focus,
  #custom_fields div.field .select2-container-multi:focus {
    border-color: rgba(82, 168, 236, 0.8);
    outline: none;
  }

  #main_fields div.field textarea,
  #custom_fields div.field textarea {
    height: 150px;
  }

  #main_fields legend {
    float: left;
  }

  #main_fields fieldset {
    position: relative;
    padding: 0;
    margin: 0;
  }

  #main_fields div.field label,
  #eeoc_fields div.field label {
    float: left;
    width: 105px;
    text-align: right;
    margin-right: 10px;
  }

  #main_fields div.field input[type=text],
  #main_fields div.field textarea {
    width: 397px;
  }

  #main_fields div.field textarea.paste {
    margin-left: 115px;
  }

  #eeoc_fields div.field label {
    width: 135px;
  }

  #eeoc_title {
    font-size: 13px;
  }

  #custom_fields div.field input[type=text],
  #custom_fields div.field textarea,
  #custom_fields div.field .select2-container-multi {
    margin-top: 6px;
    width: 514px;
  }

  #custom_fields div.field .select2-container-multi {
    background: white;
    padding: 0;
  }

  #custom_fields div.field .select2-container-multi .select2-choices {
    background: none;
    border: none;
  }

  #custom_fields div.field .select2-container-multi .select2-choices input.select2-input {
    margin-left: 5px;
    border: none;
    margin-top: 0;
  }

  textarea.paste,
  .chosen {
    display: none;
  }

  #resume_chosen img,
  #resume_chosen span {
    vertical-align: middle;
  }

  #submit_buttons {
    text-align: right;
  }

  #submit_app {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 600;
    color: white;
    text-align: center;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    border: none;
    padding: 7px 16px;
    font-size: 13px;
    margin-top: 10px;
  }

  #submit_app:disabled {
    background: #6e6e6e;
  }

  #error_message {
    color: #DB2A3A;
    width: 60%;
  }

  #captcha_error_message {
    color: #DB2A3A;
    width: 60%;
    display: none;
  }

  #captcha_fallback_message {
    color: #DB2A3A;
    width: 60%;
    display: none;
  }

  .clear {
    clear: both;
  }

  @media (min-width: 641px) {
    a.locate-me {
      margin-right: 10px;
    }
  }

  @media (max-width: 640px) {
    a.locate-me {
      font-family: "Open Sans", sans-serif !important;
      font-weight: 600;
      background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#fafafa), to(#f4f4f4));
      background-image: -webkit-linear-gradient(top, #fafafa, #f4f4f4);
      background-image: -moz-linear-gradient(top, #fafafa, #f4f4f4);
      background-image: -ms-linear-gradient(top, #fafafa, #f4f4f4);
      background-image: -o-linear-gradient(top, #fafafa, #f4f4f4);
      filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr="#FFFAFAFA", endColorstr="#FFF4F4F4");
      border: solid 1px #ddd !important;
      color: #222222 !important;
      text-align: center;
      text-decoration: none;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      border-radius: 2px;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      width: 100%;
      padding: 6px 20px;
      font-size: 13px;
      line-height: 19px;
      margin-bottom: 1em;
    }

    a.locate-me:hover {
      text-decoration: none;
    }

    a.locate-me:active:not(.disabled-button) {
      -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    a.locate-me:active {
      -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .content-intro {
    margin-top: 16px;
  }

  .content-conclusion {
    margin-bottom: 24px;
  }

  .hidden {
    display: none;
  }

  .drop-zone {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border: 2px dashed #757575;
    background-color: #f3f3f3;
    padding: 10px;
    width: 160px;
    text-align: center;
    color: #757575;
    font-weight: 500;
  }

  #dev-fields .field {
    height: 0;
    margin-bottom: 0 !important;
  }

  #footer {
    position: relative;
    margin-top: -100px;
    height: 79px;
    padding-top: 20px;
    clear: both;
    font-size: 12px;
    line-height: 3em;
    border-top: solid 1px #ccc;
    background-color: #eee;
    text-align: center;
  }

  #footer>a:hover {
    text-decoration: none;
  }

  #footer span,
  #footer img {
    vertical-align: bottom;
  }

  #footer .privacy-policy {
    font-size: 11px;
  }

  .company-name {
    font-size: 16px;
  }
}

/*! CSS Used from: https://boards.cdn.greenhouse.io/assets/responsive-95ad71d0f9cbcb13adb28ed74687b15c00a64bb1c4a6ab47ab9072493777804c.css ; media=all */
@media all {
  @media (max-width: 640px) {
    #app_body {
      padding-left: 0 !important;
    }

    #app_body .logo-container {
      height: 78px;
    }

    #main_fields div.field label,
    #eeoc_fields div.field label {
      float: none !important;
      width: 100% !important;
      text-align: left !important;
      display: block !important;
    }

    #custom_fields .select2-container,
    #custom_fields div.field input[type=text],
    #custom_fields div.field textarea,
    #custom_fields div.field select,
    #main_fields div.field input[type=text],
    #main_fields div.field textarea {
      width: 100% !important;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    #eeoc_fields div.field select,
    #custom_fields div.field select {
      width: 100% !important;
    }
  }
}

/*! CSS Used from: https://recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/custom_css_files/000/004/942/original/greenhouse.css?1603199412 ; media=screen */
@media screen {
  body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  #wrapper {
    padding-bottom: 30px;
  }

  #app_body {
    max-width: 750px;
  }

  #footer {
    border: none;
    background-color: #f7f7fc;
    color: #697581;
  }

  p,
  ul li {
    line-height: 1.5;
  }

  input[type="file"] {
    display: none;
  }

  .button,
  #submit_app {
    background-color: rgb(3, 239, 98);
    background-image: none;
    border-bottom-color: rgb(3, 239, 98);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-image-outset: 0px;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(3, 239, 98);
    border-left-style: solid;
    border-left-width: 1px;
    border-right-color: rgb(3, 239, 98);
    border-right-style: solid;
    border-right-width: 1px;
    border-top-color: rgb(3, 239, 98);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-top-style: solid;
    border-top-width: 1px;
    box-sizing: border-box;
    color: rgb(5, 25, 45);
    cursor: pointer;
    display: inline-block;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 700;
    height: 48px;
    letter-spacing: 0.225px;
    line-height: 22.5px;
    padding-bottom: 12px;
    padding-left: 28px;
    padding-right: 28px;
    padding-top: 12px;
    text-align: center;
    text-decoration-color: rgb(5, 25, 45);
    text-decoration-line: none;
    text-decoration-style: solid;
    text-size-adjust: 100%;
    text-shadow: none;
    transition-delay: 0s, 0s, 0s;
    transition-duration: 0.25s, 0.25s, 0.25s;
    transition-property: background-color, color, border-color;
    transition-timing-function: ease, ease, ease;
    white-space: nowrap;
  }

  .button:hover,
  #submit_app:hover {
    background-image: none;
    background: #65ff8f;
    border-color: #65ff8f;
    color: rgb(5, 25, 45);
    outline: 0;
    text-decoration: none;
  }

  #main_fields div.field label,
  #custom_fields div.field label,
  #eeoc_fields div.field label {
    font-size: 13px;
  }
}

/*! CSS Used fontfaces */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  src: url(https://boards.cdn.greenhouse.io/assets/opensans-light-webfont-a197d699b90d9f53b9a5a85f0c1a8ff349295b023ea3d29278aace731ea40d08.eot);
  src: local("Open Sans Light"), local("OpenSans-Light"), url(https://boards.cdn.greenhouse.io/assets/opensans-light-webfont-a197d699b90d9f53b9a5a85f0c1a8ff349295b023ea3d29278aace731ea40d08.eot#iefix) format("embedded-opentype"), url(https://boards.cdn.greenhouse.io/assets/opensans-light-webfont-18c8f1dcbf66f0f9d4278f6b9f1256746fc1407e38c9387b0a1d0ca0002f5d16.woff) format("woff"), url(https://boards.cdn.greenhouse.io/assets/opensans-light-webfont-af71462b76d5375fd6d4b8be108cb4afe4bca8a59d3ec713b0b416dc902845ae.woff2) format("woff2"), url(https://boards.cdn.greenhouse.io/assets/opensans-light-webfont-908338ba8355d10186fed4cd8d2815af3d49f8cf65f14f42300370bd8bd504b4.ttf) format("truetype");
}

@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: url(https://boards.cdn.greenhouse.io/assets/opensans-regular-webfont-f87ccee59fa50a390e43b54e88728daeca3afaf912140828a8e12a8b1779cb6d.eot);
  src: local("Open Sans Regular"), local("OpenSans-Regular"), url(https://boards.cdn.greenhouse.io/assets/opensans-regular-webfont-f87ccee59fa50a390e43b54e88728daeca3afaf912140828a8e12a8b1779cb6d.eot#iefix) format("embedded-opentype"), url(https://boards.cdn.greenhouse.io/assets/opensans-regular-webfont-1437c45b2d45f8fbd6221cde5b4a513b75d70556462a46da386824667fe8d1bb.woff) format("woff"), url(https://boards.cdn.greenhouse.io/assets/opensans-regular-webfont-96dc27aebdaf01100cb77db6bbac5cd7daa8a35373951332c0e21a9692dbf6f0.woff2) format("woff2"), url(https://boards.cdn.greenhouse.io/assets/opensans-regular-webfont-09e3537e846e11d96695124f27c922e7fa6f4a68143c97ae566b413db47ba23a.ttf) format("truetype");
}

@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  src: url(https://boards.cdn.greenhouse.io/assets/opensans-bold-webfont-037e7226f6a5c480b6f001f64cf27aea5d8602f03a1060434b3ef576de693195.eot);
  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url(https://boards.cdn.greenhouse.io/assets/opensans-bold-webfont-037e7226f6a5c480b6f001f64cf27aea5d8602f03a1060434b3ef576de693195.eot#iefix) format("embedded-opentype"), url(https://boards.cdn.greenhouse.io/assets/opensans-bold-webfont-91052d9156ceddbbcd7e789cd73349973266fc5c1c14890b39bbf9d10bdaab10.woff) format("woff"), url(https://boards.cdn.greenhouse.io/assets/opensans-bold-webfont-4ef1dccc6571ffd3dc5fdce46abb4e1438bb1ddf736b35497382c13d740f94a4.woff2) format("woff2"), url(https://boards.cdn.greenhouse.io/assets/opensans-bold-webfont-5353bea6829eda1344a1d7e81c653a1e78d63cc03b2c0c92b7c008c16f8b5159.ttf) format("truetype");
}

@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  src: url(https://boards.cdn.greenhouse.io/assets/opensans-extrabold-webfont-35e06ae75644ba7f7afd3d9f0753e04dd136c90b02eb3e0c37305f0fb2a227cb.eot);
  src: local("Open Sans Bold"), local("OpenSans-Bold"), url(https://boards.cdn.greenhouse.io/assets/opensans-extrabold-webfont-35e06ae75644ba7f7afd3d9f0753e04dd136c90b02eb3e0c37305f0fb2a227cb.eot#iefix) format("embedded-opentype"), url(https://boards.cdn.greenhouse.io/assets/opensans-extrabold-webfont-6ac5e3f5b6b7e9928f2d21021be1f8b2bb83d7d4f9cff96279bd04b9b8595eb4.woff) format("woff"), url(https://boards.cdn.greenhouse.io/assets/opensans-extrabold-webfont-ab093eec80c6ccf3f90653e03117219afd87546053548a5d0f0960416e3bbd9d.woff2) format("woff2"), url(https://boards.cdn.greenhouse.io/assets/opensans-extrabold-webfont-9963ffcbb792c4a9fb932936ba0712cc9f52de346c2b8101dfe001e44a4dd3b1.ttf) format("truetype");
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJbecmNE.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FF;
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z11lFc-K.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FF;
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1JlFc-K.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}</style>