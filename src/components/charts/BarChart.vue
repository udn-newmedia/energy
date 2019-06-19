<template>
  <div class="bar-chart-container">
    <div :class="{
      'title': true,
      'gray-title': onlineFlag,
      }"
    >
      {{questionInfo[pageNumber].title}}
    </div>
    <div class="bar-chart-wrapper">
      <div v-if="onlineFlag" class="most-selected-option">
        <div class="text">
          你選的是<span class="most-item-text">{{questionInfo[pageNumber].option[userReply]}}</span>
        </div>
        <div class="text">
          最多人選的是<span class="most-item-text">{{mostItem}}</span>
        </div>
        <div class="last-text">
          共<span>{{peopleSituation}}</span>人作答
        </div>
      </div>
      <div
        v-if="onlineFlag"
        :class="{
          'bar-chart': true,
          'fade-in': onlineFlag,
          'fade-out': !onlineFlag,
        }"
      >
        <div 
          v-for="(item, index) in questionInfo[pageNumber].option"
          :key="index"
          class="bar-item"
        >
          <div class="option-text">{{item}}</div>
          <div class="option-bar-background">
            <div
              :class="{
                'option-bar': true,
                'poll': pollSelectedFlag,
              }"
              ref="poll"
              :style="{
                width: pollBarWidthObject[index] + '%',
              }"
            >
            </div>
            <div
              :class="{
                'option-bar': true,
                'online': onlineFlag && onlineSelectedFlag,
              }"
              :style="{
                width: onlineBarWidthObject[index] + '%',
              }"
            >
            </div>
          </div>
          <div class="option-percent">{{percentObject[index]}}%</div>
        </div>
      </div>
    </div>
    <div
      v-show="onlineFlag" 
      :class="{
        'user-choice-wrapper': true,
        'fade-in': onlineFlag,
        'fade-out': !onlineFlag,
      }"
    >
      <div class="labels-wrapper">
        <div class="label-button-wrapper">
          <div
            class="label-button"
          >
            <input
              class="custom-checkbox blue"
              :id="'custom-checkbox-2' + pageNumber"
              type="checkbox"
              checked
              @click="showSelectedItem('poll')"
            >
            <label :for="'custom-checkbox-2' + pageNumber">電話民調</label>
          </div>
          <div
            class="label-button"
          >
            <input
              class="custom-checkbox orange"
              :id="'custom-checkbox-3' + pageNumber"
              type="checkbox"
              checked
              @click="showSelectedItem('online')"
            >
            <label :for="'custom-checkbox-3' + pageNumber">udn線上即時民調</label>
          </div>
        </div>
        <div class="hint">提示：取消勾選<input type="checkbox" checked disabled></div>
      </div>
    </div>
    <div v-show="!onlineFlag" class="vote-option">
      <div class="option-button-wrapper">
        <div
          v-for="(item, index) in questionInfo[pageNumber].option"
          :key="index"
          class="option-button"
          @click="optionButtonEvent(index)"
        >
          {{item}}
        </div>
      </div>
    </div>
    <div
      v-if="!isIE"
      v-show="onlineFlag && pageNumber != 10 && pageNumber != 11 && pageNumber != 12 && pageNumber != 14"
      class="truth-button" @click="rotateCard()"
    >
      查看真相
    </div>
    <div
      v-if="onlineFlag && questionInfo[pageNumber + 1] && isMob"
      class="next-text-wrapper"
      @click="goNextPage()"
    >
      <div class="next-text">下一題：{{computeNextShortTitle}}</div>
      <div class="arrow-wrapper">
        <div class="arrow"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils';
import {mapActions, mapState} from 'vuex';

