<script setup>
import { onMounted } from "vue"

onMounted(() => {
  console.log(document.querySelectorAll(".css-ystmte-Question"));
  const faqList = document.querySelectorAll(".css-ystmte-Question");
  faqList.forEach((item) => {
    item.addEventListener("click", () => {
      const answer = item.querySelector(".css-16pequq-Question");
      answer.classList.toggle("active");
    })
  })
})
</script>
<template>
  <section class="css-1ulkoej-FAQ">
    <h2 class="css-1xh2gd6-FAQ">FAQs</h2>
    <div class="css-eitouo-FAQ"><button
        class="css-ystmte-Question">
        <h3
          style="align-items:flex-start;display:flex;justify-content:space-between"
          class="css-if81wc-Box">Why DataCamp?<svg
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            class="css-fbzwtu-Question">
            <path
              d="M6.504 0v5.494H12v1.01H6.505L6.507 12h-1.01l-.002-5.495L0 6.507v-1.01l5.494-.002V0z"
              fill="#7933ff"></path>
          </svg></h3>
        <div class="css-16pequq-Question active">
          <div class="css-7zcmku-Question">
            <p class="css-w9r6s8-Question">Behind
              every great DataCamp course are the
              passionate folks who built it. We
              decided early on that the best way for
              us to maximize value for our learners
              is to build courses in partnership
              with top companies and experts in the
              data science and analytics community.
              We've worked with with the biggest
              names in data science, including
              package creators, published authors,
              and thought leaders from industry and
              academia.</p>
          </div>
        </div>
      </button><button class="css-ystmte-Question">
        <h3
          style="align-items:flex-start;display:flex;justify-content:space-between"
          class="css-if81wc-Box">Who makes a great
          DataCamp instructor?<svg
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            class="css-fbzwtu-Question">
            <path
              d="M6.504 0v5.494H12v1.01H6.505L6.507 12h-1.01l-.002-5.495L0 6.507v-1.01l5.494-.002V0z"
              fill="#7933ff"></path>
          </svg></h3>
        <div class="css-16pequq-Question">
          <div class="css-7zcmku-Question">
            <p class="css-w9r6s8-Question">DataCamp
              instructors are subject matter experts
              in data science and analytics with a
              passion for teaching. They take great
              pleasure in demystifying complex
              topics, and making them accessible to
              beginners through clear communication
              and storytelling. Although we work
              closely with our instructors to
              support them throughout the course
              development process, they take
              ownership over their work and take
              pride in the details.</p>
          </div>
        </div>
      </button><button class="css-ystmte-Question">
        <h3
          style="align-items:flex-start;display:flex;justify-content:space-between"
          class="css-if81wc-Box">Who will have
          access to my course?<svg
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            class="css-fbzwtu-Question">
            <path
              d="M6.504 0v5.494H12v1.01H6.505L6.507 12h-1.01l-.002-5.495L0 6.507v-1.01l5.494-.002V0z"
              fill="#7933ff"></path>
          </svg></h3>
        <div class="css-16pequq-Question">
          <div class="css-7zcmku-Question">
            <p class="css-w9r6s8-Question">DataCamp
              reaches more than 12 million learners
              in over 180 countries. Every one of
              these people will have access to the
              first chapter of your course for free,
              so they can try before they buy. The
              remainder of your course will be
              available to thousands of loyal
              DataCamp subscribers who pay a low
              monthly subscription for access to our
              entire course library.</p>
          </div>
        </div>
      </button><button class="css-ystmte-Question">
        <h3
          style="align-items:flex-start;display:flex;justify-content:space-between"
          class="css-if81wc-Box">How does a new
          instructor get started?<svg
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            class="css-fbzwtu-Question">
            <path
              d="M6.504 0v5.494H12v1.01H6.505L6.507 12h-1.01l-.002-5.495L0 6.507v-1.01l5.494-.002V0z"
              fill="#7933ff"></path>
          </svg></h3>
        <div class="css-16pequq-Question">
          <div class="css-7zcmku-Question">
            <p class="css-w9r6s8-Question">One of
              our Curriculum Managers will work with
              you to develop a short audition video.
              This gives you an opportunity to show
              us your stuff and get a feel for what
              it’s like to work with us. Likewise,
              it gives us an opportunity to see you
              in action and understand how you work.
            </p>
          </div>
        </div>
      </button><button class="css-ystmte-Question">
        <h3
          style="align-items:flex-start;display:flex;justify-content:space-between"
          class="css-if81wc-Box">How long does it
          take to create a course?<svg
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            class="css-fbzwtu-Question">
            <path
              d="M6.504 0v5.494H12v1.01H6.505L6.507 12h-1.01l-.002-5.495L0 6.507v-1.01l5.494-.002V0z"
              fill="#7933ff"></path>
          </svg></h3>
        <div class="css-16pequq-Question">
          <div class="css-7zcmku-Question">
            <p class="css-w9r6s8-Question">The
              amount of time required for course
              development varies considerably based
              on experience and how much of the
              content already exists in another
              form. As a rule of thumb, we suggest
              you set aside 10-30 hours over 6-8
              weeks to get everything done.</p>
          </div>
        </div>
      </button><button class="css-ystmte-Question">
        <h3
          style="align-items:flex-start;display:flex;justify-content:space-between"
          class="css-if81wc-Box">How will DataCamp
          help?<svg viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            class="css-fbzwtu-Question">
            <path
              d="M6.504 0v5.494H12v1.01H6.505L6.507 12h-1.01l-.002-5.495L0 6.507v-1.01l5.494-.002V0z"
              fill="#7933ff"></path>
          </svg></h3>
        <div class="css-16pequq-Question">
          <div class="css-7zcmku-Question">
            <p class="css-w9r6s8-Question">Everyone
              at DataCamp is invested in making your
              course a success. You will work
              closely with one of our Curriculum
              Managers to determine the topic and
              scope of your course, then to produce
              a detailed outline for the content.
              Once the vision for your course is
              clear, we’ll partner you with one of
              our brilliant Content Developers. This
              person will help see your course
              through to completion, providing
              in-depth feedback on your course
              content, acting as a sounding board
              for ideas, and (most importantly)
              being an advocate for our learners.
              Once your course launches, we share
              detailed anonymized data on how
              learners are engaging with your
              material, so that you can improve it
              over time.</p>
          </div>
        </div>
      </button></div>
  </section>
