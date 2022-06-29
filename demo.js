/*
 * @Author: hesgang
 * @Date: 2022年5月20日
 * @Last Modified by: hesgang
 * @Last Modified time: 2022年6月29日
 * @Description: 消息模板类
 *               所有消息的推送网址都是一样的，采用post推送
 */

let msg = require('./message_template.js')
let token = require('./get_token.js')

log(token.get_token())


text = {
    "content" : "你的快递已到，请携带工卡前往邮件中心领取。\n出发前可查看<a href=\"http://work.weixin.qq.com\">邮件中心视频实况</a>，聪明避开排队。"
}

res = msg.send_msg('text', text)
log(res)


m_text = {"content" : "您的会议室已经预定，稍后会同步到`邮箱` \
>**事项详情** \
>事　项：<font color=\"info\">开会</font> \
>组织者：@miglioguan \
>参与者：@miglioguan、@kunliu、@jamdeezhou、@kanexiong、@kisonwang \
> \
>会议室：<font color=\"info\">广州TIT 1楼 301</font> \
>日　期：<font color=\"warning\">2018年5月18日</font> \
>时　间：<font color=\"comment\">上午9:00-11:00</font> \
> \
>请准时参加会议。 \
> \
>如需修改会议信息，请点击：[修改会议信息](https://work.weixin.qq.com)"}