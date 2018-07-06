
Visual Studio Code 常用快捷鍵
============================

[※ **新功能摘要**](#新功能記錄備忘)


## 一般

1. 執行命令： ` Ctrl+Shift+P ` ／ ` F1 ` 
2. 選取檔案： ` Ctrl+P `
	>#### 在 ` Ctrl+P ` 命令列中   
	> ` ? ` ：列出當前可執行的動作  
	> ` ! ` ：顯示 Errors 或 Warnings，也可以 ` Ctrl+Shift+M `  
	>  ` : ` ：跳轉到行數  
	> ` @ ` ：跳轉到 symbol（搜索變數／函式／markdown 標題），也可以 ` Ctrl+Shift+O `  
	> ` # `：根據名字查找 symbol，也可以 ` Ctrl+T `

3. 使用者設定： ` Ctrl+, ` 
4. 鍵盤快捷鍵： ` Ctrl+K Ctrl+S ` 
5. 在搜尋欄位中向前／向後導航： ` Alt+↑ `／` Alt+↓ ` 
6. 輸入 ` /** ` 自動幫函數產生 [JSDoc](jsdoc.md)。
7. 快速經由 id 或 class name 瀏覽 DOM 節點： ` Ctrl+Shift+O `


## 基本編輯

### 整行的處理

1. 剪下整行（未選取時）： ` Ctrl+X ` 
2. 複製整行（未選取時）： ` Ctrl+C ` 
3. 刪除整行： ` Ctrl+Shift+K ` 
4. 在**下／上**方**插入**一行（滑鼠在任何處皆可）： ` Ctrl+Enter `／` Ctrl+Shift+Enter `
5. 將整行**下／上**移： ` Alt+↓ `／` Alt+↑ `
6. 整行往**下／上**複製： ` Shift+Alt+↓ `／` Shift+Alt+↑ `


### 選取與多游標

#### 選取範圍變動

1. 將下一個搜尋結果加到選取範圍中： ` Ctrl+D ` 
2. 選取所有相同字串並在其後加上游標： ` Ctrl+Shift+L ` 
3. 選取「目前單字」的所有結果： ` Ctrl+F2 ` 
4. 移動最後的選取到下一個搜尋結果： ` Ctrl+K Ctrl+D ` 
5. **擴展選取範圍（單字、引號、括號內）：** ` Ctrl+G ` （**_自定義_**）
6. **取消擴展選取範圍（單字、引號、括號內）：** ` Ctrl+Shift+G ` （**_自定義_**）
7. **選取垂直方向的欄範圍：** ` Shift+Alt+拖曳 ` 
8. 塊狀選取： ` Ctrl+Shift+Alt+方向鍵 ` 或 ` Shift+Alt+滑鼠選取 ` 

#### 游標

1. 復原上一次的游標操作： ` Ctrl+U ` 
2. 在多重選取的尾端插入游標： ` Shift+Alt+I ` 
3. 跳到對應的括號處： ` Ctrl+Shift+\ ` 
4. **在任意處新增游標：** ` Alt+Click ` 
5. 快速移動游標（**_New_**)

	> 移到單字**起始／結束**位置： ` Ctrl+ ← `／` Ctrl+ → `  
	> 上述搭配 ` Shift ` 可選取  
	> 刪除到單字開頭： ` Ctrl+Backspace `  
	> 刪除到單字結尾： ` Ctrl+Delete `


#### 與行有關

1. 選取整行： ` Ctrl+I ` 
2. 在**下／上**方插入游標： ` Ctrl+Alt+↓ `／` Ctrl+Alt+↑ `
3. 整行往**右／左**縮排： ` Ctrl+] `／` Ctrl+[ `
4. 往**下／上**捲動一行： ` Ctrl+↓ `／` Ctrl+↑ `


### 摺疊

1. **折疊／展開**游標所在區塊： ` Ctrl+Shift+[ `／` Ctrl+Shift+] `
2. **折疊／展開**所有子區塊： ` Ctrl+K Ctrl+[ `／` Ctrl+K Ctrl+] `
3. **折疊／展開**所有區塊： ` Ctrl+K Ctrl+0 `／` Ctrl+K Ctrl+J `


## 註解

1. 加入行註解： ` Ctrl+Q ` （**_自定義_**）
2. 切換（加入／取消）行註解： ` Ctrl+/ ` 
3. 切換（加入／取消）區塊註解： ` Ctrl+Shift+Q ` （**_自定義_**）
4. 取消行註解： ` Ctrl+Shift+Alt+Q ` （**_自定義_**）


## 尋找與取代

1. 尋找： ` Ctrl+F `  
2. 取代： ` Ctrl+H `  
3. 尋找下一個： ` F3 `  
4. 尋找前一個： ` Shift+F3 `  
5. 選取全部找到的結果： ` Alt+Enter `  
6. 切換搜尋條件 
	
	> 區分大小寫： ` Alt+C `  
	> 使用規則運算式： ` Alt+R `  
	> 限定符合整個單字： ` Alt+W ` 

7. 專案全域搜尋的**下／上**一個項目： ` F4 `／` Shift+F4 ` 



## 語言編輯

