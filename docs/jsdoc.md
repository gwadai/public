JSDoc 介紹
=========================

JSDoc 是一個 JavaScript 的 API 文檔生成器。直接將文檔註釋添加到程式碼中，與程式碼一起。JSDoc 工具 可以解析並為生成 HTML 文檔網站。  
http://www.css88.com/doc/jsdoc/tags.html  
http://www.ucamc.com/e-learning/javascript/250-javascript-use-jsdoc.html

## JSDoc 註解

JSDoc 註解一般應該放置在方法或函式聲明之前，它必須以 ` /** ` 開始，以便由 JSDoc 解析器識別。其他任何以 /*，/*** 或者超過 3 個星號的註釋都將被解析器忽略。使用特殊的 **JSDoc 標籤** 可用於提供更多資訊。

	/**
	* Book 類別，代表一個書本.
	* @constructor
	* @param {string} title - 書本的標題.
	* @param {string} author - 書本的作者.
	*/
	function Book(title, author) {
	    this.title=title;
	    this.author=author;
	}
	Book.prototype={
	    /**
	    * 獲取書本的標題
	    * @returns {string|*}
	    */
	    getTitle:function(){
	        return this.title;
	    },
	    /**
	    * 設定書本的頁數
	    * @param pageNum {number} 頁數
	    */
	    setPageNum:function(pageNum){
	        this.pageNum=pageNum;
	    }
	};


## 關於別名

JSDoc 經歷幾個版本，為考慮向後兼容，所以存在別名，也更加直觀。例 ` @param ` 有兩個別名：
1. ` @arg `
2. ` @argument `

##

JSDoc 標記		 | 語法							| 備註
---				|---							|---
@deprecated		| @deprecated 描述 				| 指定取代函式或方法。
@description	| @description 描述				| 指定函式或方法的描述。
@param			| @param {類型} 參數名稱描述	| 指定函式或方法中之參數的資訊。（TypeScript 也支援 @paramTag）
@property 		| @property {類型} 屬性名稱		| 指定欄位或物件上所定義成員的資訊，包括描述。
@returns		| @returns {類型}				| 指定傳回值。（TypeScript 請使用 @returnType）
@summary		| @summary 描述					| 指定函式或方法的描述 (與 @description 相同)。
@type			| @type {類型}					| 指定常數或變數的類型。
@typedef		| @typedef {類型} 自訂類型名稱 	| 指定自訂類型。

更多參考：http://www.css88.com/doc/jsdoc/tags.html
