/* $.ajax({
	type: "post",
	data: {
		"method": "write",
		"name": "gwadaiLiu",
		"sex": "male",
		"group": "Tenor",
		"email": "gwadai@test.com",			
		"remark": "從網頁--測試寫入功能",
	},
	url: "https://script.google.com/macros/s/AKfycbzJ_xqUG04ED8eUwjfj5u-iffYvXXBiGWlr8hwE2nhAYTiYqp4L/exec" // 填入網路應用程式網址
}); */


jQuery.post(
	"https://script.google.com/macros/s/AKfycbzJ_xqUG04ED8eUwjfj5u-iffYvXXBiGWlr8hwE2nhAYTiYqp4L/exec",
	{
		"method": "write",
		"name": "gwadaiLiu",
		"sex": "male",
		"group": "Tenor",
		"email": "gwadai@test.com",			
		"remark": "從網頁--測試寫入功能",
	},
	function(data, textStatus, jqXHR){
		console.log(data);
		console.log(textStatus);		
	},
	"json"
);