# Markdown 快速參考

這是一個 Markdown 文件的語法快速參考。可在 GitHub 使用的 Markdown 語法可參考：
https://help.github.com/articles/basic-writing-and-formatting-syntax/

## Markdown 是什麼

Markdown 是一種輕量級標記式語言，它允許人們使用易讀易寫的純文字格式編寫文件，然後轉換成有效的 **HTML 文件**。John Gruber 在 2004 年創造了 Markdown 語言，其中最重要的設計是可讀性，也就是說這個語言應該要能直接在字面上被閱讀，而不用加上一些不利人類閱讀的 HTML 標記。（[維基百科](https://zh.wikipedia.org/wiki/Markdown)）

## 編輯器

可以使用最簡單的「記事本」，但建議使用「[Visual Studio Code](https://code.visualstudio.com/)」。


# 語法摘要


## 標題

和一般網頁一樣，你可以使用高達 6 階的標題。要建立標題，請標題前添加 1～6 個 ` # ` 符號（後面要接一個半形空白）。使用的 # 數量將決定標題的大小。

	# H1（標題 1）
	## H2（標題 2）
	...
	###### H6（標題 6）

【顯示】

# 這是標題 1，最大的標題
## 這是標題 2，第 2 層的標題

除此之外，「標題 1」和「標題 2」也可以用另一種方式撰寫，就是在文字下方加上「===」及「---」。

	這是第 1 層標題（加 ===）
	===

	這是第 2 層標題（加 ---）
	---

【顯示】
這是第 1 層標題
===

這是第 2 層標題
---


## 一般文字

一個段落是由一個以上相連接的行句組成，
而一個以上的空行則會切分出不同的段落
（空行的定義是顯示上看起來像是空行，便會被視為空行。
比方說，若某一行只包含空白和 tab，則該行也會被視為空行），
一般的段落不需要用空白或斷行縮排。

**（以上編寫時分行，但顯示為同一段落）**

「一個以上相連接的行句組成」  
這句話其實暗示了 Markdown 允許段落內的強迫斷行，  
如果你真的想要插入 HTML 的 ` <br> ` 標籤來分行不分段，在行尾加上**兩個以上的空白**，然後按 ` enter `。


## 強調

「強調」泛指：粗體／斜體／粗斜體／刪除線。

|樣式	|語法						|範例					|輸出					|
| ----- | -----						| ----- 				| ----- 			|
|粗體	| ` ** ** ` 或 ` __ __ `	| ` **這是粗體字** `	|**這是粗體字**			|
|斜體	| ` * * ` 或 ` _ _ ` 		| ` *這是斜體字* `		| *這是斜體字*			|
|粗斜體	| ` **_   _** ` 		| ` **_這是粗斜體字_** `  | **_這是粗斜體字_**		|
|刪除線	| ` ~~  ~~ ` 		| ` ~~這是刪除線~~ `		| ~~這是刪除線~~			|


## 區塊引言

如果沒有強迫分行，只要在一行的最開頭加上 ` > `；如果有強迫分行，在每一行前面加上 ` > `。區塊引言可以有階層（例如：引言內的引言），只要根據層數加上不同數量的 ` > `。  
（註：` > ` 後面可加上一個以上的半形空白）

【顯示】

>這是引言。
>>這是引言中的引言。

引言的區塊內也可以使用其他的 Markdown 語法，包括標題、清單、程式碼區塊等：

> ## 這是標題
> 
> 1.   清單第 1 項
> 2.   清單第 2 項
> 
> 也可以加上程式碼高亮區塊：
> 
>     return shell_exec("echo $input | $markdown_script");

## 清單

### 1. 有序清單

在每個項目前面加上 ` 數字.（半形空白） `。語法：

	1. 人系工家服：那言本安引出信安關來不之有應轉師這、在心育國辦母金是值大成真多機路負長，的起覺前經運環領，就文叫愛電價的己內個引思影到般，的求務此曾生也創，向明也轉你影香狀況神，信香唱題：有其已古。
	2. 會不也……們你正始那不首用他人車。

【顯示】
1. 人系工家服：那言本安引出信安關來不之有應轉師這、在心育國辦母金是值大成真多機路負長，的起覺前經運環領，就文叫愛電價的己內個引思影到般，的求務此曾生也創，向明也轉你影香狀況神，信香唱題：有其已古。
2. 會不也……們你正始那不首用他人車。

#### 同一層清單內的縮排文字

在清單下方，要縮排的文字前方加入 2~5 個「空白」或 1 個「tab」。

	1. 這是清單  
	
		這是清單下方縮排的文字。

【顯示】
1. 這是清單

	這是清單下方縮排的文字。

		<清單中的程式碼（比所屬清單層再縮進 2 個 tab）>

### 2. 無序清單

每一個清單項目的前面加上 ` * ` 或 ` + ` 或 ` - `。（後面都接半形空白）

	* 項目 1
	* 項目 2

【顯示】
* 項目 1
* 項目 2

#### 為了純文字檔排版好看，也可以使用縮排。

清單項目標記通常是放在最左邊，也可以縮排，最多三個空白，項目標記後面則一定要接著至少一個「空白」或「tab」。要讓清單看起來更漂亮，你可以把內容用固定的縮排整理好：

	* Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
	  Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
	  viverra nec, fringilla in, laoreet vitae, risus
	* Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
	  Suspendisse id sem consectetuer libero luctus adipiscing.

【顯示】
* Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
  viverra nec, fringilla in, laoreet vitae, risus
* Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
  Suspendisse id sem consectetuer libero luctus adipiscing.

## 程式碼區塊（高亮區塊）

### 法 1：只要簡單地縮排 4 個「空白」或是 1 個「tab」。

	每一行前面都用 tab 縮排。

### 法 2：或前後用三個「反引號」（鍵盤左上角）包起來。

```
這是在文字的上下各加上三個「反引號」。
```

## 行內程式碼（高亮區塊）
如果要標記一小段行內程式碼，可以用反引號把它包起來，例如 ` Windows 鍵 `。

如果要在程式碼區段內插入反引號，可以用多個反引號來開啟和結束程式碼區段，如：

	`` ` ``

## 分隔線

你可以在一行中用**三個或以上**的**星號、減號、底線**來建立一個分隔線，行內不能有其他東西。也可以在星號中間插入空白。

	---

【顯示】

-------


## 連結

1. 基本概念

	顯示的文字放在 ` [ ] ` 中，接在後面的是一對括號 ` ( ) `，括號內放 URL。
	
2. 如果一行文字只放單純的 URL，則會直接以超連結顯示。
3. 如果希望滑鼠移過去有提示文字，在 URL 後面用「雙引號」註明。

### 一般連結

	前往 [Google](https://www.google.com) 搜尋。  
	前往 [Google](https://www.google.com "這是滑鼠提示") 搜尋。

【顯示】

前往 [Google](https://www.google.com) 搜尋。  
前往 [Google](https://www.google.com "這是滑鼠提示") 搜尋（有滑鼠提示）。

> 註：URL 可以用相對連結。  

 	[相對參考連結](doc/readme.md) 或 [相對參考連結](../doc/readme.md)

### 參考形式

	[這是一個參考連結][Arbitrary case-insensitive reference text]  
	[參考標的物也可以使用數字][1]  
	直接使用文字對應也可以 [這段文字連到參考項目]

	...
	[arbitrary case-insensitive reference text]: https://www.mozilla.org
	[1]: https://tw.yahoo.com/
	[這段文字連到參考項目]: http://www.reddit.com

【顯示】

[這是一個參考連結][Arbitrary case-insensitive reference text]  
[參考標的物也可以使用數字][1]  
直接使用文字對應也可以 [這段文字連到參考項目]

> 參考項目可以寫在文檔的最後，有點像書內的註解（註腳）。

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: https://tw.yahoo.com/
[這段文字連到參考項目]: http://www.reddit.com


## HTML
Markdown 中也可以直接用 HTML 撰寫。如：

	<table>
	  <tr>
	    <td>儲存格 1</td>
	    <td>儲存格 2</td>
	    <td>儲存格 3</td>
	  </tr>
	</table>

【顯示】
<table>
	<tr>
		<td>儲存格 1</td>
		<td>儲存格 2</td>
		<td>儲存格 3</td>
	</tr>
</table>

# 其他

## 自動連結
Markdown 支援比較簡短的自動連結形式來處理網址和電子郵件信箱，只要是用角括號包起來，Markdown 就會自動把它轉成連結。

<https://www.google.com.tw/>

## 表格
**冒號** 是用來對齊的（擺左齊左、擺右齊右，都擺就置中，沒有冒號就預設置左）。

	| 編號          | 產品        | 價格       |
	| ------------- |:-----------:| ---------:|
	| 001           | 無線鍵盤     | $1600     |
	| 002           | 筆電        | $36000     |
	| 003           | Adobe       | $20499     |

【顯示】

| 編號          | 產品            | 價格       |
| ------------- |:-------------:| ----------:|
| 001           | 無線鍵盤       | $1600      |
| 002           | 筆電          | $36000      |
| 003           | Adobe         | $20499      |

最外圍的豎線（|）不是絕對需要，表格內也可以不用空白排版。

	姓名|編號|email
	|---|---|---
	Eric Liu|001|test@gmail.com
	Sangra Hsiung|002|welcome@hinet.net

【顯示】

姓名|編號|email
|---|---|---
Eric Liu|001|test@gmail.com
Sangra Hsiung|002|welcome@hinet.net


## 特殊字元
	<：&lt;
	&：&amp;
	著作權符號：&copy;


## 圖片
很明顯地，要在純文字應用中設計一個「自然」的語法來插入圖片是有一定難度的。
Markdown 使用一種和連結很相似的語法來標記圖片，同樣也允許兩種樣式：行內和參考。

行內圖片的語法看起來像是：

![CKAC](https://gwadai.github.io/public/images/music_favicon.png "Optional title")

### 缺點
到目前為止， Markdown 還沒有辦法指定圖片的寬高，如果需要可以使用普通的 &lt;img> 標籤。
（但實測不行？？）
<img src="images/FB.png" width="778" height="778">




