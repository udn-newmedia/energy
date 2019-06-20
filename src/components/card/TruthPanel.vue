<template>
  <div v-show="isVisiblePages" class="truth-panel-container">
    <div class="text-wrapper">
      <slot></slot>
    </div>
    <div
      v-if="questionInfo[currentPage + 1]"
      class="next-text-wrapper"
      @click="goNextPage()"
    >
      <div class="next-button">下一題</div>
      <div class="next-text">{{computeNextShortTitle}}</div>
    </div>
    <div class="truth-button" @click="rotateCard()"><div class="arrow"></div>返回題目</div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils';
import {mapActions, mapState} from 'vuex';

export default {
  name: "TruthPanel",
  props: {
    pageNumber: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState([
      'currentPage',
      'pageAmount',
      'questionInfo',
      'pageOrderList',
      'advancedQuestionFlag',
    ]),
    isVisiblePages() {
      // if (Utils.detectMob()) {
      if (window.innerWidth <= 1023) {
        if (
          this.pageNumber === this.pageOrderList[this.currentPage]
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        if (
          this.pageNumber === this.pageOrderList[this.currentPage - 1] ||
          this.pageNumber === this.pageOrderList[this.currentPage + 1] ||
          this.pageNumber === this.pageOrderList[this.currentPage]
        ) {
          return true;
        } else {
          return false;
        }
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
    rotateCard() {
      // call MainApp function
      this.$root.$children[0].updateRotateFlag(this.pageNumber);
    },
    goNextPage() {
      // call MainApp function
      this.$root.$children[0].goToPage(this.currentPage + 1);
    },
  },
};
</script>

<style lang="scss" scoped>
  .truth-panel-container {
    margin-bottom: 5%;
    .text-wrapper {
      margin: 10% 0;
      text-align: justify;
    }
    .truth-button {
      position: relative;
      width: 100%;
      border-radius: 5px;
      padding: 5% 10%;
      margin: 10% 0;
      color: #666666;
      text-align: center;
      cursor: pointer;
    }
    .arrow {
      border: solid #646464;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 5px;
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
      margin-right: 5px;
    }
    .next-text-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      margin: 50px 0;
      cursor: pointer;
      .next-button {
        position: relative;
        width: 90%;
        border-radius: 5px;
        padding: 20px 0;
        margin: 5px 0;
        color: #191919;
        background-color: #d1d1d1;
        text-align: center;
        cursor: pointer;
      }

      .next-text {
        text-align: right;
        color: #c5c5c5;
        font-size: 0.8rem;
      }      
    }
  }
</style>
