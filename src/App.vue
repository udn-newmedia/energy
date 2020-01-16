<template>
  <div id="app">
    <div
      :class="{
        'main-app-container': true,
        'enter-in': startFlag,
        'fade-out': !startFlag,
      }"
    >
      <div
        :class="{
          'background-image-wrapper': true,
          'rotate-animation': startFlag,
        }"
        :style="{
          top: computeBackgroundImageTop,
          left: computeBackgroundImageLeft,
          width: computeBackgroundImageWidth,
        }"
      >
        <img class="background-image" :src="computeBackgroundImage" alt="背景">
        <img v-if="!startFlag" class="background-light" :src="computeLightImage" alt="light">
      </div>
      <div class="page">
        <MainCover></MainCover>
      </div>
      <div
        :class="{
          'page': true,
          'disappear': !startFlag
        }"
      >
        <HeadBar></HeadBar>
        <div
          :class="{
            'slick-wrapper': true,
          }"
        >
          <Slick
            ref="slick"
            :options="{
              lazyLoad: 'ondemand',
              dots: false,
              infinite: false,
              speed: 300,
              slidesToShow: computeSlidesToShow,
              centerMode: true,
              centerPadding: '6vw',
              arrows: false,
            }"
            @setPosition="handleSetPosition"
          >
            <QuestionCard :rotateFlag=rotateFlags[0] :pageNumber=0>
              <transition slot=cardFront>
                <div class="card-body-group">
                  <CardBody :pageNumber=0></CardBody>
                </div>
              </transition>
              <transition slot=cardBack>
                <div class="card-body-group">
                  <div class="card-back-title">目前台灣主要電力來源是燃煤發電</div>
                  <TruthPanel :pageNumber=0>
                    <div v-show="rotateFlags[0]">
                      <img width="100%" src="images/charts/Q1.svg" alt="台灣能源民調">
                      <p><br></p>
                      <p>核能占比最高於 1985 年達 52.4%，之後逐年遞減，2001 年後降至 20% 以下，2017 年時跌至史上最低點 9.3%。即便如此，台灣的發電量仍呈穩定成長狀態。 （資料來源：台灣電力公司）</p>
                    </div>
                  </TruthPanel>
                </div>
              </transition>
            </QuestionCard>
            <QuestionCard :rotateFlag=rotateFlags[1] :pageNumber=1>
              <transition slot=cardFront>
                <div class="card-body-group">
                  <CardBody :pageNumber=1></CardBody>
                </div>
              </transition>
              <transition slot=cardBack>
                <div class="card-body-group">
                  <div class="card-back-title">2014年台灣電價達歷史高峰，每度約 3 元，去年跌至 2.6 元</div>
                  <TruthPanel :pageNumber=1>
                    <SvgFileQ2C1></SvgFileQ2C1>
                    <p><br></p>
                    <img width="100%" src="images/charts/Q2_chart2.svg" alt="台灣能源民調">
                  </TruthPanel>
                </div>
              </transition>
            </QuestionCard>
            <QuestionCard :rotateFlag=rotateFlags[2] :pageNumber=2>
              <transition slot=cardFront>
                <div class="card-body-group">
                  <CardBody :pageNumber=2></CardBody>
                </div>
              </transition>
              <transition slot=cardBack>
                <div class="card-body-group">
                  <div class="card-back-title">台灣整體空氣品質逐年改善</div>
                  <TruthPanel :pageNumber=2>
                    <SvgFileQ3></SvgFileQ3>
                    <p><br></p>
                    <p>
                      根據環保署監測數據，近 10 年懸浮微粒、細懸浮微粒、二氧化硫、二氧化氮等有害氣體年平均濃度均呈下降趨勢。
                    </p>
                    <p>
                      然而，根據台大風險社會與政策研究中心分析，台灣各空品區空氣品質雖呈逐步改善狀態，但空氣污染「越嚴重地區改善越少」， 2017 年前，雲林麥寮、台西地區，與高雄前鎮地區空氣品質甚至呈惡化狀態。
                    </p>
                    <p>
                      此外，根據監測結果，包含高雄橋頭、大寮、林園；台南新營；嘉義新港、朴子；彰化二林；苗栗市等空氣品質本來就不佳的地區，在 2018 年時空氣品質也呈惡化狀態。
                    </p>
                  </TruthPanel>
                </div>
              </transition>
            </QuestionCard>
            <QuestionCard :rotateFlag=rotateFlags[3] :pageNumber=3>>
              <transition slot=cardFront>
                <div class="card-body-group">
                  <CardBody :pageNumber=3></CardBody>
                </div>
              </transition>
              <transition slot=cardBack>
                <div class="card-body-group">
                  <div class="card-back-title">台灣人均用電量亞洲第一，且近 15 年來只限電過一次</div>
                  <TruthPanel :pageNumber=3>
                    <img width="100%" src="images/charts/Q4_chart1.svg" alt="台灣能源民調">
                    <p><br></p>
                    <SvgFileQ4C2></SvgFileQ4C2>
                    <p><br></p>
                    <p>
                      近 15 年來，台灣僅在 2017 年有一次限電記錄，原因是中油人為疏失導致桃園大潭電廠 6 部機組天然氣供氣中斷，並非發電量不足。
                    </p>
                    <p>
                      回顧台電歷史資料，1996 年前，台灣因備用容量率偏低，雖有核電支援仍不足以供應國人用電，所以常有限電紀錄，但近十多年來，除了 1999 年 921 大地震、2002 年中油天然氣儲存量不足，以及 2017 年人為疏失外，已沒有因為發電量不足而限電的紀錄。
                    </p>
                  </TruthPanel>
                </div>
              </transition>
            </QuestionCard>
            <QuestionCard :rotateFlag=rotateFlags[4] :pageNumber=4>>
              <transition slot=cardFront>
                <div class="card-body-group">
                  <CardBody :pageNumber=4></CardBody>
                </div>
              </transition>
              <transition slot=cardBack>
                <div class="card-body-group">
                  <div class="card-back-title">最乾淨的燃煤，還是比燃氣發電髒</div>
                  <TruthPanel :pageNumber=4>
                    <p>根據中興大學環境工程系教授莊秉潔研究，同樣都是火力發電，在最佳運轉狀態下同時測量燃煤與天然氣發電，可發現燃煤所排放的各種污染氣體都較高，分別是</p>
                    <img width="100%" src="images/charts/Q5_chart.svg" alt="台灣能源民調">
                  </TruthPanel>
                </div>
              </transition>
            </QuestionCard>
            <QuestionCard :rotateFlag=rotateFlags[5] :pageNumber=5>>
              <transition slot=cardFront>
                <div class="card-body-group">
                  <CardBody :pageNumber=5></CardBody>
                </div>
              </transition>
              <transition slot=cardBack>
                <div class="card-body-group">
                  <div class="card-back-title">經濟成長率與發電量無顯著相關</div>
                  <TruthPanel :pageNumber=5>
                    <SvgFileQ6></SvgFileQ6>
                    <p><br></p>
                    <p>
                      中研院社會學研究所研究員林宗弘博士指出，影響經濟的因素眾多，舉凡法規、投資環境都是，而且「通常情況是反的，因為經濟景氣過熱才會缺電，而不是缺電導致經濟衰退」。
                    </p>
                  </TruthPanel>
                </div>
              </transition>
            </QuestionCard>
            <QuestionCard :rotateFlag=rotateFlags[6] :pageNumber=6>>
              <transition slot=cardFront>
                <div class="card-body-group">
                  <CardBody :pageNumber=6></CardBody>
                </div>
              </transition>
              <transition slot=cardBack>
                <div class="card-body-group">
                  <div class="card-back-title">核電爭辯 40 年，台灣卻無長期核電支持度研究</div>
                  <TruthPanel :pageNumber=6>
                    <div style="padding: 0 20%;">
                      <img width="100%" src="images/charts/Q7.svg" alt="台灣能源民調">
                    </div>
                  </TruthPanel>
                </div>
              </transition>
            </QuestionCard>
            <QuestionCard :rotateFlag=rotateFlags[7] :pageNumber=7>>
              <transition v-show="advancedQuestionFlag" slot=cardFront>
                <div class="card-body-group">
                  <CardBody :pageNumber=7></CardBody>
                </div>
              </transition>
              <transition slot=cardBack>
                <div class="card-body-group">
                  <div class="card-back-title">核廢料小知識</div>
                  <TruthPanel :pageNumber=7>
                    <p>核廢料依放射性高低與對環境、生物的危害程度，可蓋分為「高階」與「低階」核廢料。低階核廢料中的主要成分為鈷-60，半衰期約 5.3年，需放置百年後，放射性才接近環境背景值；高階核廢料中成分複雜，半衰期由數十年至十萬年不等，因此，高階核廢料的最終儲存場址，至少須保證能有十萬年的安全性。</p>
                    <p>目前雖有所謂的「核廢料再處理」技術，台灣也曾考慮將核廢料送往核能大國法國處理，但該技術仍充滿爭議，且處理成本昂貴，加上法國法規禁止存放外國核廢料，因此即便「再處理」可行，台灣仍須找到能保證核廢料十萬年不外洩的最終處理場址。</p>
                    <p>低階核廢料自 1982 年起，開始儲存於臺東縣蘭嶼鄉，原訂在 2011 年時遷出，卻因沒有其他地方願意接收，所以延至今日仍存放於蘭嶼。</p>
                    <p>高階核廢料主要為核電廠用過的燃料棒，目前全數儲存在核電廠內部，且為爆滿狀態並無法遷出。最初版本的《核廢料最終處置場址選址條例草案》早在 2003 年就被送進立法院，但耗費 16 年始終無法取得朝野、社會共識；別說選定處置地點，至今連選址法源依據都無，也讓核廢料成為台灣核能發電最大爭議。</p>
                    <p>目前全球正在使用核能發電的國家共 30 國，但包含美、日、法等核能大國在內，都沒有任何國家完成核廢料最終處置場建置，僅芬蘭已選定一塊長達 18 億年沒有變動的穩定岩層，並向下挖鑿深達 420 公尺的最終儲存「洞穴」，預計 2025 年啟用，屆時將是世界上第一座核廢料最終儲存場。</p>
                    <p>行政院原子能委員會官方網站則稱：「目前人類已有成熟的技術，可將核廢料妥善加以處理、處置與管理，故其安全絕對無慮。」</p>
                  </TruthPanel>
                </div>
              </transition>
            </QuestionCard>
            <QuestionCard :rotateFlag=rotateFlags[8] :pageNumber=8>>
              <transition v-show="advancedQuestionFlag" slot=cardFront>
                <div class="card-body-group">
                  <CardBody :pageNumber=8></CardBody>
                </div>
              </transition>
              <transition slot=cardBack>
                <div class="card-body-group">
                  <div class="card-back-title">核廢料小知識</div>
                  <TruthPanel :pageNumber=8>
                    <p>核廢料依放射性高低與對環境、生物的危害程度，可蓋分為「高階」與「低階」核廢料。低階核廢料中的主要成分為鈷-60，半衰期約 5.3年，需放置百年後，放射性才接近環境背景值；高階核廢料中成分複雜，半衰期由數十年至十萬年不等，因此，高階核廢料的最終儲存場址，至少須保證能有十萬年的安全性。</p>
                    <p>目前雖有所謂的「核廢料再處理」技術，台灣也曾考慮將核廢料送往核能大國法國處理，但該技術仍充滿爭議，且處理成本昂貴，加上法國法規禁止存放外國核廢料，因此即便「再處理」可行，台灣仍須找到能保證核廢料十萬年不外洩的最終處理場址。</p>
                    <p>低階核廢料自 1982 年起，開始儲存於臺東縣蘭嶼鄉，原訂在 2011 年時遷出，卻因沒有其他地方願意接收，所以延至今日仍存放於蘭嶼。</p>
                    <p>高階核廢料主要為核電廠用過的燃料棒，目前全數儲存在核電廠內部，且為爆滿狀態並無法遷出。最初版本的《核廢料最終處置場址選址條例草案》早在 2003 年就被送進立法院，但耗費 16 年始終無法取得朝野、社會共識；別說選定處置地點，至今連選址法源依據都無，也讓核廢料成為台灣核能發電最大爭議。</p>
                    <p>目前全球正在使用核能發電的國家共 30 國，但包含美、日、法等核能大國在內，都沒有任何國家完成核廢料最終處置場建置，僅芬蘭已選定一塊長達 18 億年沒有變動的穩定岩層，並向下挖鑿深達 420 公尺的最終儲存「洞穴」，預計 2025 年啟用，屆時將是世界上第一座核廢料最終儲存場。</p>
                    <p>行政院原子能委員會官方網站則稱：「目前人類已有成熟的技術，可將核廢料妥善加以處理、處置與管理，故其安全絕對無慮。」</p>
                  </TruthPanel>
                </div>
              </transition>
            </QuestionCard>
            <QuestionCard :rotateFlag=rotateFlags[9] :pageNumber=9>>
              <transition slot=cardFront>
                <div class="card-body-group">
                  <CardBody :pageNumber=9></CardBody>
                </div>
              </transition>
              <transition slot=cardBack>
                <div class="card-body-group">
                  <div class="card-back-title">蔡政府能源轉型目標：去核減煤</div>
                  <TruthPanel :pageNumber=9>
                    <img width="100%" src="images/charts/Q10_chart_.svg" alt="台灣能源民調">
                  </TruthPanel>
                </div>
              </transition>
            </QuestionCard>
            <QuestionCard :rotateFlag=rotateFlags[10] :pageNumber=10>
              <transition slot=cardFront>
                <div class="card-body-group">
                  <CardBody :pageNumber=10></CardBody>
                </div>
              </transition>
            </QuestionCard>
            <QuestionCard :rotateFlag=rotateFlags[11] :pageNumber=11>
              <transition slot=cardFront>
                <div class="card-body-group">
                  <CardBody :pageNumber=11></CardBody>
                </div>
              </transition>
            </QuestionCard>
            <QuestionCard :rotateFlag=rotateFlags[12] :pageNumber=12>
              <transition slot=cardFront>
                <div class="card-body-group">
                  <CardBody :pageNumber=12></CardBody>
                </div>
              </transition>
            </QuestionCard>
            <QuestionCard :rotateFlag=rotateFlags[13] :pageNumber=13>
              <transition slot=cardFront>
                <div class="card-body-group">
                  <CardBody :pageNumber=13></CardBody>
                </div>
              </transition>
              <transition slot=cardBack>
                <div class="card-body-group">
                  <div class="card-back-title">能源轉型將導致每度電漲 0.5 元</div>
                  <TruthPanel :pageNumber=13>
                    <p>經濟部 2018 年 6 月估算，再生能源轉型最多會讓未來每度電價增加 0.27 元。如果再加上燃氣、核四資產減損攤提部分，預計 2025 年後，平均每度電會增加 0.5 元。</p>
                  </TruthPanel>
                </div>
              </transition>
            </QuestionCard>
            <QuestionCard :rotateFlag=rotateFlags[14] :pageNumber=14>
              <transition slot=cardFront>
                <div class="card-body-group">
                  <CardBody :pageNumber=14></CardBody>
                </div>
              </transition>
            </QuestionCard>
            <QuestionCard :pageNumber=15 :expertFlag=true>
              <ExpertCard slot=cardFront :pageNumber=15></ExpertCard>
            </QuestionCard>
          </Slick>
          <transition>
            <div 
              v-show="currentPage === pageAmount"
              class="footer-container"
            >
              <div class="comment-and-footer">
                <FBComment href="https://udn.com/upf/newmedia/2019_data/energy/"></FBComment>
              </div>
              <Foot></Foot>
            </div>
          </transition>
        </div>
        <div v-if="pageOrderList[currentPage] !== pageOrderList[pageAmount]" class="progress-and-expert-wrapper">
          <div class="progress-wrapper">
            <span>已完成 </span>{{questionProgress}}<span>/15</span>
          </div>
          <span
            v-if="currentPage < pageAmount"
            class="expert-button"
            @click="expertButtonEvent(pageAmount)"
          >
            學者專家怎麼看民調？
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils';
import {mapActions, mapState} from 'vuex';
import Slick from 'vue-slick';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