export default {
  name: "BarChart",
  props: {
    pageNumber: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      onlineFlag: false,
      pollSelectedFlag: true,
      onlineSelectedFlag: false,
      onlinePeople: 0,
      pollPeople: 0,
      totalPeople: 0,
      onlineFetchList: {},
      onlineAmount: [],
      totalAmount: [],
      percentObject: {},
      pollBarWidthObject: {},
      onlineBarWidthObject: {},
      mostItem: '',
      userReply: 0,
    };
  },
  computed: {
    ...mapState([
      'questionInfo',
      'pageOrderList',
      'questionProgress',
      'advancedQuestionFlag',
    ]),
    peopleSituation() {
      if (this.pollSelectedFlag && this.onlineSelectedFlag) {
        return this.totalPeople;
      } else if (this.pollSelectedFlag) {
        return this.pollPeople;
      } else {
        return this.onlinePeople;
      }
    },
    isMob() {      
      // if (Utils.detectMob()) {
      if (window.innerWidth > 1023) {
        return false;
      } else {
        return true;
      }
    },
    isIE() {
      if (Utils.detectIE()) {
        return true;
      } else {
        return false;
      }
    },
    computeNextShortTitle() {
      if(this.pageNumber === 6) {
        return this.advancedQuestionFlag ? this.questionInfo[this.pageNumber].shortTitle : this.questionInfo[8].shortTitle;
      } else {
        return this.questionInfo[this.pageNumber].shortTitle;
      }
    },
  },
  methods: {
    ...mapActions({
      updateProgress: 'updateProgress',
    }),   
    calcMostItem(array) {
      const maxNum = Math.max(...array);
      const maxIndex = array.indexOf(maxNum);
      return this.questionInfo[this.pageNumber].option[maxIndex];
    },
    clearWidth(item) {
      const array = [];
      this.questionInfo[this.pageNumber].pollPercent.map((e) => {
        array.push(0);
      })
      if (item === 'poll') {
        this.pollBarWidthObject = {...array};
      } else {
        this.onlineBarWidthObject = {...array};      
      }
    },
    calcAmountToPercent(array, total, allItemFlag = false , dist = 'percentNum') {
      let percentArray = [];
      let totalPercent = 0;
      const denominator = allItemFlag && dist === 'bar' ? (total / this.totalPeople) : 1;

      // 如果是百分比數字用，要處理加起來=100，如果是bar的寬度則不用
      if (dist === 'percentNum') {
        array.map((e) => {
          percentArray.push(parseInt(((e / total) * 1000 * denominator).toFixed(1)));
          totalPercent += parseInt(((e / total) * 1000 * denominator).toFixed(1));
        });

        const max = Math.max(...percentArray);
        const maxIndex = percentArray.indexOf(max);
  
        if (totalPercent < 1000) {
          percentArray[maxIndex] += 1000 - totalPercent;  
        } else {
          percentArray[maxIndex] -= totalPercent - 1000;
        }

        percentArray.map((e, index) => {
          percentArray[index] = (e / 10).toFixed(1);
        });
      } else {
        array.map((e) => {
          percentArray.push(parseInt(((e / total) * 100 * denominator).toFixed(1)));
          totalPercent += parseInt(((e / total) * 100 * denominator).toFixed(1));
        });
      }

      return {...percentArray};
    },
    addWidth(item, situation = false) {
      if (item === 'poll') {
        this.pollBarWidthObject = this.calcAmountToPercent(this.questionInfo[this.pageNumber].pollAmount, this.pollPeople, situation, 'bar');
      } else {
        this.onlineBarWidthObject = this.calcAmountToPercent(this.onlineAmount, this.onlinePeople, situation, 'bar');
      }
    },
    showSelectedItem(item) {
      // 判斷flag
      if (item === 'poll') {
        if (this.pollSelectedFlag) {
          this.pollSelectedFlag = !this.pollSelectedFlag;
        } else {
          this.pollSelectedFlag = !this.pollSelectedFlag;
        }
      } else {
        if (this.onlineSelectedFlag) {
          this.onlineSelectedFlag = !this.onlineSelectedFlag;
        } else {
          this.onlineSelectedFlag = !this.onlineSelectedFlag;
        }
      }

      // 判斷percentage, most item和width
      if (this.pollSelectedFlag && this.onlineSelectedFlag) {
        this.addWidth('poll', true);
        this.addWidth('online', true);
        this.percentObject = this.calcAmountToPercent(this.totalAmount, this.totalPeople, false);
        this.mostItem = this.calcMostItem(this.totalAmount);
      } else if (this.pollSelectedFlag) {
        this.addWidth('poll', false);
        this.clearWidth('online');
        this.percentObject = {...this.questionInfo[this.pageNumber].pollPercent};
        this.mostItem = this.calcMostItem(this.questionInfo[this.pageNumber].pollAmount);
      } else {
        this.addWidth('online', false);
        this.clearWidth('poll');
        this.percentObject = this.calcAmountToPercent(this.onlineAmount, this.onlinePeople, false);
        this.mostItem = this.calcMostItem(this.onlineAmount);
      }
    },
    optionButtonEvent(index) {
      this.submitOption(this.pageNumber, index);
      this.userReply = index;
      this.updateProgress(this.pageNumber, index);

      // 如果第七題回答不支持也不反對
      if (this.pageNumber === 6 && index === 2) {
        this.$root.$children[0].showAdvancedQuestion();
      }
    },
    submitOption(pageNumber, index) {
      const pageUrl = 'http://nmdap.udn.com.tw/newmedia/energy/api/poll/' + (this.pageNumber + 1) + '/' + (index + 1);
      fetch(pageUrl, {
        method: 'put',
        headers: {
          'content-type': 'appication/json',
        },
      })
      .then(() => {
        this.fetchPollsList();
      })
      .catch(err => console.log(err));
    },
    fetchPollsList() {
      const pageUrl = 'http://nmdap.udn.com.tw/newmedia/energy/api/poll/' + (this.pageNumber + 1);
      fetch(pageUrl)
        .then(res => res.json())
        .then(res => {
          this.onlineFetchList = res.data;
        })
        .then(() => {
          this.questionInfo[this.pageNumber].pollAmount.map((e, index) => {
            this.onlineAmount.push(this.onlineFetchList['option_' + (index + 1)])
            this.totalAmount.push(e + this.onlineFetchList['option_' + (index + 1)]);
          });

          // calculate online poll people of this question
          this.onlineAmount.map((e) => {
            this.onlinePeople += e;
          });

          // calculate poll people of this question
          this.questionInfo[this.pageNumber].pollAmount.map((e) => {
            this.pollPeople += e;
          });

          // calculate total people of this question
          this.totalPeople = this.pollPeople + this.onlinePeople;

          // refresh diagram
          this.onlineFlag = true;
          this.onlineSelectedFlag = true;
          this.percentObject = this.calcAmountToPercent(this.totalAmount, this.totalPeople, false);
          this.mostItem = this.calcMostItem(this.totalAmount);
          setTimeout(()=>{
            this.addWidth('poll', true);
            this.addWidth('online', true);
          }, 333);
        })
        .catch(err => console.log(err));
    },
    rotateCard() {
      // call MainApp function
      this.$root.$children[0].updateRotateFlag(this.pageNumber);
    },
    goNextPage() {
      // call MainApp function
      this.$root.$children[0].goToPage(this.pageNumber + 1);
    },
  },
};
</script>

