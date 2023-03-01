import Http from 'request/index'

/**
 *
 * @returns 生成扫码登录密钥
 */
export const generateQR_code = async () => {
  return Http.GET('/qrcode/getLoginInfo')
}
