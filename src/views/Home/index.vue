<template>
  <VideoPopup
    :video="data.video_src.value"
    :showPopup="toggle.showPopup.value"
    @close-popup="closePopup"
  />
  <WvNavbar />
  <div class="patterns">
    <img class="pattern_1" src="@/assets/images/pattern.svg" alt="" />
    <img class="pattern_2" src="@/assets/images/pattern_bottom.svg" alt="" />
    <img class="foot_print" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-2" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-3" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-4" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-5" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-6" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-7" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-8" src="@/assets/images/dog_foot.svg" alt="" />
  </div>
  <div class="page-wrapper">
    <!-- section 01 -->
    <section class="section section-01">
      <div class="primary-part">
        <p class="title">We Care</p>
        <p class="subtitle">
          Because
          <span class="highlight">
            You Care
            <span class="highlight-underline">
              <img
                src="@/assets/images/title_underline.svg"
                alt="underline arc"
              />
            </span>
          </span>
        </p>
        <p class="description">
          {{ data.sections.one.subtitle }}
        </p>
        <div class="actions">
         <router-link :to="{ name: 'app' }" class="get-app-button">
            <span class="icon">
              <img src="@/assets/images/download-icon-1.svg" alt="" />
            </span>
            <span class="text">Get WitVet</span>
          </router-link>
          <button
            type="button"
            class="play-video button"
            @click.prevent="showPopupFunc()"
          >
            <span class="icon">
              <img src="@/assets/images/play-video-icon.svg" alt="" />
            </span>
            <span class="text">Play Video</span>
          </button>
          <div class="os-icons">
            <span class="item">
              <img src="@/assets/images/apple-icon-home.svg" alt="" />
            </span>
            <span class="item">
              <img src="@/assets/images/androin-icon-home.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
      <div class="secondary-part">
        <div class="image-05 image">
          <img src="@/assets/images/pets.svg" alt="" />
        </div>
        <div class="image-01 image">
          <img src="@/assets/images/pet_sec1.svg" alt="" />
        </div>
        <div class="image-02 image">
          <img src="@/assets/images/pet_sec2.svg" alt="" />
        </div>
        <div class="image-03 image">
          <img src="@/assets/images/pet_shop.png" alt="" />
        </div>
        <div class="image-04 image">
          <img src="@/assets/images/star_card.png" alt="" />
        </div>
        <div class="image-06 image">
          <img src="@/assets/images/map.svg" alt="" />
        </div>
        <div class="image-07 image">
          <img src="@/assets/images/location_icon.svg" alt="" />
        </div>
        <div class="image-08 image">
          <img src="@/assets/images/line.svg" alt="" />
        </div>
      </div>
    </section>

    <!-- section 02 -->
    <section class="section section-02">
      <div class="categories-wrapper">
        <div
          class="item"
          v-for="item in data.sections.two.items"
          :key="item"
          :data-scalar-x="getRandomIntInclusive(-3, 3)"
          :data-scalar-y="getRandomIntInclusive(-3, 3)"
        >
          <span class="parallax-wrapper" data-depth="2">
            <img :src="item" alt="Category image" />
          </span>
        </div>
        <div class="count">
          <span class="number">{{ data.sections.two.count }}</span>
          <span class="text">Categories</span>
        </div>
      </div>
      <div class="section-content">
        <span class="shadow-01"></span>
        <span class="shadow-02"></span>
        <span class="shadow-03"></span>
        <div class="inner-box">
          <span class="title">
            <span class="number">
              {{ data.sections.two.count }}
              <span class="plus">+</span>
            </span>
            <span class="text">{{ data.sections.two.title }}</span>
          </span>
          <p class="description">
            {{ data.sections.two.subtitle }}
          </p>
        </div>
      </div>
    </section>

    <!-- section 03 -->
    <section class="section section-03">
      <div class="dashed-circles">
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
      </div>
      <div class="section-content">
        <p class="title">
          <span class="highlight">
            +{{ data.sections.three.count }}
            {{ data.sections.three.highlight }}
            <span class="highlight-underline">
              <img
                src="@/assets/images/veterinaryLine.svg"
                alt="underline arc"
              />
            </span>
          </span>
          {{ data.sections.three.title }}
        </p>
        <p class="description">
          {{ data.sections.three.subtitle }}
        </p>
      </div>
      <div class="clinics">
        <div
          class="item"
          v-for="item in data.sections.three.items"
          :key="item.id"
        >
          <div class="data">
            <span class="arrow-down"></span>
            <span class="thumbnail">
              <img :src="item.images" alt="Clinic image" />
            </span>
            <div class="content">
              <span class="rate">
                <div
                  class="filled"
                  :style="{ width: (item.rate / 5) * 100 + '%' }"
                ></div>
              </span>
              <p class="title">{{ item.title }}</p>
              <div class="detail">
                <div class="detail__item">
                  <img src="@/assets/images/location.svg" alt="" />
                  <p>2.4 <span>km</span></p>
                </div>
                <div class="detail__item">
                  <img src="@/assets/images/clock_2.svg" alt="" />
                  <p>16 <span>min</span></p>
                </div>
              </div>
            </div>
          </div>
          <span class="image">
            <img :src="item.images" alt="Clinic image" />
          </span>
        </div>
      </div>
    </section>

    <!-- section 04 -->
    <section class="section section-04">
      <p class="title">
        <span class="arrow-down"></span>

        <span class="available_pets"
          >{{ data.sections.four.count }} more pets available</span
        >
        <span class="highlight">
          {{ data.sections.four.highlight }}
          <span class="highlight-underline">
            <img
              src="@/assets/images/petLine.svg"
              alt="underline arc"
            />
          </span>
        </span>
        {{ data.sections.four.title }}
      </p>
      <div class="posts">
        <div
          class="item"
          v-for="item in data.sections.four.items"
          :key="item.id"
        >
          <div class="head">
            <span class="image">
              <img :src="item.user.image" alt="User avatar" />
            </span>
            <div class="data">
              <p class="title">{{ item.user.name }}</p>
              <p class="date">{{ item.publish_time }}</p>
            </div>
          </div>
          <div :class="['image', item.images.length > 1 ? 'multiple' : '']">
            <div
              class="image-item"
              v-for="(image, index) in item.images"
              :key="index"
            >
              <img :src="image" alt="Post image" />
            </div>
          </div>
          <div class="yellow_line"></div>
          <p class="name">
            {{ item.title }}
          </p>
        </div>
      </div>
    </section>

    <!-- section 05 -->
    <section class="section section-05">
      <p class="title">
        <span class="highlight">
          {{ data.sections.five.highlight }}
          <span class="highlight-underline">
            <img
              src="@/assets/images/sellLine.svg"
              alt="underline arc"
            />
          </span>
        </span>
        {{ data.sections.five.title }}
      </p>
      <p class="description">
        {{ data.sections.five.subtitle }}
      </p>
      <div class="content">
        <div class="items">
          <div
            class="item"
            v-for="(item, index) in data.sections.five.items"
            :key="index"
          >
            <span class="number"> {{ index + 1 }} </span>
            <div class="data">
              <p class="title">{{ item.title }}</p>
              <p class="description">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="art">
          <img class="art__dog" src="@/assets/images/art-01.svg" alt="" />
          <div class="bubble__one">
            <div class="box">
              <span class="title"> Dog Collar </span>
              <span class="sub_title">$34</span>
            </div>
          </div>
          <div class="bubble__two">
            <div class="bubble__two--box">
              <img class="art__img" src="@/assets/images/user-1.svg" alt="" />
              <div class="box">
                <span class="title"> Dog Collar </span>
                <span class="sub_title">$34</span>
              </div>
            </div>
          </div>
          <div class="bubble__three">
            <span class="title">Dr hanii </span>
            <span class="description"
              >In publishing and graphic design, Lorem ipsum is
            </span>
          </div>
          <img class="art__user" src="@/assets/images/user-1.svg" alt="" />
        </div>
      </div>
    </section>
  </div>

  <WvFooter />