<style lang="scss" scoped>
  .bar-chart-container {
    position: relative;
    .title {
      font-size: 1.1rem;
      font-weight: normal;
      text-align: justify;
      margin-top: 10px;
      transition: .333s ease-in-out;
    }
    .gray-title {
      color: #c5c5c5;
    }
    .text {
      font-weight: normal;
    }
    .last-text {
      color: #BDBDBD;
    }
    .next-text-wrapper {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      cursor: pointer;
      margin-bottom: 10px;
      .next-text {
        text-align: right;
        color: #646464;
        font-size: 0.8rem;
        padding: 2%;
      }
      .arrow-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        .arrow {
          border: solid #646464;
          border-width: 0 3px 3px 0;
          display: inline-block;
          padding: 5px;
          transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
        }
      }
    }
    input[disabled] {
      cursor: default;
    }

    .fade-in {
      animation-name: fadeIn;
      animation-duration: .333s;
      @keyframes fadeIn {
        from {opacity: 0;}
        to {opacity: 1;}
      }
    }
    .fade-out {
      animation-name: fadeOut;
      animation-duration: .333s;
      @keyframes fadeOut {
        from {opacity: 1;}
        to {opacity: 0;}
      }
    }
  }

  .bar-chart-wrapper {
    margin: 10% 0 0 0;
    .bar-chart {
      margin: 5% 0;
      .bar-item {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        margin: 3% 0;
        .option-text {
          position: relative;
          z-index: 20;
          width: 35%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-right: 5px;
          padding-right: 5px;
          font-size: 0.85rem;
          text-align: right;
          line-height: 1.1;
          background-color: #ffffff;
          @media only screen and (min-width: 769px) {
            width: 25%;
          }
          // white-space: nowrap;
        }
        .option-bar-background {
          position: relative;
          z-index: 10;
          overflow: hidden;
          width: calc(65% - 60px);
          height: 5px;
          background-color: #EBEBEB;
          border-radius: 10px;    
          @media only screen and (min-width: 769px) {
            width: calc(75% - 60px);
          }
          .option-bar {
            width: 0;
            height: 100%;
            float: left;
            opacity: 0;
            transition: .666s ease-in-out;
          }
          .online {
            position: relative;
            z-index: 1;
            opacity: 1;
            background-color: #F46C00;
          }
          .poll {
            position: relative;
            z-index: 2;
            opacity: 1;
            background-color: #525174;
          }
        }
        .option-percent {
          width: 60px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-left: 10px;
          color: #BDBDBD;
          font-size: 0.85rem;
        }
      }
    }
  }

  .labels-wrapper {
    position: relative;
    text-align: center;
    font-size: 0.9rem;
    .label-button-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 3%;
      
      label {
        font-weight: normal;
          font-size: 0.8rem;

      }

      .label-button {
        .custom-checkbox {
          position: relative; // take it out of document flow
          opacity: 0; // hide it
          & + label {
            position: relative;
            cursor: pointer;
            padding: 0;
          }
          // Disabled state label.
          &:disabled + label {
            // color: #b8b8b8;
            cursor: default;
          }
          // Checkmark. Could be replaced with an image
          &:checked + label:after {
            content: '';
            position: absolute;
            left: 2px;
            top: 8px;
            background: white;
            width: 2px;
            height: 2px;
            box-shadow: 
              2px 0 0 white,
              4px 0 0 white,
              4px -2px 0 white,
              4px -4px 0 white,
              4px -6px 0 white,
              4px -8px 0 white;
            transform: rotate(45deg);
          }
        }
        .orange {
          // Box.
          & + label:before {
            content: '';
            margin-right: 5px;
            display: inline-block;
            vertical-align: sub;
            width: 15px;
            height: 15px;
            background: #F46C00;
          }
          // Disabled box.
          &:disabled + label:before {
            box-shadow: none;
            background: #F46C00;
          }
        }

        .blue {
          // Box.
          & + label:before {
            content: '';
            margin-right: 5px;
            display: inline-block;
            vertical-align: sub;
            width: 15px;
            height: 15px;
            background: #525174;
          }
          // Box hover
          // &:hover + label:before {
          //   background: #525174;
          // }
          // Box checked
          // &:checked + label:before {
          //   background: #525174;
          // }

          // Disabled box.
          &:disabled + label:before {
            box-shadow: none;
            background: #525174;
          }
        }
      }
    }
    .hint {
      color: #BDBDBD;
    }
  }

  .most-selected-option {
    text-align: center;
    .last-text {
      font-weight: bold;
    }
    .most-item-text {
      padding-left: 10px;
      font-weight: bold;
    }
  }

  .vote-option {
    position: relative;
    text-align: center;
    margin: 15% 0;
    .option-button-wrapper {
      position: relative;
      margin: 5% 0;
      .option-button {
        position: relative;
        display:inline-block;
        width: auto;
        color: #F9B076;
        border: solid 1px #F9B076;
        border-radius: 5px;
        padding: 3% 8%;
        margin: 1%;
        cursor: pointer;

        &:hover {
          color: #ffffff;
          background-color: #F9B076;
          transition: .666s;
        }
      }
    }
  }

  .truth-button {
    position: relative;
    width: 100%;
    border-radius: 5px;
    padding: 5% 10%;
    margin: 10% 0;
    color: #FFFFFF;
    background-color: #000000;
    text-align: center;
    cursor: pointer;
  }
</style>
