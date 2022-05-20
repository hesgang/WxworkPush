/*
 * @Author: hesgang
 * @Date: 2022年5月20日
 * @Last Modified by: hesgang
 * @Last Modified time: 2022年5月20日
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