import { defineConfig } from "umi";
import routes from "./routes";

/**
 * UMI 配置
 * 更多相关配置查询 https://umijs.org/zh-CN/docs/config
 */
export default defineConfig({
  layout: false,
  title: "antd-mobile-InfiniteScroll",
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [...routes],
  fastRefresh: {},
  cssLoader: {
    localsConvention: 'camelCase',
  }
});
