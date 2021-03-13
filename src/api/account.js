import request from '@/utils/request'

export function UserInfo(data) {
    return request({
        url: '/admin/account/get',
        method: 'post',
        data: data
    })
}

export function Changeinfo(data) {
    return request({
        url: '/admin/account/put',
        method: 'post',
        data: data
    })
}

export function Allaccount(data) {
    return request({
        url: '/admin/account',
        method: 'post',
        data: data
    })
}

export function Createaccount(data) {
    return request({
        url: '/admin/account/post',
        method: 'post',
        data: data
    })
}

export function Manage(data) {
    return request({
        url: '/admin/account/put',
        method: 'post',
        data: data
    })
}