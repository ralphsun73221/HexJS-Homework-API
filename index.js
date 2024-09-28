"use strict"

// JSON 檔案網址
const url = "https://shannon945.github.io/farm_produce/data.json";
const productsList = document.querySelector(".showList");
let data = [];

/** 步驟一 **/
function getData(){
//打開註解，透過底下 axios.get 撈取 url 資料
//透過 console.log 觀看是否正確撈取資料
//將撈取回來的資料賦予在變數 data 上
	axios
		.get(url)
	  .then(function (response) {
			data = response.data;
			renderData();
	  });
}
getData();

function renderData() {
 /** 步驟二 **/
//請宣告一個變數 str 並賦予值為字串型別的空字串
//請透過 data 陣列跑 forEach ，並至少帶入第一個參數

	let str = "";

/** 步驟三 **/
//以下步驟在 forEach {} 大括號內執行
//請將以下內容賦予給 str
//並依指示填入填空處
// str += `<tr>
        // <td>${請填入作物名稱}</td>
        // <td>${請填入上價}</td>
        // <td>${請填入中價}</td>
        // <td>${請填入下價}</td>
        // <td>${請填入平均價}</td>
        // <td>${請填入交易量}</td>
        // </tr>`;

        // "上價": 39.1
        // ​​
        // "下價": 17.4
        // ​​
        // "中價": 21.1
        // ​​
        // "交易日期": "110.08.22"
        // ​​
        // "交易量": 989
        // ​​
        // "作物代號": "11"
        // ​​
        // "作物名稱": "椰子"
        // ​​
        // "市場代號": "104"
        // ​​
        // "市場名稱": "台北二"
        // ​​
        // "平均價": 23.9
        // ​​
        // "種類代碼": "N05"        
        

  data.forEach(i => {
	 	str += `<tr>
	           <td>${i.作物名稱}</td>
	           <td>${i.上價}</td>
	           <td>${i.中價}</td>
	           <td>${i.下價}</td>
	           <td>${i.平均價}</td>
	           <td>${i.交易量}</td>
	          </tr>`;
  })
  
/*＊ 步驟四 **/
//以下步驟在 forEach {} 大括號外執行
//請透過 innerHTML 給 productsList 變數賦予值
//該值為變數 str
	
	productsList.innerHTML = str;
	
}

/*＊ 步驟五 **/
//請在正確的位置呼叫 renderData() (請留意非同步)