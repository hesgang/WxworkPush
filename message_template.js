/*
 * @Author: hesgang
 * @Date: 2022年5月19日
 * @Last Modified by: hesgang
 * @Last Modified time: 2022年5月20日
 * @Description: 消息模板类
 *               所有消息的推送网址都是一样的，采用post推送
 */

let token = require('./get_token.js')


function msg_tmpl(_token){
    this.token = _token
    this.url = "https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=" + this.token
    // TODO 更改应用的agentid
    this.agentid = 1000002


    // 发送消息
    this.send_msg = function(msg_type, _msg, ToUser){
        // msg_type:发送消息的类型,  _msg->dict:消息内容,  ToUser:发送对象，默认all
        ToUser = ToUser || "@all"  // TODO　默认将消息发送给所有人，如需发给个人请修改
        data = { 
            "touser": ToUser,
            "toparty": "@all",
            "totag": "@all",
            "msgtype": msg_type,
            "agentid": this.agentid
        }
        data[msg_type] = _msg

        res = http.postJson(this.url, data).body.json()
        if (res['errmsg'] == 'ok'){
            log("send message sucessed")
            return "send message sucessed"
        }else{return res}
    }

    // 
}

let ms = new msg_tmpl(token.get_token())

module.exports = ms