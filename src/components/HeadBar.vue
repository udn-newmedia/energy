<template>
  <nav class="headbar-container">
    <div class="headbar-top-wrapper">
      <div class="top-left-wrapper">
        <div class="title" @click="titleEvent">
          不要唬爛～
        </div>
        <div class="sub-title" @click="titleEvent">
          你真的了解台灣能源現況嗎？
        </div>
      </div>
      <div class="top-right-wrapper">
        <div class="share-button" @click="shareFacebook">
          <img src="images/btn_fb.svg" alt="Facebook分享">
        </div>
        <div class="share-button" @click="shareLine">
          <img src="images/btn_line.svg" alt="Line分享">
        </div>
      </div>
    </div>
    <div class="headbar-bottom-wrapper">
      <div
        :class="{
          'category-button': true,
          'button-active': advancedQuestionFlag ? questionGroupAdvanced.groupView.includes(currentPage) : questionGroup.groupView.includes(currentPage)
        }"
        @click="categoryButtonEvent(questionGroup.groupView[0])"
      >
        現況看法
      </div>
      <div
        :class="{
          'category-button': true,
          'button-active': advancedQuestionFlag ? questionGroupAdvanced.groupEffect.includes(currentPage) : questionGroup.groupEffect.includes(currentPage)
        }"
        @click="categoryButtonEvent(questionGroup.groupEffect[0])"
      >
        電力影響
      </div>
      <div
        :class="{
          'category-button': true,
          'button-active': advancedQuestionFlag ? questionGroupAdvanced.groupChoice.includes(currentPage) : questionGroup.groupChoice.includes(currentPage)
        }"
        @click="categoryButtonEvent(questionGroup.groupChoice[0])"
      >
        能源轉型
      </div>
      <div
        :class="{
          'category-button': true,
          'button-active': advancedQuestionFlag ? questionGroupAdvanced.groupTransformation.includes(currentPage) : questionGroup.groupTransformation.includes(currentPage)
        }"
        @click="categoryButtonEvent(questionGroup.groupTransformation[0])"
      >
        妥協取捨
      </div>
      <div
        :class="{
          'category-button': true,
          'button-active': pageOrderList[currentPage] === pageOrderList[pageAmount]
        }"
        @click="categoryButtonEvent(pageAmount)"
      >
        專家報導
      </div>
    </div>
  </nav>
</template>

<script>
import Utils from 'udn-newmedia-utils';
import {mapActions, mapState} from 'vuex';

export default {
  name: "HeadBar",
  computed: {
    ...mapState([
      'currentPage',
      'pageAmount',
      'questionGroup',
      'questionGroupAdvanced',
      'pageOrderList',
      'advancedQuestionFlag',
    ]),
  },
  methods: {
    ...mapActions({
      updatePage: 'updatePage',
    }),
    titleEvent() {
      // call MainApp function
      this.updatePage(-1);
      this.$root.$children[0].getStartEvent();
    },
    categoryButtonEvent(page) {
      // call MainApp function
      this.$root.$children[0].goToPage(page);
    },
    shareFacebook() {
      window.FB.ui({
        method: 'share_open_graph',
        action_type: 'og.shares',
        action_properties: JSON.stringify({
          object: {
            'og:url': 'http://nmdap.udn.com.tw/newmedia/energy/',
            'og:title': '不要唬爛～你真的了解台灣能源現況嗎？',
            'og:description': '台灣主要發電方式是什麼？會不會缺電？電價合不合理？能源轉型又在搞什麼名堂？',
            'og:image': 'http://nmdap.udn.com.tw/newmedia/energy/images/meta.jpg',
          },
        })
      })
      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'share',
        eventAction: 'click',
        eventLabel: `[${Utils.detectPlatform()}] [${document.querySelector('title').innerHTML}] [fb icon] [fb share]`,
      });
    },
    shareLine() {
      const HREF = 'http://nmdap.udn.com.tw/newmedia/energy/';
      if (Utils.detectMob()) {
        // 手機
        window.open(`https://line.me/R/msg/text/?"${document.querySelector('title').innerHTML}%0D%0A%0D%0A${document.querySelector('meta[property="og:description"]').content}%0D%0A%0D%0A${HREF}`);
      } else {
        window.open(`https://lineit.line.me/share/ui?url=${HREF}`);
      }
      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'share',
        eventAction: 'click',
        eventLabel: `[${Utils.detectPlatform()}] [${document.querySelector('title').innerHTML}] [line icon] [line share]`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .headbar-container {
    position: relative;
    // z-index: 9999;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0 7%;
  }
  .headbar-top-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 5%;
    .top-left-wrapper {
      height: 100%;
      .title {
        font-size: 1.5rem;
        font-weight: bold;
        color: #ffffff;
        cursor: pointer;
      }

      .sub-title {
        font-size: 0.9rem;
        font-weight: bold;
        color: #ffffff;
        cursor: pointer; 
      }
    }
    .top-right-wrapper {
      position: relative;
      display: flex;
      .share-button {
        width: 35px;
        height: 35px;
        margin: 0 5px;
        cursor: pointer;
        img {
          width: 100%;
        }
      }
    }
  }
  .headbar-bottom-wrapper {
    position: relative;
    width: 100%;
    margin-bottom: 3%;
    .category-button {
      position: relative;
      float: left;
      margin: 2% 4% 0 0;
      text-align: left;
      font-size: 0.9rem;
      color: #ffffff;
      border-bottom: 2px solid rgba($color: #ffffff, $alpha: 0);
      cursor: pointer;
      transition: .333s ease-in;

      @media only screen and (min-width: 1024px) {
        font-size: 1rem;
      }
    }
    .button-active {
      font-weight: bold;
      border-bottom: 2px solid #ffffff;
      @media only screen and (min-width: 1024px) {
        color: #ffffff;
      }
    }
  }
</style>
