import service from './service'
import basurl from './basurl'

// 验证码
export function smsCode(arg){
    return service({
        url:basurl.smsCode,
        data:arg,
        method:'post'
    })
}
// 登录
export function login(arg){
    return service({
        url:basurl.login,
        data:arg,
        method:'post'
    })
}
// tabbar
export function tabbar(arg){
    return service({
        url:basurl.tabbar,
        data:arg,
        method:'get'
    })
}