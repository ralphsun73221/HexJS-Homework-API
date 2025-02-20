# JavaScript 必修篇 - 前端修練全攻略最終 Homework：蔬菜比價網

## Journal

### 0928 資料介接

 - [作業細節](https://hackmd.io/@w4wBc9wkR4CvPsIeEWiLbg/S1XivuMAu/%2FQpqZIiuoQbKqGmFAYZ7oHw)
 - 完成

### 0930

#### 資料篩選

 - [作業細節](https://hackmd.io/@w4wBc9wkR4CvPsIeEWiLbg/S1XivuMAu/%2FUDrIpNeZRz6Zax_Mt384uQ)
 - 還是卡在同樣的地方，也就是切換 tab 的時候只有點擊到的 button 會加入 active
 - 這邊的解法跟之前做 todo 的邏輯一樣，就是事先把所有的 active 都移除，然後重新加到被點擊的 button
 - 結果仔細看才發現，其實方法都一樣，先綁定 tab 的元素，然後使用 forEach 搭配 classList.remove 一次刪除
 - 只是我是把綁定放在 function 外面，而老師是放在裡面
 - 但總之這個部分也完成了

#### 資料搜尋

 - [作業細節](https://hackmd.io/@w4wBc9wkR4CvPsIeEWiLbg/S1XivuMAu/%2FqywznB85Q5qkhCcwyWTiGg)
 - 完成，但是一時間不知道要如何消除 input 裡面的 value，有參考之前 todo，但是不確定卡在那裡🫠

### 1002

#### 進階資料排序

 - [作業細節](https://hackmd.io/@w4wBc9wkR4CvPsIeEWiLbg/S1XivuMAu/%2FXuv_Ra75TCqFV2gk0vAMkg)
 - 進階排序完成
 - 但還有幾個我認為可以更好的地方：
   1. 排序曬選會根據目前種類來排，而不是每次都用全部的資料
	 2. 價格排序也是可以根據目前的資料來排，而不是顯示全部的資料

### 1007

 - 搜尋欄現在可以使用鍵盤送出字串
 - 增加全部 tab
 - 修正之前資料沒有顯示**市場名稱**
 - 修正 Mobile 無法排序
 - push 完才發現 input 的地方有遺漏掉...

### 1012

- 助教提了幾個建議調整的點
  - 可以在當前 tab 上增添 active 樣式～
  - 電腦與行動版的下拉選單 value 需一同變動
  - 通常 function 命名都會是動詞開頭，dataFilter 命名建議改成 filterData
  
- 不過第二點我有做，只是不知道為何那個效果沒有出來...
- 後來發現因為 CSS 的引入順序導致有些效果無法出來，要先載入 Bootstrap 的 CSS，然後再引入自己的才能覆蓋
- 之後再來處理第二點

### 1025
- 終究還是要回來面對這邊的東西
- 終於解決了
- 其實解法一如既往的簡單：**如果要讓兩邊的 value 一樣，那就把 A 的 value 傳遞給 B 不就好了？**
  1. 首先就是把 index.html 那邊的 `js-mobile-select` 裡面的 `option` 加上 `value` 這個 property
  2. sort 裡面加入 `let select`，把 `SELECT` 的 `e.target.value` 賦值過去
  3. 將 `select` 賦值給 `SELECT_MOBILE.value`
  4. 反過來其實也一樣，只不過 `SELECT_MOBILE.value` 改成 `SELECT.value`
  5. 所以兩個都加就可以同步了