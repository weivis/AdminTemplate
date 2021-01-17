import request from '@/utils/request'

export function authAdminLogin(data) {
    return request({
        url: '/login/admin/signin',
        method: 'post',
        data: data
    })
}