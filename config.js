/*
 * @Author: hesgang
 * @Date: 2022年5月7日
 * @Last Modified by: hesgang
 * @Last Modified time: 2022年5月7日
 * @Description: 
 */

let default_config = {

}
// 不同项目需要设置不同的storageName，不然会导致配置信息混乱
// TODO: 根据项目修改storageName
let CONFIG_STORAGE_NAME = 'test'
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
        storage_name: CONFIG_STORAGE_NAME
      }
    }
    return scope.config_instance
}

