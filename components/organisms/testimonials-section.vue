<script setup lang="ts">
import { ref } from 'vue'
import { useSwiper } from 'swiper/vue'

const swiper = ref();
const onSwiper = (s: any) => {
  swiper.value = s;
};
const slides = ref([
  {
    image: "https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/361622809_1405216150045969_612057406216185243_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Bld7BmjS7BMAX-7W2iw&_nc_ht=scontent.fhan3-1.fna&oh=00_AfDbFqJplg-VuDbY5kufxGL1pPqUsYBsiO8s_74dQZ3ibA&oe=6578F297",
    name: "Dungz",
    description: "Tôi chỉ có một sự ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, ai cũng được học hành.",
    job: "Data analytics engineer",
  },
  {
    image: "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/332154071_586278543517560_1187480461020209897_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=fYHoap0hdX8AX8JWV0U&_nc_ht=scontent.fhan4-1.fna&oh=00_AfB64ScA5Qj2y4KZvpE5sSV2J7PMQNKKgffkuQd9d4Ykvg&oe=65793990",
    name: "Toanz",
    description: "Tôi chỉ có một sự ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, ai cũng được học hành.",
    job: "Data analytics engineer",
  },
  {
    image: "https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/355710470_3434377000211398_747800237371895852_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Zf9EVZZMMYsAX-QStPe&_nc_ht=scontent.fhan3-1.fna&oh=00_AfDa9-ibOo2Y_b4rKvsNEfsb8sGB8Mjw39uCs6Y4acJwBQ&oe=65799120",
    name: "Toanz",
    description: "Tôi chỉ có một sự ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, ai cũng được học hành.",
    job: "Data analytics engineer",
  },
  {
    image: "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/102773528_1440827972790661_4846879131386815026_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=be3454&_nc_ohc=qYKKjescrIwAX-Jyl6K&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBDHMMANDcUQVOIr1cE5osexyvDVG-dXb5x48aTTRWyWw&oe=659C2C26",
    name: "Toanz",
    description: "Tôi chỉ có một sự ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, ai cũng được học hành.",
    job: "Data analytics engineer",
  },
  {
    image: "https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/200029006_3004662959789884_7946823596225074348_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=be3454&_nc_ohc=eRR7EtxydsYAX9gXmI3&_nc_ht=scontent.fhan3-4.fna&oh=00_AfAWCeYrWJoTBYjlKv91n1XyPr6ANakQRgK0442ZP8aLhQ&oe=659C0A8E",
    name: "Toanz",
    description: "Tôi chỉ có một sự ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, ai cũng được học hành.",
    job: "Data analytics engineer",
  },
])
</script>

<template>
  <section class="css-120mjyq-Teammates">
    <div class="css-osxduj-Teammates">
      <div class="css-5dizln-Teammates">
        <h2 class="css-lhgd8i-Teammates">Các học viên nói gì về Golivedev</h2>
        <div class="css-i5nlvb">
          <Swiper   
            :slides-per-view="1.1"
            :space-between="0"
            @swiper="onSwiper"
            class="swiper-teammate"
            :breakpoints="{
              '600': {
                slidesPerView: 1.5,
              },
              '768': {
                slidesPerView: 2.1,
                
              },
              '1024': {
                slidesPerView: 3,
                
              },
            }"
          >
            <SwiperSlide
              v-for="(slide,index) in slides"
              :key="index"
            >
              <li :data-index="index" aria-hidden="false"
                class="react-multi-carousel-item react-multi-carousel-item--active "
                style="flex: 1 1 auto; position: relative;"><div
                  rel="noopener" target="_blank" class="css-1teal8m">
                  <div class="css-qxy6xk">
                    <div class="css-6s6989">
                      <img :src="slide.image" alt="image"/>
                      <div class="ie-accentTop css-arnezi">
                        <div class="css-gk2kgb">
                          <p class="css-e0uos6">{{slide.description}}.</p>
                          <p class="css-6rntzk"><strong>{{slide.name}}</strong> là một <strong>{{ slide.job }}</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></li>
            </SwiperSlide>
            <div class="css-fr4fql"><button @click="swiper.slidePrev()" aria-label="Previous testimonial" class="css-nwc16v"><svg
                  viewBox="0 0 18 18" aria-hidden="true" height="24" role="img" width="24">
                  <path fill="currentColor"
                    d="M4.42 8L16 7.998a1 1 0 010 2L4.41 10l3.285 3.296a.998.998 0 11-1.417 1.41l-4.93-4.948A.998.998 0 011.36 8.23l4.933-4.938a1 1 0 011.414 0c.39.391.39 1.025 0 1.416L4.42 7.999z"
                    fill-rule="evenodd"></path>
                </svg></button><button @click="swiper.slideNext()" aria-label="Next testimonial" class="css-1xb391d"><svg viewBox="0 0 18 18"
                  aria-hidden="true" height="24" role="img" width="24">
                  <title>Right Arrow</title>
                  <path fill="currentColor"
                    d="M13.58 10L2 10.002a1 1 0 010-2L13.59 8l-3.285-3.296a.998.998 0 111.417-1.41l4.93 4.948a.998.998 0 01-.012 1.527l-4.933 4.938a1 1 0 01-1.414 0 1.002 1.002 0 010-1.416l3.287-3.29z"
                    fill-rule="evenodd"></path>
                </svg></button></div>
          </Swiper>
        </div>
      </div>
    </div>
    <div aria-hidden="true" class="css-kjqpdf-Teammates"><svg height="164" width="110"
        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g fill="none" fill-rule="evenodd" transform="rotate(90 55 55)">
          <circle class="broome_svg__c1" cx="109.03" cy="54.59" fill="#974dff" r="54.59"></circle>
          <circle class="broome_svg__c2" cx="54.59" cy="54.59" fill="#ff6ea9" r="54.59"></circle>
          <path class="broome_svg__p1"
            d="M81.81 7.26a54.59 54.59 0 0 1 0 94.67 54.57 54.57 0 0 1-27.38-47.34A54.57 54.57 0 0 1 81.71 7.31z"
            fill="#05172c"></path>
        </g>
      </svg></div>
    <div aria-hidden="true" class="css-1l47pq2-Teammates"><svg height="164" width="110"
        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="css-1n4naci-Teammates">
        <g fill="none" fill-rule="evenodd" transform="rotate(90 55 55)">
          <circle class="broome_svg__c1" cx="109.03" cy="54.59" fill="#974dff" r="54.59"></circle>
          <circle class="broome_svg__c2" cx="54.59" cy="54.59" fill="#ff6ea9" r="54.59"></circle>
          <path class="broome_svg__p1"
            d="M81.81 7.26a54.59 54.59 0 0 1 0 94.67 54.57 54.57 0 0 1-27.38-47.34A54.57 54.57 0 0 1 81.71 7.31z"
            fill="#05172c"></path>
        </g>
      </svg></div>
  </section>
