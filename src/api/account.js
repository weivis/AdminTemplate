import request from '@/utils/request'

export function UserInfo(data) {
    return request({
        url: '/account/info',
        method: 'post',
        data: data
    })
}

export function Changeinfo(data) {
    return request({
        url: '/account/change/userinfo',
        method: 'post',
        data: data
    })
}

export function Allaccount(data) {
    return request({
        url: '/account/allaccount',
        method: 'post',
        data: data
    })
}

export function Createaccount(data) {
    return request({
        url: '/account/create',
        method: 'post',
        data: data
    })
}

export function Manage(data) {
    return request({
        url: '/account/manage',
        method: 'post',
        data: data
    })
}