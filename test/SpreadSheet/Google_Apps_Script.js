
/**
 * 以下是寫入 Google 試算表的程式，寫在 Google Apps Script 中
 */

var ss = SpreadsheetApp.getActiveSpreadsheet(),
	dataSheet = ss.getSheetByName("dataSheet"); // 改成你的工作表名稱

function doPost(e) {
	var para = e.parameter, // 存放 post 所有傳送的參數
		method = para.method;

	if (method == "write") {
		write_data(para);
	}
	if (method == "read") {
		// 這裡放讀取資料的語法 下一篇說明
	}

}

function doGet(e) {
	return "hello!";
}

function write_data(para) {
	var name = para.name,
		sex = para.sex,
		group = para.group,
		email = para.email,
		remark = para.remark;

	dataSheet.appendRow([name, sex, group, email, remark]); // 插入一列新的資料 
}

function test() {
	var e = {
		parameter: {
			"method": "write",
			"name": "gwadai",
			"sex": "male",
			"group": "Tenor",
			"email": "gwadai@test.com",
			"remark": "測試寫入功能"
		}
	}
	doPost(e);
}