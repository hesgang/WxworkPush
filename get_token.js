/*
 * @Author: hesgang
 * @Date: 2022年5月7日
 * @Last Modified by: hesgang
 * @Last Modified time: 2022年5月20日
 * @Description: 1. 获取token，并缓存token
 *               2. 判断token是否失效，失效则重新获取并缓存
 */
let { config, storage_name} = require('./config.js')(runtime, this)
let storageConfig = storages.create(storage_name)


function API_token(_corpid, _corpsecret){
		this.corpid = _corpid;
		this.corpsecret = _corpsecret;

    // 获取远程token
    this.HttpToken = function (){
        if(typeof this.corpid === 'undefined' || typeof this.corpsecret === 'undefined'){
            log("应用信息未正确配置，无法正确获取token")
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
    this.cache_token = function(_flag){
        var _flag = arguments[0] ? arguments[0] : false;
        let cache_time = storageConfig.get('token_cache_time');
        let now_time = parseInt(new Date().getTime() / 1000);
        if(typeof cache_time === 'undefined' || (now_time - cache_time)>6000000 || _flag){
            let _token = this.HttpToken();
            storageConfig.put('access_token', _token);
            storageConfig.put('token_cache_time', now_time);
        }
    }

    this.get_token = function(){
        var _token = storageConfig.get('access_token');
        let cache_time = storageConfig.get('token_cache_time');
        let now_time = parseInt(new Date().getTime() / 1000);
        if(_token == null || (now_time - cache_time)>6000000){  // 无token或token过期时，重新获取并缓存token
            this.cache_token(true);
            _token = storageConfig.get('access_token');
            if(_token == null){
                log("无法正确获取token")
                return _token
            }
        }else{
            return _token
        }
    }
}


let token = new API_token(config.corpid, config.corpsecret);
token.cache_token();

module.exports = token




