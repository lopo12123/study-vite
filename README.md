## study-vite

study of vite

### 依赖预构建

`vite` 找到对应的依赖, 调用`esbuild` 将其他规范的代码转换成 `esmodule` 规范的代码 (放在 `node_module/.vite/deps`). 同时对 `esmodule` 规范的各个模块进行统一集成.

解决了:

1. 不同的第三方包有不同的导出格式
2. 对路径的处理上可以使用 `.vite/deps`, 方便路径重写
3. 网络多包传输的性能问题

### `vite` 开发服务器

- `css`
    - 直接使用 `fs` 读取 `css` 文件
    - 创建一个 `style` 标签, 将 `xxx.css` 文件中的内容直接复制进 `style` 标签中
    - 将 `style` 标签插入到 `index.html` 的 `head` 中
    - 将该 `css` 文件中的内容替换为 `js` 脚本(方便热更新或 `css` 模块化). 同时设置 `Content-Type` 为 `text/javascript`, 让浏览器以 `js` 形式执行该文件

### `vite.config.js`