# favorite-places · 现在就拍

个人 React Native 练习项目：旅游场景留念 App。拍摄当下景色、解析所在位置，在地图上查看与管理收藏地点。

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

启动后按终端提示：按 `i` 打开 iOS 模拟器，按 `a` 打开 Android，或扫码用 Expo Go 在真机调试。

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
└── App.js                # 导航栈与 DB 初始化
```

## 实现要点（面试可讲）

1. **分层**：`screens` 负责路由页面，`components` 抽业务与 UI，`models` + `util/database` 做数据层，避免页面直接写 SQL。
2. **启动流程**：`App.js` 中 `init()` 初始化 SQLite，完成后再挂载 `NavigationContainer`，避免读写未就绪的库。
3. **与 Vue 的对应**：组件化 + 单向数据流与 Vue3 类似；差异在 RN 使用原生模块（相机、地图）而非 DOM，路由由 React Navigation 承担。

## 说明

- 基于 [React Native 实战课程](https://www.udemy.com/course/react-native-the-practical-guide/) 思路完成并自行扩展目录与持久化。
- 主要面向 **React / React Native 组件模型** 学习；Web 端 React（Vite + 中台）为另一条线，与本仓库互补。

## License

MIT（如需可自行补充 LICENSE 文件）
