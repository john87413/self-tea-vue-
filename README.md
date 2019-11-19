# self-tea 前後端全步驟 // 記得增加nodemon 的dependency

### 還沒做的東西
```
  1.開場動畫 && 全不過渡動畫
  2.全部的這些要加一下 
    a title 
    img alt
  2.header
    下拉menu 
    小menu
  3.explore 要加茶的動畫
```

## step1 create gitHub(choose One)
### 1.GitKraken
```
Init gitHub responsity
```
### 2.GitHub

```
echo "# business_project" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/john87413/business_project.git
git push -u origin master
```
---
## step2 create item
### 1.create three folder
```
admin:後台管理 (Vue create admin)
  用途:管理資料庫的資料，新增改查等等
  前置作業:
  1. npm install -g @vue/cli (已安裝過就不用)
  2. Vue create admin
  3. npm i element-ui -S (如有需要用element)
     3.1 引入
         import element from 'element-ui'
         import 'element-ui/lib/theme-chalk/index.css';
         Vue.use(element);
  4. vue add router

server:前後端串聯 (mkdir server)
  用途:包含所有node.js，提供給admin && web 的所有接口
  前置作業:
    1. mkdir server
    2. npm init -y --> 初始化package.json (-y 可省略問答快速初始化)
    3. 創建入口index.js
    4. 自定義scripts --> 
      "serve": "nodemon index.js",
      "start": "nodemon index.js" (heroku用)
    5. npm i -g nodemon

web:前端網頁設計 (Vue create web)
  用途:會被瀏覽器搜尋到的頁面，手機端或電腦端
  前置作業:
  1. npm install -g @vue/cli (已安裝過就不用)
  2. Vue create web
```

### 2.gitignore
```
不能被git上去的東西
1.node_modules
```
---

## step3 上傳 gitHub 設定初步 web
### 1.加入router
```
  1.vue add router
  2.將App.vue 改成只有routerView
  3.創建Main資料夾 和Main.vue
    資料夾主要放會在Main 出現的view
    Main.vue放header && routerView && footer
  4.如果將Home 和 about 放入main 要改一下router
    和他們本身的路徑
  5.在router.js 創建Main component 
  6.加入所需要的children路徑
```
### 2.創建基礎介面
```
  1.創建main 的children vue檔案
  2.創建header 和 footer
  3.將header和footer加入main
  4.在header裡面加入所需nav (routerLink)
  5.在footer 加入一些字
```
### 3.創建responsity
```
  1.用gitKraken 或是 直接重gitHub 上創建
  2.設定GitHub page (很重要!!!!!)
```
### 4.build 專案
```
  1.建立vue.config.js
    const path = require('path');

    module.exports = {
        outputDir: path.resolve(__dirname, '../server/public'),
        publicPath: process.env.NODE_ENV === 'production'
        ? '/tea-web/'(專案名)
        : '/'
    }
  2.在要上傳的網頁 npm run build
  3.將build 好的Public內的檔案 放入剛剛創建的reponsity
  4.git add . 
    git commit -m "init"
    git push
```


---
## step4 前端工具樣式
### 1.sass-loader
```
  1.npm i -D sass sass-loader
  2.新增一個SCSS folder生出style.scss 還有 _variables.scss
  3.要用任何變量就可以直接這樣
    @import '../../assets/scss/variables.scss';
  4.在main.js improt style.scss
    import "./assets/scss/style.scss"
  5.記得每個樣式都要加點點!!!!!
```

### 2.樣式重製
```
  @import "./variables";

  全部的元素(*)
    1 .加個border-box
    2. 高亮消失(outline)
    3. margin && padding 0

  html 定義
    1.找尋出現次數最多的字體大小(font-size)
  
  body 定義
    1.設margin 0
    2.設置行高(不確定)
    3.設置常用字體
      如果要用中文 必須使用\5FAE\8EDF\6B63\9ED1\9AD4(像這樣)
    4.可以順便設置background (看設計)

  a 定義
    1.更改默認顏色
    2.text-decoration: none (看情況)
    3.cursor: pointer;(看情況)
    4.transition:  all .4s ease;

  li 定義
    1.取消默認點點
    2.float: left(看情況)
    3.cursor: pointer(看情況)

  button 定義
    1.取消默認方框
    2.border-radius: 0.5rem;(看情況)
```

### 3.定義常用flex工具
```
  1.定義display
  2.定義direction
  3.定義flex-grow
  4.定義出變量 jc && ai
  5.將變量做each 
```

### 4.定義常用margin & padding
```
  1.定義出變量 type direction size base-size
  2.size的定義就0.5加上去或更大
  3.將變量做each 定義出 .m-1 .mx-1 .mt-1
```

### 5.定義常用color
```
  1.定義出常用color
  2.將變量做each
```

### 6.定義常用font size && text align
```
  1.定義出常用font-size
  2.將變量做each
  3.each 出 text 的 靠左靠右或置中
```

### 7.定義額外常用樣式
```
  1.寬高 100%
  2.flex 要不要自動換行
  3.字體加粗
```

---
## step5 開始製作前端介面
### 1.更換logo
```
  1.將製作好的Logo 加入public 資料夾裡
  2.將原本的icon 程式碼換成
    <link rel ="shortcut icon" type="image/x-icon" href="./self-logo.png">
```

