import Http from 'request/index'

/**
 *
 * @param cid 国际冠字码
 * @param tel 手机号码
 * @param sourece 登录来源
 * @param token 登录 API token
 * @param challenge 极验 challenge
 * @param validate 极验 result
 * @param seccode 极验 result +|jordan
 * @returns
 */
export const sendCode = async (cid: number, tel: number, source: string, token: string, challenge: string, validate: string, seccode: string) => {
  return await Http.POST('sms/send', {cid, tel, source, token, challenge, validate, seccode}, {headers:{"Content-Type": "application/x-www-form-urlencoded"}, requestType: })
}


export const getCountryList = async () => {
  return await Http.GET('generic/country/list', {requestType: 'web'})
}
