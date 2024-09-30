# JavaScript 必修篇 - 前端修練全攻略最終 Homework：蔬菜比價網

## Journal

### 0928 資料介接

- 完成 [API](https://hackmd.io/@w4wBc9wkR4CvPsIeEWiLbg/S1XivuMAu/%2FQpqZIiuoQbKqGmFAYZ7oHw) 介接

### 0930 資料篩選

- 還是卡在同樣的地方，也就是切換 tab 的時候只有點擊到的 button 會加入 active
- 這邊的解法跟之前做 todo 的邏輯一樣，就是事先把所有的 active 都移除，然後重新加到被點擊的 button
- 結果仔細看才發現，其實方法都一樣，先綁定 tab 的元素，然後使用 forEach 搭配 classList.remove 一次刪除
- 只是我是把綁定放在 function 外面，而老師是放在裡面
- 但總之這個[部分](https://hackmd.io/@w4wBc9wkR4CvPsIeEWiLbg/S1XivuMAu/%2FUDrIpNeZRz6Zax_Mt384uQ)也完成了