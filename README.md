# self-tea 前後端全步驟 // 記得增加nodemon 的dependency

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
### 1.創建基礎介面
```
  1.創建main 的children vue檔案
  2.創建header 和 footer
  3.將header和footer加入main
  4.在header裡面加入所需nav (routerLink)
  5.在footer 加入一些字
```
### 2.創建responsity
```
  1.用gitKraken 或是 直接重gitHub 上創建
  2.設定GitHub page (很重要!!!!!)
```
### 3.build 專案
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
    2.設置行高
    3.設置常用字體
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
  1.定義 display
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

### 4.製作header(這邊只做routerlink介紹)
```
  1.先加入所需要的view(在view資料夾裡)
  2.在router.js做path添加(看要children 還是.....)
  3.在header 裡添加router-link
  4.用to="/" 之類的去更換router-view
  5.可以把title 和 menu 分開(程式碼優化)
```

### 4.製作home的swiper
```
  1.npm install vue-awesome-swiper --save
  2.import VueAwesomeSwiper from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    Vue.use(VueAwesomeSwiper, /* { default global options } */)
  3.使用
  4.可以把swiper 和 menu 分開(程式碼優化)
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
