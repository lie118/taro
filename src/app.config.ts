export default defineAppConfig({
  pages: ["pages/index/index", "pages/user/index", "pages/detail/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    selectedColor:'#0000c2',
    list: [
      { text: "首页", pagePath: "pages/index/index" },
      { text: "详情", pagePath: "pages/user/index" },
      { text: "用户", pagePath: "pages/detail/index" },
    ],
  },
});
