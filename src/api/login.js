import request from '@/utils/request'

export function authAdminLogin(data) {
    return request({
        url: '/admin/signin',
        method: 'post',
        data: data
    })
}