<template>
  <div class="home">
    <home-welcome :welcomeContent="welcomeContent"></home-welcome>
    <home-ads :adContent="adContent"></home-ads>
    <home-meet :meetContent="meetContent"></home-meet>
    <home-explore :exploreContent="exploreContent"></home-explore>
    <home-share :shareContent="shareContent"></home-share>
    <home-feature :featureContent="featureContent"></home-feature>
    <home-daily :dailyContent="dailyContent"></home-daily>
    <home-map :mapContent="mapContent"></home-map>
  </div>
</template>

<script>
// components
import homeWelcome from "../../components/home/welcome/Welcome";
import homeAds from "../../components/home/ads/Ad";
import homeMeet from "../../components/home/meet/Meet";
import homeExplore from "../../components/home/explore/Explore";
import homeShare from "../../components/home/share/Share";
import homeFeature from "../../components/home/feature/Feature";
import homeDaily from "../../components/home/daily/Daily";
import homeMap from "../../components/home/map/Map";

// images
import ad_01 from "../../assets/images/home_ad_01.jpg";
import ad_02 from "../../assets/images/home_ad_02.jpg";
import meet_01 from "../../assets/images/meet_img_01.png";
import explore_01 from "../../assets//images/explore_img_01.png";
import explore_02 from "../../assets//images/explore_img_02.png";
import explore_03 from "../../assets//images/explore_img_03.png";
import share_drink_01 from "../../assets/images/share_drink_01.jpg";
import share_drink_02 from "../../assets/images/share_drink_02.jpg";
import share_drink_03 from "../../assets/images/share_drink_03.jpg";
import feature_intro_01 from "../../assets/images/feature_intro_01.jpg";
import feature_intro_02 from "../../assets/images/feature_intro_02.jpg";
import feature_intro_03 from "../../assets/images/feature_intro_03.jpg";
import daily_icon_01 from "../../assets/images/daily_icon_01.png";
import daily_icon_02 from "../../assets/images/daily_icon_02.png";
import daily_icon_03 from "../../assets/images/daily_icon_03.png";
import daily_sign from "../../assets/images/daily_sign.png";

