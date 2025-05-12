// 导入 AppleRes 接口
import type { AppleRes } from '@/services/http'
import type { LocationQueryValue } from 'vue-router'
import http from '@/services/http'

const initApi = {
  // 根据url中的id获取酒店信息和房间号
  _get_hotel_info(id: LocationQueryValue | LocationQueryValue[]) {
    return http.post<AppleRes>('user/public/get_hotel_info.php', {
      id,
    })
  },
  // 检查token
  _check_token(token: LocationQueryValue | LocationQueryValue[]) {
    return http.post<AppleRes>('user/public/check_token.php', {
      token,
    })
  },
}

export default initApi
