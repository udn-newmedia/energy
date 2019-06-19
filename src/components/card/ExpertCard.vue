<template>
  <div class="expert-card-container">
    <div
      v-show="pageOrderList[currentPage] !== pageOrderList[pageAmount]"
      :class="{
        'expert-card-mask': true,
        'fade-out': pageOrderList[currentPage] !== pageOrderList[pageAmount],
      }"
    >
      <div class="expert-card">
        <div class="expert-title-wrapper">
          <div class="expert-title">
            <h3 class="expert-title-top">聯合報電話能源民調</h3>
            <h3 class="expert-title-bottom">12 關鍵數據</h3>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="pageOrderList[currentPage] === pageOrderList[pageAmount]"
      :class="{
        'expert-card': true,
        'fade-in': pageOrderList[currentPage] === pageOrderList[pageAmount],
      }"
    >
      <div class="expert-title-wrapper">
        <div class="expert-title">
          <h3 class="expert-title-top">聯合報電話能源民調</h3>
          <h3 class="expert-title-bottom">12 關鍵數據</h3>
        </div>
        <div class="result-wrapper">
          <p class="text-bold"><span class="percentage">40%</span>認為核能是台灣主要發電方式</p>
          <p class="text-bold"><span class="percentage">42%</span>支持台灣採用核能發電</p>
          <p class="text-bold"><span class="percentage">38%</span>認為即便未來10年無法解決核廢料問題，還是支持核電</p>
          <p class="text-bold"><span class="percentage">78%</span>認為台灣近年空氣品質變糟</p>
          <p class="text-bold"><span class="percentage">88%</span>認為燃煤發電影響空氣品質</p>
          <p class="text-bold"><span class="percentage">88%</span>認為電力充足與否影響台灣經濟</p>
          <p class="text-bold"><span class="percentage">38%</span>認為台灣未來一定會缺電</p>
          <p class="text-bold"><span class="percentage">45%</span>認為台灣電價目前合理</p>
          <p class="text-bold"><span class="percentage">59%</span>願意為能源轉型支付更高電價</p>
          <p class="text-bold"><span class="percentage">59%</span>不知道政府能源轉型政策方向</p>
          <p class="text-bold"><span class="percentage">57%</span>支持能源轉型</p>
          <p class="text-bold"><span class="percentage">66%</span>不支持政府增稅補貼綠色能源</p>
        </div>
      </div>
      <div class="article-wrapper">
        <hr>
        <div class="profile-wrapper">
          <img src="images/energy_specialized_Zhou.jpg" alt="周桂田">
          <div class="profile-name">周桂田</div>
          <div class="profile-title">台大風險社會與政策研究中心主任</div>
        </div>
        <p>「從這份（聯合報）問卷，跟去年風險中心問卷（註一），還有今年二、三月（台灣綜合經濟研究院）調查出來的都ㄧ樣，民眾能源素養落差蠻大的。你們 40％ 民眾認為台灣主要發電方式是核能，這跟我們接近。這<span class="highlight-text">認知落差會造成民眾對發電想像不一樣，這是第一要提出來的。</span>」</p>
        <p>周桂田指出，從近年幾份能源民調結果都可發現，台灣民眾對能源結構、空汙現況有不少錯誤認知，這<span class="highlight-text">一方面反映政府對施政結果宣導的失敗，二方面也代表，未來台灣能源轉型能否成功，需仰賴更成功的政策溝通。他強調，台灣能源轉型關鍵，在於政府能否有效提升民眾能源素養。</span></p>
        <p>舉例而言，核能發電占比如今僅 10% 出頭，且台灣近 15 年來僅因人為因素導致一次限電，整體並不缺電；燃煤雖是目前主力發電方式，但政府空汙治理已有成效，近年整體空氣品質呈改善狀態。</p>
        <p>周桂田分析，民調結果可看出台灣民眾思考邏輯，首要是擔心缺電妨礙經濟發展，卻又擔心燃煤會造成空汙惡化，所以支持能源轉型，然而民眾又誤認核電是主力發電方式，所以才演變成支持「以核養綠」，希望政府以核能替代燃煤，達成能源轉型。</p>
        <p><br></p>
        <p>「現在有人主張說民進黨就是燒煤來穩定發電，但現實數據不是這樣。」周桂田說明，台灣在 2016 年時燃煤佔發電比例 45％，但 2019 年 1 月時，燃氣已超過燃煤。此外，周桂田也指出，雖然部分空汙嚴重區沒有控制好，但台灣整體而言空氣品質都在改善，至於引發眾多關注的台中空汙問題，從觀測資料而言，也已得到良好控制。周桂田重申，「監測數值和民眾觀感有落差」，須透過更良好的政策溝通，才能解決問題。</p>
        <p>他強調：「以核養綠邏輯上說不通。它燃煤比例希望是 40％，民眾應該更反彈⋯⋯如果電不夠，你可以說要穩健減核，這我想大家或許可能也會同意，但現在電夠不夠是另一回事，但以核養綠反而燃煤佔比更高，這和民眾考量是背離的，他們（以核養綠）勢必要去修正。我想他們當然是要支持核能，帶出空汙議題，但更加矛盾。」</p>
        <p>「如果你要我講的話就是說，台灣現在沒有一個很清楚⋯⋯就是那個社會學習曲線現在是混亂的，也因為社交媒體的關係，大家在彼此上是沒有對話，沒有對話狀況底下，可能還是同溫層繼續發酵，有一群人是不知道到底議題怎樣，就去選擇一個答案。」</p>
        <p><br></p>
        <div class="profile-wrapper">
          <img src="images/energy_specialized_Lee.jpg" alt="李敏">
          <div class="profile-name">李敏</div>
          <div class="profile-title">清華大學原子科學院院長</div>
        </div>
        <p>「我來解讀是認為，民眾對台灣能源現況不是非常清楚，尤其是各種用電好壞在哪裡不清楚，但有清楚趨勢，就是民眾對核能不是必除之而後快，蠻高比例可以接受。民眾關心經濟發展，關心空汙，而且認為燃煤對空氣品質好壞有非常大影響。」</p>
        <p>在外界眼中，身為台灣「核工大佬」，又是「以核養綠」公投共同提案人之一，李敏是理所當然的擁核派。他也不諱言，核電確實是自己認定最適合台灣的「能源願景」，然而他強調，包括自己在內的所謂「擁核派」，從來不反對發展再生能源。</p>
        <p>「<span class="highlight-text">我們贊成核能的人，從來不反對再生能源，我認為發展再生能源是無怨無悔的選擇。但是發展要有時間性，不是不問代價⋯⋯再生能源會越來越便宜，它錢都花在一開始的建造費用，但越早建是不是越貴？為什麼不能緩慢一步一步來走？這就是以核養綠的概念。</span>」</p>
        <p>李敏認為，為了達成台灣的社會共識，他可以接受「穩健減核」，以達到能源重心逐步轉往綠能的結果。然而他認為，過程中太過迫切地削減核能及燃煤，將重心倚賴在天然氣發電上，會將台灣發電結構至於高度風險中，也會造成缺電、限電的危機。他指出，雖然就空氣品質監測的客觀結果而言，台灣的平均空氣品質確實在改善，但燃煤並非是造成空品惡化的唯一因素，且民眾的感受與客觀數據相左，也是情有可原。</p>
        <p>「我搞核能好像不應該為燃煤講話，但這認知也值得討論，其實空汙有很多原因⋯⋯燃煤對空氣品質影響不大，因為有移動汙染源，有固定鍋爐，還有其他行為會產生空汙，但民眾感覺在於某一些特殊時候的狀態，空氣品質跟燃煤有關。民眾對平均值沒有感覺，但對極端值有感覺，在極端時候，你就會認為他影響大。」</p>
        <p>本報民調發現，45% 受訪者認為台灣電價合理，並有59%受訪者意承擔一定程度的電價上漲，以達成能源轉型目標。對此，李敏不僅直言「台灣電價不合理，太低了，可以提高」，同時進一步強調，自己之所以不支持台灣捨燃煤與核電「押寶」天然氣，最大的關鍵從不是電價，而是供電穩定性。</p>
        <p>「天然氣可靠嗎？<span class="highlight-text">大家說不在乎發電貴一點，你去問商人，他在不在乎貴或便宜？他也不在乎，他在乎是價格穩不穩定。你如果告訴他未來三年價格多少，他可以計算成本，但如果未來電價不穩定，他沒有辦法出去報價，就沒辦法跟別人競爭，這就是天然氣會造成的影響，因為天然氣 90% 成本是跟外面買</span>⋯⋯你天然氣價格不是我現在貴或便宜，而是半年一年後價格不穩定，當你把它搞到50%，穩定性都不在，就是我們電力系統解體的時候。我個人認為必須維持適當的基載電廠，那就是燃煤和核能。」</p>
        <p>李敏分析，從民調結果雖然可看出民眾對台灣能源結構有誤解，同時高估核能發電佔比，但「你不能說是因為民眾誤認才支持，這中間沒有等號。」他分析，當民眾被問到「在以下幾種可能的代價中，您願意用哪一個來達成能源轉型的目標」時，支持率第一、第三名的選項，分別是「重啟核四」及「核一、核二及核三廠延長運轉年限」，這樣的結果就代表<span class="highlight-text">民眾並不真的「反核」</span>。</p>
        <p>在面對核電爭議時，反核方經常以「核廢料無法解決」為由，主張台灣不應繼續使用核電。本報民調顯示，當「支持核電與不支持也不反對者」被追問「如果未來十年，台灣還是無法解決核廢料問題」時，仍舊有 49.6% 受訪者選擇支持核電。</p>
        <p>對此，李敏認為「核廢料只是假議題⋯⋯<span class="highlight-text">雖然繼續用核電，會增加核廢料量，但會減少每單位儲存需要的成本，因為我們核廢料已經存在了，喜不喜歡我們都得面對</span>」，強調核廢料爭議，不應是台灣續用核電與否的重點。</p>
        <p>在 2018 年底的公投中，「以核養綠」方所提出的三案都獲得多數投票者的支持。如今，包括李敏、黃士修等人在內的擁核派，也正在籌備「二部曲」公投，呼籲民眾以直接民主方式促成「重啟核四」與「核電廠使用執照延長 20 年」。</p>
        <p>在被問及「二部曲」公投時，李敏透露了他內心的掙扎：</p>
        <p class="highlight-text">「能源政策可以公投，但核四或核電廠延役是技術問題，不適合公投，就是在政治鬥爭的工具。我知道這有矛盾，但人總是要妥協，你要放棄什麼？你要放棄信念嗎？我的專業就是台灣需要核電，我雖然知道這不應該公投，但我想可以發揮專業為民眾服務，超過我對我理念堅持的重要性⋯⋯我沒有背叛我自己的理念。」</p>
        <p><br></p>
        <div class="profile-wrapper">
          <img src="images/energy_specialized_Lin.jpg" alt="林宗弘">
          <div class="profile-name">林宗弘</div>
          <div class="profile-title">中央研究院社會學研究所研究員</div>
        </div>
        <p>「中研院和聯合報（系）調查都ㄧ樣，有四成民眾以為核電是主流，這部分相同，沒有不準，這反映台灣民眾對社會的理解，還停留在 1980 年代末期。這些人最容易對過去的各種政治、社會印象抱持懷舊心態，明明社會在往前走，卻被很多年長者印象留在過去。」</p>
        <p>林宗弘指出，1980 年代台灣因勞動力不足，引發製造業西進與南向熱潮，連帶導致經濟下滑，加上 1988～1990 年間是台灣最缺電的時期，導致民眾直接將「缺電」與「經濟發展」扣上因果關係。他表示：「真的做統計分析，經濟最好時反而缺電，因為需求量大。但現在論述是反的，說缺電景氣就不好，反而違反認知，論述就變成需要核電來確保用電。」</p>
        <p>林宗弘進一步分析，<span class="highlight-text">核三廠於 1980 年代中期開始供電時，核電確實一度是高比例供電來源，但和台灣許多社會議題一樣，台灣社會存在諸多「時間差」，許多當年出社會的民眾，至今對能源結構的印象仍停留在當年，加上台電長年宣傳核電，才造就今日的調查結果。</span></p>
        <p>「台灣目前產業復甦沒有達到缺電的地步。如果真的缺，代表經濟很好，但當下沒有缺電事實，這也是 1980 年代的印象留下來的後果。現在事實上不缺電，當然不保證三、五年後不缺電。如果台灣回到缺電，可能是景氣恢復，不代表是負面訊號，反而（國外）進來的廠商要求綠電，那就要快發展，反而核電不重要。」</p>
        <p>根據《聯合報系》電話民調，有 42% 受訪者支持台灣採用核能發電，並有 29% 受訪者支持政府以「重啟核四」為手段達成能源轉型。對此，林宗弘感嘆，2011 年日本福島核災後，台灣民眾一度有很高比率支持反核（註二），然而時間久了民眾對風險的恐懼逐漸下降，加上民意受「經濟發展」、「空汙」等許多輿論影響，所以支持核電的聲音才回升。然而他也強調，如今「核四要重啟已經不是意願問題，而是技術問題」，政府與其花力氣解決核電技術問題，不如讓綠電與天然氣發電成長幅度超越核四，如此更能達成能源轉型。</p>
        <p>林宗弘認為，部分民眾呼籲重啟核四的聲音，可能受去年「以核養綠」公投影響。然而他質疑，以核養綠公投可能受特定政黨動員，投票民眾對能源議題也沒有充分了解，政府施政方向受這樣的公投結果影響，是一件很不合理的事。</p>
        <p>他舉例，過去中研院曾調查民眾是否了解<span class="highlight-text">核三廠於 1980 高階核廢料放置地點，結果只有一成多的民眾答對，知道高階核廢料存放於核電廠內，多數受訪者都回答蘭嶼，也有四成多民眾回答不知道，「但他也是告訴你他要核電。」</span></p>
        <p>「所以我們需要對台灣電力結構與後果，或者空汙，要給民眾一個比較清晰的圖像。但這很困難，因為所有決策都有搭便車層面，現在社會仰賴專家也會讓人疑惑，但這不代表沒有知識的人是無辜的。<span class="highlight-text">核三廠於 1980 資訊本身就需要成本，不付出成本的條件上去搞公投，就是讓沒有知識的人去決定你的前途。這樣的後果就是，讓無知混在決策過程中。</span>」</p>
        <p>此外，林宗弘根據去年大選與公投結果進行交叉分析，發現台北、新北、台中、高雄四個選區，藍營得到的選票越高，以核養綠票就越多。他質疑：「這幾個城市選民，依照小抄投公投票機率更高。」</p>
        <p>「所以我主張公投要和大選脫鉤，因為公投綁大選的話，一大票人不需要跟你討論任何事，可能也不深思熟慮就去投票。但如果拆開，去投的人都是想過的，你要動員人去投票很困難。現在你讓一群人看小抄去投票，才得到今天這結果。所以<span class="highlight-text">怎麼樣提供政府施政訊息給民眾，民進黨在這方面有點失敗，無法把事實訊息傳達讓民眾理解，這部分政府需要加強。</span>」</p>
        <p>林宗弘強調：「經濟部跟台電過去提供可能有問題的資訊，有陣子他們沒有供應台灣電力結構改變的訊息，加上以前台電用很多資源去宣傳核電，所以大家還停留在 1980 年的認知。台灣蠻需要一個正確訊息的成人教育，而不是讓過時的訊息混在裡面。」</p>
      </div>
      <div class="editor-and-logo">
        <p><br></p>
        <Share href="http://nmdap.udn.com.tw/newmedia/energy/"></Share>
        <p><br></p>
        <Editor>
          <div>採訪團隊：鐘聖雄、游昌樺、董俞佳</div>
          <div>民調題目設計：聯合報系民調中心</div>
          <div>製作人：鐘聖雄</div>
          <div>視覺設計：張心慈</div>
          <div>網頁製作：楊若榆</div>
          <div>監製：王茂臻、梁玉芳</div>
          <div>2019.06.24</div>
        </Editor>
        <p><br></p>
        <div class="logo-wrapper">
          <a href="https://vision.udn.com/" target="_blank">
            <img src="images/visual_logo.png" alt="聯合報系願景工程">
          </a>
          <a href="https://udn.com/news/index" target="_blank">
            <img src="images/udn_logo.jpg" alt="聯合新聞網">
          </a>
          <img src="images/newmedia_logo.jpg" alt="聯合報新媒體中心">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import Editor from '../Editor.vue';
