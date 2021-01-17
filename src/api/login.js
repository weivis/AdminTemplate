import request from '@/utils/request'

export function authAdminLogin(data) {
    return request({
        url: '/auth/admin/signin',
        method: 'post',
        data: data
    })
}