/*
* 這個檔案是給 jsFiddle 載入用，代替 consol.log()
*/
function log(data){	
	$("<p>").text(JSON.stringify(data)).appendTo("#log");
}
$("#clearlog").on("click", (e)=>{ $("#log").empty() });