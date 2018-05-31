
Visual Studio Code 常用快捷鍵
==========================

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
2. 選取「目前選取」的所有結果： ` Ctrl+Shift+L ` 
3. 選取「目前單字」的所有結果： ` Ctrl+F2 ` 
4. 移動最後的選取到下一個搜尋結果： ` Ctrl+K Ctrl+D ` 
5. **擴展選取範圍（單字、引號、括號內）：** ` Ctrl+G ` （自定義）
6. **取消擴展選取範圍（單字、引號、括號內）：** ` Ctrl+Shift+G ` （自定義）
7. **選取垂直方向的欄範圍：** ` Shift+Alt+拖曳 ` 

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

1. 加入行註解： ` Ctrl+Q ` （自定義）
2. 切換（加入／取消）行註解： ` Ctrl+/ ` 
3. 切換（加入／取消）區塊註解： ` Ctrl+Shift+Q ` （自定義）
4. 取消行註解： ` Ctrl+Shift+Alt+Q ` （自定義）


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


## 編輯器／視窗管理

> 1. VS Code 以資料夾為基礎，但若開啟的資料夾含有常見專案檔，
>    如 package.json, project.json, tsconfig.json 等，會提供額外功能。
> 2. 可多欄（編輯器群組）編輯，最多 3 欄。

1. 關閉編輯器視窗： ` Ctrl+W ` 
2. 關閉資料夾： ` Ctrl+K F ` 
3. 分割編輯器視窗： ` Ctrl+\ ` 
4. 切換焦點到編輯器群組 1／2／3： ` Ctrl+1 / 2 / 3 ` 
5. 切換焦點到**上／下**一個編輯器群組： ` Ctrl+K Ctrl+ ← / → ` 
6. 將編輯器視窗**左／右**移動： ` Ctrl+Shift+PgUp / PgDn ` 
7. 移動作用中的視窗群組： ` Ctrl+K ← / → ` 
8. 開啟 Markdown 文件的預覽視窗： ` Ctrl+Shift+V ` 


## 檔案管理

1. 一般常用： ` Ctrl+N `／` Ctrl+O `／` Ctrl+S `／` Ctrl+Shift+S ` 
2. 全部關閉： ` Ctrl+K Ctrl+W ` 
3. **重新開啟關閉的編輯器視窗：** ` Ctrl+Shift+T ` 
4. 開啟**下／上**一個檔案： ` Ctrl+Tab `／` Ctrl+Shift+Tab ` 
5. 將檔案開啟到新的編輯器群組： ` Alt+Click ` 
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






