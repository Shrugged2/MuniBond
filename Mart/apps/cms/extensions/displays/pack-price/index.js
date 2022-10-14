import{useApi as e,defineDisplay as n}from"@directus/extensions-sdk";import{ref as o,defineComponent as t,openBlock as a,createElementBlock as c,toDisplayString as d}from"vue";var s,p={code:"USD",base:10,exponent:2},b=Object.freeze({__proto__:null,AED:{code:"AED",base:10,exponent:2},AFN:{code:"AFN",base:10,exponent:2},ALL:{code:"ALL",base:10,exponent:2},AMD:{code:"AMD",base:10,exponent:2},AOA:{code:"AOA",base:10,exponent:2},ARS:{code:"ARS",base:10,exponent:2},AUD:{code:"AUD",base:10,exponent:2},AWG:{code:"AWG",base:10,exponent:2},AZN:{code:"AZN",base:10,exponent:2},BAM:{code:"BAM",base:10,exponent:2},BBD:{code:"BBD",base:10,exponent:2},BDT:{code:"BDT",base:10,exponent:2},BGN:{code:"BGN",base:10,exponent:2},BHD:{code:"BHD",base:10,exponent:3},BIF:{code:"BIF",base:10,exponent:0},BMD:{code:"BMD",base:10,exponent:2},BND:{code:"BND",base:10,exponent:2},BOB:{code:"BOB",base:10,exponent:2},BOV:{code:"BOV",base:10,exponent:2},BRL:{code:"BRL",base:10,exponent:2},BSD:{code:"BSD",base:10,exponent:2},BTN:{code:"BTN",base:10,exponent:2},BWP:{code:"BWP",base:10,exponent:2},BYN:{code:"BYN",base:10,exponent:2},BZD:{code:"BZD",base:10,exponent:2},CAD:{code:"CAD",base:10,exponent:2},CDF:{code:"CDF",base:10,exponent:2},CHE:{code:"CHE",base:10,exponent:2},CHF:{code:"CHF",base:10,exponent:2},CHW:{code:"CHW",base:10,exponent:2},CLF:{code:"CLF",base:10,exponent:4},CLP:{code:"CLP",base:10,exponent:0},CNY:{code:"CNY",base:10,exponent:2},COP:{code:"COP",base:10,exponent:2},COU:{code:"COU",base:10,exponent:2},CRC:{code:"CRC",base:10,exponent:2},CUC:{code:"CUC",base:10,exponent:2},CUP:{code:"CUP",base:10,exponent:2},CVE:{code:"CVE",base:10,exponent:2},CZK:{code:"CZK",base:10,exponent:2},DJF:{code:"DJF",base:10,exponent:0},DKK:{code:"DKK",base:10,exponent:2},DOP:{code:"DOP",base:10,exponent:2},DZD:{code:"DZD",base:10,exponent:2},EGP:{code:"EGP",base:10,exponent:2},ERN:{code:"ERN",base:10,exponent:2},ETB:{code:"ETB",base:10,exponent:2},EUR:{code:"EUR",base:10,exponent:2},FJD:{code:"FJD",base:10,exponent:2},FKP:{code:"FKP",base:10,exponent:2},GBP:{code:"GBP",base:10,exponent:2},GEL:{code:"GEL",base:10,exponent:2},GHS:{code:"GHS",base:10,exponent:2},GIP:{code:"GIP",base:10,exponent:2},GMD:{code:"GMD",base:10,exponent:2},GNF:{code:"GNF",base:10,exponent:0},GTQ:{code:"GTQ",base:10,exponent:2},GYD:{code:"GYD",base:10,exponent:2},HKD:{code:"HKD",base:10,exponent:2},HNL:{code:"HNL",base:10,exponent:2},HRK:{code:"HRK",base:10,exponent:2},HTG:{code:"HTG",base:10,exponent:2},HUF:{code:"HUF",base:10,exponent:2},IDR:{code:"IDR",base:10,exponent:2},ILS:{code:"ILS",base:10,exponent:2},INR:{code:"INR",base:10,exponent:2},IQD:{code:"IQD",base:10,exponent:3},IRR:{code:"IRR",base:10,exponent:2},ISK:{code:"ISK",base:10,exponent:0},JMD:{code:"JMD",base:10,exponent:2},JOD:{code:"JOD",base:10,exponent:3},JPY:{code:"JPY",base:10,exponent:0},KES:{code:"KES",base:10,exponent:2},KGS:{code:"KGS",base:10,exponent:2},KHR:{code:"KHR",base:10,exponent:2},KMF:{code:"KMF",base:10,exponent:0},KPW:{code:"KPW",base:10,exponent:2},KRW:{code:"KRW",base:10,exponent:0},KWD:{code:"KWD",base:10,exponent:3},KYD:{code:"KYD",base:10,exponent:2},KZT:{code:"KZT",base:10,exponent:2},LAK:{code:"LAK",base:10,exponent:2},LBP:{code:"LBP",base:10,exponent:2},LKR:{code:"LKR",base:10,exponent:2},LRD:{code:"LRD",base:10,exponent:2},LSL:{code:"LSL",base:10,exponent:2},LYD:{code:"LYD",base:10,exponent:3},MAD:{code:"MAD",base:10,exponent:2},MDL:{code:"MDL",base:10,exponent:2},MGA:{code:"MGA",base:5,exponent:1},MKD:{code:"MKD",base:10,exponent:2},MMK:{code:"MMK",base:10,exponent:2},MNT:{code:"MNT",base:10,exponent:2},MOP:{code:"MOP",base:10,exponent:2},MRU:{code:"MRU",base:5,exponent:1},MUR:{code:"MUR",base:10,exponent:2},MVR:{code:"MVR",base:10,exponent:2},MWK:{code:"MWK",base:10,exponent:2},MXN:{code:"MXN",base:10,exponent:2},MXV:{code:"MXV",base:10,exponent:2},MYR:{code:"MYR",base:10,exponent:2},MZN:{code:"MZN",base:10,exponent:2},NAD:{code:"NAD",base:10,exponent:2},NGN:{code:"NGN",base:10,exponent:2},NIO:{code:"NIO",base:10,exponent:2},NOK:{code:"NOK",base:10,exponent:2},NPR:{code:"NPR",base:10,exponent:2},NZD:{code:"NZD",base:10,exponent:2},OMR:{code:"OMR",base:10,exponent:3},PAB:{code:"PAB",base:10,exponent:2},PEN:{code:"PEN",base:10,exponent:2},PGK:{code:"PGK",base:10,exponent:2},PHP:{code:"PHP",base:10,exponent:2},PKR:{code:"PKR",base:10,exponent:2},PLN:{code:"PLN",base:10,exponent:2},PYG:{code:"PYG",base:10,exponent:0},QAR:{code:"QAR",base:10,exponent:2},RON:{code:"RON",base:10,exponent:2},RSD:{code:"RSD",base:10,exponent:2},RUB:{code:"RUB",base:10,exponent:2},RWF:{code:"RWF",base:10,exponent:0},SAR:{code:"SAR",base:10,exponent:2},SBD:{code:"SBD",base:10,exponent:2},SCR:{code:"SCR",base:10,exponent:2},SDG:{code:"SDG",base:10,exponent:2},SEK:{code:"SEK",base:10,exponent:2},SGD:{code:"SGD",base:10,exponent:2},SHP:{code:"SHP",base:10,exponent:2},SLL:{code:"SLL",base:10,exponent:2},SOS:{code:"SOS",base:10,exponent:2},SRD:{code:"SRD",base:10,exponent:2},SSP:{code:"SSP",base:10,exponent:2},STN:{code:"STN",base:10,exponent:2},SVC:{code:"SVC",base:10,exponent:2},SYP:{code:"SYP",base:10,exponent:2},SZL:{code:"SZL",base:10,exponent:2},THB:{code:"THB",base:10,exponent:2},TJS:{code:"TJS",base:10,exponent:2},TMT:{code:"TMT",base:10,exponent:2},TND:{code:"TND",base:10,exponent:3},TOP:{code:"TOP",base:10,exponent:2},TRY:{code:"TRY",base:10,exponent:2},TTD:{code:"TTD",base:10,exponent:2},TWD:{code:"TWD",base:10,exponent:2},TZS:{code:"TZS",base:10,exponent:2},UAH:{code:"UAH",base:10,exponent:2},UGX:{code:"UGX",base:10,exponent:0},USD:p,USN:{code:"USN",base:10,exponent:2},UYI:{code:"UYI",base:10,exponent:0},UYU:{code:"UYU",base:10,exponent:2},UYW:{code:"UYW",base:10,exponent:4},UZS:{code:"UZS",base:10,exponent:2},VES:{code:"VES",base:10,exponent:2},VND:{code:"VND",base:10,exponent:0},VUV:{code:"VUV",base:10,exponent:0},WST:{code:"WST",base:10,exponent:2},XAF:{code:"XAF",base:10,exponent:0},XCD:{code:"XCD",base:10,exponent:2},XOF:{code:"XOF",base:10,exponent:0},XPF:{code:"XPF",base:10,exponent:0},YER:{code:"YER",base:10,exponent:2},ZAR:{code:"ZAR",base:10,exponent:2},ZMW:{code:"ZMW",base:10,exponent:2},ZWL:{code:"ZWL",base:10,exponent:2}});function r(e,n){if(!e)throw new Error("[Dinero.js] ".concat(n))}function x(e){return e}function u(e){var n=function(e){return function(){for(var n,o=arguments.length,t=new Array(o),a=0;a<o;a++)t[a]=arguments[a];var c=t[0],d=t[1],s=(null==d?void 0:d.round)||x,p=c.toJSON(),b=p.amount,r=p.currency,u=p.scale,D=e.power,i=e.toNumber,S=i(D(r.base,u)),N=i(D(r.base,null!==(n=null==d?void 0:d.digits)&&void 0!==n?n:u));return s(i(b)/S*N)/N}}(e);return function(){for(var e=arguments.length,o=new Array(e),t=0;t<e;t++)o[t]=arguments[t];var a=o[0],c=o[1],d=a.toJSON(),s=d.currency,p=d.scale,b=n(a,{digits:p});return c({amount:b,currency:s,dineroObject:a})}}!function(e){e[e.LT=-1]="LT",e[e.EQ=0]="EQ",e[e.GT=1]="GT"}(s||(s={}));var D=function(e){var n=e.calculator,o=e.onCreate;return function e(t){var a=t.amount,c=t.currency,d=t.scale,s=void 0===d?c.exponent:d;return null==o||o({amount:a,currency:c,scale:s}),{calculator:n,create:e,toJSON:function(){return{amount:a,currency:c,scale:s}}}}}({calculator:{add:function(e,n){return e+n},compare:function(e,n){return e<n?s.LT:e>n?s.GT:s.EQ},decrement:function(e){return e-1},increment:function(e){return e+1},integerDivide:function(e,n){return Math.trunc(e/n)},modulo:function(e,n){return e%n},multiply:function(e,n){return e*n},power:function(e,n){return Math.pow(e,n)},subtract:function(e,n){return e-n},toNumber:function(e){return e},zero:function(){return 0}},onCreate:function(e){var n=e.amount,o=e.scale;r(Number.isInteger(n),"Amount is invalid."),r(Number.isInteger(o),"Scale is invalid.")}}),i=o(p),S=o("en-US");function N(e,n,o){return function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];var t=n[0],a=n[1];return u(t.calculator)(t,a)}(D({amount:e,currency:n}),(function(e){var n=e.amount,t=e.currency;return n.toLocaleString(o,{style:"currency",currency:t.code})}))}function R(e){if(!e)return 0;if("number"==typeof e)return e;var n=Number.parseInt(e,10);return Number.isNaN(n)?0:n}var l=t({props:{value:{type:String,default:null}},data:function(e){return{formattedValue:N(R(e.value),i.value,S.value)}},setup:function(){var n=e(),t=o(0);return n.get("/items/application").then((function(e){e.data.data.currency&&(i.value=b[e.data.data.currency],t.value+=1)})),n.get("/users/me").then((function(e){e.data.data.language&&(S.value=e.data.data.language,t.value+=1)})),{trigger:t}},updated:function(){this.formattedValue=N(R(this.$props.value),i.value,S.value)}});l.render=function(e,n,o,t,s,p){return a(),c("span",{key:e.trigger},d(e.formattedValue),1)},l.__file="src/component.vue";var P=n({id:"price",name:"Price",description:"Change price from integer to float when displayed around app.",icon:"attach_money",component:l,types:["integer"],options:null});export{P as default};