/*
 * @Author: hesgang
 * @Date: 2022年5月7日
 * @Last Modified by: hesgang
 * @Last Modified time: 2022年5月7日
 * @Description: 1. 获取token，并缓存token
 *               2. 判断token是否失效，失效则重新获取并缓存
 */

function API_token(_corpid, _corpsecret){
		this.corpid = _corpid;
		this.corpsecret = _corpsecret;

    // 获取远程token
    this.HttpToken = function (){
        if(this.corpid === 'undefined' || this.corpsecret === 'undefined'){
            return null
        }else{
            let url = ["https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=", this.corpid, "&corpsecret=", this.corpsecret].join("");
            response = http.get(url).body.json()
            if (response.errcode == 0){
                return response.access_token
            } else {
                return null
            }
        }
    }

    // 缓存token
    this.cache_token = function(){
    }
}





