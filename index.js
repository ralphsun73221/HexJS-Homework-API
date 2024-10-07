"use strict"

// JSON 檔案網址
const URL = "https://shannon945.github.io/farm_produce/data.json";

const PRODUCTS_LIST = document.querySelector(".showList");
const BUTTON_GROUP = document.querySelector(".button-group");
const BUTTON_SEARCH = document.querySelector(".search-group");
const SEARCH_INPUT = BUTTON_SEARCH.querySelector("INPUT");
const SELECT = document.querySelector("#js-select");
const SELECT_MOBILE = document.querySelector("#js-moblie-select");
const SORT = document.querySelector(".js-sort-advanced");

let data = []; // 初始化陣列
getData(); // 執行取得資料 function

/* Event */
// tab
BUTTON_GROUP.addEventListener("click", e => {
	if (e.target.nodeName === "BUTTON") {
		let tab = document.querySelectorAll(".button-group button");
		tab.forEach(i => {
			i.classList.remove("active")
		}); // 刪除全部 button class 裡面的 active
		let type = e.target.dataset.type; // 取得 button 的 data-type value
		dataFilter(e, `${type}`); // 將 e 以及取得的 value 代入，type 為字串
	};
});

// search
BUTTON_SEARCH.addEventListener("click", e => {
	let FILTER_INPUT = BUTTON_SEARCH.querySelector("INPUT");
	if (e.target.nodeName === "BUTTON") {
		if (FILTER_INPUT.value === "") {
			alert("請輸入作物名稱！");
			return;
		} else {
			let filterData = [];
			filterData = data.filter(i => {
				return i.作物名稱.match(FILTER_INPUT.value);
			});
			if(filterData.length === 0) {
				PRODUCTS_LIST.innerHTML = `<tr><td colspan="6" class="text-center p-3">查詢不到交易資訊 QQ</td></tr>`;
				return
			}
			renderData(filterData);
		};
	};
});

// search input
SEARCH_INPUT.addEventListener("keydown", e => {
	if (e.code !== "Enter") {
		return;
	};
	checkInput();
});

// select
SELECT.addEventListener("change", e => {
	sort(e);
});

SELECT_MOBILE.addEventListener("change", e => {
	sort(e);
});

// sort
SORT.addEventListener("click", e => {
	if(e.target.nodeName === "I"){
		let sortPrice = e.target.dataset.price;
		let sortCaret = e.target.dataset.sort;
		if(sortCaret === "up") {
			data.sort((a, b) => b[sortPrice] - a[sortPrice])
		} else {
			data.sort((a, b) => a[sortPrice] - b[sortPrice])
		}
	}
	renderData(data);
})

/* fuctions */
// 排序資料
function sort(e){
	switch (e.target.value) {
		case "依上價排序":
			selectChange("上價");
			break;
		case "依中價排序":
			selectChange("中價");
			break;
		case "依下價排序":
			selectChange("下價");
			break;
		case "依平均價排序":
			selectChange("平均價");
			break;
		case "依交易量排序":
			selectChange("交易量");
			break;
		default:
			getData();
			break;
	};
	function selectChange(value) {
		data.sort((a, b) => a[value] - b[value])
	};
	renderData(data);
}

// 取得資料
function getData(){
	axios
		.get(URL)
	  .then(function (response) {
			data = response.data;
			renderData(data);
	  });
};

// 檢查 input 是否為空值
function checkInput() {
	if(SEARCH_INPUT.value === "") {
		alert("請輸入作物名稱！");
		return;
	};
};

// 算繪資料
function renderData(showData) {
	let str = "";

	showData.forEach(i => {
		str += `<tr>
	          	<td>${i.作物名稱}</td>
	          	<td>${i.市場名稱}</td>
	            <td>${i.上價}</td>
	            <td>${i.中價}</td>
	            <td>${i.下價}</td>
	            <td>${i.平均價}</td>
	            <td>${i.交易量}</td>
	          </tr>`;
	});

	PRODUCTS_LIST.innerHTML = str;
};

// 過濾資料
function dataFilter(e, type){
	let filterDate = [];
	if(type === "N00") {
		e.target.classList.add("active");
		getData();
	} else {
  	filterDate = data.filter(i => {
			return i.種類代碼 === type;
		});
		e.target.classList.add("active");
	}

	renderData(filterDate);
};
