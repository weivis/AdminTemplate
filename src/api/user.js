import request from '@/utils/request'

export function AdminUserList(data) {
    return request({
        url: '/user/admin/list',
        method: 'post',
        data: data
    })
}