1. 觸發程式碼建議： ` Ctrl+Space ` 
2. 觸發參數提示： ` Ctrl+Shift+Space ` 
3. 格式化程式碼： ` Shift+Alt+F ` 
4. 前往定義： ` F12 ` 
5. 查看定義： ` Alt+F12 ` 
6. 在側邊開啟定義： ` Ctrl+K F12 ` 
7. 快速修復： ` Ctrl+. ` 
8. 顯示參考： ` Shift+F12 ` 
9. 重新命名符號： ` F2 ` 
10. **設定文件語言：** ` Ctrl+K M `
11. **修剪整份文件的尾端空白：** ` Ctrl+K Ctrl+X ` 
12. 快速跳到專案中下一個錯誤／警告的程式碼： ` F8 ` 


## 編輯器／視窗管理

> 1. VS Code 以資料夾為基礎，但若開啟的資料夾含有常見專案檔，
>    如 package.json, project.json, tsconfig.json 等，會提供額外功能。
> 2. 編輯器格狀編排，「檢視」功能表有「Editor Layout」可供切換。（**_v1.25 new_**）  
>    可垂直／水平分割，數量無限。現在可用 **_滑鼠拖曳_** 來分割畫面。  
>    按住 Alt 用滑鼠點選目前編輯區右上角的「分割編輯器」，會提示分割到另一個方向。

1. 關閉編輯器視窗： ` Ctrl+W ` 
2. 關閉資料夾： ` Ctrl+K F ` 
3. 分割編輯器視窗： ` Ctrl+\ ` 
4. 切換焦點到編輯器群組 1／2／3／4： ` Ctrl+1 / 2 / 3 / 4 ` 
5. 切換焦點到**上／下**一個編輯器群組： ` Ctrl+K Ctrl+ ← / → ` 
6. 將編輯器視窗**左／右**移動： ` Ctrl+Shift+PgUp / PgDn ` 
7. 移動作用中的視窗群組： ` Ctrl+K ← / → ` 
8. 開啟 Markdown 文件的預覽視窗： ` Ctrl+Shift+V ` 
9. 開啟／關閉終端機： Ctrl+`
10. 檔案總管打開當前文件所在目錄： ` Ctrl+O ` 
11. 無干擾模式－除編輯器外隱藏其他 UI： ` Ctrl+K Z `
12. 搜索當前工作空間中所有 Markdown 文件的標題： ` Ctrl+T ` 
13. 開啟之前開啟過的其他工作區： ` Ctrl+R ` 


## 檔案管理

1. 一般常用： ` Ctrl+N `／` Ctrl+O `／` Ctrl+S `／` Ctrl+Shift+S ` 
2. 全部關閉： ` Ctrl+K Ctrl+W ` 
3. **重新開啟關閉的編輯器視窗：** ` Ctrl+Shift+T ` 
4. 開啟**下／上**一個檔案： ` Ctrl+Tab `／` Ctrl+Shift+Tab ` 
5. 將檔案開啟到新的編輯器群組： ` Alt+點搫 ` 
6. 開啟檔案檔案總管：在檔案或資料夾按右鍵，執行「在檔案總管中顯示」。


## 顯示

1. 全屏：` F11 `
2. zoomIn / zoomOut： ` Ctrl+ `／` Ctrl- `
3. 側邊欄： ` Ctrl+B `
4. 資源管理器： ` Ctrl+Shift+E `
5. 全域搜索： ` Ctrl+Shift+F `
6. Git： ` Ctrl+Shift+G `
7. Debug： ` Ctrl+Shift+D `
8. Output： ` Ctrl+Shift+U `


新功能記錄備忘
============================
（僅部分摘要）

## version 1.25 (2018/7)
1. 編輯器格狀編排，「檢視」功能表有「Editor Layout」可供切換。
	> 可垂直／水平分割，數量無限。現在可用 **_滑鼠拖曳_** 來分割畫面。  
	> 按住 Alt 用滑鼠點選目前編輯區右上角的「分割編輯器」，會提示分割到另一個方向。
2. 大綱檢視－預設啟用。
	> 可：指定排序方式／追踪游標／顯示錯誤和警告  
	> 在大綱上雙擊，即可跳到文件中指定位置。
3. 支援可攜式模式：https://code.visualstudio.com/docs/editor/portable
4. 支援 sub-word 移動和選取（駝峰命名和底線 ` _ ` 處）。
	>  ` Ctrl+Alt+ → `／` Ctrl+Alt+ ← `：移動游標（但目前和移動編輯器視窗到左／右有衝突）  
	>  ` Ctrl+Shift+Alt+ → `／` Ctrl+Shift+Alt+ ← `：選取  
	>  ` Ctrl+Alt+Backspace `：刪除左側 sub-word
5. 程式碼片段占位符轉換
	> 語法：` ${int/regex/format_string/opts} `  
	```
	"HelloWorld": {
  	    "prefix": "say_hello",
  	    "body": "${1} ${2} -> ${1/Hello/Hallo/} ${2/World/Welt/}"
	}
	```
6. Extension 已依照：**已安裝／推薦／停用**來排序。
	> 過多的推薦 Extension 會干擾，現在可打開詳細內容頁後，點擊「**Ignore Recommendation**」。

## version 1.24 (2018/5)
1. 未使用的變數在 JavaScript / TypeScript 文件中變灰。
2. 移至新檔案以重構 - 輕鬆地將類別和函數拉到屬於自己的檔案。
3. 移動／重命名時自動更新 JavaScript / TypeScript 的導入路徑。
4. ` Ctrl+P ` 新命令：**新視窗中的重覆工作區**－在新視窗中複製工作區。


參考資料備份
==============================

* 初學者都該學會的 Git 版控技巧：Visual Studio Code 篇   
   https://www.slideshare.net/WillHuangTW/visual-studio-code-git-for-beginners