</template>

<style scoped>
h2,
li,
p,
ul {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
}

button {
  background: transparent;
  box-shadow: none;
  border: 0;
}

button {
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
  .ie-accentTop:after {
    transform: translateY(12px) translateY(-100%);
  }
}

/*! CSS Used from: https://www.datacamp.com/_next/static/css/d34dd677d5a9a5aa.css */
.react-multi-carousel-list {
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.react-multi-carousel-track {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  position: relative;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  will-change: transform, transition;
}

.react-multi-carousel-item {
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.swiper {overflow:visible!important;}
.css-6s6989 img {
  background-size: cover;
  border-radius: 50%;
  content: "";
  height: 94px;
  left: 24px;
  position: absolute;
  top: 0px;
  width: 94px;
  z-index: 5;
}
.swiper-teammate .swiper-slide:nth-child(3n+2) .ie-accentTop::after{
  background-color: rgb(3, 239, 98);
}
.swiper-teammate .swiper-slide:nth-child(3n) .ie-accentTop::after{
  background-color: rgb(255, 110, 169);
}
@media (-ms-high-contrast:active),
(-ms-high-contrast:none) {
  .react-multi-carousel-item {
    flex-shrink: 0 !important;
  }

  .react-multi-carousel-track {
    overflow: visible !important;
  }
}

/*! CSS Used from: Embedded */
* {
  box-sizing: border-box;
}

/*! CSS Used from: Embedded */
.css-120mjyq-Teammates {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  position: relative;
}

/*! CSS Used from: Embedded */
.css-osxduj-Teammates {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  background-color: #7933ff;
  overflow-x: hidden;
  width: 100%;
}

/*! CSS Used from: Embedded */
.css-5dizln-Teammates {
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
  margin-bottom: 120px;
}

/*! CSS Used from: Embedded */
.css-lhgd8i-Teammates {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.2;
  margin: 0;
  color: #ffffff;
  margin-bottom: 48px;
  margin-top: 140px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

@media screen and (min-width: 992px) {
  .css-lhgd8i-Teammates {
    font-size: 2.5rem;
  }
}

/*! CSS Used from: Embedded */
.css-i5nlvb .carousel-container {
  overflow: visible;
}

/*! CSS Used from: Embedded */
.css-kjqpdf-Teammates {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
  left: 0;
  margin-right: 390px;
  position: absolute;
  padding-right: 50%;
  right: 0;
  top: -81px;
}

.css-kjqpdf-Teammates>* {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

/*! CSS Used from: Embedded */
.css-1l47pq2-Teammates {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  bottom: -81px;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  left: 0;
  margin-left: 380px;
  padding-left: 50%;
  position: absolute;
  right: 0;
}

.css-1l47pq2-Teammates>* {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

/*! CSS Used from: Embedded */
.css-1n4naci-Teammates {
  display: none;
}

.css-1n4naci-Teammates .broome_svg__c1 {
  fill: #974dff;
}

.css-1n4naci-Teammates .broome_svg__c2 {
  fill: #06bdfc;
}

@media screen and (min-width: 768px) {
  .css-1n4naci-Teammates {
    display: inline-block;
  }
}

/*! CSS Used from: Embedded */
.css-1teal8m {
  text-decoration: none;
}

.css-qxy6xk {
  box-sizing: border-box;
  margin: 0px 12px;
  min-width: 0px;
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  position: relative;
}

.css-6s6989 {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
}



.css-arnezi {
  box-sizing: border-box;
  margin: 47px 0px 0px;
  min-width: 0px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  overflow: hidden;
  padding: 71px 24px 24px;
  position: relative;
  text-decoration: none;
}

.css-arnezi>* {
  color: rgb(5, 25, 45);
  position: relative;
  z-index: 2;
}

.css-arnezi::after {
  background-color: rgb(252, 206, 13);
  inset: 0px;
  content: "";
  position: absolute;
  transform: translateY(calc(12px - 100%));
  transition: transform 0.3s cubic-bezier(0.85, 0, 0.15, 1) 0s;
  z-index: 1;
}

.css-arnezi:active::after,
.css-arnezi:focus::after,
.css-arnezi:hover::after {
  transform: translateY(0px);
}

.css-gk2kgb {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.css-e0uos6 {
  box-sizing: border-box;
  margin: 0px 0px 24px;
  min-width: 0px;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.css-6rntzk {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-size: 1rem;
  line-height: 1.5;
}

.css-1me3ehr {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  flex-shrink: 0;
}

.css-fxjwab {
  box-sizing: border-box;
  margin: 24px 0px 0px;
  min-width: 0px;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 700;
}

.css-r795jk {
  margin-left: 4px;
}

.css-1m38ry6 {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
}


.css-1kduat0 {
  box-sizing: border-box;
  margin: 47px 0px 0px;
  min-width: 0px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  overflow: hidden;
  padding: 71px 24px 24px;
  position: relative;
  text-decoration: none;
}

.css-1kduat0>* {
  color: rgb(5, 25, 45);
  position: relative;
  z-index: 2;
}

.css-1kduat0::after {
  background-color: rgb(3, 239, 98);
  inset: 0px;
  content: "";
  position: absolute;
  transform: translateY(calc(12px - 100%));
  transition: transform 0.3s cubic-bezier(0.85, 0, 0.15, 1) 0s;
  z-index: 1;
}

.css-1kduat0:active::after,
.css-1kduat0:focus::after,
.css-1kduat0:hover::after {
  transform: translateY(0px);
}

.css-57j8ix {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
}



.css-1ou8suo {
  box-sizing: border-box;
  margin: 47px 0px 0px;
  min-width: 0px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  overflow: hidden;
  padding: 71px 24px 24px;
  position: relative;
  text-decoration: none;
}

.css-1ou8suo>* {
  color: rgb(5, 25, 45);
  position: relative;
  z-index: 2;
}

.css-1ou8suo::after {
  background-color: rgb(255, 110, 169);
  inset: 0px;
  content: "";
  position: absolute;
  transform: translateY(calc(12px - 100%));
  transition: transform 0.3s cubic-bezier(0.85, 0, 0.15, 1) 0s;
  z-index: 1;
}

.css-1ou8suo:active::after,
.css-1ou8suo:focus::after,
.css-1ou8suo:hover::after {
  transform: translateY(0px);
}

.css-13corx2 {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
}



.css-coid2j {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
}

.css-coid2j::before {
  background-color: rgb(5, 25, 45);
  background-image: url("https://images.datacamp.com/image/upload/w_188/v1600538292/Marketing/Teammates/maarten.jpg");
  background-size: cover;
  border-radius: 50%;
  content: "";
  height: 94px;
  left: 24px;
  position: absolute;
  top: 0px;
  width: 94px;
  z-index: 5;
}

.css-fr4fql {
  box-sizing: border-box;
  margin: 32px 0px 0px;
  min-width: 0px;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
}

.css-nwc16v {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  appearance: none;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  font-size: inherit;
  padding: 2px 3px;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(229, 225, 218);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 48px;
  -webkit-box-pack: center;
  justify-content: center;
  transition: transform 0.3s ease 0s;
  width: 48px;
  color: rgb(121, 51, 255);
}

.css-nwc16v:hover {
  transform: scale(1.1);
}

.css-nwc16v:focus:not(:focus-visible) {
  outline: none;
}

.css-1xb391d {
  box-sizing: border-box;
  margin: 0px 0px 0px 16px;
  min-width: 0px;
  appearance: none;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  font-size: inherit;
  padding: 2px 3px;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(229, 225, 218);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 48px;
  -webkit-box-pack: center;
  justify-content: center;
  transition: transform 0.3s ease 0s;
  width: 48px;
  color: rgb(121, 51, 255);
}

.css-1xb391d:hover {
  transform: scale(1.1);
}

.css-1xb391d:focus:not(:focus-visible) {
  outline: none;
}
</style>