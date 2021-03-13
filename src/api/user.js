import request from '@/utils/request'

export function userget(data) {
    return request({
        url: '/admin/user',
        method: 'post',
        data: data
    })
}