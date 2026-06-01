# favorite-places · 现在就拍

React Native 移动端应用：记录旅途中的地点与照片，支持定位解析、地图展示与本地持久化。

![App 截图](https://i.imgur.com/Oie5Kil.jpg)

## 功能

- 调用设备相机 / 相册选取照片
- 获取 GPS 坐标并解析为可读地址
- 在地图上展示地点，支持详情页查看
- 地点列表展示；点击进入详情，长按删除
- 数据持久化到本地 SQLite，重启应用后保留

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 18、React Native 0.69、Expo 46 |
| 导航 | React Navigation 6（Native Stack） |
| 端能力 | expo-camera、expo-image-picker、expo-location、react-native-maps |
| 存储 | expo-sqlite |
| UI | 自研 Button / IconButton 组件，@expo/vector-icons（Ionicons） |
| 构建 | Expo CLI、EAS（`eas.json`） |

## 本地运行

**环境要求**：Node.js 16+、npm 或 yarn；iOS 需 Xcode 模拟器，Android 需 Android Studio 模拟器或真机；定位与地图建议在真机上验证。

```bash
git clone https://github.com/KevinAndrewDong/favorite-places.git
cd favorite-places
npm install
npx expo start
```

启动后按终端提示：按 `i` 打开 iOS 模拟器，按 `a` 打开 Android，或扫码使用 Expo Go 在真机调试。

> 定位、相机、地图等能力依赖系统权限，首次使用需在设备上授权。

## 项目结构

```
favorite-places
├── screens/              # 页面：列表、新增、地图、详情、删除确认
├── components/
│   ├── Places/           # 业务：表单、列表项、选图、选点
│   └── UI/               # 通用按钮组件
├── models/place.js       # Place 数据模型
├── util/
│   ├── database.js       # SQLite 增删查
│   └── location.js       # 定位与逆地理
├── constants/colors.js
└── App.js                # 导航栈与数据库初始化
```

## 架构与实现

- **分层**：`screens` 承载路由页面，`components` 拆分业务与 UI，`models` 与 `util/database` 负责数据访问，页面不直接操作 SQL。
- **启动**：`App.js` 在挂载导航前调用 `init()` 完成 SQLite 建表，避免未初始化即读写。
- **数据流**：列表与详情通过本地库同步；新增地点时串联选图、定位、落库与地图回显。