export default {
  name: "home",
  data() {
    return {
      welcomeContent: {},
      adContent: [
        {
          imgLink: ad_01,
          title: "茶湯會新增「TP餅」販售店家！",
          text:
            "最受歡迎的珍奶料理－TP餅，五種鹹甜口味老少咸宜，將在更多店家與您相見～"
        },
        {
          imgLink: ad_02,
          title: "茶湯會│Uber 特別合作",
          text: "2019/10/14-11/10期間雙重奏帶您搭Uber享優惠～"
        }
      ],
      meetContent: {
        meetIntro: {
          introTitle: {
            big: "相遇篇",
            small: "一杯茶，怎樣才叫好",
            english: "Creativity<br>Revolution of Tea"
          },
          introText: {
            title: "一杯幸福茶 一份人情味。",
            text:
              "這是茶湯會的訴求與期望，不僅可以喝到幸福茶，更要讓真心調和推往更遠的各地，讓幸福的茶品讓更多人回甘。秉持著「以茶會友」的本念啟動了茶湯會。理想與熱情之外，為了滿足我們的「不滿足」，大膽的踏出縝密的每一步，希望可以更包容、更創新，顛覆千年的飲茶方式，承續限有的模式，更廣也更深入將熱茶冷飲風潮延伸下去！"
          }
        },
        meetImg: {
          img: meet_01
        }
      },
      exploreContent: {
        exploreTitle: {
          big: "調和篇",
          small: "貼近生活的調茶藝術",
          english: "Creativity Revolution of Tea"
        },
        exploreIntro: [
          {
            img: explore_01,
            titleBig: "茶",
            titleSmall: "與茶",
            text:
              "掌握各式各樣茶葉的特性與不同的調泡方式，依各自獨特的風味，搭配精心嚴選的配料食材，調泡出獨家特色商品"
          },
          {
            img: explore_02,
            titleBig: "茶",
            titleSmall: "與人",
            text:
              "重視員工成長教育，規畫調茶評鑑、口語禮儀等專業訓練課程，並不定期安排主題講座，建立全方位的人文環境，期許員工一同成長前進"
          },
          {
            img: explore_03,
            titleBig: "人",
            titleSmall: "與人",
            text:
              "以茶會友，伴隨著親切招呼的互動，雙手奉上一杯幸福茶，讓茶友們每一口回甘，喝到的是滿滿的人情味"
          }
        ],
        exploreAni: {
          aniLink: ""
        }
      },
      shareContent: {
        introContent: {
          introTitle: {
            big: "分享篇",
            small: "品嘗美好幸福的起點",
            english: "Creativity<br>Revolution of Tea"
          },
          introText: {
            title: "重新認識 什麼是「茶」。",
            text:
              "三十年茶湯硬底子，品選茶葉真功夫。堅持卓越的信念，為您真心做到最好。提供最創新、純粹、優質的用心好茶，感動每~個品嘗的味蕾。「好茶不需濃妝豔抹。」每一杯茶飲研發都融入了多年調茶專業的判斷，每一步驟都經過嚴格的重重把關，每一口都感受的到濃濃的人情溫度。",
            button: "查看飲品菜單"
          }
        },
        imgContent: {
          imgList: [
            { imgLink: share_drink_01 },
            { imgLink: share_drink_02 },
            { imgLink: share_drink_03 }
          ]
        }
      },
      featureContent: {
        featureList: [
          {
            img: feature_intro_01,
            intro: {
              title: {
                big: "好茶",
                small: "嚴格把關每一道工序"
              },
              context:
                "從產地到製程，嚴格把關每一道工序，並細心選用各式各樣的茶葉品種，充分掌握其特性與適當的調泡手法，搭配多樣百變的配料食材，凸顯不同茶品其獨特的口感香氣，調泡出獨家特色商品。",
              button: "了解更多"
            }
          },
          {
            img: feature_intro_02,
            intro: {
              title: {
                big: "人情",
                small: "一期一會的真誠感動"
              },
              context:
                "茶湯會用心接承這一份以茶遞情的美好，嚴選每一款好茶，堅持每一杯現調。在競爭激烈、千變萬化的外帶茶飲市場中，始終秉持以真心調和令人回甘的幸福茶。",
              button: "了解更多"
            }
          },
          {
            img: feature_intro_03,
            intro: {
              title: {
                big: "職人",
                small: "專業判斷 精準調控"
              },
              context:
                "每款幸福上癮的好茶，由歷經數十年調茶經驗的研發團隊專業判斷、反覆測試，精準調控比例的穠纖合度，完美襯托茶感的迷人風味，成就無可取代的好茶滋味。",
              button: "了解更多"
            }
          }
        ]
      },
      dailyContent: {
        dailyIntro: {
          introTitle: {
            english: "Creativity<br>Revolution of Tea",
            small: "享受你我的飲茶日常",
            big: "日常篇"
          },
          introInfo: [
            {
              title: "會員集點優惠",
              imgUrl: daily_icon_01,
              content: "1點折抵現金1元，<br>不限杯數、金額皆可折。"
            },
            {
              title: "網路登錄註冊",
              imgUrl: daily_icon_02,
              content: "享即時線上點數查詢、<br>掛失點數轉移之消費保障。"
            },
            {
              title: "入會好禮",
              imgUrl: daily_icon_03,
              content: "好禮優惠不定期更新。"
            }
          ],
          introButton: {
            register: "註冊會員",
            login: "會員登入"
          }
        },
        dailyImg: {
          imgUrl: daily_sign
        }
      },
      mapContent: {
        mapTitle: {
          english: "Creativity<br>Revolution of Tea",
          small: "引領世界茶飲風潮",
          big: "久等了<br>與世界分享"
        },
        mapIntro: {
          content:
            "茶湯會將迎向全球市場，跨足海外。於2016年香港插旗展店，獲得各方好評，2017年前進上海，踏入華東地區，2018年拓展到新加坡、越南和北加州地區，未來將逐步擴展至東南亞、東北亞市場，讓茶湯會飲品深入世界的每一個角落。"
        },
        mapButton: {
          search: "尋找門市",
          join: "加入我們"
        }
      }
    };
  },
  components: {
    "home-welcome": homeWelcome,
    "home-ads": homeAds,
    "home-meet": homeMeet,
    "home-explore": homeExplore,
    "home-share": homeShare,
    "home-feature": homeFeature,
    "home-daily": homeDaily,
    "home-map": homeMap
  }
};
</script>
