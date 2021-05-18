import request from '@/utils/request'

export function MyAdminAccountGet(data) {
    /* 获取当前登录访问的管理员信息 */
    return request({
        url: '/admin/account/get',
        method: 'post',
        data: data
    })
}

export function MyAdminAccountPut(data) {
    /* 修改当前登录访问的管理员信息 */
    return request({
        url: '/admin/my/account/put',
        method: 'post',
        data: data
    })
}

export function AdminAccountList(data) {
    /* 获取全部管理员账户 */
    return request({
        url: '/admin/account/list',
        method: 'post',
        data: data
    })
}

export function AdminAccountPost(data) {
    /* 创建新管理员账户 */
    return request({
        url: '/admin/account/post',
        method: 'post',
        data: data
    })
}

export function OtherAdminAccountPut(data) {
    /* 修改其他管理员的账户信息 */
    return request({
        url: '/admin/other_account/put',
        method: 'post',
        data: data
    })
}