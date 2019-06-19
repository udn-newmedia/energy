<template>
  <div :class="{
      'question-card-container': true,
      'expert-question-card-container': expertFlag,
    }"
  >
    <div class="flip-card">
      <div :class="{
        'flip-card-inner': true,
        'flip-card-rotate': rotateFlag,
        }"
      >
        <div 
          :class="{
            'flip-card-front': true,
            'disappear': rotateFlag,
          }"
        >
          <div :class="{
              'card-body-container': true,
              'white': true,
              'fade-in': !rotateFlag,
              'fade-out': rotateFlag,
            }"
          >
            <slot name=cardFront></slot>
          </div>
        </div>
        <div
          :class="{
            'flip-card-back': true,
            'disappear': !rotateFlag,
          }">
          <div :class="{
              'card-body-container': true,
              'black': true,
              'fade-in': rotateFlag,
              'fade-out': !rotateFlag,
            }"
          >
            <slot name=cardBack></slot>
          </div>
        </div>
      </div>
      <div
        v-if="isVisiblePages && detectWeb"
        class="page-button-wrapper"
      >
        <div
          v-if="pageNumber > pageOrderList[currentPage]"
          class="page-button prev-button"
          @click="goToPage('prev')"
        >
          <i :class="{
            'fas fa-arrow-right': true,
            'button-color-flip': rotateFlag,
          }"
        ></i>
        </div>
        <div
          v-if="pageNumber < pageOrderList[currentPage]"
          class="page-button next-button"
          @click="goToPage('next')"
        >
          <i :class="{
            'fas fa-arrow-left': true,
          }"></i>
        </div>
      </div>
    </div>
    <div class="card-footer-wrapper">
      <slot name=footer></slot>
    </div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils';
import {mapActions, mapState} from 'vuex';

export default {
  name: "QuestionCard",
  props: {
    rotateFlag: {
      type: Boolean,
      default: false,
    },
    expertFlag: {
      type: Boolean,
      default: false,
    },
    pageNumber: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState([
      'currentPage',
      'pageAmount',
      'pageOrderList',
    ]),
    detectWeb() {
      // if (Utils.detectMob()) {
      if (window.innerWidth > 1023) {
        return true;
      } else {
        return false;
      }
    },
    isVisiblePages() {
      if (
        this.pageNumber === this.pageOrderList[this.currentPage - 1] ||
        this.pageNumber === this.pageOrderList[this.currentPage + 1] ||
        this.pageNumber === this.pageOrderList[this.currentPage]
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    ...mapActions({
      updatePage: 'updatePage',
    }),
    goToPage(direction) {
      // call MainApp function
      if (direction==='prev') {
        this.$root.$children[0].goToPage(this.currentPage + 1);
      } else {
        this.$root.$children[0].goToPage(this.currentPage - 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .question-card-container {
    min-height: 65vh;
    padding: 2%;
    margin-bottom: 10%;
    @media only screen and (min-width: 1024px) {
      padding: 2% 5%;
    }
    .flip-card {
      background-color: transparent;
      perspective: 1000px;

      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
      }
      .flip-card-rotate {
        transform: rotateY(180deg);
      }
      .flip-card-front, .flip-card-back {
        position: relative;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
      }
      .flip-card-back {
        transform: rotateY(180deg);
      }
    }

    .page-button-wrapper {
      position: absolute;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
      border-radius: 3%;
      background-color: #ffffff;
      opacity: 0.5;

      .page-button {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 5%;
        cursor: pointer;
      }
      .prev-button {
        justify-content: flex-start;
      }
      .next-button {
        justify-content: flex-end;
      }
    }

    .fade-in {
      animation-name: fadeIn;
      animation-duration: .333s;
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }

    .fade-out {
      position: absolute;
      animation-name: fadeOut;
      animation-duration: .333s;
      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    }

    .disappear {
      position: absolute;
      height: 0;
      visibility: hidden;
      opacity: 0;
    }

    .white {
      background-color: #ffffff;
    }

    .black {
      color: #ffffff;
      background-color: #2A2A2A;
    }

  }

  .card-body-container {
    min-height: 30vh;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    opacity: 1;
    transition: .666s ease-in-out;
  }
  
  .card-footer-wrapper {
    margin: 50px 0;
    text-align: center;
  }

  .expert-question-card-container {
    @media only screen and (min-width: 769px) {
      width: 60vw !important;
    }
  }

</style>