import CardBody from './components/card/CardBody.vue';
import ExpertCard from './components/card/ExpertCard.vue';
import FBComment from './components/FBComment.vue';
import Foot from './components/Foot.vue';
import HeadBar from './components/HeadBar.vue';
import MainCover from './components/MainCover.vue';
import QuestionCard from './components/card/QuestionCard.vue';
import TruthPanel from './components/card/TruthPanel.vue';
import SvgFileQ2C1 from './components/charts/SvgFileQ2C1.vue';
import SvgFileQ3 from './components/charts/SvgFileQ3.vue';
import SvgFileQ4C2 from './components/charts/SvgFileQ4C2.vue';
import SvgFileQ6 from './components/charts/SvgFileQ6.vue';

export default {
  name: "MainApp",
  components: {
    CardBody,
    ExpertCard,
    Foot,
    FBComment,
    HeadBar,
    MainCover,
    QuestionCard,
    TruthPanel,
    Slick,
    SvgFileQ2C1,
    SvgFileQ3,
    SvgFileQ4C2,
    SvgFileQ6,
  },
  data() {
    return {
      startFlag: false,
      rotateFlags: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
      },
    };
  },
  computed: {
    ...mapState([
      'currentPage',
      'pageAmount',
      'questionInfo',
      'advancedQuestionFlag',
      'pageOrderList',
      'pageOrderFullList',
      'questionProgress',
    ]),
    computeSlidesToShow() {
      // if (Utils.detectMob()) {
      if (window.innerWidth > 769) {
        return 3;
      } else {
        return 1;
      }
    },
    computeBackgroundImage() {
      if (window.innerWidth > 769) {
        return './images/bg_pc.jpg';
      } else {
        return './images/bg_mob.jpg';
      }
    },
    computeLightImage() {
      if (window.innerWidth > 769) {
        return './images/eye_pc.png';
      } else {
        return './images/eye_mob.png';
      }
    },
    computeBackgroundImageTop() {
      if (window.innerWidth > 1281) {
        return this.startFlag ? '50px': '-100px';
      } else if (window.innerWidth >= 769 && window.innerWidth <= 1280) {
        return this.startFlag ? '50px': '-80px';
      } else {
        return this.startFlag ? '-150px': '-45px';
      }
    },
    computeBackgroundImageLeft() {
      if (window.innerWidth > 1281) {
        return this.startFlag ? '27%' : '-10%';
      } else if (window.innerWidth >= 769 && window.innerWidth <= 1280) {
        return this.startFlag ? '27%' : '-31%';
      } else {
        return this.startFlag ? '-10%': '-42%';
      }
    },
    computeBackgroundImageWidth() {
      if (window.innerWidth > 1281) {
        return '80%';
      } else if (window.innerWidth >= 769 && window.innerWidth <= 1280) {
        return '110%';
      } else {
        return this.startFlag ? '135%': '100%';
      }
    },
  },
  methods: {
    ...mapActions({
      updatePage: 'updatePage',
      updateAdvancedQuestion: 'updateAdvancedQuestion',
    }),
    getStartEvent() {
      this.startFlag = !this.startFlag;
      this.goToPage(0);
    },
    scrollToTop() {
      if (Utils.detectIE()) {
        window.scroll(window.innerWidth, 0);
      } else {
        window.scroll({
          top: 0,
          behavior: 'smooth',
        });
      }
    },
    handleSetPosition(event, slick) {
      this.updatePage(slick.currentSlide);
      this.scrollToTop();

      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'poll',
        eventAction: 'slide',
        eventLabel: `[${Utils.detectPlatform()}] [${document.querySelector('title').innerHTML}] [第${this.currentPage + 1}題] [滑入題目]`,
      });
    },
    expertButtonEvent(page) {
      this.updatePage(page);
      // call MainApp function
      this.goToPage(page);
    },
    updateRotateFlag(page) {
      this.rotateFlags[page] = !this.rotateFlags[page];
      this.scrollToTop();
    },
    goToPage(page) {
      this.updatePage(page);
      this.$refs.slick.goTo(page);
    },
    showAdvancedQuestion() {
      // 顯示第7、8題
      this.updateAdvancedQuestion();
      this.$refs.slick.unfilter();
    },
  },
  mounted() {
    // 一開始第7、8題不出現
    if (!this.advancedQuestionFlag) {
      const pageOrderList = this.pageOrderList;
      this.$refs.slick.filter(function(index) {
        return pageOrderList.includes(index);
      });
    }
  },
};
</script>

