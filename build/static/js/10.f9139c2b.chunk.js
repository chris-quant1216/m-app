(this["webpackJsonpthumbshot-fe"]=this["webpackJsonpthumbshot-fe"]||[]).push([[10],{1034:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(45),s=a.n(c),i=a(61),r=a(1029),o=a(24),l=a.n(o),d=a(26),j=a(43),b=a(168),h=a(357),_=a(756),g=a(905),m=a.n(g),p=a(1),u=s.a.bind(m.a),x=function(e){var t=e.pool,a=Object(j.c)().account,c=Object(b.a)().login,s=Object(d.g)(),o=Object(n.useState)(!1),g=Object(i.a)(o,2),m=g[0],x=g[1];return Object(p.jsxs)("div",{className:u("staking-card"),children:[Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:u("img-container"),children:Object(p.jsx)("img",{src:_.a,alt:""})}),Object(p.jsx)("div",{className:u("title"),children:"RUNE x MOBI"}),Object(p.jsxs)("div",{className:u("progroess-info"),children:[Object(p.jsx)("div",{children:"Epoch"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("strong",{children:t.epoch}),"/",t.totalEpoch]})]}),Object(p.jsx)(r.a,{strokeColor:"#C62F75",trailColor:"#fff",percent:100*t.epoch/t.totalEpoch,strokeLinecap:"square",type:"line",showInfo:!1,className:u("progress")})]}),Object(p.jsxs)("div",{className:u("staking-content"),children:[Object(p.jsxs)("div",{className:u("panel"),children:[Object(p.jsx)("div",{className:u("txt"),children:"Daily Reward"}),Object(p.jsx)("div",{className:u("num"),children:new l.a(t.epochReward).toFormat()})]}),Object(p.jsxs)("div",{className:u("panel"),children:[Object(p.jsx)("div",{className:u("txt"),children:"Pooled Total Score"}),Object(p.jsx)("div",{className:u("num"),children:new l.a(t.totalScore).toFormat()})]}),Object(p.jsxs)("div",{className:u("panel"),children:[Object(p.jsx)("div",{className:u("txt"),children:"Score Requirement"}),Object(p.jsx)("div",{className:u("num"),children:new l.a(t.scoreLine).toFormat()})]}),Object(p.jsx)("div",{className:u("actions"),onClick:function(){a?s.push("/nft/staking/".concat(t.sousId)):x(!0)},children:"View Pool"})]}),!a&&Object(p.jsx)(h.a,{visible:m,login:c,onCancel:function(){return x(!1)}})]})},O=a(906),f=a.n(O),k=a(842),v=s.a.bind(f.a);t.default=function(){var e=Object(k.c)().data;return Object(p.jsx)("div",{className:v("nft-container"),children:e.map((function(e){return Object(p.jsx)(x,{pool:e},e.sousId)}))})}},756:function(e,t,a){"use strict";t.a=a.p+"static/media/mobi.e074bf3f.png"},905:function(e,t,a){e.exports={"staking-card":"StakingCard_staking-card__3Ju3i","img-container":"StakingCard_img-container__3YRQb","progroess-info":"StakingCard_progroess-info__8FxGs","staking-content":"StakingCard_staking-content__25HLk",panel:"StakingCard_panel__2doQl",actions:"StakingCard_actions__2QnPl",progress:"StakingCard_progress__XphXK",mobile:"StakingCard_mobile__j1yfL",title:"StakingCard_title__gi6BE",pc:"StakingCard_pc__2WJj_",header:"StakingCard_header__2CmbS","header-right":"StakingCard_header-right__W2eYD"}},906:function(e,t,a){e.exports={"nft-container":"Nft_nft-container__1uG2z"}}}]);