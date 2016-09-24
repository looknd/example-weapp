# hello-weapp 微信小程序最简示例教程

> https://github.com/dingyiming/weapp-example/issues/3
> 仓库：https://github.com/dingyiming/weapp-example

-  打开[微信小程序官方开发文档](https://mp.weixin.qq.com/debug/wxadoc/dev/?t=1474644089434)，最好全篇看一遍，基本上就会了。

-  点击[文档中 工具 选项卡中 下载工具页面 下载对应系统版本的微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html?t=1474644089359)
   - 注意：脱离微信开发者工具是不能调试的

-  好了，安装下工具即可打开,看到选择项目的界面，点击添加项目

![image](https://cloud.githubusercontent.com/assets/12537013/18806923/7a41625a-826d-11e6-990b-2d2b32ddeaea.png)

- 添加项目,没有app id就选择无AppID, 勾选在当前目录中创建quick start项目，直接有个简单的示例,
   
![image](https://cloud.githubusercontent.com/assets/12537013/18806951/18ef8756-826e-11e6-8a40-47804b9c2750.png)

- AppID 是微信开发者官方授权开发者的一个凭证， 目前只有200家受邀内测的公众号才有，所以咱们就通过无AppID开发调试吧！主要限制如下：

![image](https://cloud.githubusercontent.com/assets/12537013/18807051/1e05c320-8270-11e6-8ab4-75db81fa15ab.png)


- 然后点击添加项目即进入具体项目的开发环境
![image](https://cloud.githubusercontent.com/assets/12537013/18806960/5aee65c8-826e-11e6-9b0d-839dcd3cb768.png)

- 我们先看看目前有的文件目录，点击左侧 编辑 按钮 打开所有文件目录

![image](https://cloud.githubusercontent.com/assets/12537013/18806979/bdbefb86-826e-11e6-9d34-e1e1e1ebb815.png)

- [查看文件目录说明](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/structure.html?t=1474644089682)
> 注意：为了方便开发者减少配置项，微信规定描述页面的这四个文件必须具有相同的路径与文件名。这个很关键，不能随意创建目录以及文件与页面关联
![image](https://cloud.githubusercontent.com/assets/12537013/18806992/fa721ab8-826e-11e6-8894-19a89336936b.png)


- 从官方文档得知 ，必须有的几项
![image](https://cloud.githubusercontent.com/assets/12537013/18807002/26267604-826f-11e6-821a-8f84c2572a1a.png)
![image](https://cloud.githubusercontent.com/assets/12537013/18807004/2bddcf66-826f-11e6-8988-3b009203f1d7.png)

  
- 最简示例至少有一个简单的页面，所以，接下来我们删除一些文件来看最简示例的项目结构吧！
- 先删除多余目录以及文件剩下，如下文件，

![image](https://cloud.githubusercontent.com/assets/12537013/18807015/667fc99e-826f-11e6-8d57-c0c71f0d9a4c.png)

- 这时候，点击左下角的编译按钮，可以看到控制台大大的报错了，一看便知是少了logs这个目录，因为刚刚被删除了，
![image](https://cloud.githubusercontent.com/assets/12537013/18807018/844cff8c-826f-11e6-9a14-d30c06be1bdc.png)

- 那我们去 app.json配置项中找到页面配置去除多余内容吧

![image](https://cloud.githubusercontent.com/assets/12537013/18807034/c00967cc-826f-11e6-99bf-ebb28fdde5b2.png)

- 剩下这样的应用配置
![image](https://cloud.githubusercontent.com/assets/12537013/18807038/eb60ae76-826f-11e6-90bc-11ede88a58ce.png)

- 点击编译，清除控制台可以看到没有报错了，

![image](https://cloud.githubusercontent.com/assets/12537013/18807047/0b104e98-8270-11e6-8abc-593f215a735e.png)

- 点击编辑，打开 `/pages/index/index.wxml` 文件

![image](https://cloud.githubusercontent.com/assets/12537013/18807053/41518148-8270-11e6-9b39-243cf9d2be7c.png)

- 改成下面这样

![image](https://cloud.githubusercontent.com/assets/12537013/18807060/577fc290-8270-11e6-9c6a-fe27700d219e.png)

- 点击编译，ok最简示例hello weapp 完成了

![image](https://cloud.githubusercontent.com/assets/12537013/18807065/6cfa603a-8270-11e6-8c8d-53d868a4834f.png)

- 其中wxml的写法可以看 [官方组件文档](https://mp.weixin.qq.com/debug/wxadoc/dev/component/?t=1474644089909)，接着尝试各种吧！

- 微信小程序中不能直接使用html，必须严格使用官方的组件库来开发页面显示，并且微信小程序中没有window和document对象，自然类似jquery/zepto 都是无法使用的
![image](https://cloud.githubusercontent.com/assets/12537013/18807072/bb5e6320-8270-11e6-97c4-6ef529958823.png)

- 如果要问ajax怎么办？微信自然帮我们实现了一个接口来做数据通信的事情，[请看这里](https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html?t=1474644084689)

![image](https://cloud.githubusercontent.com/assets/12537013/18807076/e5bcba0e-8270-11e6-922d-07b28fed9a1c.png)

- ok 了，可以开始进一步熟悉微信小程序每一个组件和API来做应用了。

- 更多资源 访问 https://github.com/dingyiming/weapp-example/issues/2