</template>

<style scoped>
h2,
h3,
p {
  margin: 0;
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

/*! CSS Used from: Embedded */
* {
  box-sizing: border-box;
}

/*! CSS Used from: Embedded */
.css-1ulkoej-FAQ {
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
  padding-bottom: 40px;
  padding-top: 56px;
  padding-left: 16px;
  padding-right: 16px;
}

@media screen and (min-width: 992px) {
  .css-1ulkoej-FAQ {
    padding-bottom: 96px;
    padding-top: 76px;
  }
}

/*! CSS Used from: Embedded */
.css-1xh2gd6-FAQ {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 32px;
  text-align: center;
}

@media screen and (min-width: 992px) {
  .css-1xh2gd6-FAQ {
    font-size: 2.5rem;
  }
}

/*! CSS Used from: Embedded */
.css-eitouo-FAQ {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  border-radius: 0;
}

@media screen and (min-width: 600px) {
  .css-eitouo-FAQ {
    background-color: #ffffff;
  }
}

/*! CSS Used from: Embedded */
.css-ystmte-Question {
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
  background-color: #ffffff;
  border: none;
  color: #05192D;
  cursor: pointer;
  font-family: inherit;
  padding: 16px;
  text-align: left;
  width: 100%;
  transition: all .3s ease;
}
.css-ystmte-Question:hover {
  background-color: #eee;
}

.css-ystmte-Question:not(:last-child) {
  margin-bottom: 16px;
}

/*! CSS Used from: Embedded */
.css-if81wc-Box {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin-top: 0;
}

/*! CSS Used from: Embedded */
.css-fbzwtu-Question {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin-left: 16px;
  margin-top: 6px;
  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  transform: none;
  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.85, 0, 0.15, 1);
  transition: all 0.3s cubic-bezier(0.85, 0, 0.15, 1);
  width: 18px;
}

/*! CSS Used from: Embedded */
.css-16pequq-Question {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: #65707C;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  -webkit-transition: max-height 0.25s ease, opacity 0.4s cubic-bezier(0.85, 0, 0.15, 1);
  transition: max-height 0.25s ease, opacity 0.4s cubic-bezier(0.85, 0, 0.15, 1);
  visibility: hidden;
}
.css-16pequq-Question.active {
  max-height: 1000px;
  opacity: 1;
  visibility: visible;
}

/*! CSS Used from: Embedded */
.css-7zcmku-Question {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  padding-top: 16px;
}

/*! CSS Used from: Embedded */
.css-w9r6s8-Question {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: #05192D;
  font-size: 16px;
  line-height: 1.5;
  color: #65707C;
}
</style>