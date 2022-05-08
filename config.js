/*
 * @Author: hesgang
 * @Date: 2022年5月7日
 * @Last Modified by: hesgang
 * @Last Modified time: 2022年5月7日
 * @Description: 
 */

let default_config = {

}

let config ={
    // TODO： 补全企业微信信息
    corpid: null,
    corpsecret: null
}

Object.keys(default_config).forEach(key => {
    if(typeof config[key] === 'undefined'){
        config[key] = default_config[key]
    }
})


module.exports = function (__runtime__, scope) {
    if (typeof scope.config_instance === 'undefined') {
      scope.config_instance = {
        config: config,
        default_config: default_config,
      }
    }
    return scope.config_instance
}