### 2.製作header(這邊只做routerlink介紹)
```
  1.先加入所需要的view(在view資料夾裡)
  2.在router.js做path添加(看要children 還是.....)
  3.在header 裡添加router-link
  4.用to="/" 之類的去更換router-view
  5.可以把title 和 menu 分開(程式碼優化)
  6.Logo.vue
    用routerLink(a) 時 外圍一定要包d-flex不然不能條大小 (不知為啥)
  7.SmallMenu.vue
    如果用height 設置auto 比較不會抖動(可能是fixed 的關係)
    a.small-menu-button(小技巧)
    a.small-menu-button.show(小技巧)
  8.MainHeader.vue
    監聽滾動 --> window.addEventListener("scroll", this.scrollListen);
    window.pageYOffset 手機電腦都通用
  9.Contact.vue
    z-index 用法小技巧 看一下IG按鈕
```

### 3.製作home的 welcome
```
  1.Welcome.vue
    外圍容器建議設置 height: XXrem;
    如果設置100vh 會造成absolute的東西超出範圍 或是 在定位上的錯位
    (參考welcome-container)
  2.IntroContent.vue
    absolute 有時可以設置%數 比較好用
  3.TopDecorate.vue
    position 一開始是 static
```

### 4.製作home的 ads
```
  1.Aditem.vue
    如過需要布局自動換行 可以設定width 100%
    再設置一些margin or padding(參考ad-container)
  2.Adintro.vue
    如果不希望它超出容器範圍或是刪除線效果 要設置overflow: hidden
    在最外圍的影響容器(參考home-ad-intro)
  3.Adintro.vue
    z-index 用法技巧
    看一下按鈕部分
  4.AdSwiper.vue
    介紹swiper 使用
    npm install vue-awesome-swiper --save
    import VueAwesomeSwiper from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    Vue.use(VueAwesomeSwiper, /* { default global options } */)
  5.AdSwiper.vue
    vue-awesome-swiper 注意事項
    最外層容器 如果要用d-flex!!!! 就要設置寬度不然會超出去
    如果想要更換點點顏色 style不要用scoped !!!!
```

### 4.製作home的 meet
```
  1.Meet.vue
    大容器設置overflow :hidden 讓圖片可以超出去
  2.MeetText.vue
    容器設置寬度或是auto (依畫面美觀)
  3.MeetImg.vue
    設置絕對位置 並設置寬度
    如果想要不會抖動 可以一直調整寬度不用百分比
```

### 5.製作home的 explore
```
  1.ExploreSwiper.vue
    swiper 外圍可以設d-flex 只是要設置寬度和高度
  2.ExploreSwiper.vue
    想要動態更改swiperOption 裡面的值 要加這兩行
      observer: true, 
      observeParents: true
    之後可以這樣取得裡面的值做更改
      let swiper = this.$refs.list.swiper;
      swiper.params.slidesPerView = 1;
```

### 6.製作home的 share
```
  1.ShareText.vue
    如果設置width: 40rem 也設置 flex-1 
    就會變成從設置的40rem 開始放大
  2.ShareTitle.vue
    設置white-space: nowrap 可以讓他不被擠壓換行
  3.ShareSwiper.vue
    手機端height: auto 失效(不知為啥) 可以改%數
```

### 7.製作home的 feature
```
  1.FeatureItem.vue
    三個方塊 內部img 設100%就可以等大
  2.FeatureIntro.vue
    如要有遮罩感可以用absolute 直接滿版
  3.FeatureIntro.vue
    標題下降效果 && 內文漸變
  4.FeatureContext.vue
    border 用法
  5.FeatureButton.vue
    偽元素不會被style.scss 的 * 影響
    需自行加入 box-sizing: border-box
  6.FeatureSwiper.vue
    要更改"底部點點"就不能設style scoped
  7.FeatureSwiper.vue
    無限循環swiper
    swiperOption: loop
  8.FeatureSwiper.vue
    動態更改 slidesPerView
    observer: true,  observeParents: true , swiper.params.slidesPerView
  9.FeatureSwiper.vue
    外圍容器要d-flex 就要設置大小
             flex-column 可以不用
             沒有d-flex 也可以不用
    
```

### 8.製作home的 daily
```
  1.Daily.vue + IntroInfo.vue
    如果裡面物件要隨寬度大小變換 外容器就要設%數
  2.Main.vue + DailyImg.vue
    可以用overflow-x:hidden 來隱藏 shadow(DailyImg.vue)
  3.IntroButton.vue
    偽元素不受 style.scss影響 記得加box-sizing: border-box;
    
```

### 9.製作home的 map
```
  1.
    
```

## END
---
## router小重點
### 父子router
```
  1.父親不要加name (有時候 還不太確定)
  2.children Path 跟父親一樣時便可以視為默認路由
```
### 默認路由
```
  {
    path: '*', 
    redirect: '/'
  },
```

---
## SCSS小重點
### 每個樣式前面都要加點!!!!
```
  不加點點你會找bug找到死
```

---
## 手機端RWD小重點
### 直接更換html的font-size樣式
```
  @media all and (max-width: 500px) {
    html {
        font-size: 13px;(大小自行斟酌)
    }
  }
```
### fixed 在手機會受到影響
```
  1. 網址欄位會卡卡的
  2. 可能會多出一個空白
  結論:
  1. 盡量別在手機端用fixed
```

### 程式碼小重點
```
  1. class bind
    :class="{ show: isShow }"
  2. 簡寫 if else
    isShow=(isShow === false)?true:false;
  3. JS 監聽滾動
    window.addEventListener("scroll", this.scrollListen);
  4. JS 監聽放大縮小
    window.addEventListener("resize", this.setOpenLeft);
  5. JS 拿到滾動Top
    document.documentElement.scrollTop 
  6. class name 注意"ad"
    如果寫一寫發現突然display: none 可以換一下class Name
```
