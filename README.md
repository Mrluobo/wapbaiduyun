# wapbaiduyun


一个 自用chrome 插件，在PC端访问百度云移动端地址会自动跳转到PC端页面，通过对navigator对象的重新包装阻止此操作，核心代码下：

```
Object.defineProperty(navigator, "platform", {get: myPlatForm});

```
