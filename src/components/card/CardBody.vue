<template>
  <div
    v-show="isVisiblePages"
    :class="{
      'card-body': true,
      'fade-in': isVisiblePages,
    }"
  >
    <BarChart :pageNumber=pageNumber></BarChart>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils';
import {mapActions, mapState} from 'vuex';
import BarChart from '../charts/BarChart.vue';

export default {
  name: "CardBody",
  components: {
    BarChart,
  },
  props: {
    pageNumber: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState([
      'currentPage',
      'pageOrderList',
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
  }
};
</script>

<style lang="scss" scoped>
  .card-body {
    transition: .333 ease-in-out;
  }

  .fade-in {
    animation-name: fadeIn;
    animation-duration: .333s;
    @keyframes fadeIn {
      from {opacity: 0;}
      to {opacity: 1;}
    }
  }

</style>