<style lang="scss">
  #app {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #1c1c1c;

    h1 {
      line-height: 1;
    }

    p {
      font-size: 18px;
      line-height: 1.5;
    }
  }
  .main-app-container {
    position: relative;
    width: 200%;
    height: 100%;
    transition: transform .333s ease-in-out;
    .background-image-wrapper {
      position: fixed;
      z-index: -1;
      transition: .333s ease-in-out;
      .background-image {
        position: relative;
        width: 75%;
        height: 100%;
        @media only screen and (min-width: 769px) {
          width: 50%;
        }
      }
      .background-light {
        position: absolute;
        top: 23%;
        left: 57%;
        animation-name: shiningAnimation;
        animation-duration: 1.5s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        @media only screen and (max-width: 320px) {
          left: 55%;
        }
        @media only screen and (min-width: 321px) and (max-width: 411px) {
          left: 56.5%;
        }
        @media only screen and (min-width: 412px) and (max-width: 500px) {
          top: 24%;
        }
        @media only screen and (min-width: 501px) and (max-width: 768px) {
          top: 24%;
          left: 61%;
        }
        @media only screen and (min-width: 769px) {
          top: 23.6%;
          left: 42%;
        }
      }
    }
    .rotate-animation {
      opacity: 0.5;
      transform-origin: right bottom;
      animation-name: rotateAnimation;
      animation-duration: 15s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .card-back-title {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      margin-top: 5%;
    }
    .page {
      position: relative;
      width: 50%;
      min-height: 100vh;
      float: left;
    }
    .progress-and-expert-wrapper {
      position: absolute;
      bottom: 2%;
      width: 100%;
      text-align: center;
      .progress-wrapper {
        color: #f46c00;
      }
      .expert-button {
        padding: 2px;
        border-bottom: 2px dotted;
        color: #A6A6A6;
        cursor: pointer;
      }
    }
    .disappear {
      height: 0;
    }

    .footer-container {
      .comment-and-footer {
        background-color: #ffffff;
        padding: 10% 8vw;
        @media only screen and (min-width: 769px) {
          padding: 5% 21vw;
        }
      }
    }
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
    outline: none !important;
  }

  @keyframes rotateAnimation {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(7deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes shiningAnimation {
    0% {
      opacity: 0.1;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.1;
    }
  }

  .appear {
    opacity: 1;
    transition: opacity .333s ease-in-out;
  }

  .disappear {
    opacity: 0.3;
    transition: opacity .333s ease-in-out;
  }

  .enter-in {
    transform: translateX(-50%);
  }

  .fade-out {
    transform: translateX(0);
  }

  .v-leave {
    opacity: 1;
  }

  .v-leave-active {
    transition: opacity .333s
  }

  .v-leave-to {
    opacity: 0;
  }

  .v-enter {
    opacity: 0;
  }

  .v-enter-active {
    transition: opacity .333s
  }

  .v-enter-to {
    opacity: 1;
  }
</style>
