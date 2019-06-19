import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pageAmount: 13,
    currentPage: 0,
    questionGroup: {
      groupView: [0, 1, 2, 3],
      groupEffect: [4, 5, 6],
      groupChoice: [7, 8],
      groupTransformation: [9, 10, 11, 12],
    },
    questionGroupAdvanced: {
      groupView: [0, 1, 2, 3],
      groupEffect: [4, 5, 6, 7, 8],
      groupChoice: [9, 10],
      groupTransformation: [11, 12, 13, 14],
    },
    questionInfo: {
      0: {
        title: '請問您知不知道目前臺灣最主要的電力供應來源是那一項？',
        shortTitle: '台灣電價是否合理？',
        option: ['核能', '燃煤', '燃氣(天然氣)', '燃油', '再生能源', '其他', '不知道/未回答'],
        pollPercent: [39.5, 29.2, 4.1, 3.6, 3.0, 0.1, 20.5],
        pollAmount: [821, 606, 86, 74, 61, 2, 426],
      },
      1: {
        title: '請問您認為目前臺灣的電價是算貴？剛好？還是便宜？',
        shortTitle: '空氣品質是否變差？',
        option: ['貴', '剛好', '便宜', '不知道/未回答'],
        pollPercent: [29.1, 44.8, 18.2, 7.9],
        pollAmount: [604, 931, 378, 164],
      },
      2: {
        title: '跟前幾年相比，請問您覺得臺灣的空氣品質是變好？差不多？還是變糟？',
        shortTitle: '台灣會缺電嗎？',
        option: ['變好', '差不多', '變糟', '不知道/未回答'],
        pollPercent: [1.8, 17.9, 78.1, 2.2],
        pollAmount: [37, 373, 1622, 45],
      },
      3: {
        title: '請問您覺得臺灣會不會缺電？',
        shortTitle: '燃煤發電製造空汙？',
        option: ['一定會', '可能會/可能不會', '一定不會', '不知道/未回答'],
        pollPercent: [38.1, 45.9, 8.0, 8.0],
        pollAmount: [791, 953, 166, 167],
      },
      4: {
        title: '請問您認為，燃煤發電對於臺灣空氣品質好壞有沒有影響？',
        shortTitle: '發電量影響台灣經濟？',
        option: ['影響非常大', '還算有影響', '不太有影響', '完全沒影響', '不知道/未回答'],
        pollPercent: [55.0, 87.6, 3.9, 5.0, 7.5],
        pollAmount: [1142, 677, 80, 22, 155],
      },
      5: {
        title: '請問您認為，電力是否充足對於臺灣的經濟發展有沒有影響？',
        shortTitle: '擁核？反核？',
        option: ['影響非常大', '還算有影響', '不太有影響', '完全沒影響', '不知道/未回答'],
        pollPercent: [64.4, 88.1, 4.2, 6.0, 5.8],
        pollAmount: [1338, 493, 87, 38, 121],
      },
      6: {
        title: '請問您對於臺灣採用核能發電的態度是支持？反對？還是不支持也不反對？',
        shortTitle: '假如核廢料有解，是否擁核？',
        option: ['支持', '反對', '不支持也不反對', '無意見/未回答'],
        pollPercent: [41.6, 16.2, 35.7, 6.5],
        pollAmount: [865, 336, 742, 135],
      },
      7: {
        title: '如果有技術可以解決核廢料問題，請問您支不支持臺灣採用核能發電？',
        shortTitle: '假如核廢料無解，是否反核？',
        option: ['支持', '反對', '不支持也不反對', '無意見/未回答'],
        pollPercent: [60.2, 26.8, 5.9, 7.1],
        pollAmount: [648, 289, 64, 76],
      },
      8: {
        title: '如果未來十年，臺灣還是無法解決核廢料問題，請問您支不支持臺灣採用核能發電？',
        shortTitle: '能源轉型何去何從？',
        option: ['支持', '反對', '不支持也不反對', '無意見/未回答'],
        pollPercent: [49.6, 33.7, 5.7, 11.0],
        pollAmount: [797, 541, 91, 177],
      },
      9: {
        title: '政府正在推動能源轉型政策，請問您知不知道主要方向是什麼？',
        shortTitle: '是否支持政府轉型目標？',
        option: ['知道', '不知道'],
        pollPercent: [41.1, 58.9],
        pollAmount: [853, 1224],
      },
      10: {
        title: '目前臺灣的發電分配比例大致是：燃煤與天然氣各占40%左右、核能約占11%。 政府提出的能源轉型目標是，預計6年後（2025年），天然氣提高為50%，燃煤降至30%、綠能提升到20%，核電則在核三廠除役後歸零。請問您支不支持政府提出來的能源轉型目標？',
        shortTitle: '願為轉型付出哪些代價？',
        option: ['非常支持', '還算支持', '不太支持', '非常不支持', '不知道/未回答'],
        pollPercent: [17.7, 39.1, 14.0, 13.2, 16.0],
        pollAmount: [367, 813, 291, 274, 332],
      },
      11: {
        title: '在能源轉型過程中，沒有一種方案是完美的，我們都需要妥協或付出代價。在以下幾種可能的代價中，您願意用哪一個來達成能源轉型的目標？',
        shortTitle: '最無法忍受的狀況是？',
        option: ['限電', '經濟發展停滯', '空氣品質惡化', '調漲電價', '核一、核二及核三廠延長運轉年限', '重啟核四', '都不能接受', '不知道/未回答'],
        pollPercent: [11.0, 2.3, 1.9, 23.3, 17.1, 29.0, 3.0, 12.4],
        pollAmount: [229, 47, 40, 484, 601, 62, 257],
      },
      12: {
        title: '在幾種能源轉型的可能代價中，您最無法忍受哪一種狀況？',
        shortTitle: '是否願為轉型調漲電價？',
        option: ['缺電限電', '經濟發展停滯', '空氣品質惡化', '調漲電價', '核一、核二及核三廠延長運轉年限', '重啟核四', '都不願忍受', '不知道/未回答'],
        pollPercent: [21.5, 13.0, 36.6, 6.5, 2.6, 10.1, 2.0, 7.7],
        pollAmount: [446, 270, 761, 136, 55, 210, 41, 160],
      },
      13: {
        title: '請問您願不願意為了能源轉型而支付更高的電價？',
        shortTitle: '是否支持加稅補貼綠能？',
        option: ['非常願意', '還算願意', '不太願意', '非常不願意', '不知道/未回答'],
        pollPercent: [13.9, 44.6, 17.2, 18.0, 6.3],
        pollAmount: [228, 925, 358, 374, 131],
      },
      14: {
        title: '請問您贊不贊成政府多收稅來補貼綠色能源？',
        shortTitle: '專家報導',
        option: ['很贊成', '還算贊成', '無所謂贊不贊成', '不太贊成', '很不贊成', '不知道', '未回答'],
        pollPercent: [9.2, 27.9, 1.5, 24.0, 30.8, 4.6, 2.1],
        pollAmount: [191, 579, 32, 498, 639, 95, 43],
      },
    },
    pageOrderList: [0, 1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15],
    pageOrderFullList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    advancedQuestionFlag: false,
    questionProgress: 0,
  },
  mutations: {
    incrementPage(state, param) {
      state.currentPage = param;
    },
    changeAdvancedQuestion(state) {
      state.advancedQuestionFlag = true;
      state.pageOrderList = state.pageOrderFullList;
      state.pageAmount = 15;
    },
    incrementQuestion(state, question, index) {
      if (question === 6 && index === 2) {
        state.questionProgress += 3;
      } else {
        state.questionProgress++;
      }
    },
  },
  actions: {
    updatePage(context, param) {
      context.commit('incrementPage', param);
    },
    updateAdvancedQuestion(context) {
      context.commit('changeAdvancedQuestion');
    },
    updateProgress(context, question, index) {
      context.commit('incrementQuestion', question, index);
    },
  }
});