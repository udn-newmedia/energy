<template>
  <div class="svg-container">
    <div class="title-and-legend-wrapper">
      <div class="title">台灣近年供電狀況</div>
      <img src="images/charts/Q4tag.svg" alt="legend">
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" :height="computeHeight" viewBox="0 80 352.521 274">
      <defs>
        <filter id="Path_1087" x="132.57" y="56.896" width="38.779" height="27.131" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="限電次數" x="155.779" y="53" width="70" height="35" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-2"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-2"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="備用容量率" x="51.073" y="52.915" width="83" height="35" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-3"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-3"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="Line_77" x="28.07" y="59.808" width="38.841" height="21" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-4"/>
          <feFlood flood-opacity="0.871"/>
          <feComposite operator="in" in2="blur-4"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="目標值" x="248.073" y="52.915" width="57" height="35" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-5"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-5"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="Line_77-2" x="225.57" y="60.308" width="37.841" height="20" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-6"/>
          <feFlood flood-opacity="0.871"/>
          <feComposite operator="in" in2="blur-6"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      <g id="Q4_chart2" transform="translate(-41.43 -699)">
        <path id="line_bg" d="M48.7,180.032H337.135M48.7,161.828H337.135M48.7,143.665H337.135M48.7,125.461H337.135M48.7,107.216H337.135M48.7,89.012H337.135M48.7,70.808H337.135M48.7,52.6H337.135M48.7,34.4H337.135" transform="translate(11.267 791.704)" fill="none" stroke="#828282" stroke-linejoin="round" stroke-width="0.89" opacity="0.4"/>
        <text id="資料來源_台灣電力公司" data-name="資料來源：台灣電力公司" transform="translate(135 1025)" fill="#9f9f9f" font-size="12" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="107" y="13">資料來源：台灣電力公司</tspan></text>
        <g id="year" transform="translate(-1)">
          <line id="Line_82" data-name="Line 82" x2="288.435" transform="translate(59.967 989.94)" fill="none" stroke="#828282" stroke-linejoin="round" stroke-width="0.89"/>
          <text id="_1988" data-name="1988" transform="translate(52.304 1004.687)" fill="#9f9f9f" font-size="10" font-family="ArialMT, Arial"><tspan x="0" y="0">1988</tspan></text>
          <text id="_1999" data-name="1999" transform="translate(157.304 1004.687)" fill="#9f9f9f" font-size="10" font-family="ArialMT, Arial"><tspan x="0" y="0">1999</tspan></text>
          <text id="_2017年" data-name="2017年" transform="translate(319.304 1004.687)" fill="#9f9f9f" font-size="10" font-family="ArialMT, Arial"><tspan x="0" y="0">2017</tspan><tspan y="0" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
        </g>
        <g id="right">
          <text id="_0_" data-name="0%" transform="translate(353 993.512)" fill="#9f9f9f" font-size="12" font-family="ArialMT, Arial"><tspan x="0" y="0">0%</tspan></text>
          <text id="_5_" data-name="5%" transform="translate(352.666 966.206)" fill="#9f9f9f" font-size="12" font-family="ArialMT, Arial"><tspan x="0" y="0">5%</tspan></text>
          <text id="_10_" data-name="10%" transform="translate(352.666 938.9)" fill="#9f9f9f" font-size="12" font-family="ArialMT, Arial"><tspan x="0" y="0">10%</tspan></text>
          <text id="_15_" data-name="15%" transform="translate(352.666 911.594)" fill="#9f9f9f" font-size="12" font-family="ArialMT, Arial"><tspan x="0" y="0">15%</tspan></text>
          <text id="_20_" data-name="20%" transform="translate(352.666 884.288)" fill="#9f9f9f" font-size="12" font-family="ArialMT, Arial"><tspan x="0" y="0">20%</tspan></text>
          <text id="_25_" data-name="25%" transform="translate(352.666 856.982)" fill="#9f9f9f" font-size="12" font-family="ArialMT, Arial"><tspan x="0" y="0">25%</tspan></text>
          <text id="_30_" data-name="30%" transform="translate(352.666 829.676)" fill="#9f9f9f" font-size="12" font-family="ArialMT, Arial"><tspan x="0" y="0">30%</tspan></text>
        </g>
        <g id="left">
          <text id="_0" data-name="0" transform="translate(43.767 994.512)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">0</tspan></text>
          <text id="_2" data-name="2" transform="translate(43.767 976.308)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">2</tspan></text>
          <text id="_4" data-name="4" transform="translate(43.767 958.104)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">4</tspan></text>
          <text id="_6" data-name="6" transform="translate(43.767 939.9)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">6</tspan></text>
          <text id="_8" data-name="8" transform="translate(43.767 921.696)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">8</tspan></text>
          <text id="_10" data-name="10" transform="translate(41.43 903.492)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">10</tspan></text>
          <text id="_12" data-name="12" transform="translate(41.43 885.288)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">12</tspan></text>
          <text id="_14" data-name="14" transform="translate(41.43 867.084)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">14</tspan></text>
          <text id="_16" data-name="16" transform="translate(41.43 848.88)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">16</tspan></text>
          <text id="_18" data-name="18" transform="translate(41.43 830.676)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">18</tspan></text>
          <text id="次" transform="translate(42.234 812)" fill="#ffcb47" font-size="12" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei" opacity="0.6"><tspan x="0" y="0">次</tspan></text>
        </g>
        <path :class="{'disappear': startFlag}" id="data_column_yellow" d="M56.5,206.228h2.911v18.2H56.5Zm9.266-54.571h2.952v72.775H65.766Zm9.348,45.469h2.911v27.306H75.114V197.126ZM84.421,97h2.952V224.432H84.421Zm9.307,109.224h2.911v18.2H93.728v-18.2Zm9.266-18.2h2.952v36.408h-2.952V188.024ZM112.342,78.8h2.87V224.432h-2.87Zm9.307,118.326h2.911v27.306h-2.911V197.126Zm9.266,18.2h2.952v9.1h-2.952Zm27.962-18.2h2.911v27.306h-2.911Zm27.921,18.2h2.87v9.1H186.8Zm139.523,0h2.952v9.1h-2.952Z" transform="translate(6.665 765.508)" fill="#ffcb47"/>
        <path id="data_line_blue" d="M60.1,94.673,69.366,136.7l9.348,36.08,9.307,14.186,9.266-6.56,9.307,9.84,9.348-3.28,9.307.533,9.266-4.879,9.307-29.52,9.266,18,9.348-26.2,9.307-.533,9.307-3.239,9.266-15.375,9.348,7.667,9.307-30.586,9.266,21.361,9.307,1.025,9.348-55.145,9.307,27.88L255.465,59.7l9.307,25.666,9.266,15.293,9.389-11.439,9.266,28.372L302,132.926l9.266,17.425,9.348,6.027,9.307,3.239,9.307-1.025" transform="translate(4.541 776.777)" fill="none" stroke="#8aa1ae" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
        <g id="data_dotted_line" transform="translate(0 534)">
          <path id="Path_1094" data-name="Path 1094" stroke="#a5a5a5" d="M66.5,167.641h99.712l9.307-.041h45.059" fill="none" transform="translate(0.765 179.116)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="1 5"/>
          <line id="Line_84" data-name="Line 84" x2="7.626" y2="17.917" transform="translate(223.885 349.258)" stroke-dasharray="1 5" stroke="#a5a5a5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="none"/>
          <path id="Path_1097" data-name="Path 1097" stroke="#a5a5a5" d="M475.1,220.8h34.522l9.266,5.494h46.576l9.307-.041H582.6" fill="none" transform="translate(-240.309 147.728)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="1 5"/>
        </g>
        <g v-show="currentYear === 1988" id="option1988" transform="translate(-8.75 455)">
          <rect id="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="line" transform="translate(71.27 516)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="19" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="18" fill="none"/>
          </g>
          <g id="point" transform="translate(68.75 411)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-2" data-name="point" transform="translate(68.75 421)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend" transform="translate(11 -45)">
            <g id="Rectangle_951" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_1988年" data-name="1988年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">1988</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_2次" data-name="限電次數 2次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">2</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_20_" data-name="目標值 20%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20%</tspan></text>
              <circle id="Ellipse_37-2" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_21.7_" data-name="備用容量率 21.7%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 21.7%</tspan></text>
              <circle id="Ellipse_38" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 1989" id="option1989" transform="translate(0.25 455)">
          <rect id="bg-2" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-2" data-name="line" transform="translate(71.27 462)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="73" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="72" fill="none"/>
          </g>
          <g id="point-3" data-name="point" transform="translate(68.75 456)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-4" data-name="point" transform="translate(68.75 421)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-2" data-name="legend" transform="translate(11 -45)">
            <g id="Rectangle_951-2" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_1989年" data-name="1989年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">1989</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-2" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_8次" data-name="限電次數 8次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">8</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-3" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-2" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_20_2" data-name="目標值 20%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20%</tspan></text>
              <circle id="Ellipse_37-4" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-2" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_14_" data-name="備用容量率 14%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 14%</tspan></text>
              <circle id="Ellipse_38-2" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 1990" id="option1990" transform="translate(9.25 455)">
          <rect id="bg-3" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-3" data-name="line" transform="translate(71.27 507)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="28" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="27" fill="none"/>
          </g>
          <g id="point-5" data-name="point" transform="translate(68.75 489)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-6" data-name="point" transform="translate(68.75 421)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-3" data-name="legend" transform="translate(11 -45)">
            <g id="Rectangle_951-3" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_1990年" data-name="1990年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">1990</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-3" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_3次" data-name="限電次數 3次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">3</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-5" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-3" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_20_3" data-name="目標值 20%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20%</tspan></text>
              <circle id="Ellipse_37-6" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-3" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_7.4_" data-name="備用容量率 7.4%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 7.4%</tspan></text>
              <circle id="Ellipse_38-3" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 1991" id="option1991" transform="translate(18.65 455)">
          <rect id="bg-4" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-4" data-name="line" transform="translate(71.27 407)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="128" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="127" fill="none"/>
          </g>
          <g id="point-7" data-name="point" transform="translate(68.75 504)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-8" data-name="point" transform="translate(68.75 421)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-4" data-name="legend" transform="translate(11 -45)">
            <g id="Rectangle_951-4" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_1991年" data-name="1991年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">1991</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-4" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_14次" data-name="限電次數 14次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">14</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-7" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-4" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_20_4" data-name="目標值 20%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20%</tspan></text>
              <circle id="Ellipse_37-8" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-4" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_4.8_" data-name="備用容量率 4.8%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 4.8%</tspan></text>
              <circle id="Ellipse_38-4" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 1992" id="option1992" transform="translate(27.65 455)">
          <rect id="bg-5" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-5" data-name="line" transform="translate(71.27 516)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="19" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="18" fill="none"/>
          </g>
          <g id="point-9" data-name="point" transform="translate(68.75 498)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-10" data-name="point" transform="translate(68.75 421)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-5" data-name="legend" transform="translate(11 -45)">
            <g id="Rectangle_951-5" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_1992年" data-name="1992年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">1992</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-5" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_2次-2" data-name="限電次數 2次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">2</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-9" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-5" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_20_5" data-name="目標值 20%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20%</tspan></text>
              <circle id="Ellipse_37-10" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-5" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_6_" data-name="備用容量率 6%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 6%</tspan></text>
              <circle id="Ellipse_38-5" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 1993" id="option1993" transform="translate(37.25 455)">
          <rect id="bg-6" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-6" data-name="line" transform="translate(71.27 498)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="37" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="36" fill="none"/>
          </g>
          <g id="point-11" data-name="point" transform="translate(68.75 507)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-12" data-name="point" transform="translate(68.75 421)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-6" data-name="legend" transform="translate(11 -45)">
            <g id="Rectangle_951-6" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_1993年" data-name="1993年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">1993</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-6" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_4次" data-name="限電次數 4次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">4</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-11" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-6" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_20_6" data-name="目標值 20%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20%</tspan></text>
              <circle id="Ellipse_37-12" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-6" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_4.2_" data-name="備用容量率 4.2%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 4.2%</tspan></text>
              <circle id="Ellipse_38-6" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 1994" id="option1994" transform="translate(46.65 455)">
          <rect id="bg-7" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-7" data-name="line" transform="translate(71.27 389)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="146" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="145" fill="none"/>
          </g>
          <g id="point-13" data-name="point" transform="translate(69.75 505)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-14" data-name="point" transform="translate(69.75 421)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-7" data-name="legend" transform="translate(11 -45)">
            <g id="Rectangle_951-7" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_1994年" data-name="1994年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">1994</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-7" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_16次" data-name="限電次數 16次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">16</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-13" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-7" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_20_7" data-name="目標值 20%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20%</tspan></text>
              <circle id="Ellipse_37-14" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-7" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_4.8_2" data-name="備用容量率 4.8%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 4.8%</tspan></text>
              <circle id="Ellipse_38-7" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 1995" id="option1995" transform="translate(56.65 455)">
          <rect id="bg-8" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-8" data-name="line" transform="translate(71.27 510)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="25" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="24" fill="none"/>
          </g>
          <g id="point-15" data-name="point" transform="translate(68.75 504)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-16" data-name="point" transform="translate(68.75 421)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-8" data-name="legend" transform="translate(11 -1)">
            <g id="Rectangle_951-8" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_1995年" data-name="1995年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">1995</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-8" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_3次-2" data-name="限電次數 3次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">3</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-15" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-8" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_20_8" data-name="目標值 20%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20%</tspan></text>
              <circle id="Ellipse_37-16" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-8" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_4.7_" data-name="備用容量率 4.7%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 4.7%</tspan></text>
              <circle id="Ellipse_38-8" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 1996" id="option1996" transform="translate(65.65 455)">
          <rect id="bg-9" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-9" data-name="line" transform="translate(70.27 525)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="10" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="9" fill="none"/>
          </g>
          <g id="point-17" data-name="point" transform="translate(68.75 498)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-18" data-name="point" transform="translate(68.75 421)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-9" data-name="legend" transform="translate(11 -45)">
            <g id="Rectangle_951-9" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_1996年" data-name="1996年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">1996</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-9" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_1次" data-name="限電次數 1次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">1</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-17" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-9" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_20_9" data-name="目標值 20%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20%</tspan></text>
              <circle id="Ellipse_37-18" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-9" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_5.6_" data-name="備用容量率 5.6%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 5.6%</tspan></text>
              <circle id="Ellipse_38-9" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 1997" id="option1997" transform="translate(75.65 455)">
          <rect id="bg-10" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="point-19" data-name="point" transform="translate(68.75 471)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-20" data-name="point" transform="translate(68.75 421)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-10" data-name="legend" transform="translate(11 -6)">
            <g id="Rectangle_951-10" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_1997年" data-name="1997年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">1997</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-10" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_0次" data-name="限電次數 0次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">0</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-19" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-10" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_20_10" data-name="目標值 20%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20%</tspan></text>
              <circle id="Ellipse_37-20" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-10" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_11_" data-name="備用容量率 11%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 11%</tspan></text>
              <circle id="Ellipse_38-10" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 1998" id="option1998" transform="translate(83.65 455)">
          <rect id="bg-11" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="point-21" data-name="point" transform="translate(68.75 487)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-22" data-name="point" transform="translate(68.75 421)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-11" data-name="legend" transform="translate(11 -8)">
            <g id="Rectangle_951-11" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_1998年" data-name="1998年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">1998</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-11" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_0次-2" data-name="限電次數 0次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">0</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-21" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-11" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_20_11" data-name="目標值 20%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20%</tspan></text>
              <circle id="Ellipse_37-22" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-11" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_7.7_" data-name="備用容量率 7.7%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 7.7%</tspan></text>
              <circle id="Ellipse_38-11" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 1999" id="option1999" transform="translate(93.95 455)">
          <rect id="bg-12" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-10" data-name="line" transform="translate(70.27 507)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="28" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="27" fill="none"/>
          </g>
          <g id="point-23" data-name="point" transform="translate(68.75 462)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-24" data-name="point" transform="translate(68.75 421)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-12" data-name="legend" transform="translate(11 -11)">
            <g id="Rectangle_951-12" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_1999年" data-name="1999年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">1999</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-12" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_3次-3" data-name="限電次數 3次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">3</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-23" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-12" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_20_12" data-name="目標值 20%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20%</tspan></text>
              <circle id="Ellipse_37-24" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-12" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_12.5_" data-name="備用容量率 12.5%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 12.5%</tspan></text>
              <circle id="Ellipse_38-12" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2000" id="option2000" transform="translate(100.95 455)">
          <rect id="bg-13" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="point-25" data-name="point" transform="translate(68.75 461)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-26" data-name="point" transform="translate(68.75 421)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-13" data-name="legend" transform="translate(11 -6)">
            <g id="Rectangle_951-13" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_2000年" data-name="2000年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2000</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-13" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_0次-3" data-name="限電次數 0次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">0</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-25" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-13" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_20_13" data-name="目標值 20%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20%</tspan></text>
              <circle id="Ellipse_37-26" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-13" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_12.6_" data-name="備用容量率 12.6%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 12.6%</tspan></text>
              <circle id="Ellipse_38-13" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2001" id="option2001" transform="translate(110.95 455)">
          <rect id="bg-14" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="point-27" data-name="point" transform="translate(68.75 459)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-28" data-name="point" transform="translate(68.75 421)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-14" data-name="legend" transform="translate(11 -5)">
            <g id="Rectangle_951-14" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_2001年" data-name="2001年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2001</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-14" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_0次-4" data-name="限電次數 0次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">0</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-27" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-14" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_20_14" data-name="目標值 20%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20%</tspan></text>
              <circle id="Ellipse_37-28" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-14" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_13.2_" data-name="備用容量率 13.2%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 13.2%</tspan></text>
              <circle id="Ellipse_38-14" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2002" id="option2002" transform="translate(121.95 455)">
          <rect id="bg-15" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-11" data-name="line" transform="translate(70.27 525)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="10" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="9" fill="none"/>
          </g>
          <g id="point-29" data-name="point" transform="translate(68.75 444)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-30" data-name="point" transform="translate(68.75 421)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-15" data-name="legend" transform="translate(11 -4)">
            <g id="Rectangle_951-15" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_2002年" data-name="2002年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2002</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-15" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_1次-2" data-name="限電次數 1次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">1</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-29" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-15" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_20_15" data-name="目標值 20%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20%</tspan></text>
              <circle id="Ellipse_37-30" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-15" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_16_" data-name="備用容量率 16%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 16%</tspan></text>
              <circle id="Ellipse_38-15" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2003" id="option2003" transform="translate(131.95 455)">
          <rect id="bg-16" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="point-31" data-name="point" transform="translate(68.75 449)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-32" data-name="point" transform="translate(68.75 421)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-16" data-name="legend" transform="translate(11 -6)">
            <g id="Rectangle_951-16" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_2003年" data-name="2003年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2003</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-16" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_0次-5" data-name="限電次數 0次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">0</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-31" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-16" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_20_16" data-name="目標值 20%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20%</tspan></text>
              <circle id="Ellipse_37-32" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-16" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_14.6_" data-name="備用容量率 14.6%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 14.6%</tspan></text>
              <circle id="Ellipse_38-16" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2004" id="option2004" transform="translate(140.95 455)">
          <rect id="bg-17" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="point-33" data-name="point" transform="translate(68.75 421)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-17" data-name="legend" transform="translate(11 -45)">
            <g id="Path_1140" data-name="Path 1140" transform="translate(81 414)" fill="#2a2a2a" opacity="0.95">
              <path d="M 149.5 99.5 L 0.5 99.5 L 0.5 0.5 L 97.00521850585938 0.5 L 149.5 0.5 L 149.5 99.5 Z" stroke="none"/>
              <path d="M 1 1 L 1 99 L 149 99 L 149 1 L 97.00521850585938 1 L 1 1 M 0 0 L 97.00521850585938 0 L 150 0 L 150 100 L 0 100 L 0 0 Z" stroke="none" fill="#f2f2f2"/>
            </g>
            <text id="_2004年" data-name="2004年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2004</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-17" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_0次-6" data-name="限電次數 0次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">0</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-33" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-17" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_20_17" data-name="目標值 20%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20%</tspan></text>
              <circle id="Ellipse_37-34" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-17" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_20.2_" data-name="備用容量率 20.2%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 20.2%</tspan></text>
              <circle id="Ellipse_38-17" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2005" id="option2005" transform="translate(146.95 455)">
          <rect id="bg-18" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="point-34" data-name="point" transform="translate(68.75 440)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-35" data-name="point" transform="translate(68.75 421)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-18" data-name="legend" transform="translate(-168 -2)">
            <g id="Rectangle_951-17" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_2005年" data-name="2005年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2005</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-18" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_0次-7" data-name="限電次數 0次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">0</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-35" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-18" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_20_18" data-name="目標值 20%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20%</tspan></text>
              <circle id="Ellipse_37-36" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-18" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_16.3_" data-name="備用容量率 16.3%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 16.3%</tspan></text>
              <circle id="Ellipse_38-18" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2006" id="option2006" transform="translate(157.95 455)">
          <rect id="bg-19" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="point-36" data-name="point" transform="translate(68.75 441)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-19" data-name="legend" transform="translate(-180 -43)">
            <g id="Rectangle_951-18" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_2006年" data-name="2006年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2006</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-19" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_0次-8" data-name="限電次數 0次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">0</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-37" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-19" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_16_" data-name="目標值 16%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">16%</tspan></text>
              <circle id="Ellipse_37-38" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-19" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_16.1_" data-name="備用容量率 16.1%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 16.1%</tspan></text>
              <circle id="Ellipse_38-19" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2007" id="option2007" transform="translate(167.95 455)">
          <rect id="bg-20" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="point-37" data-name="point" transform="translate(68.75 388)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-38" data-name="point" transform="translate(68.75 443)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-20" data-name="legend" transform="translate(-180 -43)">
            <g id="Rectangle_951-19" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_2007年" data-name="2007年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2007</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-20" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_0次-9" data-name="限電次數 0次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">0</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-39" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-20" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_16_2" data-name="目標值 16%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">16%</tspan></text>
              <circle id="Ellipse_37-40" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-20" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_26.2_" data-name="備用容量率 26.2%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 26.2%</tspan></text>
              <circle id="Ellipse_38-20" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2008" id="option2008" transform="translate(176.95 455)">
          <rect id="bg-21" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="point-39" data-name="point" transform="translate(68.75 413)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-40" data-name="point" transform="translate(68.75 443)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-21" data-name="legend" transform="translate(-180 -43)">
            <g id="Rectangle_951-20" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_2008年" data-name="2008年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2008</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-21" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_0次-10" data-name="限電次數 0次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">0</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-41" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-21" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_16_3" data-name="目標值 16%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">16%</tspan></text>
              <circle id="Ellipse_37-42" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-21" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_21.1_" data-name="備用容量率 21.1%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 21.1%</tspan></text>
              <circle id="Ellipse_38-21" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2009" id="option2009" transform="translate(186.95 455)">
          <rect id="bg-22" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="point-41" data-name="point" transform="translate(68.75 378)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-42" data-name="point" transform="translate(68.75 443)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-22" data-name="legend" transform="translate(-180 -43)">
            <g id="Rectangle_951-21" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_2009年" data-name="2009年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2009</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-22" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_0次-11" data-name="限電次數 0次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">0</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-43" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-22" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_16_4" data-name="目標值 16%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">16%</tspan></text>
              <circle id="Ellipse_37-44" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-22" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_28.1_" data-name="備用容量率 28.1%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 28.1%</tspan></text>
              <circle id="Ellipse_38-22" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2010" id="option2010" transform="translate(195.95 455)">
          <rect id="bg-23" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="point-43" data-name="point" transform="translate(68.75 402)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-44" data-name="point" transform="translate(68.75 443)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-23" data-name="legend" transform="translate(-180 -43)">
            <g id="Rectangle_951-22" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_2010年" data-name="2010年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2010</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-23" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_0次-12" data-name="限電次數 0次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">0</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-45" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-23" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_16_5" data-name="目標值 16%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">16%</tspan></text>
              <circle id="Ellipse_37-46" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-23" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_23.4_" data-name="備用容量率 23.4%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 23.4%</tspan></text>
              <circle id="Ellipse_38-23" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2011" id="option2011" transform="translate(204.95 455)">
          <rect id="bg-24" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="point-45" data-name="point" transform="translate(68.75 417)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-46" data-name="point" transform="translate(68.75 448)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-24" data-name="legend" transform="translate(-180 -43)">
            <g id="Rectangle_951-23" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_2011年" data-name="2011年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2011</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-24" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_0次-13" data-name="限電次數 0次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">0</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-47" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-24" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_15_" data-name="目標值 15%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">15%</tspan></text>
              <circle id="Ellipse_37-48" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-24" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_20.6_" data-name="備用容量率 20.6%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 20.6%</tspan></text>
              <circle id="Ellipse_38-24" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2012" id="option2012" transform="translate(213.95 455)">
          <rect id="bg-25" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="point-47" data-name="point" transform="translate(68.75 406)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-48" data-name="point" transform="translate(68.75 449)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-25" data-name="legend" transform="translate(-180 -43)">
            <g id="Rectangle_951-24" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_2012年" data-name="2012年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2012</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-25" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_0次-14" data-name="限電次數 0次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">0</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-49" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-25" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_15_2" data-name="目標值 15%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">15%</tspan></text>
              <circle id="Ellipse_37-50" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-25" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_22.7_" data-name="備用容量率 22.7%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 22.7%</tspan></text>
              <circle id="Ellipse_38-25" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2013" id="option2013" transform="translate(222.95 455)">
          <rect id="bg-26" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="point-49" data-name="point" transform="translate(68.75 429)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-50" data-name="point" transform="translate(68.75 448)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-26" data-name="legend" transform="translate(-180 -43)">
            <g id="Rectangle_951-25" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_2013年" data-name="2013年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2013</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-26" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_0次-15" data-name="限電次數 0次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">0</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-51" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-26" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_15_3" data-name="目標值 15%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">15%</tspan></text>
              <circle id="Ellipse_37-52" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-26" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_17.5_" data-name="備用容量率 17.5%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 17.5%</tspan></text>
              <circle id="Ellipse_38-26" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2014" id="option2014" transform="translate(232.95 455)">
          <rect id="bg-27" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="point-51" data-name="point" transform="translate(68.75 449)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-27" data-name="legend" transform="translate(-180 -43)">
            <g id="Rectangle_951-26" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_2014年" data-name="2014年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2014</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-27" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_0次-16" data-name="限電次數 0次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">0</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-53" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-27" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_15_4" data-name="目標值 15%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">15%</tspan></text>
              <circle id="Ellipse_37-54" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-27" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_14.7_" data-name="備用容量率 14.7%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 14.7%</tspan></text>
              <circle id="Ellipse_38-27" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2015" id="option2015" transform="translate(241.95 455)">
          <rect id="bg-28" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="point-52" data-name="point" transform="translate(68.75 467)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-53" data-name="point" transform="translate(68.75 448)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-28" data-name="legend" transform="translate(-172 -7)">
            <g id="Rectangle_951-27" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_2015年" data-name="2015年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2015</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-28" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_0次-17" data-name="限電次數 0次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">0</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-55" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-28" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_15_5" data-name="目標值 15%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">15%</tspan></text>
              <circle id="Ellipse_37-56" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-28" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_11.5_" data-name="備用容量率 11.5%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 11.5%</tspan></text>
              <circle id="Ellipse_38-28" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2016" id="option2016" transform="translate(251.95 455)">
          <rect id="bg-29" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="point-54" data-name="point" transform="translate(68.75 473)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-55" data-name="point" transform="translate(68.75 449)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-29" data-name="legend" transform="translate(-172 -7)">
            <g id="Rectangle_951-28" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_2016年" data-name="2016年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2016</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-29" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_0次-18" data-name="限電次數 0次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">0</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-57" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-29" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_15_6" data-name="目標值 15%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">15%</tspan></text>
              <circle id="Ellipse_37-58" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-29" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_10.4_" data-name="備用容量率 10.4%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 10.4%</tspan></text>
              <circle id="Ellipse_38-29" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2017" id="option2017" transform="translate(261.65 455)">
          <rect id="bg-30" data-name="bg" width="11" height="164" transform="translate(68 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-12" data-name="line" transform="translate(70.27 526)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="9" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="8" fill="none"/>
          </g>
          <g id="point-56" data-name="point" transform="translate(68.75 477)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="point-57" data-name="point" transform="translate(68.75 449)" fill="#c5c5c5" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-30" data-name="legend" transform="translate(-172 12)">
            <g id="Rectangle_951-29" data-name="Rectangle 951" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="150" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="149" height="99" fill="none"/>
            </g>
            <text id="_2017年-2" data-name="2017年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2017</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="Group_910-30" data-name="Group 910" transform="translate(14 33)">
              <text id="限電次數_1次-3" data-name="限電次數 1次" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">限電次數 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">1</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">次</tspan></text>
              <circle id="Ellipse_37-59" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
            </g>
            <g id="Group_959-30" data-name="Group 959" transform="translate(14 54)">
              <text id="目標值_15_7" data-name="目標值 15%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">目標值 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">15%</tspan></text>
              <circle id="Ellipse_37-60" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#c5c5c5"/>
            </g>
            <g id="Group_916-30" data-name="Group 916" transform="translate(14 3)">
              <text id="備用容量率_9.8_" data-name="備用容量率 9.8%" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="14">備用容量率</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 9.8%</tspan></text>
              <circle id="Ellipse_38-30" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
            </g>
          </g>
        </g>
        <!-- <text id="title" transform="translate(133 699)" fill="#cecece" font-size="18" font-family="MicrosoftJhengHeiBold, Microsoft JhengHei"><tspan x="0" y="19">台灣近年供電狀況</tspan></text> -->
        <!-- <g id="tag" transform="translate(-9 421)">
          <rect id="BG-31" data-name="BG" width="296" height="38" rx="5" transform="translate(69 330)" fill="#333"/>
          <g id="Group_960" data-name="Group 960" transform="translate(-58 3.274)">
            <g id="BTN_NO2" transform="translate(250 333.726)">
              <g transform="matrix(1, 0, 0, 1, -141.57, -59)" filter="url(#Path_1087)">
                <path id="Path_1087-2" data-name="Path 1087" d="M361.7,643.4h20.779v9.131H361.7V643.4Z" transform="translate(-220.13 -577.5)" fill="#ffcb47" fill-rule="evenodd"/>
              </g>
              <g transform="matrix(1, 0, 0, 1, -141.57, -59)" filter="url(#限電次數)">
                <text id="限電次數-2" data-name="限電次數" transform="translate(164.78 76)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="0">限電次數</tspan></text>
              </g>
            </g>
            <g id="BTN_PM2.5" transform="translate(-108 -241)">
              <g transform="matrix(1, 0, 0, 1, 216.43, 515.73)" filter="url(#備用容量率)">
                <text id="備用容量率-2" data-name="備用容量率" transform="translate(60.07 75.92)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="0">備用容量率</tspan></text>
              </g>
              <g transform="matrix(1, 0, 0, 1, 216.43, 515.73)" filter="url(#Line_77)">
                <line id="Line_77-3" data-name="Line 77" x2="17.841" transform="translate(38.57 70.31)" fill="none" stroke="#8aa1ae" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
              </g>
            </g>
            <g id="BTN_PM2.5-2" data-name="BTN_PM2.5" transform="translate(89 -241)">
              <g transform="matrix(1, 0, 0, 1, 19.43, 515.73)" filter="url(#目標值)">
                <text id="目標值-2" data-name="目標值" transform="translate(257.07 75.92)" fill="#f2f2f2" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="0">目標</tspan><tspan y="0" font-family="MicrosoftJhengHeiUIRegular, Microsoft JhengHei UI">值</tspan></text>
              </g>
              <g transform="matrix(1, 0, 0, 1, 19.43, 515.73)" filter="url(#Line_77-2)">
                <line id="Line_77-4" data-name="Line 77" x2="17.841" transform="translate(235.57 70.31)" fill="none" stroke="#a5a5a5" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke-dasharray="1 5"/>
              </g>
            </g>
          </g>
        </g> -->
      </g>
    </svg>
    <div class="slider-bar">
      <div
        :class="{
          'arrow-wrapper': true,
          'shining-animation': !startFlag,
        }"
        @click="showTooltip(-1)"
      >
        <div class="arrow left"></div>
      </div>
      <div class="slider-unit">{{computeCurrentYear}}</div>
      <div
        :class="{
          'arrow-wrapper': true,
          'shining-animation': !startFlag,
        }"
        @click="showTooltip(1)"
      >
        <div class="arrow rigth"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SvgFileQ4C2",
  data() {
    return {
      startFlag: false,
      currentYear: 0,
    };
  },
  computed: {
    computeCurrentYear() {
      return this.startFlag ? this.currentYear + '年' : '年份';
    },
    computeHeight() {
      return window.innerHeight * 0.4;
    },
  },
  methods: {
    showTooltip(dir) {
      if (!this.startFlag) {
        this.startFlag = true;
        this.currentYear = 1988;
      } else {
        if (dir === 1) {
          this.currentYear + 1 <= 2017 ? this.currentYear += 1 : this.currentYear;
        } else {
          this.currentYear - 1 >= 1988 ? this.currentYear -= 1 : this.currentYear;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .svg-container {
    width: 100%;
    height: 100%;
    .title-and-legend-wrapper {
      position: relative;
      text-align: center;
      .title {
        font-size: 0.9rem;
        color: #cecece;
      }
      img {
        margin: 10px auto 0 auto;
      }
    }
    .shining-animation {
      animation-name: shiningAnimation;
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    @keyframes shiningAnimation {
      0% {
        border: solid 1px rgba(#ffffff, 0);
      }
      50% {
        border: solid 1px rgba(#ffffff, 1);
      }
      100% {
        border: solid 1px rgba(#ffffff, 0);
      }
    }
    .slider-bar {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .slider-unit {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0 23px;
        color: #8b8b8b;
        font-size: 14px;
      }
      .arrow-wrapper {
        width: 65px;
        height: 65px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        border-radius: 50%;
        background-color: #3b3b3b;
        color: #ffffff;
        font-size: 32px;
        cursor: pointer;
        .arrow {
          border: solid #ffffff;
          border-width: 0 3px 3px 0;
          display: inline-block;
          padding: 5px;
        }
        .left {
          transform: rotate(135deg);
          -webkit-transform: rotate(135deg);
        }
        .rigth {
          transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
        }
      }
    }
  }
</style>
