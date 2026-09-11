# 煥然一新 - 沖繩動態行程表 (Okinawa Dynamic Itinerary PWA)

🌺 **4天3夜沖繩蔚藍假期** • 支援動態路線軌跡、Google Maps 一鍵導航、日本自駕 MapCode、日幣匯率即時試算、出國行李/戰利品清單與離線 PWA 原生應用。

---

## 🚀 部署至 GitHub Pages 教學 (3 步驟)

本專案已備妥標準靜態網站結構（包含 `index.html`、`manifest.json`、`service-worker.js`、`icon-192.png`、`icon-512.png` 與 `.nojekyll`）。

### 步驟 1：初始化 Git 並提交程式碼
在終端機（PowerShell）中切換至本專案目錄執行：

```bash
git init
git add .
git commit -m "feat: 煥然一新沖繩動態行程表 PWA 旗艦版"
git branch -M main
```

### 步驟 2：推送到您的 GitHub 儲存庫 (Repository)
1. 前往 [GitHub New Repository](https://github.com/new) 建立一個新的公開儲存庫（例如名稱為 `Okinawa` 或 `okinawa-trip`）。
2. 將本機倉庫與 GitHub 關聯並推送（請將 `<YOUR-USERNAME>` 與 `<REPO-NAME>` 替換為您的帳號與專案名）：

```bash
git remote add origin https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git
git push -u origin main
```

### 步驟 3：開啟 GitHub Pages
1. 在該 GitHub 專案頁面點擊 **Settings** ➔ 側邊欄點選 **Pages**。
2. 在 **Build and deployment** 下方：
   - **Source** 選擇 `Deploy from a branch`。
   - **Branch** 選擇 `main`，資料夾選擇 `/ (root)`，點擊 **Save**。
3. 等待 1~2 分鐘，上方即會出現您的專屬網址：
   `https://<YOUR-USERNAME>.github.io/<REPO-NAME>/`

---

## 📱 Android Chrome「安裝應用程式」全螢幕使用教學

當您將網址部署至 GitHub Pages 後，使用 Android 手機開啟該網址即可安裝為原生 App：

1. **方式 A（一鍵安裝）**：
   - 在 Android 手機上使用 **Google Chrome** 開啟該網址。
   - 頁面頂部或底部會出現金黃色閃爍的「**📲 安裝 App**」按鈕，直接點擊即可觸發安裝！
2. **方式 B（瀏覽器選單安裝）**：
   - 點擊 Chrome 右上角的「**⋮**」（三個點選單）。
   - 點選「**安裝應用程式**」（或「**加到主螢幕**」）。
   - 點擊「安裝」確認。
3. **完成安裝體驗**：
   - 手機桌面會產生一個帶有「灰石風獅爺配紅色披風」的獨立 App 圖示。
   - 點開後**完全無網址列、無瀏覽器外框**，享受 100% 全螢幕原生應用體驗！
   - 即使在飛機上開飛航模式或沖繩自駕隧道無收訊時，行程與地圖依然可完整離線查看。

---

## 📁 專案檔案清單

| 檔案 | 用途 |
| :--- | :--- |
| `index.html` | GitHub Pages 預設首頁入口（同 `Okinawa.html`） |
| `Okinawa.html` | 完整主應用介面 |
| `itinerary-data.js` | 4天3夜完整景點結構化資料庫（座標、MapCode、電話、詳細攻略） |
| `manifest.json` | Web App Manifest（定義 PWA 獨立視窗與圖示） |
| `service-worker.js` | 離線快取引擎（快取地圖腳本、圖磚、字型與靜態資源） |
| `icon-192.png` | Android 桌面 192x192 專用圖示（灰石風獅爺穿紅披風） |
| `icon-512.png` | Android 高解析度 512x512 啟動圖示 |
| `icon.svg` | 高清晰度向量圖示 |
| `.nojekyll` | 防止 GitHub Pages Jekyll 忽略特定檔案 |