import Share from '../Share.vue';

export default {
  name: "ExpertCard",
  components: {
    Editor,
    Share,
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
      'pageAmount',
      'pageOrderList',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .expert-card-container {
    text-align: justify;
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
      animation-delay: .333s;
      @keyframes fadeOut {
        from {opacity: 1;}
        to {opacity: 0;}
      }
    }
  }

  .expert-card {
    position: relative;
    .editor-and-logo {
      position: relative;
      margin: 30px 0;
      .logo-wrapper {
        position: relative;
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        a {
          margin: 10px 0;
        }
        img {
          width: 50vw;
          height: auto;
        }
        @media only screen and (min-width: 769px) {
          flex-direction: row;
          a {
            margin: 0;
          }
          img {
            width: 18vw;
            height: auto;
          }
        }
      }
    }
    .expert-title-wrapper {
      text-align: center;
      margin: 10px 0 20px 0;
      @media only screen and (min-width: 769px) {
        display: flex;
        justify-content: space-around;
      }
      .expert-title {
        margin-bottom: 20px;
        padding: 0 10px;
        @media only screen and (min-width: 769px) {
          width: 40%;
          text-align: center;
        }
        .expert-title-top {
          font-size: 21px;
          font-weight: bold;
          line-height: 1.3;
          color: #333333;
          margin: 0;
        }
        .expert-title-bottom {
          font-size: 34px;
          font-weight: bold;
          line-height: 1.3;
          color: #f46c00;
          margin: 0;
        }
      }

      .result-wrapper {
        padding: 0 10px;
        text-align: left;
        @media only screen and (min-width: 769px) {
          width: 60%;
        }
      }
    }

    hr {
      background-color: #232323;
    }
    .text-bold {
      font-weight: bold;
    }
    .percentage {
      padding-right: 3px;
      color: #f46c00;
    }
    .highlight-text {
      color: #f46c00;
    }

    .profile-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 30px 0;

      .profile-name {
        font-size: 36px;
        color: #f46c00;
      }

      .profile-title {
        font-size: 18px;
        color: #333333;
      }
      img {
        width: 50%;
        @media only screen and (min-width: 769px) {
          width: 30%;
        }
      }
    }
  }
  
</style>
