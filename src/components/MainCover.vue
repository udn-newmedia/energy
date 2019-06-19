<template>
  <div class="main-cover-container">
    <div class="center-wrapper">
      <div class="title-wrapper">
        <h1><span class="title-top">不要唬爛！</span><br><span v-if="isMob">&nbsp&nbsp&nbsp&nbsp</span><span class="title-bottom">你真的了解台灣能源現況嗎？</span></h1>
      </div>
      <div class="get-start-button" @click="getStartEvent">
        開始
      </div>
      <div class="introduction-wrapper">
        <div class="intro-top">
          <h2>聯合報能源民調大公開 + 線上即時民調</h2>
        </div>
        <div class="intro-bottom">
          台灣主要發電方式是什麼？會不會缺電？電價合不合理？能源轉型又在搞什麼名堂？《聯合報》針對上述議題在今年四月進行民調，發現許多民眾對台灣能源現況存在誤解，快來看看我們的調查結果，同時測試您的能源 IQ，並且表達您的意見吧！
        </div>
      </div>
      <div v-if="!isMob" class="browser-hint-wrapper">
        建議使用瀏覽器 Google Chrome、Firefox、Safari，以獲得最佳瀏覽體驗
      </div>
    </div>
    <div class="logo-wrapper">
      <div class="top-logo">
        <a href="https://vision.udn.com/" target="_blank">
          <img src="images/logo_udnhope_w.svg" alt="聯合報願景工程">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils';
import {mapActions, mapState} from 'vuex';

export default {
  name: "MainCover",
  computed: {
    isMob() {
      return window.innerWidth < 769 ? true : false;
    },
  },
  methods: {
    ...mapActions({
      updatePage: 'updatePage',
    }),
    getStartEvent() {
      // call MainApp function
      this.$root.$children[0].getStartEvent();

      const windowWidth = window.innerWidth;
      if (Utils.detectIE()) {
        window.scroll(windowWidth, 0)
      } else {
        window.scroll({
          left: windowWidth,
          behavior: 'smooth',
        });
      }
      this.updatePage(0);
    }
  },
};
</script>

<style lang="scss" scoped>
  .main-cover-container {
    position: relative;
    width: 100%;
    // height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .center-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 769px) {
      position: absolute;
      top: 0;
      right: 10%;
      width: 37%;
      height: 100vh;
      align-items: flex-start;
    }
    .title-wrapper{
      text-align: left;
      margin: 95px 0 0 0;
      writing-mode: vertical-rl;
      @media only screen and (min-width: 700px) and (max-width: 768px) {
        margin: 250px 0 0 0;
      }
      @media only screen and (min-width: 769px) {
        margin: 95px 0 0 0;
        writing-mode: initial;
      }
      .title-top {
        font-size: 40px;
      }
      .title-bottom {
        font-size: 24px;
      }
    }

    .get-start-button {
      width: 210px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffcb47;
      font-size: 32px;
      background-color: rgba($color: #1c1c1c, $alpha: 0.7);
      border: solid 1px #ffcb47;
      border-radius: 10px;
      margin: 25px 0;
      cursor: pointer;
    }

    .introduction-wrapper {
      position: relative;
      width: 100%;
      .intro-top {
        padding: 10px 30px;
        text-align: center;
        @media only screen and (min-width: 769px) {
          padding: 10px 0;
          text-align: left;
        }
        h2 {
          font-size: 18px;
          font-weight: bold;
        }
      }
      .intro-bottom {
        font-size: 15px;
        line-height: 1.57;
        padding: 10px 30px;
        margin-bottom: 50px;
        @media only screen and (min-width: 769px) {
          padding: 10px 0;
        }
      }
    }
    .browser-hint-wrapper {
      position: absolute;
      bottom: 50px;
      right: 0;
      text-align: right;
      font-size: 10px;
    }
  }
  .logo-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    .top-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      img {
        width: 150px;
      }
    }
  }
</style>
