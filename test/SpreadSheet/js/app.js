$.ajax({
	type: "post",
	data: {
		"method": "write",
		"name": "gwadai 2",
		"sex": "male",
		"group": "Tenor",
		"email": "gwadai@test.com",			
		"remark": "從網頁測試寫入功能"
	},
	url: "https://script.google.com/macros/s/AKfycbzJ_xqUG04ED8eUwjfj5u-iffYvXXBiGWlr8hwE2nhAYTiYqp4L/exec" // 填入網路應用程式網址
});