<template>
  <div class="svg-container">
    <div class="title-and-legend-wrapper">
      <div class="title">我國GDP與備用容量率曲線對照表</div>
      <img src="images/charts/Q6tag.svg" alt="legend">
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" :height="computeHeight" viewBox="0 70 336.792 324.348">
      <defs>
        <filter id="Path_1087" x="143" y="41.896" width="38.779" height="27.131" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="備用容量率" x="166.209" y="36" width="93" height="38" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-2"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-2"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="GDP" x="86.502" y="37.915" width="45" height="36" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-3"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-3"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="Line_77" x="63.5" y="44.808" width="38.841" height="21" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-4"/>
          <feFlood flood-opacity="0.871"/>
          <feComposite operator="in" in2="blur-4"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      <g id="chart6" transform="translate(-42 -293)">
        <path id="line_bg" d="M106.416,214.212H378.749m-272.333-20.84H378.749m-272.333-20.84H378.749m-272.333-20.84H378.749m-272.333-20.84H378.749m-272.333-20.84H378.749M106.416,89.173H378.749M106.416,68.333H378.749M106.416,47.494H378.749M106.416,26.575H378.749" transform="translate(-37.416 381.668)" fill="none" stroke="#828282" stroke-linejoin="round" stroke-width="1.121"/>
        <path :class="{'disappear': startFlag}" id="data_column" d="M114.826,224.252h3.306v29.209h-3.306V224.252Zm10.55-4.173H128.6v33.382h-3.228V220.079Zm10.471.709h3.228v32.673h-3.228V220.788Zm10.471-6.22h3.306v38.893h-3.306V214.568Zm10.471-37.633H160.1v76.526h-3.307V176.935Zm10.471,22.989h3.307v53.537h-3.307V199.924Zm10.55-33.382h3.228v86.918H177.81V166.543Zm10.471-.709h3.228v87.627h-3.228V165.834Zm10.471-4.173h3.307v91.8h-3.307v-91.8Zm10.471-19.447h3.306V253.461h-3.306V142.215ZM219.7,151.9H223V253.461H219.7V151.9Zm10.55-38.971h3.228V253.461h-3.228V112.927Zm10.471,27.162h3.228V253.461h-3.228V140.089Zm10.471,1.417h3.307V253.461h-3.307V141.506ZM261.659,71.2h3.306V253.461h-3.306V71.2Zm10.471,35.507h3.307V253.461H272.13V106.707Zm10.55-48.734h3.228V253.461H282.68V57.973Zm10.471,32.752h3.228V253.461h-3.228V90.725Zm10.471,19.446h3.307v143.29h-3.307V110.171Zm10.471-14.644H317.4V253.461h-3.307V95.527Zm10.471,36.216h3.307V253.461h-3.307V131.744Zm10.55,19.446h3.228V253.461h-3.228V151.19Zm10.471,22.281h3.228v79.99h-3.228v-79.99Zm10.471,7.637h3.306v72.353h-3.306V181.108Zm10.471,4.173h3.307v68.181h-3.307V185.28ZM377,183.942h3.307v69.519H377V183.942Z" transform="translate(-42.595 363.497)" fill="#ffcb47"/>
        <path id="data_line" d="M118.751,202.481l10.471-6.062,10.55-6.377,10.471-6.692,10.471-7.086,10.471-6.928,10.471-4.566,10.55-5.59,10.471,2.047,10.471-5.432L223.62,152.8l10.471-7.164,10.55-4.567,10.471-5.747,10.471-8.031,10.471,2.677,10.471,1.968,10.55-12.046,10.471-2.047,10.471-3.858,10.471-5.669,10.471-9.212,10.55-6.928,10.471-4.173,10.471-3.385,10.471-2.913" transform="translate(-44.866 349.76)" fill="none" stroke="#8aa1ae" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
        <path id="Path_1108" data-name="Path 1108" d="M106.229,235.763h273.2V26.575h-273.2V235.763Z" transform="translate(-37.619 381.668)" fill="none" fill-rule="evenodd"/>
        <g id="right" transform="translate(0 82)">
          <text id="_0_" data-name="0%" transform="translate(353.792 537.167)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">0%</tspan></text>
          <text id="_5_" data-name="5%" transform="translate(353.792 502.384)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">5%</tspan></text>
          <text id="_10_" data-name="10%" transform="translate(353.792 468.601)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">10%</tspan></text>
          <text id="_15_" data-name="15%" transform="translate(353.792 433.818)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">15%</tspan></text>
          <text id="_20_" data-name="20%" transform="translate(353.792 399.03)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">20%</tspan></text>
          <text id="_25_" data-name="25%" transform="translate(353.792 364.247)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">25%</tspan></text>
          <text id="_30_" data-name="30%" transform="translate(353.792 329.459)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">30%</tspan></text>
        </g>
        <g id="year" transform="translate(0 82)">
          <text id="_1993" data-name="1993" transform="translate(61.907 548)" fill="#9f9f9f" font-size="10" font-family="ArialMT, Arial"><tspan x="0" y="0">1993</tspan></text>
          <text id="_1997" data-name="1997" transform="translate(103.855 548)" fill="#9f9f9f" font-size="10" font-family="ArialMT, Arial"><tspan x="0" y="0">1997</tspan></text>
          <text id="_2001" data-name="2001" transform="translate(146.804 548)" fill="#9f9f9f" font-size="10" font-family="ArialMT, Arial"><tspan x="0" y="0">2001</tspan></text>
          <text id="_2005" data-name="2005" transform="translate(188.752 548)" fill="#9f9f9f" font-size="10" font-family="ArialMT, Arial"><tspan x="0" y="0">2005</tspan></text>
          <text id="_2009" data-name="2009" transform="translate(230.701 548)" fill="#9f9f9f" font-size="10" font-family="ArialMT, Arial"><tspan x="0" y="0">2009</tspan></text>
          <text id="_2013" data-name="2013" transform="translate(272.153 548)" fill="#9f9f9f" font-size="10" font-family="ArialMT, Arial"><tspan x="0" y="0">2013</tspan></text>
          <text id="_2018年" data-name="2018年" transform="translate(321.589 549)" fill="#9f9f9f" font-size="10" font-family="ArialMT, Arial"><tspan x="0" y="0">2018</tspan><tspan y="0" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
          <path id="Path_1120" data-name="Path 1120" d="M-.711.056,272.644,0" transform="translate(68.688 534.958)" fill="none" stroke="#828282" stroke-width="1"/>
        </g>
        <g id="left" transform="translate(0 82)">
          <text id="_2" data-name="2" transform="translate(51.292 518.3)" fill="#a7defe" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">2</tspan></text>
          <text id="_0" data-name="0" transform="translate(51.292 539.3)" fill="#a7defe" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">0</tspan></text>
          <text id="_4" data-name="4" transform="translate(51.292 497.423)" fill="#a7defe" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">4</tspan></text>
          <text id="_6" data-name="6" transform="translate(51.292 476.557)" fill="#a7defe" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">6</tspan></text>
          <text id="_8" data-name="8" transform="translate(51.292 455.685)" fill="#a7defe" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">8</tspan></text>
          <text id="_10" data-name="10" transform="translate(45.298 434.818)" fill="#a7defe" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">10</tspan></text>
          <text id="_12" data-name="12" transform="translate(45.298 413.941)" fill="#a7defe" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">12</tspan></text>
          <text id="_14" data-name="14" transform="translate(45.298 393.074)" fill="#a7defe" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">14</tspan></text>
          <text id="_16" data-name="16" transform="translate(45.298 372.197)" fill="#a7defe" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">16</tspan></text>
          <text id="_18" data-name="18" transform="translate(45.298 351.331)" fill="#a7defe" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">18</tspan></text>
          <text id="_20" data-name="20" transform="translate(45.298 330.459)" fill="#a7defe" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">20</tspan></text>
          <text id="金額_百萬元_" data-name="金額(百萬元)" transform="translate(42.234 313)" fill="#a7defe" font-size="12" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei" opacity="0.6"><tspan x="0" y="0">金額(百萬元)</tspan></text>
        </g>
        <!-- <text id="title" transform="translate(71 293)" fill="#cecece" font-size="18" font-family="MicrosoftJhengHeiBold, Microsoft JhengHei"><tspan x="0" y="19">我國GDP與備用容量率曲線對照表</tspan></text> -->
        <text id="資料來源_台電與行政院主計處" data-name="資料來源：台電與行政院主計處" transform="translate(42 649.348)" fill="#9f9f9f" font-size="12" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="163" y="13">資料來源：台電與行政院主計處</tspan></text>
        <!-- <g id="tag">
          <rect id="BG" width="216" height="38" rx="5" transform="translate(96 330)" fill="#333"/>
          <g id="Group_960" data-name="Group 960" transform="translate(-31 3.274)">
            <g id="BTN_NO2" transform="translate(225 333.726)">
              <g transform="matrix(1, 0, 0, 1, -152, -44)" filter="url(#Path_1087)">
                <path id="Path_1087-2" data-name="Path 1087" d="M361.7,643.4h20.779v9.131H361.7V643.4Z" transform="translate(-209.7 -592.5)" fill="#ffcb47" fill-rule="evenodd"/>
              </g>
              <g transform="matrix(1, 0, 0, 1, -152, -44)" filter="url(#備用容量率)">
                <text id="備用容量率-2" data-name="備用容量率" transform="translate(175.21 61)" fill="#f2f2f2" font-size="15" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="0">備用容量率</tspan></text>
              </g>
            </g>
            <g id="BTN_PM2.5" transform="translate(-108 -241)">
              <g transform="matrix(1, 0, 0, 1, 181, 530.73)" filter="url(#GDP)">
                <text id="GDP-2" data-name="GDP" transform="translate(95.5 60.92)" fill="#f2f2f2" font-size="15" font-family="Calibri"><tspan x="0" y="0">GDP</tspan></text>
              </g>
              <g transform="matrix(1, 0, 0, 1, 181, 530.73)" filter="url(#Line_77)">
                <line id="Line_77-2" data-name="Line 77" x2="17.841" transform="translate(74 55.31)" fill="none" stroke="#8aa1ae" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
              </g>
            </g>
          </g>
        </g> -->
        <g v-show="currentYear === 1993" id="option93" transform="translate(0 82)">
          <rect id="bg-2" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line" transform="translate(71.27 505)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="30" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="29" fill="none"/>
          </g>
          <g id="point" transform="translate(69 466)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend" transform="translate(-82.75 2)">
            <g id="legend-2" data-name="legend" transform="translate(91 2)">
              <g id="Rectangle_951" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="149" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="148" height="84" fill="none"/>
              </g>
              <text id="_1993年" data-name="1993年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">1993</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_4.2_" data-name="備用容量率 4.2%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">4.2%</tspan></text>
                <circle id="Ellipse_37" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_6_205_338元" data-name="GDP 6,205,338元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 6,205,338</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 1994" id="option94" transform="translate(10.5 82)">
          <rect id="bg-3" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-2" data-name="line" transform="translate(71.25 501)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="34" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="33" fill="none"/>
          </g>
          <g id="point-2" data-name="point" transform="translate(69 460)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-3" data-name="legend" transform="translate(-93.25 2)">
            <g id="legend-4" data-name="legend" transform="translate(91 2)">
              <g id="Rectangle_951-2" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="149" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="148" height="84" fill="none"/>
              </g>
              <text id="_1994年" data-name="1994年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">1994</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-2" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_4.8_" data-name="備用容量率 4.8%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">4.8%</tspan></text>
                <circle id="Ellipse_37-2" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-2" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_6_784_442元" data-name="GDP 6,784,442元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 6,784,442</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-2" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 1995" id="option95" transform="translate(20.5 82)">
          <rect id="bg-4" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-3" data-name="line" transform="translate(71.25 502)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="33" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="32" fill="none"/>
          </g>
          <g id="point-3" data-name="point" transform="translate(69 454)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-5" data-name="legend" transform="translate(-83.25 13)">
            <g id="legend-6" data-name="legend" transform="translate(91 2)">
              <g id="Rectangle_951-3" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="149" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="148" height="84" fill="none"/>
              </g>
              <text id="_1995年" data-name="1995年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">1995</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-3" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_4.7_" data-name="備用容量率 4.7%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">4.7%</tspan></text>
                <circle id="Ellipse_37-3" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-3" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_7_396_650元" data-name="GDP 7,396,650元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 7,396,650</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-3" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 1996" id="option96" transform="translate(31.5 82)">
          <rect id="bg-5" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-4" data-name="line" transform="translate(71.25 495)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="40" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="39" fill="none"/>
          </g>
          <g id="point-4" data-name="point" transform="translate(69 447)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-7" data-name="legend" transform="translate(-84.25 10)">
            <g id="legend1993" transform="translate(91 2)">
              <g id="Rectangle_951-4" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="149" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="148" height="84" fill="none"/>
              </g>
              <text id="_1996年" data-name="1996年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">1996</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-4" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_5.6_" data-name="備用容量率 5.6%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">5.6%</tspan></text>
                <circle id="Ellipse_37-4" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-4" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_8_036_590元" data-name="GDP 8,036,590元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 8,036,590</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-4" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 1997" id="option97" transform="translate(42 82)">
          <rect id="bg-6" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-5" data-name="line" transform="translate(71.25 457)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="78" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="77" fill="none"/>
          </g>
          <g id="point-5" data-name="point" transform="translate(69 439)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-8" data-name="legend" transform="translate(-82.75 -5)">
            <g id="legend-9" data-name="legend" transform="translate(91 2)">
              <g id="Rectangle_951-5" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="149" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="148" height="84" fill="none"/>
              </g>
              <text id="_1997年" data-name="1997年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">1997</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-5" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_11_" data-name="備用容量率 11%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">11%</tspan></text>
                <circle id="Ellipse_37-5" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-5" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_8_717_241元" data-name="GDP 8,717,241元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 8,717,241</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-5" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 1998" id="option98" transform="translate(52.5 82)">
          <rect id="bg-7" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-6" data-name="line" transform="translate(71.25 481)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="54" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="53" fill="none"/>
          </g>
          <g id="point-6" data-name="point" transform="translate(69 433)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-10" data-name="legend" transform="translate(-84.25 -6)">
            <g id="legend-11" data-name="legend" transform="translate(91 2)">
              <g id="Rectangle_951-6" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="149" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="148" height="84" fill="none"/>
              </g>
              <text id="_1998年" data-name="1998年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">1998</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-6" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_7.7_" data-name="備用容量率 7.7%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">7.7%</tspan></text>
                <circle id="Ellipse_37-6" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-6" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_9_381_141元" data-name="GDP 9,381,141元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 9,381,141</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-6" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 1999" id="option99" transform="translate(63 82)">
          <rect id="bg-8" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-7" data-name="line" transform="translate(71.25 448)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="87" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="86" fill="none"/>
          </g>
          <g id="point-7" data-name="point" transform="translate(69 428)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-12" data-name="legend" transform="translate(-84.75 -4)">
            <g id="legend-13" data-name="legend" transform="translate(91 2)">
              <g id="Rectangle_951-7" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="149" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="148" height="84" fill="none"/>
              </g>
              <text id="_1999年" data-name="1999年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">1999</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-7" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_12.5_" data-name="備用容量率 12.5%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">12.5%</tspan></text>
                <circle id="Ellipse_37-7" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-7" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_9_815_595元" data-name="GDP 9,815,595元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 9,815,595</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-7" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2000" id="option00" transform="translate(73.55 82)">
          <rect id="bg-9" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-8" data-name="line" transform="translate(71.25 447)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="88" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="87" fill="none"/>
          </g>
          <g id="point-8" data-name="point" transform="translate(69 423)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-14" data-name="legend" transform="translate(-83.3 -10)">
            <g id="legend-15" data-name="legend" transform="translate(91 2)">
              <g id="Rectangle_951-8" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="153" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="152" height="84" fill="none"/>
              </g>
              <text id="_2000年" data-name="2000年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2000</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-8" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_12.6_" data-name="備用容量率 12.6%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">12.6%</tspan></text>
                <circle id="Ellipse_37-8" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-8" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_10_351_260元" data-name="GDP 10,351,260元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 10,351,260</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-8" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2001" id="option01" transform="translate(84 82)">
          <rect id="bg-10" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-9" data-name="line" transform="translate(71.25 443)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="92" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="91" fill="none"/>
          </g>
          <g id="point-9" data-name="point" transform="translate(69 424)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-16" data-name="legend" transform="translate(-86.75 -12)">
            <g id="legend-17" data-name="legend" transform="translate(91 2)">
              <g id="Rectangle_951-9" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="153" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="152" height="84" fill="none"/>
              </g>
              <text id="_2001年" data-name="2001年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2001</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-9" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_13.2_" data-name="備用容量率 13.2%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">13.2%</tspan></text>
                <circle id="Ellipse_37-9" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-9" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_10_158_209元" data-name="GDP 10,158,209元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 10,158,209</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-9" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2002" id="option02" transform="translate(94.5 82)">
          <rect id="bg-11" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-10" data-name="line" transform="translate(71.25 425)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="110" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="109" fill="none"/>
          </g>
          <g id="point-10" data-name="point" transform="translate(69 419)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-18" data-name="legend" transform="translate(-86.25 -23)">
            <g id="legend-19" data-name="legend" transform="translate(91 2)">
              <g id="Rectangle_951-10" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="153" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="152" height="84" fill="none"/>
              </g>
              <text id="_2002年" data-name="2002年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2002</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-10" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_16_" data-name="備用容量率 16%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">16%</tspan></text>
                <circle id="Ellipse_37-10" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-10" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_10_680_883元" data-name="GDP 10,680,883元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 10,680,883</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-10" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2003" id="option03" transform="translate(104.85 82)">
          <rect id="bg-12" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-11" data-name="line" transform="translate(71.25 433)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="102" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="101" fill="none"/>
          </g>
          <g id="point-11" data-name="point" transform="translate(69 416)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-20" data-name="legend" transform="translate(-93.6 -109)">
            <g id="legend-21" data-name="legend" transform="translate(91 2)">
              <g id="Rectangle_951-11" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="153" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="152" height="84" fill="none"/>
              </g>
              <text id="_2003年" data-name="2003年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2003</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-11" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_14.6_" data-name="備用容量率 14.6%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">14.6%</tspan></text>
                <circle id="Ellipse_37-11" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-11" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_10_965_866元" data-name="GDP 10,965,866元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 10,965,866</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-11" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2004" id="option04" transform="translate(115.55 82)">
          <rect id="bg-13" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-12" data-name="line" transform="translate(71.25 394)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="141" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="140" fill="none"/>
          </g>
          <g id="point-12" data-name="point" transform="translate(69 409)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-22" data-name="legend" transform="translate(-94.3 9)">
            <g id="legend-23" data-name="legend" transform="translate(91 2)">
              <g id="Rectangle_951-12" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="153" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="152" height="84" fill="none"/>
              </g>
              <text id="_2004年" data-name="2004年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2004</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-12" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_20.2_" data-name="備用容量率 20.2%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20.2%</tspan></text>
                <circle id="Ellipse_37-12" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-12" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_11_649_645元" data-name="GDP 11,649,645元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 11,649,645</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-12" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2005" id="option05" transform="translate(125.55 82)">
          <rect id="bg-14" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-13" data-name="line" transform="translate(71.25 421)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="114" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="113" fill="none"/>
          </g>
          <g id="point-13" data-name="point" transform="translate(69 405)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-24" data-name="legend" transform="translate(-102.3 -8)">
            <g id="legend-25" data-name="legend" transform="translate(106 -24)">
              <g id="Rectangle_951-13" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="153" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="152" height="84" fill="none"/>
              </g>
              <text id="_2005年" data-name="2005年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2005</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-13" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_16.32_" data-name="備用容量率 16.32%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">16.32%</tspan></text>
                <circle id="Ellipse_37-13" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-13" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_12_092_254元" data-name="GDP 12,092,254元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 12,092,254</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-13" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2006" id="option06" transform="translate(136.55 82)">
          <rect id="bg-15" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-14" data-name="line" transform="translate(71.25 423)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="112" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="111" fill="none"/>
          </g>
          <g id="point-14" data-name="point" transform="translate(69 398)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-26" data-name="legend" transform="translate(-278.3 2)">
            <g id="legend-27" data-name="legend" transform="translate(106 -24)">
              <g id="Rectangle_951-14" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="153" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="152" height="84" fill="none"/>
              </g>
              <text id="_2006年" data-name="2006年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2006</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-14" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_16.1_" data-name="備用容量率 16.1%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">16.1%</tspan></text>
                <circle id="Ellipse_37-14" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-14" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_12_640_803元" data-name="GDP 12,640,803元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 12,640,803</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-14" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2007" id="option07" transform="translate(146.85 82)">
          <rect id="bg-16" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-15" data-name="line" transform="translate(71.25 352)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="183" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="182" fill="none"/>
          </g>
          <g id="point-15" data-name="point" transform="translate(69 391)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-28" data-name="legend" transform="translate(-283.6 -15)">
            <g id="legend-29" data-name="legend" transform="translate(106 -24)">
              <g id="Rectangle_951-15" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="153" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="152" height="84" fill="none"/>
              </g>
              <text id="_2007年" data-name="2007年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2007</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-15" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_26.2_" data-name="備用容量率 26.2%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">26.2%</tspan></text>
                <circle id="Ellipse_37-15" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-15" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_13_407_062元" data-name="GDP 13,407,062元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 13,407,062</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-15" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2008" id="option08" transform="translate(157.85 82)">
          <rect id="bg-17" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-16" data-name="line" transform="translate(71.25 388)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="147" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="146" fill="none"/>
          </g>
          <g id="point-16" data-name="point" transform="translate(69 394)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-30" data-name="legend" transform="translate(-277.6 13)">
            <g id="legend-31" data-name="legend" transform="translate(106 -24)">
              <g id="Rectangle_951-16" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="153" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="152" height="84" fill="none"/>
              </g>
              <text id="_2008年" data-name="2008年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2008</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-16" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_21.1_" data-name="備用容量率 21.1%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">21.1%</tspan></text>
                <circle id="Ellipse_37-16" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-16" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_13_150_950元" data-name="GDP 13,150,950元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 13,150,950</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-16" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2009" id="option09" transform="translate(167.85 82)">
          <rect id="bg-18" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-17" data-name="line" transform="translate(71.25 339)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="196" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="195" fill="none"/>
          </g>
          <g id="point-17" data-name="point" transform="translate(69 394)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-32" data-name="legend" transform="translate(-285.6 69)">
            <g id="legend-33" data-name="legend" transform="translate(108 -105)">
              <g id="Rectangle_951-17" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="153" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="152" height="84" fill="none"/>
              </g>
              <text id="_2009年" data-name="2009年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2009</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-17" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_28.1_" data-name="備用容量率 28.1%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">28.1%</tspan></text>
                <circle id="Ellipse_37-17" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-17" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_12_961_656元" data-name="GDP 12,961,656元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 12,961,656</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-17" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2010" id="option10" transform="translate(178.25 82)">
          <rect id="bg-19" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-18" data-name="line" transform="translate(71.25 372)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="163" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="162" fill="none"/>
          </g>
          <g id="point-18" data-name="point" transform="translate(69 383)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-34" data-name="legend" transform="translate(-280 67)">
            <g id="legend-35" data-name="legend" transform="translate(108 -105)">
              <g id="Rectangle_951-18" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="153" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="152" height="84" fill="none"/>
              </g>
              <text id="_2010年" data-name="2010年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2010</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-18" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_23.4_" data-name="備用容量率 23.4%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">23.4%</tspan></text>
                <circle id="Ellipse_37-18" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-18" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_14_119_213元" data-name="GDP 14,119,213元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 14,119,213</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-18" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2011" id="option11" transform="translate(188.25 82)">
          <rect id="bg-20" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-19" data-name="line" transform="translate(71.25 391)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="144" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="143" fill="none"/>
          </g>
          <g id="point-19" data-name="point" transform="translate(69 381)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-36" data-name="legend" transform="translate(-282 44)">
            <g id="legend-37" data-name="legend" transform="translate(108 -105)">
              <g id="Rectangle_951-19" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="153" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="152" height="84" fill="none"/>
              </g>
              <text id="_2011年" data-name="2011年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2011</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-19" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_20.6_" data-name="備用容量率 20.6%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">20.6%</tspan></text>
                <circle id="Ellipse_37-19" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-19" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_14_312_200元" data-name="GDP 14,312,200元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 14,312,200</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-19" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2012" id="option12" transform="translate(199.25 82)">
          <rect id="bg-21" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-20" data-name="line" transform="translate(71.25 376)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="159" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="158" fill="none"/>
          </g>
          <g id="point-20" data-name="point" transform="translate(69 377)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-38" data-name="legend" transform="translate(-281 52)">
            <g id="legend-39" data-name="legend" transform="translate(108 -105)">
              <g id="Rectangle_951-20" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="153" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="152" height="84" fill="none"/>
              </g>
              <text id="_2012年" data-name="2012年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2012</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-20" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_22.7_" data-name="備用容量率 22.7%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">22.7%</tspan></text>
                <circle id="Ellipse_37-20" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-20" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_14_686_917元" data-name="GDP 14,686,917元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 14,686,917</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-20" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2013" id="option13" transform="translate(209.85 82)">
          <rect id="bg-22" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-21" data-name="line" transform="translate(71.25 413)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="122" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="121" fill="none"/>
          </g>
          <g id="point-21" data-name="point" transform="translate(69 372)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g v-show="currentYear === 2013" id="legend-40" data-name="legend" transform="translate(-290.6 -19)">
            <g id="legend-41" data-name="legend" transform="translate(118 -40)">
              <g id="Rectangle_951-21" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="153" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="152" height="84" fill="none"/>
              </g>
              <text id="_2013年" data-name="2013年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2013</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-21" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_17.5_" data-name="備用容量率 17.5%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">17.5%</tspan></text>
                <circle id="Ellipse_37-21" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-21" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_15_230_739元" data-name="GDP 15,230,739元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 15,230,739</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-21" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2014" id="option14" transform="translate(220.25 82)">
          <rect id="bg-23" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-22" data-name="line" transform="translate(71.25 432)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="103" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="102" fill="none"/>
          </g>
          <g id="point-22" data-name="point" transform="translate(69 363)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-42" data-name="legend" transform="translate(-293 -11)">
            <g id="legend-43" data-name="legend" transform="translate(118 -40)">
              <g id="Rectangle_951-22" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="153" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="152" height="84" fill="none"/>
              </g>
              <text id="_2014年" data-name="2014年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2014</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-22" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_14.7_" data-name="備用容量率 14.7%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">14.7%</tspan></text>
                <circle id="Ellipse_37-22" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-22" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_16_111_867元" data-name="GDP 16,111,867元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 16,111,867</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-22" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2015" id="option15" transform="translate(230.85 82)">
          <rect id="bg-24" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-23" data-name="line" transform="translate(71.25 455)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="80" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="79" fill="none"/>
          </g>
          <g id="point-23" data-name="point" transform="translate(69 356)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-44" data-name="legend" transform="translate(-294.6 -22)">
            <g id="legend-45" data-name="legend" transform="translate(118 -40)">
              <g id="Rectangle_951-23" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="153" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="152" height="84" fill="none"/>
              </g>
              <text id="_2015年" data-name="2015年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2015</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-23" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_11.5_" data-name="備用容量率 11.5%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">11.5%</tspan></text>
                <circle id="Ellipse_37-23" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-23" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_16_770_671元" data-name="GDP 16,770,671元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 16,770,671</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-23" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2016" id="option16" transform="translate(241.25 82)">
          <rect id="bg-25" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-24" data-name="line" transform="translate(71.25 462)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="73" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="72" fill="none"/>
          </g>
          <g id="point-24" data-name="point" transform="translate(69 352)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-46" data-name="legend" transform="translate(-293 -39)">
            <g id="legend-47" data-name="legend" transform="translate(118 -40)">
              <g id="Rectangle_951-24" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="153" height="85" stroke="none"/>
                <rect x="0.5" y="0.5" width="152" height="84" fill="none"/>
              </g>
              <text id="_2016年" data-name="2016年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2016</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-24" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_10.4_" data-name="備用容量率 10.4%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">10.4%</tspan></text>
                <circle id="Ellipse_37-24" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-24" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_17_176_300元" data-name="GDP 17,176,300元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 17,176,300</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-24" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2017" id="option17" transform="translate(251.85 82)">
          <rect id="bg-26" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-25" data-name="line" transform="translate(71.25 466)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="69" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="68" fill="none"/>
          </g>
          <g id="point-25" data-name="point" transform="translate(69 348)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-48" data-name="legend" transform="translate(-291.6 -40)">
            <g id="legend-49" data-name="legend" transform="translate(118 -40)">
              <g id="Rectangle_951-25" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="153" height="80" stroke="none"/>
                <rect x="0.5" y="0.5" width="152" height="79" fill="none"/>
              </g>
              <text id="_2017年" data-name="2017年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2017</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-25" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_9.8_" data-name="備用容量率 9.8%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">9.8%</tspan></text>
                <circle id="Ellipse_37-25" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-25" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_17_501_181元" data-name="GDP 17,501,181元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 17,501,181</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-25" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2018" id="option18" transform="translate(262.25 82)">
          <rect id="bg-27" data-name="bg" width="11" height="209" transform="translate(68 326)" fill="#575d60" opacity="0.48"/>
          <g id="line-26" data-name="line" transform="translate(71.25 465)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <rect width="5" height="70" stroke="none"/>
            <rect x="0.5" y="0.5" width="4" height="69" fill="none"/>
          </g>
          <g id="point-26" data-name="point" transform="translate(69 345)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
            <circle cx="4.5" cy="4.5" r="4" fill="none"/>
          </g>
          <g id="legend-50" data-name="legend" transform="translate(-290 -39)">
            <g id="legend-51" data-name="legend" transform="translate(118 -40)">
              <g id="Rectangle_951-26" data-name="Rectangle 951" transform="translate(82 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
                <rect width="153" height="80" stroke="none"/>
                <rect x="0.5" y="0.5" width="152" height="79" fill="none"/>
              </g>
              <text id="_2018年-2" data-name="2018年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2018</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
              <g id="Group_910-26" data-name="Group 910" transform="translate(14 33)">
                <text id="備用容量率_10_" data-name="備用容量率 10%" transform="translate(91 431)" fill="#f2f2f2" font-size="13" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="0" y="14">備用容量率 </tspan><tspan y="14" font-family="Arial-BoldMT, Arial" font-weight="700">10%</tspan></text>
                <circle id="Ellipse_37-26" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#ffcb47"/>
              </g>
              <g id="Group_916-26" data-name="Group 916" transform="translate(14 3)">
                <text id="GDP_17_793_139元" data-name="GDP 17,793,139元" transform="translate(91 441)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">GDP</tspan><tspan y="14" xml:space="preserve" font-family="Arial-BoldMT, Arial" font-weight="700"> 17,793,139</tspan><tspan y="14" font-family="YuGothicUI-Bold, Yu Gothic UI" font-weight="700">元</tspan></text>
                <circle id="Ellipse_38-26" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#8aa1ae"/>
              </g>
            </g>
          </g>
        </g>
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
  name: "SvgFileQ6",
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
        this.currentYear = 1993;
      } else {
        if (dir === 1) {
          this.currentYear + 1 <= 2018 ? this.currentYear += 1 : this.currentYear;
        } else {
          this.currentYear - 1 >= 1993 ? this.currentYear -= 1 : this.currentYear;
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
