export default defineAppConfig({
  pages: [
    "pages/detail/index",
    "pages/index/index",
    "pages/user/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    selectedColor: "#00BFFF",
    color: "#333",
    list: [
      {
        text: "首页",
        pagePath: "pages/index/index",
        iconPath: "./assets/tabBar/home.png",
        selectedIconPath: "./assets/tabBar/select-home.png",
      },
      {
        text: "用户",
        pagePath: "pages/user/index",
        iconPath: "./assets/tabBar/user.png",
        selectedIconPath: "./assets/tabBar/select-user.png",
      },
    ],
  },
});
