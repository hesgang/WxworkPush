
> 基于[服务端API](https://developer.work.weixin.qq.com/document/path/91201)  
> 使用**autojs**  
> 根据TODO填写必要参数

- **前言**：初学JS，通过pushplus与sever酱推送了消息，发现还是企业微信的可操作性比较大，而且pushplus推送也可以转发到企业微信，所以尝试通过JS将自动化打卡数据等内容推送到企业微信。  



## 流程
> 注意配置`config.js`中的企业微信信息  

1. 获取access_token  ---> get_token.js 
> 有三种类型的access_token
> 这里我们获取 *授权企业的token* 用于消息推送  

| 类型    | 说明    | 适用场景 |
| :--- | :--- | :--- |
| 服务商的token | 以corpid（服务商CorpID）、provider_secret（服务商密钥）换取provider_access_token，代表的是服务商的身份   | 用于服务商级别的接口调用，比如登录授权、推广二维码等。说明文档参考 [获取服务商凭证](https://developer.work.weixin.qq.com/document/path/91201#15143) |
|第三方应用的token    | 以suite_id（第三方应用ID）、suite_secret（第三方应用密钥）换取suite_access_token，代表第三方应用的身份   | 用于获取第三方应用的预授权码，获取授权企业信息等。说明文档参考 [获取第三方应用凭证](https://developer.work.weixin.qq.com/document/path/91201#14939) |
| 授权企业的token    | 企业安装第三方应用后，第三方服务商以企业的corpid、永久授权码来获取access_token  | 用于操作授权企业相关接口，如通讯录管理，消息推送等。说明文档参考 [获取企业凭证](https://developer.work.weixin.qq.com/document/path/91201#14944)|

2. 缓存token  ---> get_token.js 

> js数据缓存与读取
>
> - 使用**storages**，具体方法见 [链接](https://pro.autojs.org/docs/#/zh-cn/storages)  
> - 由于storages保存的数据在脚本之间是共享的，任何脚本只要知道storage名称便可以获取到相应的数据，因此它不能用于敏感数据的储存。 storages无法像Web开发中LocalStorage一样提供根据域名独立的存储，因为脚本的路径随时可能改变。
> - 因此，为了使脚本数据不相互干扰，需根据脚本配置不同的 `storageName` -> `config.js`文件中修改
>
> 

3. 发送信息 ---> message_template.js
- send_msg(msg_type, _msg, ToUser)
> 可直接发送*文本消息*、*图片消息*、*语音消息*、*视频消息*、*文件消息*、*模板卡片信息等*等，只需要修改 `_msg`的内容格式即可  
>[ 参考开发文档](https://developer.work.weixin.qq.com/document/path/90236#%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89)

- 使用方法见demo.js(包含部分发送数据的格式)

## end

