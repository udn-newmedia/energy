<template>
  <div class="svg-container">
    <div class="title-and-legend-wrapper">
      <div class="title">近年台灣空氣品質監測數據</div>
      <img width="60%" src="images/blur/Q3tag@3x.png" alt="legend">
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" :height="computeHeight" viewBox="0 70 325 354.348">
      <defs>
        <clipPath id="clip-path">
          <path id="Path_1080" data-name="Path 1080" d="M53.2,283.28H336.773V62.7H53.2V283.28Z" transform="translate(-53.2 -62.7)" fill="none"/>
        </clipPath>
        <filter id="NO_" x="67.959" y="253.726" width="40" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="SO_" x="62.095" y="267.726" width="49" height="45" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="5" result="blur-2"/>
          <feFlood/>
          <feComposite operator="in" in2="blur-2"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="PM_" x="67.253" y="233.641" width="41" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-3"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-3"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="_.5" x="89.195" y="238.95" width="25" height="28" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-4"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-4"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="NO_2" x="96.01" y="253.726" width="40" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-5"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-5"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="SO_2" x="90.145" y="267.726" width="49" height="45" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="5" result="blur-6"/>
          <feFlood/>
          <feComposite operator="in" in2="blur-6"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="PM_2" x="95.303" y="233.641" width="41" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-7"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-7"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="_.5-2" x="117.245" y="238.95" width="25" height="28" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-8"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-8"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="NO_3" x="124.509" y="253.726" width="40" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-9"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-9"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="SO_3" x="118.645" y="267.726" width="49" height="45" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="5" result="blur-10"/>
          <feFlood/>
          <feComposite operator="in" in2="blur-10"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="PM_3" x="123.803" y="233.641" width="41" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-11"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-11"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="_.5-3" x="145.745" y="238.95" width="25" height="28" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-12"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-12"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="NO_4" x="153.009" y="253.726" width="40" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-13"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-13"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="SO_4" x="147.145" y="267.726" width="49" height="45" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="5" result="blur-14"/>
          <feFlood/>
          <feComposite operator="in" in2="blur-14"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="PM_4" x="152.303" y="233.641" width="41" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-15"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-15"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="_.5-4" x="174.245" y="238.95" width="25" height="28" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-16"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-16"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="NO_5" x="40.009" y="253.726" width="40" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-17"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-17"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="SO_5" x="34.145" y="267.726" width="49" height="45" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="5" result="blur-18"/>
          <feFlood/>
          <feComposite operator="in" in2="blur-18"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="PM_5" x="39.303" y="233.641" width="41" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-19"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-19"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="_.5-5" x="61.245" y="238.95" width="25" height="28" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-20"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-20"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="NO_6" x="68.51" y="253.726" width="40" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-21"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-21"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="SO_6" x="62.645" y="267.726" width="49" height="45" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="5" result="blur-22"/>
          <feFlood/>
          <feComposite operator="in" in2="blur-22"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="PM_6" x="67.803" y="233.641" width="41" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-23"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-23"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="_.5-6" x="89.745" y="238.95" width="25" height="28" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-24"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-24"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="NO_7" x="96.91" y="253.726" width="40" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-25"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-25"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="SO_7" x="91.045" y="267.726" width="49" height="45" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="5" result="blur-26"/>
          <feFlood/>
          <feComposite operator="in" in2="blur-26"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="PM_7" x="96.203" y="233.641" width="41" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-27"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-27"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="_.5-7" x="118.146" y="238.95" width="25" height="28" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-28"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-28"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="NO_8" x="124.91" y="253.726" width="40" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-29"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-29"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="SO_8" x="119.045" y="267.726" width="49" height="45" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="5" result="blur-30"/>
          <feFlood/>
          <feComposite operator="in" in2="blur-30"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="PM_8" x="124.203" y="233.641" width="41" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-31"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-31"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="_.5-8" x="146.146" y="238.95" width="25" height="28" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-32"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-32"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="NO_9" x="151.459" y="261.726" width="40" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-33"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-33"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="SO_9" x="145.595" y="275.726" width="49" height="45" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="5" result="blur-34"/>
          <feFlood/>
          <feComposite operator="in" in2="blur-34"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="PM_9" x="150.753" y="241.641" width="41" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-35"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-35"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="_.5-9" x="172.695" y="246.95" width="25" height="28" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-36"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-36"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="NO_10" x="179.609" y="261.726" width="40" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-37"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-37"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="SO_10" x="173.745" y="275.726" width="49" height="45" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="5" result="blur-38"/>
          <feFlood/>
          <feComposite operator="in" in2="blur-38"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="PM_10" x="178.903" y="241.641" width="41" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-39"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-39"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="_.5-10" x="200.845" y="246.95" width="25" height="28" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-40"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-40"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="Path_1085" x="194.4" y="46.622" width="38.779" height="27.131" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-41"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-41"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="SO_11" x="212.745" y="37.726" width="49" height="45" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="5" result="blur-42"/>
          <feFlood/>
          <feComposite operator="in" in2="blur-42"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="Path_1087" x="133.4" y="46.622" width="38.779" height="27.131" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-43"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-43"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="NO_11" x="156.609" y="43.726" width="40" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-44"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-44"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="PM_11" x="88.903" y="42.641" width="41" height="33" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-45"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-45"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="_.5-11" x="110.845" y="47.95" width="25" height="28" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-46"/>
          <feFlood flood-opacity="0.6"/>
          <feComposite operator="in" in2="blur-46"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="Line_77" x="65.9" y="49.534" width="38.841" height="21" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-47"/>
          <feFlood flood-opacity="0.871"/>
          <feComposite operator="in" in2="blur-47"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      <g id="Q3_chart" transform="translate(-45.6 -206)">
        <text id="資料來源_環保署" data-name="資料來源：環保署" transform="translate(229 592.348)" fill="#9f9f9f" font-size="12" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei"><tspan x="45" y="13">資料來源：環保署</tspan></text>
        <path id="line_BG" d="M53.3,251.527H336.412M53.3,220.01H336.412M53.3,188.618H336.412M53.3,157.143H336.412M53.3,125.709H336.412M53.3,94.234H336.412M53.3,62.8H336.412" transform="translate(11.764 280.553)" fill="none" stroke="#828282" stroke-linejoin="round" stroke-width="1.03" opacity="0.4"/>
        <g :class="{'disappear': startFlag}" id="data_column_SO2" transform="translate(65.022 343.311)" clip-path="url(#clip-path)">
          <path id="Path_1079" data-name="Path 1079" d="M76.5,498.653h8.915v37.252H76.5Zm28.336-.753h8.832v38.005h-8.832V497.9Zm28.336,3.014H142v34.991h-8.832Zm28.294,4.73h8.873v30.262h-8.873Zm28.253-1.3h8.915v31.559H189.72Zm28.336.419h8.915v31.141h-8.915V504.764Zm28.294,3.181h8.873v27.96h-8.873v-27.96Zm28.336,1.3h8.832v26.662h-8.832Zm28.336.712h8.832v25.951h-8.832Zm28.253,1.716h8.915v24.235h-8.915Z" transform="translate(-66.748 -315.744)" fill="#8cd5d6"/>
        </g>
        <g :class="{'disappear': startFlag}" id="data_column_NO2" transform="translate(65.022 343.311)" clip-path="url(#clip-path)">
          <path id="Path_1081" data-name="Path 1081" d="M76.5,136.676h8.915V284.217H76.5Zm28.336-7.576h8.832V283.464h-8.832V129.1Zm28.336,10.715H142V286.477h-8.832Zm28.294,15.7h8.873v135.7h-8.873Zm28.253.712h8.915V289.91H189.72Zm28.336-.084h8.915V290.328h-8.915Zm28.294,12.222h8.873V293.509h-8.873V168.361Zm28.336,2.218h8.832V294.807h-8.832Zm28.336,6.278h8.832V295.518h-8.832Zm28.253,8.622h8.915V297.234h-8.915Z" transform="translate(-66.748 -101.308)" fill="#8aa1ae"/>
        </g>
        <path id="data_line_yellow" d="M87.2,88.3l28.294,13.226,28.253-6.906,28.336,24.486,28.336-11.929,28.294,32.731,28.336,20.76,28.336,5.609,28.253,1.3,28.294,10.715" transform="translate(-7.947 265.726)" fill="none" stroke="#ffcb47" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
        <g id="year" transform="translate(0 31)">
          <line id="Line_80" data-name="Line 80" x2="283.112" transform="translate(65.063 532.472)" fill="none" stroke="#9f9f9f" stroke-linejoin="round" stroke-width="1.03"/>
          <text id="_2009" data-name="2009" transform="translate(66.871 549.058)" fill="#9f9f9f" font-size="10" font-family="ArialMT, Arial"><tspan x="0" y="0">2009</tspan></text>
          <text id="_2013" data-name="2013" transform="translate(181.871 549.058)" fill="#9f9f9f" font-size="10" font-family="ArialMT, Arial"><tspan x="0" y="0">2013</tspan></text>
          <text id="_2018年" data-name="2018年" transform="translate(317.871 549.058)" fill="#9f9f9f" font-size="10" font-family="ArialMT, Arial"><tspan x="0" y="0">2018</tspan><tspan y="0" font-family="MicrosoftJhengHeiRegular, Microsoft JhengHei">年</tspan></text>
        </g>
        <g id="left" transform="translate(0 31)">
          <text id="_0" data-name="0" transform="translate(48.362 536.161)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">0</tspan></text>
          <text id="_5" data-name="5" transform="translate(48.362 504.686)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">5</tspan></text>
          <text id="_10" data-name="10" transform="translate(45.6 473.252)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">10</tspan></text>
          <text id="_15" data-name="15" transform="translate(45.6 441.818)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">15</tspan></text>
          <text id="_20" data-name="20" transform="translate(45.6 410.343)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">20</tspan></text>
          <text id="_25" data-name="25" transform="translate(45.6 378.909)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">25</tspan></text>
          <text id="_30" data-name="30" transform="translate(45.6 347.434)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">30</tspan></text>
          <text id="_35" data-name="35" transform="translate(45.6 316)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">35</tspan></text>
          <text id="μg_m" data-name="μg/m" transform="translate(45.6 294)" fill="#ffcb47" font-size="12" font-family="ArialMT, Arial" opacity="0.6"><tspan x="0" y="0">μg/m</tspan></text>
          <text id="_3" data-name="3" transform="translate(72.494 290)" fill="#ffcb47" font-size="9" font-family="Calibri" opacity="0.6"><tspan x="0" y="0">3</tspan></text>
        </g>
        <g id="right" transform="translate(0 31)">
          <text id="ppb" transform="translate(349.6 294)" fill="#9f9f9f" font-size="12" font-family="ArialMT, Arial"><tspan x="0" y="0">ppb</tspan></text>
          <text id="_0-2" data-name="0" transform="translate(353 533.161)" fill="#9f9f9f" font-size="12" font-family="ArialMT, Arial"><tspan x="0" y="0">0</tspan></text>
          <text id="_5-2" data-name="5" transform="translate(353.156 488.455)" fill="#9f9f9f" font-size="12" font-family="ArialMT, Arial"><tspan x="0" y="0">5</tspan></text>
          <text id="_10-2" data-name="10" transform="translate(353.156 445.097)" fill="#9f9f9f" font-size="12" font-family="ArialMT, Arial"><tspan x="0" y="0">10</tspan></text>
          <text id="_15-2" data-name="15" transform="translate(353.156 401.064)" fill="#9f9f9f" font-size="12" font-family="ArialMT, Arial"><tspan x="0" y="0">15</tspan></text>
          <text id="_20-2" data-name="20" transform="translate(353.156 357.032)" fill="#9f9f9f" font-size="12" font-family="ArialMT, Arial"><tspan x="0" y="0">20</tspan></text>
          <text id="_25-2" data-name="25" transform="translate(353.156 313)" fill="#9f9f9f" font-size="12" font-family="ArialMT, Arial"><tspan x="0" y="0">25</tspan></text>
        </g>
        <g v-show="currentYear === 2009" id="option2009" transform="translate(3 -28)">
          <rect id="bg" width="25" height="220" transform="translate(64 371)" fill="#575d60" opacity="0.48"/>
          <g id="line" transform="translate(71.27 554)" fill="#8cd5d6" stroke="#fff" stroke-width="1">
            <rect width="10" height="37" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="36" fill="none"/>
          </g>
          <g id="line-2" data-name="line" transform="translate(71.27 406)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <rect width="10" height="149" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="148" fill="none"/>
          </g>
          <g id="point" transform="translate(69.75 376)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <circle cx="6.5" cy="6.5" r="6.5" stroke="none"/>
            <circle cx="6.5" cy="6.5" r="6" fill="none"/>
          </g>
          <g id="legend" transform="translate(14 31)">
            <g id="BG-2" data-name="BG" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="107" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="106" height="99" fill="none"/>
            </g>
            <text id="_2009年" data-name="2009年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2009</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="NO2" transform="translate(14 33)">
              <text id="_16.76" data-name="16.76" transform="translate(124 433)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">16.76</tspan></text>
              <circle id="Ellipse_37" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8aa1ae"/>
              <g transform="matrix(1, 0, 0, 1, 14.6, 170)" filter="url(#NO_)">
                <text id="NO_12" data-name="NO₂" transform="translate(76.96 274.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">NO₂</tspan></text>
              </g>
            </g>
            <g id="SO2" transform="translate(14 54)">
              <text id="_4.23" data-name="4.23" transform="translate(125 432)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">4.23</tspan></text>
              <circle id="Ellipse_37-2" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8cd5d6"/>
              <g transform="matrix(1, 0, 0, 1, 14.6, 149)" filter="url(#SO_)">
                <text id="SO_12" data-name="SO₂" transform="translate(77.1 294.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">SO₂</tspan></text>
              </g>
            </g>
            <g id="PM2.5" transform="translate(14 3)">
              <text id="_33.3" data-name="33.3" transform="translate(124 443)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">33.3</tspan></text>
              <circle id="Ellipse_38" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#ffcb47"/>
              <g id="Group_964" data-name="Group 964" transform="translate(-185.65 -138)">
                <g transform="matrix(1, 0, 0, 1, 200.25, 338)" filter="url(#PM_)">
                  <text id="PM_12" data-name="PM₂" transform="translate(76.25 254.64)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">PM₂</tspan></text>
                </g>
                <g transform="matrix(1, 0, 0, 1, 200.25, 338)" filter="url(#_.5)">
                  <text id="_.5-12" data-name=".5" transform="translate(98.2 255.95)" fill="#f2f2f2" font-size="8" font-family="Calibri"><tspan x="0" y="0">.5</tspan></text>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2010" id="option2010" transform="translate(31.05 -28)">
          <rect id="bg-3" data-name="bg" width="25" height="220" transform="translate(64 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-3" data-name="line" transform="translate(71.27 553)" fill="#8cd5d6" stroke="#fff" stroke-width="1">
            <rect width="10" height="38" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="37" fill="none"/>
          </g>
          <g id="line-4" data-name="line" transform="translate(71.27 398)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <rect width="10" height="156" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="155" fill="none"/>
          </g>
          <g id="point-2" data-name="point" transform="translate(69.75 387)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <circle cx="6.5" cy="6.5" r="6.5" stroke="none"/>
            <circle cx="6.5" cy="6.5" r="6" fill="none"/>
          </g>
          <g id="legend-2" data-name="legend" transform="translate(14 31)">
            <g id="BG-4" data-name="BG" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="107" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="106" height="99" fill="none"/>
            </g>
            <text id="_2010年" data-name="2010年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2010</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="NO2-2" data-name="NO2" transform="translate(14 33)">
              <text id="_17.53" data-name="17.53" transform="translate(124 433)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">17.53</tspan></text>
              <circle id="Ellipse_37-3" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8aa1ae"/>
              <g transform="matrix(1, 0, 0, 1, -13.45, 170)" filter="url(#NO_2)">
                <text id="NO_13" data-name="NO₂" transform="translate(105.01 274.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">NO₂</tspan></text>
              </g>
            </g>
            <g id="SO2-2" data-name="SO2" transform="translate(14 54)">
              <text id="_4.32" data-name="4.32" transform="translate(125 432)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">4.32</tspan></text>
              <circle id="Ellipse_37-4" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8cd5d6"/>
              <g transform="matrix(1, 0, 0, 1, -13.45, 149)" filter="url(#SO_2)">
                <text id="SO_13" data-name="SO₂" transform="translate(105.15 294.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">SO₂</tspan></text>
              </g>
            </g>
            <g id="PM2.5-2" data-name="PM2.5" transform="translate(14 3)">
              <text id="_31.2" data-name="31.2" transform="translate(124 443)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">31.2</tspan></text>
              <circle id="Ellipse_38-2" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#ffcb47"/>
              <g id="Group_964-2" data-name="Group 964" transform="translate(-185.65 -138)">
                <g transform="matrix(1, 0, 0, 1, 172.2, 338)" filter="url(#PM_2)">
                  <text id="PM_13" data-name="PM₂" transform="translate(104.3 254.64)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">PM₂</tspan></text>
                </g>
                <g transform="matrix(1, 0, 0, 1, 172.2, 338)" filter="url(#_.5-2)">
                  <text id="_.5-13" data-name=".5" transform="translate(126.25 255.95)" fill="#f2f2f2" font-size="8" font-family="Calibri"><tspan x="0" y="0">.5</tspan></text>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2011" id="option2011" transform="translate(59.55 -28)">
          <rect id="bg-5" data-name="bg" width="25" height="220" transform="translate(64 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-5" data-name="line" transform="translate(71.27 555)" fill="#8cd5d6" stroke="#fff" stroke-width="1">
            <rect width="10" height="36" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="35" fill="none"/>
          </g>
          <g id="line-6" data-name="line" transform="translate(71.27 409)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <rect width="10" height="147" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="146" fill="none"/>
          </g>
          <g id="point-3" data-name="point" transform="translate(69.75 382)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <circle cx="6.5" cy="6.5" r="6.5" stroke="none"/>
            <circle cx="6.5" cy="6.5" r="6" fill="none"/>
          </g>
          <g id="legend-3" data-name="legend" transform="translate(14 31)">
            <g id="BG-6" data-name="BG" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="107" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="106" height="99" fill="none"/>
            </g>
            <text id="_2011年" data-name="2011年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2011</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="NO2-3" data-name="NO2" transform="translate(14 33)">
              <text id="_16.65" data-name="16.65" transform="translate(124 433)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">16.65</tspan></text>
              <circle id="Ellipse_37-5" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8aa1ae"/>
              <g transform="matrix(1, 0, 0, 1, -41.95, 170)" filter="url(#NO_3)">
                <text id="NO_14" data-name="NO₂" transform="translate(133.51 274.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">NO₂</tspan></text>
              </g>
            </g>
            <g id="SO2-3" data-name="SO2" transform="translate(14 54)">
              <text id="_3.98" data-name="3.98" transform="translate(125 432)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">3.98</tspan></text>
              <circle id="Ellipse_37-6" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8cd5d6"/>
              <g transform="matrix(1, 0, 0, 1, -41.95, 149)" filter="url(#SO_3)">
                <text id="SO_14" data-name="SO₂" transform="translate(133.65 294.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">SO₂</tspan></text>
              </g>
            </g>
            <g id="PM2.5-3" data-name="PM2.5" transform="translate(14 3)">
              <text id="_32.3" data-name="32.3" transform="translate(124 443)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">32.3</tspan></text>
              <circle id="Ellipse_38-3" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#ffcb47"/>
              <g id="Group_964-3" data-name="Group 964" transform="translate(-185.65 -138)">
                <g transform="matrix(1, 0, 0, 1, 143.7, 338)" filter="url(#PM_3)">
                  <text id="PM_14" data-name="PM₂" transform="translate(132.8 254.64)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">PM₂</tspan></text>
                </g>
                <g transform="matrix(1, 0, 0, 1, 143.7, 338)" filter="url(#_.5-3)">
                  <text id="_.5-14" data-name=".5" transform="translate(154.75 255.95)" fill="#f2f2f2" font-size="8" font-family="Calibri"><tspan x="0" y="0">.5</tspan></text>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2012" id="option2012" transform="translate(88.05 -28)">
          <rect id="bg-7" data-name="bg" width="25" height="220" transform="translate(64 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-7" data-name="line" transform="translate(71.27 561)" fill="#8cd5d6" stroke="#fff" stroke-width="1">
            <rect width="10" height="30" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="29" fill="none"/>
          </g>
          <g id="line-8" data-name="line" transform="translate(71.27 425)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <rect width="10" height="137" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="136" fill="none"/>
          </g>
          <g id="point-4" data-name="point" transform="translate(69.75 405)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <circle cx="6.5" cy="6.5" r="6.5" stroke="none"/>
            <circle cx="6.5" cy="6.5" r="6" fill="none"/>
          </g>
          <g id="legend-4" data-name="legend" transform="translate(14 31)">
            <g id="BG-8" data-name="BG" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="107" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="106" height="99" fill="none"/>
            </g>
            <text id="_2012年" data-name="2012年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2012</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="NO2-4" data-name="NO2" transform="translate(14 33)">
              <text id="_15.41" data-name="15.41" transform="translate(124 433)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">15.41</tspan></text>
              <circle id="Ellipse_37-7" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8aa1ae"/>
              <g transform="matrix(1, 0, 0, 1, -70.45, 170)" filter="url(#NO_4)">
                <text id="NO_15" data-name="NO₂" transform="translate(162.01 274.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">NO₂</tspan></text>
              </g>
            </g>
            <g id="SO2-4" data-name="SO2" transform="translate(14 54)">
              <text id="_3.44" data-name="3.44" transform="translate(125 432)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">3.44</tspan></text>
              <circle id="Ellipse_37-8" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8cd5d6"/>
              <g transform="matrix(1, 0, 0, 1, -70.45, 149)" filter="url(#SO_4)">
                <text id="SO_15" data-name="SO₂" transform="translate(162.15 294.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">SO₂</tspan></text>
              </g>
            </g>
            <g id="PM2.5-4" data-name="PM2.5" transform="translate(14 3)">
              <text id="_28.4" data-name="28.4" transform="translate(124 443)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">28.4</tspan></text>
              <circle id="Ellipse_38-4" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#ffcb47"/>
              <g id="Group_964-4" data-name="Group 964" transform="translate(-185.65 -138)">
                <g transform="matrix(1, 0, 0, 1, 115.2, 338)" filter="url(#PM_4)">
                  <text id="PM_15" data-name="PM₂" transform="translate(161.3 254.64)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">PM₂</tspan></text>
                </g>
                <g transform="matrix(1, 0, 0, 1, 115.2, 338)" filter="url(#_.5-4)">
                  <text id="_.5-15" data-name=".5" transform="translate(183.25 255.95)" fill="#f2f2f2" font-size="8" font-family="Calibri"><tspan x="0" y="0">.5</tspan></text>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2013" id="option2013" transform="translate(116.05 -28)">
          <rect id="bg-9" data-name="bg" width="25" height="220" transform="translate(64 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-9" data-name="line" transform="translate(71.27 560)" fill="#8cd5d6" stroke="#fff" stroke-width="1">
            <rect width="10" height="31" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="30" fill="none"/>
          </g>
          <g id="line-10" data-name="line" transform="translate(71.27 426)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <rect width="10" height="135" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="134" fill="none"/>
          </g>
          <g id="point-5" data-name="point" transform="translate(69.75 396)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <circle cx="6.5" cy="6.5" r="6.5" stroke="none"/>
            <circle cx="6.5" cy="6.5" r="6" fill="none"/>
          </g>
          <g id="legend-5" data-name="legend" transform="translate(-127 31)">
            <g id="BG-10" data-name="BG" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="107" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="106" height="99" fill="none"/>
            </g>
            <text id="_2013年" data-name="2013年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2013</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="NO2-5" data-name="NO2" transform="translate(14 33)">
              <text id="_15.18" data-name="15.18" transform="translate(124 433)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">15.18</tspan></text>
              <circle id="Ellipse_37-9" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8aa1ae"/>
              <g transform="matrix(1, 0, 0, 1, 42.55, 170)" filter="url(#NO_5)">
                <text id="NO_16" data-name="NO₂" transform="translate(49.01 274.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">NO₂</tspan></text>
              </g>
            </g>
            <g id="SO2-5" data-name="SO2" transform="translate(14 54)">
              <text id="_3.59" data-name="3.59" transform="translate(125 432)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">3.59</tspan></text>
              <circle id="Ellipse_37-10" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8cd5d6"/>
              <g transform="matrix(1, 0, 0, 1, 42.55, 149)" filter="url(#SO_5)">
                <text id="SO_16" data-name="SO₂" transform="translate(49.15 294.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">SO₂</tspan></text>
              </g>
            </g>
            <g id="PM2.5-5" data-name="PM2.5" transform="translate(14 3)">
              <text id="_30.3" data-name="30.3" transform="translate(124 443)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">30.3</tspan></text>
              <circle id="Ellipse_38-5" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#ffcb47"/>
              <g id="Group_964-5" data-name="Group 964" transform="translate(-185.65 -138)">
                <g transform="matrix(1, 0, 0, 1, 228.2, 338)" filter="url(#PM_5)">
                  <text id="PM_16" data-name="PM₂" transform="translate(48.3 254.64)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">PM₂</tspan></text>
                </g>
                <g transform="matrix(1, 0, 0, 1, 228.2, 338)" filter="url(#_.5-5)">
                  <text id="_.5-16" data-name=".5" transform="translate(70.25 255.95)" fill="#f2f2f2" font-size="8" font-family="Calibri"><tspan x="0" y="0">.5</tspan></text>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2014" id="option2014" transform="translate(144.55 -28)">
          <rect id="bg-11" data-name="bg" width="25" height="220" transform="translate(64 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-11" data-name="line" transform="translate(71.27 560)" fill="#8cd5d6" stroke="#fff" stroke-width="1">
            <rect width="10" height="31" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="30" fill="none"/>
          </g>
          <g id="line-12" data-name="line" transform="translate(71.27 425)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <rect width="10" height="136" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="135" fill="none"/>
          </g>
          <g id="point-6" data-name="point" transform="translate(69.75 427)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <circle cx="6.5" cy="6.5" r="6.5" stroke="none"/>
            <circle cx="6.5" cy="6.5" r="6" fill="none"/>
          </g>
          <g id="legend-6" data-name="legend" transform="translate(-127 31)">
            <g id="BG-12" data-name="BG" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="107" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="106" height="99" fill="none"/>
            </g>
            <text id="_2014年" data-name="2014年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2014</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="NO2-6" data-name="NO2" transform="translate(14 33)">
              <text id="_15.24" data-name="15.24" transform="translate(124 433)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">15.24</tspan></text>
              <circle id="Ellipse_37-11" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8aa1ae"/>
              <g transform="matrix(1, 0, 0, 1, 14.05, 170)" filter="url(#NO_6)">
                <text id="NO_17" data-name="NO₂" transform="translate(77.51 274.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">NO₂</tspan></text>
              </g>
            </g>
            <g id="SO2-6" data-name="SO2" transform="translate(14 54)">
              <text id="_3.54" data-name="3.54" transform="translate(125 432)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">3.54</tspan></text>
              <circle id="Ellipse_37-12" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8cd5d6"/>
              <g transform="matrix(1, 0, 0, 1, 14.05, 149)" filter="url(#SO_6)">
                <text id="SO_17" data-name="SO₂" transform="translate(77.65 294.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">SO₂</tspan></text>
              </g>
            </g>
            <g id="PM2.5-6" data-name="PM2.5" transform="translate(14 3)">
              <text id="_25.1" data-name="25.1" transform="translate(124 443)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">25.1</tspan></text>
              <circle id="Ellipse_38-6" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#ffcb47"/>
              <g id="Group_964-6" data-name="Group 964" transform="translate(-185.65 -138)">
                <g transform="matrix(1, 0, 0, 1, 199.7, 338)" filter="url(#PM_6)">
                  <text id="PM_17" data-name="PM₂" transform="translate(76.8 254.64)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">PM₂</tspan></text>
                </g>
                <g transform="matrix(1, 0, 0, 1, 199.7, 338)" filter="url(#_.5-6)">
                  <text id="_.5-17" data-name=".5" transform="translate(98.75 255.95)" fill="#f2f2f2" font-size="8" font-family="Calibri"><tspan x="0" y="0">.5</tspan></text>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2015" id="option2015" transform="translate(172.95 -28)">
          <rect id="bg-13" data-name="bg" width="25" height="220" transform="translate(64 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-13" data-name="line" transform="translate(71.27 563)" fill="#8cd5d6" stroke="#fff" stroke-width="1">
            <rect width="10" height="28" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="27" fill="none"/>
          </g>
          <g id="line-14" data-name="line" transform="translate(71.27 438)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <rect width="10" height="126" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="125" fill="none"/>
          </g>
          <g id="point-7" data-name="point" transform="translate(69.75 446)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <circle cx="6.5" cy="6.5" r="6.5" stroke="none"/>
            <circle cx="6.5" cy="6.5" r="6" fill="none"/>
          </g>
          <g id="legend-7" data-name="legend" transform="translate(-127 31)">
            <g id="BG-14" data-name="BG" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="107" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="106" height="99" fill="none"/>
            </g>
            <text id="_2015年" data-name="2015年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2015</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="NO2-7" data-name="NO2" transform="translate(14 33)">
              <text id="_14.21" data-name="14.21" transform="translate(124 433)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">14.21</tspan></text>
              <circle id="Ellipse_37-13" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8aa1ae"/>
              <g transform="matrix(1, 0, 0, 1, -14.35, 170)" filter="url(#NO_7)">
                <text id="NO_18" data-name="NO₂" transform="translate(105.91 274.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">NO₂</tspan></text>
              </g>
            </g>
            <g id="SO2-7" data-name="SO2" transform="translate(14 54)">
              <text id="_3.18" data-name="3.18" transform="translate(125 432)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">3.18</tspan></text>
              <circle id="Ellipse_37-14" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8cd5d6"/>
              <g transform="matrix(1, 0, 0, 1, -14.35, 149)" filter="url(#SO_7)">
                <text id="SO_18" data-name="SO₂" transform="translate(106.05 294.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">SO₂</tspan></text>
              </g>
            </g>
            <g id="PM2.5-7" data-name="PM2.5" transform="translate(14 3)">
              <text id="_21.8" data-name="21.8" transform="translate(124 443)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">21.8</tspan></text>
              <circle id="Ellipse_38-7" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#ffcb47"/>
              <g id="Group_964-7" data-name="Group 964" transform="translate(-185.65 -138)">
                <g transform="matrix(1, 0, 0, 1, 171.3, 338)" filter="url(#PM_7)">
                  <text id="PM_18" data-name="PM₂" transform="translate(105.2 254.64)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">PM₂</tspan></text>
                </g>
                <g transform="matrix(1, 0, 0, 1, 171.3, 338)" filter="url(#_.5-7)">
                  <text id="_.5-18" data-name=".5" transform="translate(127.15 255.95)" fill="#f2f2f2" font-size="8" font-family="Calibri"><tspan x="0" y="0">.5</tspan></text>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2016" id="option2016" transform="translate(200.95 -28)">
          <rect id="bg-15" data-name="bg" width="25" height="220" transform="translate(64 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-15" data-name="line" transform="translate(71.27 564)" fill="#8cd5d6" stroke="#fff" stroke-width="1">
            <rect width="10" height="27" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="26" fill="none"/>
          </g>
          <g id="line-16" data-name="line" transform="translate(71.27 440)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <rect width="10" height="125" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="124" fill="none"/>
          </g>
          <g id="point-8" data-name="point" transform="translate(69.75 453)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <circle cx="6.5" cy="6.5" r="6.5" stroke="none"/>
            <circle cx="6.5" cy="6.5" r="6" fill="none"/>
          </g>
          <g id="legend-8" data-name="legend" transform="translate(-127 31)">
            <g id="BG-16" data-name="BG" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="107" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="106" height="99" fill="none"/>
            </g>
            <text id="_2016年" data-name="2016年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2016</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="NO2-8" data-name="NO2" transform="translate(14 33)">
              <text id="_14.11" data-name="14.11" transform="translate(124 433)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">14.11</tspan></text>
              <circle id="Ellipse_37-15" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8aa1ae"/>
              <g transform="matrix(1, 0, 0, 1, -42.35, 170)" filter="url(#NO_8)">
                <text id="NO_19" data-name="NO₂" transform="translate(133.91 274.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">NO₂</tspan></text>
              </g>
            </g>
            <g id="SO2-8" data-name="SO2" transform="translate(14 54)">
              <text id="_3.03" data-name="3.03" transform="translate(125 432)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">3.03</tspan></text>
              <circle id="Ellipse_37-16" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8cd5d6"/>
              <g transform="matrix(1, 0, 0, 1, -42.35, 149)" filter="url(#SO_8)">
                <text id="SO_19" data-name="SO₂" transform="translate(134.05 294.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">SO₂</tspan></text>
              </g>
            </g>
            <g id="PM2.5-8" data-name="PM2.5" transform="translate(14 3)">
              <text id="_20.9" data-name="20.9" transform="translate(124 443)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">20.9</tspan></text>
              <circle id="Ellipse_38-8" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#ffcb47"/>
              <g id="Group_964-8" data-name="Group 964" transform="translate(-185.65 -138)">
                <g transform="matrix(1, 0, 0, 1, 143.3, 338)" filter="url(#PM_8)">
                  <text id="PM_19" data-name="PM₂" transform="translate(133.2 254.64)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">PM₂</tspan></text>
                </g>
                <g transform="matrix(1, 0, 0, 1, 143.3, 338)" filter="url(#_.5-8)">
                  <text id="_.5-19" data-name=".5" transform="translate(155.15 255.95)" fill="#f2f2f2" font-size="8" font-family="Calibri"><tspan x="0" y="0">.5</tspan></text>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2017" id="option2017" transform="translate(229.5 -28)">
          <rect id="bg-17" data-name="bg" width="25" height="220" transform="translate(64 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-17" data-name="line" transform="translate(71.27 565)" fill="#8cd5d6" stroke="#fff" stroke-width="1">
            <rect width="10" height="26" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="25" fill="none"/>
          </g>
          <g id="line-18" data-name="line" transform="translate(71.27 446)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <rect width="10" height="120" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="119" fill="none"/>
          </g>
          <g id="point-9" data-name="point" transform="translate(69.75 455)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <circle cx="6.5" cy="6.5" r="6.5" stroke="none"/>
            <circle cx="6.5" cy="6.5" r="6" fill="none"/>
          </g>
          <g id="legend-9" data-name="legend" transform="translate(-129 39)">
            <g id="BG-18" data-name="BG" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="107" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="106" height="99" fill="none"/>
            </g>
            <text id="_2017年" data-name="2017年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2017</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="NO2-9" data-name="NO2" transform="translate(14 33)">
              <text id="_13.48" data-name="13.48" transform="translate(124 433)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">13.48</tspan></text>
              <circle id="Ellipse_37-17" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8aa1ae"/>
              <g transform="matrix(1, 0, 0, 1, -68.9, 162)" filter="url(#NO_9)">
                <text id="NO_20" data-name="NO₂" transform="translate(160.46 282.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">NO₂</tspan></text>
              </g>
            </g>
            <g id="SO2-9" data-name="SO2" transform="translate(14 54)">
              <text id="_2.95" data-name="2.95" transform="translate(125 432)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">2.95</tspan></text>
              <circle id="Ellipse_37-18" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8cd5d6"/>
              <g transform="matrix(1, 0, 0, 1, -68.9, 141)" filter="url(#SO_9)">
                <text id="SO_20" data-name="SO₂" transform="translate(160.6 302.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">SO₂</tspan></text>
              </g>
            </g>
            <g id="PM2.5-9" data-name="PM2.5" transform="translate(14 3)">
              <text id="_20.7" data-name="20.7" transform="translate(124 443)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">20.7</tspan></text>
              <circle id="Ellipse_38-9" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#ffcb47"/>
              <g id="Group_964-9" data-name="Group 964" transform="translate(-185.65 -138)">
                <g transform="matrix(1, 0, 0, 1, 116.75, 330)" filter="url(#PM_9)">
                  <text id="PM_20" data-name="PM₂" transform="translate(159.75 262.64)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">PM₂</tspan></text>
                </g>
                <g transform="matrix(1, 0, 0, 1, 116.75, 330)" filter="url(#_.5-9)">
                  <text id="_.5-20" data-name=".5" transform="translate(181.7 263.95)" fill="#f2f2f2" font-size="8" font-family="Calibri"><tspan x="0" y="0">.5</tspan></text>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g v-show="currentYear === 2018" id="option2018" transform="translate(257.65 -28)">
          <rect id="bg-19" data-name="bg" width="25" height="220" transform="translate(64 371)" fill="#575d60" opacity="0.48"/>
          <g id="line-19" data-name="line" transform="translate(71.27 567)" fill="#8cd5d6" stroke="#fff" stroke-width="1">
            <rect width="10" height="24" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="23" fill="none"/>
          </g>
          <g id="line-20" data-name="line" transform="translate(71.27 455)" fill="#8aa1ae" stroke="#fff" stroke-width="1">
            <rect width="10" height="113" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="112" fill="none"/>
          </g>
          <g id="point-10" data-name="point" transform="translate(69.75 465)" fill="#ffcb47" stroke="#fff" stroke-width="1">
            <circle cx="6.5" cy="6.5" r="6.5" stroke="none"/>
            <circle cx="6.5" cy="6.5" r="6" fill="none"/>
          </g>
          <g id="legend-10" data-name="legend" transform="translate(-129 39)">
            <g id="BG-20" data-name="BG" transform="translate(81 414)" fill="#2a2a2a" stroke="#f2f2f2" stroke-width="1" opacity="0.95">
              <rect width="107" height="100" stroke="none"/>
              <rect x="0.5" y="0.5" width="106" height="99" fill="none"/>
            </g>
            <text id="_2018年-2" data-name="2018年" transform="translate(94 424)" fill="#f2f2f2" font-size="13" font-family="ArialMT, Arial"><tspan x="0" y="14">2018</tspan><tspan y="14" font-family="YuGothicUI-Regular, Yu Gothic UI">年</tspan></text>
            <g id="NO2-10" data-name="NO2" transform="translate(14 33)">
              <text id="_12.70" data-name="12.70" transform="translate(124 433)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">12.70</tspan></text>
              <circle id="Ellipse_37-19" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8aa1ae"/>
              <g transform="matrix(1, 0, 0, 1, -97.05, 162)" filter="url(#NO_10)">
                <text id="NO_21" data-name="NO₂" transform="translate(188.61 282.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">NO₂</tspan></text>
              </g>
            </g>
            <g id="SO2-10" data-name="SO2" transform="translate(14 54)">
              <text id="_2.75" data-name="2.75" transform="translate(125 432)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">2.75</tspan></text>
              <circle id="Ellipse_37-20" data-name="Ellipse 37" cx="3" cy="3" r="3" transform="translate(82 437)" fill="#8cd5d6"/>
              <g transform="matrix(1, 0, 0, 1, -97.05, 141)" filter="url(#SO_10)">
                <text id="SO_21" data-name="SO₂" transform="translate(188.75 302.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">SO₂</tspan></text>
              </g>
            </g>
            <g id="PM2.5-10" data-name="PM2.5" transform="translate(14 3)">
              <text id="_19.0" data-name="19.0" transform="translate(124 443)" fill="#f2f2f2" font-size="13" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="12">19.0</tspan></text>
              <circle id="Ellipse_38-10" data-name="Ellipse 38" cx="3" cy="3" r="3" transform="translate(82 448)" fill="#ffcb47"/>
              <g id="Group_964-10" data-name="Group 964" transform="translate(-185.65 -138)">
                <g transform="matrix(1, 0, 0, 1, 88.6, 330)" filter="url(#PM_10)">
                  <text id="PM_21" data-name="PM₂" transform="translate(187.9 262.64)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">PM₂</tspan></text>
                </g>
                <g transform="matrix(1, 0, 0, 1, 88.6, 330)" filter="url(#_.5-10)">
                  <text id="_.5-21" data-name=".5" transform="translate(209.85 263.95)" fill="#f2f2f2" font-size="8" font-family="Calibri"><tspan x="0" y="0">.5</tspan></text>
                </g>
              </g>
            </g>
          </g>
        </g>
        <!-- <g id="tag" transform="translate(0 39)">
          <g id="BG-21" data-name="BG" transform="translate(12 -375)">
            <rect id="BG-22" data-name="BG" width="246.333" height="38" rx="5" transform="translate(72 583)" fill="#333"/>
          </g>
          <g id="Group_963" data-name="Group 963" transform="translate(12)">
            <g id="BTN_SO2" transform="translate(237 215.726)">
              <g transform="matrix(1, 0, 0, 1, -203.4, -48.73)" filter="url(#Path_1085)">
                <path id="Path_1085-2" data-name="Path 1085" d="M282.1,643.4h20.779v9.131H282.1V643.4Z" transform="translate(-78.7 -587.78)" fill="#8cd5d6" fill-rule="evenodd"/>
              </g>
              <g transform="matrix(1, 0, 0, 1, -203.4, -48.73)" filter="url(#SO_11)">
                <text id="SO_22" data-name="SO₂" transform="translate(227.75 64.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">SO₂</tspan></text>
              </g>
            </g>
            <g id="BTN_NO2" transform="translate(176 215.726)">
              <g transform="matrix(1, 0, 0, 1, -142.4, -48.73)" filter="url(#Path_1087)">
                <path id="Path_1087-2" data-name="Path 1087" d="M361.7,643.4h20.779v9.131H361.7V643.4Z" transform="translate(-219.3 -587.78)" fill="#8aa1ae" fill-rule="evenodd"/>
              </g>
              <g transform="matrix(1, 0, 0, 1, -142.4, -48.73)" filter="url(#NO_11)">
                <text id="NO_22" data-name="NO₂" transform="translate(165.61 64.73)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">NO₂</tspan></text>
              </g>
            </g>
            <g id="BTN_PM2.5" transform="translate(-145 -359)">
              <g id="Group_962" data-name="Group 962" transform="translate(0 -3)">
                <g transform="matrix(1, 0, 0, 1, 178.6, 529)" filter="url(#PM_11)">
                  <text id="PM_22" data-name="PM₂" transform="translate(97.9 63.64)" fill="#f2f2f2" font-size="13" font-family="Calibri"><tspan x="0" y="0">PM₂</tspan></text>
                </g>
                <g transform="matrix(1, 0, 0, 1, 178.6, 529)" filter="url(#_.5-11)">
                  <text id="_.5-22" data-name=".5" transform="translate(119.85 64.95)" fill="#f2f2f2" font-size="8" font-family="Calibri"><tspan x="0" y="0">.5</tspan></text>
                </g>
              </g>
              <g transform="matrix(1, 0, 0, 1, 178.6, 526)" filter="url(#Line_77)">
                <line id="Line_77-2" data-name="Line 77" x2="17.841" transform="translate(76.4 60.03)" fill="none" stroke="#ffcb47" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
              </g>
            </g>
          </g>
        </g> -->
        <!-- <text id="title" transform="translate(97 206)" fill="#cecece" font-size="18" font-family="MicrosoftJhengHeiBold, Microsoft JhengHei"><tspan x="2.5" y="19">近年台灣空氣品質監測數據</tspan></text> -->
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
  name: "SvgFileQ3",
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
        this.currentYear = 2009;
      } else {
        if (dir === 1) {
          this.currentYear + 1 <= 2018 ? this.currentYear += 1 : this.currentYear;
        } else {
          this.currentYear - 1 >= 2009 ? this.currentYear -= 1 : this.currentYear;
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
        font-size: 1rem;
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
      border: solid 1px;
    }
    @keyframes shiningAnimation {
      0% {
        border-color: #ffffff00;
      }
      50% {
        border-color: #ffffffff;
      }
      100% {
        border-color: #ffffff00;
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