</template>

<script>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { getSubTitle } from "@/api/landing/landing.api";
import Parallax from "parallax-js";
import VideoPopup from "@/components/VideoPopup";
// import ScrollMagic from "scrollmagic";
import { TimelineMax, ScrollTrigger, gsap } from "gsap/all";
// import {
//   TimelineMax,
//   TweenMax,
//   Power2,
//   Linear,
//   Elastic,
//   Bounce,
//   TextPlugin,
//   ScrollTrigger,
//   gsap,
// } from "gsap/all";
// //
//
//

export default {
  name: "App",
  components: {
    VideoPopup,
  },
  setup() {
    const toggle = reactive({
      showPopup: {
        value: false,
      },
    });
    const data = reactive({
      video_src: {
        value: "",
      },
      sections: {
        one: {
          title: "",
          highlight: "",
          subtitle: "",
          video: null,
        },
        two: {
          title: "",
          subtitle: "",
          count: null,
          items: [],
        },
        three: {
          title: "",
          highlight: "",
          subtitle: "",
          count: null,
          items: [],
        },
        four: {
          title: "",
          highlight: "",
          count: null,
          items: [],
        },
        five: {
          title: "",
          highlight: "",
          subtitle: "",
          count: null,
          items: [],
        },
      },
    });

    function showPopupFunc() {
      toggle.showPopup.value = true;
    }
    function closePopup() {
      toggle.showPopup.value = false;
    }
    const handleClinicsActiveClass = () => {
      const clinics = document.querySelectorAll(".section-03 .clinics .item");
      if (clinics.length > 0) {
        clinics[Math.floor(Math.random() * clinics.length)].classList.add(
          "active"
        );

        setInterval(() => {
          for (const clinic of clinics) {
            clinic.classList.remove("active");
          }
          clinics[Math.floor(Math.random() * clinics.length)].classList.add(
            "active"
          );
        }, 7000);
      }
    };
    const handleSectionTwoParallax = () => {
      const categories = document.querySelectorAll(
        ".section-02 .categories-wrapper .item"
      );

      for (const item of categories) {
        new Parallax(item);
      }
    };
    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const promises = [];
    const getSubtitles = async () => {
      const promise = getSubTitle();

      promise
        .then((_data) => {
          data.video_src.value = _data.intro_section.video;
          // section one
          data.sections.one.title = _data.texts["intro.title"];
          data.sections.one.highlight = _data.texts["intro.title_highLight"];
          data.sections.one.subtitle = _data.texts["intro.subtitle"];

          // section two
          data.sections.two.title = _data.texts["catgegory.title"];
          data.sections.two.subtitle = _data.texts["category.subtitle"];
          data.sections.two.count = _data.category_section.count;
          data.sections.two.items = _data.category_section.list;
          if (data.sections.two.items.length > 6) {
            data.sections.two.items = data.sections.two.items.splice(0, 6);
          }

          // section three
          data.sections.three.title = _data.texts["clinic.title"];
          data.sections.three.highlight = _data.texts["clinic.title_highLight"];
          data.sections.three.subtitle = _data.texts["clinic.subtitle"];
          data.sections.three.count = _data.clinic_section.count;
          data.sections.three.items = _data.clinic_section.list;
          if (data.sections.three.items.length > 9) {
            data.sections.three.items = data.sections.three.items.splice(0, 9);
          }

          // section four
          data.sections.four.title = _data.texts["post.title"];
          data.sections.four.highlight = _data.texts["post.title_highLight"];
          data.sections.four.count = _data.post_section.count;
          data.sections.four.items = _data.post_section.list.map((i) => {
            const item = i;
            if (item.images.length > 4) {
              item.images = item.images.splice(0, 4);
            }
            return item;
          });
          if (data.sections.four.items.length > 4) {
            data.sections.four.items = data.sections.four.items.splice(0, 4);
          }

          // section five
          data.sections.five.title = _data.texts["need.title"];
          data.sections.five.highlight = _data.texts["need.title_highLight"];
          data.sections.five.subtitle = _data.texts["need.subtitle"];
          data.sections.five.items = _data.pet_need_section.items;
          if (data.sections.five.items.length > 3) {
            data.sections.five.items = data.sections.five.items.splice(0, 3);
          }
        })
        .catch(() => {});

      return promise;
    };

    const prepareSectionOneForMotion = () => {
      let timeline = new TimelineMax();
      timeline
        .set(
          [
            ".page-wrapper .section-01 .secondary-part .image",
            ".page-wrapper .section-01 .primary-part .title",
            ".page-wrapper .section-01 .primary-part .subtitle",
            ".page-wrapper .section-01 .primary-part .subtitle .highlight",
            ".page-wrapper .section-01 .primary-part .description",
          ],
          {
            opacity: 0,
            visibility: "hidden",
            y: 20,
          }
        )
        .set(".page-wrapper .section-01 .primary-part .actions", {
          opacity: 0,
          visibility: "hidden",
        });
    };
    const prepareSectionTwoForMotion = () => {
      let timeline = new TimelineMax();
      timeline.set(
        [
          ".page-wrapper .section-02 .categories-wrapper",
          ".page-wrapper .section-02 .categories-wrapper .item",
          ".page-wrapper .section-02 .categories-wrapper .count",
          ".page-wrapper .section-02 .section-content",
        ],
        {
          opacity: 0,
          visibility: "hidden",
        }
      );
    };
    const prepareSectionThreeForMotion = () => {
      let timeline = new TimelineMax();
      timeline
        .set(".page-wrapper .section-03 .dashed-circles", {
          scale: 0.6,
        })
        .set([".page-wrapper .section-03 .dashed-circles .item"], {
          opacity: 0,
          visibility: "hidden",
        })
        .set(
          [
            ".page-wrapper .section-03 .section-content .title",
            ".page-wrapper .section-03 .section-content .description",
          ],
          {
            opacity: 0,
            visibility: "hidden",
            y: 20,
          }
        )
        .set([".page-wrapper .section-03 .clinics .item"], {
          opacity: 0,
          visibility: "hidden",
        });
    };
    const prepareSectionFourForMotion = () => {
      let timeline = new TimelineMax();
      timeline
        .set(".page-wrapper .section-04 .title", {
          opacity: 0,
          visibility: "hidden",
        })
        .set([".page-wrapper .section-04 .posts .item"], {
          opacity: 0,
          visibility: "hidden",
          y: 30,
        });
    };
    const prepareSectionFiveForMotion = () => {
      let timeline = new TimelineMax();
      timeline.set(
        [
          ".page-wrapper .section-05 .title",
          ".page-wrapper .section-05 .description",
          ".page-wrapper .section-05 .content .items .item",
        ],
        {
          opacity: 0,
          visibility: "hidden",
          y: 30,
        }
      );
    };

    const handleSectionOneAnimation = () => {
      let timeline = new TimelineMax();
      timeline
        .staggerTo(
          [".page-wrapper .section-01 .secondary-part .image"],
          0.4,
          {
            opacity: 1,
            visibility: "visible",
          },
          0.1
        )
        .to(
          [
            ".page-wrapper .section-01 .primary-part .title",
            ".page-wrapper .section-01 .primary-part .subtitle",
            ".page-wrapper .section-01 .primary-part .subtitle .highlight",
            ".page-wrapper .section-01 .primary-part .description",
          ],
          0.4,
          {
            opacity: 1,
            visibility: "visible",
            y: 0,
          },
          1
        )
        .to(
          ".page-wrapper .section-01 .primary-part .actions",
          0.4,
          {
            opacity: 1,
            visibility: "visible",
          },
          0.5
        );
    };
    const handleSectionTwoAnimation = () => {
      let timeline = new TimelineMax({
        scrollTrigger: {
          trigger: ".section-02",
          start: "top 60%",
          toggleAction: "play none none none",
        },
      });
      timeline
        .to(".page-wrapper .section-02 .section-content", 0.4, {
          opacity: 1,
          visibility: "visible",
        })
        .to(
          ".page-wrapper .section-02 .categories-wrapper",
          0.4,
          {
            opacity: 1,
            visibility: "visible",
          },
          0.2
        )
        .staggerTo(
          [
            ".page-wrapper .section-02 .categories-wrapper .item",
            ".page-wrapper .section-02 .categories-wrapper .count",
          ],
          0.4,
          {
            opacity: 1,
            visibility: "visible",
          },
          0.1
        );
    };
    const handleSectionThreeAnimation = () => {
      let timeline = new TimelineMax({
        scrollTrigger: {
          trigger: ".section-03 .dashed-circles",
          start: "top 70%",
          toggleAction: "play none none none",
        },
      });

      timeline
        .to(".page-wrapper .section-03 .dashed-circles", 0.6, {
          scale: 1,
        })
        .staggerTo(
          [".page-wrapper .section-03 .dashed-circles .item"],
          0.6,
          {
            opacity: 1,
            visibility: "visible",
          },
          "=-0.6",
          0.1
        )
        .staggerTo(
          [
            ".page-wrapper .section-03 .section-content .title",
            ".page-wrapper .section-03 .section-content .description",
          ],
          0.4,
          {
            opacity: 1,
            visibility: "visible",
            y: 0,
          },
          0.2
        )
        .staggerTo(
          [".page-wrapper .section-03 .clinics .item"],
          0.3,
          {
            opacity: 1,
            visibility: "visible",
          },
          0.1
        );
    };
    const handleSectionFourAnimation = () => {
      let timeline = new TimelineMax({
        scrollTrigger: {
          trigger: ".section-04",
          start: "top 70%",
          toggleAction: "play none none none",
        },
      });
      timeline
        .to(".page-wrapper .section-04 .title", 0.4, {
          opacity: 1,
          visibility: "visible",
        })
        .staggerTo(
          [".page-wrapper .section-04 .posts .item"],
          0.6,
          {
            opacity: 1,
            visibility: "visible",
            y: 0,
          },
          0.2
        );
    };
    const handleSectionFiveAnimation = () => {
      let timeline = new TimelineMax({
        scrollTrigger: {
          trigger: ".section-05",
          start: "top 70%",
          toggleAction: "play none none none",
        },
      });
      timeline
        .to(
          [
            ".page-wrapper .section-05 .title",
            ".page-wrapper .section-05 .description",
          ],
          0.4,
          {
            opacity: 1,
            visibility: "visible",
            y: 0,
          }
        )
        .staggerTo(
          [".page-wrapper .section-05 .content .items .item"],
          0.4,
          {
            opacity: 1,
            visibility: "visible",
            y: 0,
          },
          0.2
        );
    };

    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);

      promises.push(getSubtitles());

      Promise.all(promises).then(() => {
        handleClinicsActiveClass();
        handleSectionTwoParallax();
        prepareSectionOneForMotion();
        prepareSectionTwoForMotion();
        prepareSectionThreeForMotion();
        prepareSectionFourForMotion();
        prepareSectionFiveForMotion();

        setTimeout(() => {
          document
            .querySelector(".witvet-wrapper")
            .classList.remove("isLoading");

          handleSectionOneAnimation();
          handleSectionTwoAnimation();
          handleSectionThreeAnimation();
          handleSectionFourAnimation();
          handleSectionFiveAnimation();

          // function ShowAnimate() {
          //   function ShowHeaderInResponseive() {
          //     let tl = new TimelineMax();
          //     tl.to(".navbar_main", { duration: 0.5, opacity: 1 });
          //     tl.to(".map", { duration: 0.5, opacity: 1, scale: 1.2 });

          //     var line = document.getElementById("line__pink");

          //     var objline = { length: 0, pathLength: line.getTotalLength() };
          //     function DrawLinePink() {
          //       line.style.strokeDasharray = [
          //         objline.length,
          //         objline.pathLength,
          //       ].join(" ");
          //     }

          //     DrawLinePink();
          //     tl.to(objline, {
          //       duration: 0.8,
          //       length: objline.pathLength,
          //       onUpdate: DrawLinePink,
          //       ease: "power3.out",
          //     })
          //       .to(".footPrint__pink", {
          //         duration: 0.4,
          //         opacity: 1,
          //         scale: 1,
          //         ease: "ease",
          //       })

          //       .to(".map", { duration: 0.3, opacity: 1, scale: 1, y: 0 })
          //       .to(".dogs", { duration: 0.4, opacity: 1, y: 0 })
          //       .to(".scorebox_one", { duration: 0.4, opacity: 1, y: 0 })
          //       .to(".shop__icon", { duration: 0.4, opacity: 1, y: 0 })
          //       .to(".category__circles-first", {
          //         duration: 0.4,
          //         opacity: 1,
          //         y: 0,
          //       });

          //     var orig = document.querySelector("path");
          //     var obj = { length: 0, pathLength: orig.getTotalLength() };
          //     function DrawLine() {
          //       orig.style.strokeDasharray = [obj.length, obj.pathLength].join(
          //         " "
          //       );
          //     }
          //     DrawLine();
          //     tl.to(".title", {
          //       delay: 0.3,
          //       duration: 1,
          //       opacity: 1,
          //       y: 0,
          //     })
          //       .to(obj, {
          //         delay: -0.5,
          //         duration: 0.2,
          //         length: obj.pathLength,
          //         onUpdate: DrawLine,
          //         ease: "none",
          //       })
          //       .to(".landing__desc", {
          //         delay: -0.6,
          //         duration: 0.2,
          //         opacity: 1,
          //         y: 0,
          //       })
          //       .to(".landing__btns", {
          //         duration: 0.2,
          //         opacity: 1,
          //         y: 0,
          //       })

          //       .play();
          //   }

          //   function ShowHeader() {
          //     let tl = new TimelineMax();
          //     tl.to(".navbar_main", { duration: 0.5, opacity: 1 }).to(
          //       ".title",
          //       {
          //         delay: 0.3,
          //         duration: 1,
          //         opacity: 1,
          //         y: 0,
          //       }
          //     );

          //     var orig = document.querySelector("path");
          //     var obj = { length: 0, pathLength: orig.getTotalLength() };
          //     function DrawLine() {
          //       orig.style.strokeDasharray = [obj.length, obj.pathLength].join(
          //         " "
          //       );
          //     }
          //     DrawLine();
          //     tl.to(obj, {
          //       delay: -0.5,
          //       duration: 0.2,
          //       length: obj.pathLength,
          //       onUpdate: DrawLine,
          //       ease: "none",
          //     })
          //       .to(".landing__desc", {
          //         delay: -0.6,
          //         duration: 0.2,
          //         opacity: 1,
          //         y: 0,
          //       })
          //       .to(".landing__btns", {
          //         duration: 0.2,
          //         opacity: 1,
          //         y: 0,
          //       })
          //       .to(".map", { duration: 0.5, opacity: 1, scale: 1.2 });

          //     var line = document.getElementById("line__pink");

          //     var objline = { length: 0, pathLength: line.getTotalLength() };
          //     function DrawLinePink() {
          //       line.style.strokeDasharray = [
          //         objline.length,
          //         objline.pathLength,
          //       ].join(" ");
          //     }

          //     DrawLinePink();
          //     tl.to(objline, {
          //       // delay: 2,
          //       duration: 0.8,
          //       length: objline.pathLength,
          //       onUpdate: DrawLinePink,
          //       ease: "power3.out",
          //     })
          //       .to(".footPrint__pink", {
          //         // delay: 3,
          //         duration: 0.4,
          //         opacity: 1,
          //         scale: 1,
          //         ease: "ease",
          //       })

          //       .to(".map", { duration: 0.3, opacity: 1, scale: 1, y: 0 })
          //       .to(".dogs", { duration: 0.4, opacity: 1, y: 0 })
          //       .to(".scorebox_one", { duration: 0.4, opacity: 1, y: 0 })
          //       .to(".shop__icon", { duration: 0.4, opacity: 1, y: 0 })
          //       .to(".category__circles-first", {
          //         duration: 0.4,
          //         opacity: 1,
          //         y: 0,
          //       })

          //       .play();
          //   }
          //   if (screen.width < 1025) {
          //     ShowHeaderInResponseive();
          //   } else {
          //     ShowHeader();
          //   }

          //   var controller = new ScrollMagic.Controller();
          //   function Section03Timeline() {
          //     let Section03Timeline = new TimelineMax({
          //       scrollTrigger: {
          //         trigger: "#some-trigger",
          //         start: "top 10%",
          //         toggleAction: "play none none none",
          //       },
          //     });
          //     Section03Timeline.to(".neighborhood__title", {
          //       duration: 0.3,
          //       opacity: 1,
          //       y: 0,
          //       ease: "ease",
          //     })
          //       .to(".neighborhood__sub-title", {
          //         duration: 0.3,
          //         opacity: 1,
          //         y: 0,
          //         ease: "ease",
          //       })
          //       .to(".circle__dashes--three", {
          //         duration: 0.3,
          //         scale: 1,
          //         opacity: 1,
          //         ease: "ease",
          //       })
          //       .to(".circle__dashes--two", {
          //         duration: 0.3,
          //         scale: 1,
          //         opacity: 1,
          //         ease: "ease",
          //       })
          //       .to(".circle__dashes--one", {
          //         duration: 0.3,
          //         scale: 1,
          //         opacity: 1,
          //         ease: "ease",
          //       })
          //       .to(".neighborhood__img-one", {
          //         duration: 0.3,
          //         scale: 1,
          //         opacity: 1,
          //         ease: "ease",
          //       })
          //       .to(".neighborhood__img-two", {
          //         duration: 0.3,
          //         scale: 1,
          //         opacity: 1,
          //         ease: "ease",
          //       })
          //       .to(".neighborhood__img-three", {
          //         duration: 0.2,
          //         scale: 1,
          //         opacity: 1,
          //       })
          //       .to(".neighborhood__img-four", {
          //         duration: 0.2,
          //         scale: 1,
          //         opacity: 1,
          //       })
          //       .to(".neighborhood__img-five", {
          //         duration: 0.2,
          //         scale: 1,
          //         opacity: 1,
          //       })
          //       .to(".neighborhood__img-six", {
          //         duration: 0.2,
          //         scale: 1,
          //         opacity: 1,
          //       })
          //       .to(".neighborhood__img-seven", {
          //         duration: 0.2,
          //         scale: 1,
          //         opacity: 1,
          //       })
          //       .to(".neighborhood__img-eight", {
          //         duration: 0.2,
          //         scale: 1,
          //         opacity: 1,
          //       })
          //       .to(".neighborhood__img-nine", {
          //         duration: 0.2,
          //         scale: 1,
          //         opacity: 1,
          //       })
          //       .to(".neighborhood__img-ten", {
          //         duration: 0.2,
          //         scale: 1,
          //         opacity: 1,
          //       });
          //   }
          //   Section03Timeline();
          //   function Section03Timeline_2() {
          //     let Section03Timeline_2 = new TimelineMax({
          //       scrollTrigger: {
          //         trigger: "#some-trigger",
          //         start: "top 80%",
          //         toggleAction: "play none none none",
          //       },
          //       repeat: -1,
          //     });

          //     Section03Timeline_2.to(".score_box_1", {
          //       delay: 1,
          //       duration: 0.4,
          //       opacity: 1,
          //     })
          //       .to(".score_box_1", {
          //         duration: 0.4,
          //         opacity: 0,
          //         delay: 3,
          //       })
          //       .to(".score_box_2", { duration: 0.4, opacity: 1 })
          //       .to(".score_box_2", {
          //         duration: 0.4,
          //         opacity: 0,
          //         delay: 3,
          //       })
          //       .to(".score_box_3", { duration: 0.4, opacity: 1 })
          //       .to(".score_box_3", {
          //         duration: 0.4,
          //         opacity: 0,
          //         delay: 3,
          //       })
          //       .to(".score_box_4", { duration: 0.4, opacity: 1 })
          //       .to(".score_box_4", {
          //         duration: 0.4,
          //         opacity: 0,
          //         delay: 3,
          //       })
          //       .to(".score_box_5", { duration: 0.4, opacity: 1 })
          //       .to(".score_box_5", {
          //         duration: 0.4,
          //         opacity: 0,
          //         delay: 3,
          //       });
          //   }

          //   Section03Timeline_2();
          //   Section04Timeline();
          //   function Section04Timeline() {
          //     let Section04Timeline = new TimelineMax();
          //     Section04Timeline.staggerFromTo(
          //       ".category__group",
          //       0.6,

          //       { scale: 0.7, opacity: 0 },
          //       { scale: 1, opacity: 1 }
          //     );
          //     let t1 = new TimelineMax();
          //     t1.to(".category", { delay: 5, duration: 0.7, opacity: 1, y: 0 });
          //   }

          //   new ScrollMagic.Scene({
          //     triggerElement: "#adoption",
          //     triggerHook: "0.2",
          //   })

          //     .on("start", function adoption() {
          //       let tl = new TimelineMax();
          //       tl.to(".adoption__title_motion", {
          //         duration: 0.7,
          //         opacity: 1,
          //         y: 0,
          //       }).to(".adoption__boxes", { duration: 0.7, opacity: 1, y: 0 });
          //     })
          //     .addTo(controller);
          //   new ScrollMagic.Scene({
          //     triggerElement: "#shop",
          //     triggerHook: "0.2",
          //   })

          //     .on("start", function shop() {
          //       let tl = new TimelineMax();
          //       tl.to(".shop__title_motion", {
          //         duration: 0.7,
          //         opacity: 1,
          //         y: 0,
          //       })
          //         .to(".adoption__sub-title", {
          //           duration: 0.7,
          //           opacity: 1,
          //           y: 0,
          //         })
          //         .to(".shop__box_motion1", { duration: 0.3, opacity: 1, y: 0 })
          //         .to(".shop__box_motion2", {
          //           duration: 0.3,
          //           opacity: 1,
          //           y: 0,
          //           delay: -0.1,
          //         })
          //         .to(".shop__box_motion3", {
          //           duration: 0.3,
          //           opacity: 1,
          //           y: 0,
          //           delay: -0.1,
          //         })
          //         .to(".shop__blue-box", { duration: 0.3, opacity: 1, y: 0 })
          //         .to(".adoption__user-img", { duration: 0.3, opacity: 1 })
          //         .to(".blur_box_1_border", { duration: 0.3, opacity: 1 })
          //         .to(".blur_box_2_border", { duration: 0.3, opacity: 1 })
          //         .to(".blur_box_3_border", { duration: 0.3, opacity: 1 });
          //     })
          //     .addTo(controller);
          // }
          // console.log(ShowAnimate);
          // ShowAnimate();
          // let CircularCollaboratorsTextParallax =
          //   document.querySelectorAll(".collaborator");
          // new Parallax(CircularCollaboratorsTextParallax[0]);
          // new Parallax(CircularCollaboratorsTextParallax[1]);
          // new Parallax(CircularCollaboratorsTextParallax[2]);
          // new Parallax(CircularCollaboratorsTextParallax[3]);
          // new Parallax(CircularCollaboratorsTextParallax[4]);
          // new Parallax(CircularCollaboratorsTextParallax[5]);
          // new Parallax(CircularCollaboratorsTextParallax[6]);
          // new Parallax(CircularCollaboratorsTextParallax[7]);
          // new Parallax(CircularCollaboratorsTextParallax[8]);
          // new Parallax(CircularCollaboratorsTextParallax[9]);
        }, 1000);
      });
    });

    return {
      data,
      showPopupFunc,
      closePopup,
      toggle,
      getRandomIntInclusive,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
