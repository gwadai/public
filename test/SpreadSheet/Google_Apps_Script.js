
/**
 * 以下是寫入 Google 試算表的程式，寫在 Google Apps Script 中
 */

var ss = SpreadsheetApp.getActiveSpreadsheet(),
	dataSheet = ss.getSheetByName("dataSheet"); // 改成你的工作表名稱

function doPost(e) {
	var para = e.parameter, // 存放 post 所有傳送的參數
		method = para.method;

	if (method == "write") {
		writeData(para);
	}
	if (method == "read") {
		// 這裡放讀取資料的語法 下一篇說明
	}

}

function doGet(e) {
	return "hello!";
}

function writeData(para) {
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



/**
 * 以下是找到的網路範例，用在客戶端中
 */

function doGet(e) { // change to doPost(e) if you are recieving POST data
	var ss = SpreadsheetApp.openById(ScriptProperties.getProperty('active'));
	var sheet = ss.getSheetByName("DATA");
	var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]; //read headers
	var nextRow = sheet.getLastRow(); // get next row
	var cell = sheet.getRange('a1');
	var col = 0;
	for (i in headers) { // loop through the headers and if a parameter name matches the header name insert the value
		if (headers[i] == "Timestamp") {
			val = new Date();
		} else {
			val = e.parameter[headers[i]];
		}
		cell.offset(nextRow, col).setValue(val);
		col++;
	}
	//http://www.google.com/support/forum/p/apps-script/thread?tid=04d9d3d4922b8bfb&hl=en
	var app = UiApp.createApplication(); // included this part for debugging so you can see what data is coming in
	var panel = app.createVerticalPanel();
	for (p in e.parameters) {
		panel.add(app.createLabel(p + " " + e.parameters[p]));
	}
	app.add(panel);
	return app;
}
//http://www.google.sc/support/forum/p/apps-script/thread?tid=345591f349a25cb4&hl=en
function setUp() {
	ScriptProperties.setProperty('active', SpreadsheetApp.getActiveSpreadsheet().getId());
}





