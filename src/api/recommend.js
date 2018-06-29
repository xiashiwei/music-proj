import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'
/*eslint-disable*/
export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList () {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    g_tk: 1928093487,
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    format: 'json',
    sin: 0,
    ein: 29,
    sortId: 5,
    categoryId: 10000000,
    rnd: Math.random()
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongList(disstid) {
  const url = '/api/getCdInfo'

  const data = Object.assign({}, commonParams, {
    g_tk: 1928093487,
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// export function getPurlUrl(songmid,songtype) {
//   const url = '/api/getPurlUrl'

//   // const data = Object.assign({}, commonParams, {
//   //   g_tk: 5381,
//   //   format: 'json',
//   //   platform: 'h5',
//   //   uin: 0,
//   //   needNewCode: 1,
//   //   url_mid:{module: "vkey.GetVkeyServer", method: "CgiGetVkey",param: {guid: "9535831446",loginflag:0,platform:"23",songmid,songtype,uin:"0"}}
//   // })

//   return axios.post(url, {
//     params: {"comm":{"g_tk":5381,"inCharset":"utf-8","outCharset":"utf-8","notice":0,"format":"json","platform":"h5","needNewCode":1,"uin":0},"url_mid":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"9535831446","songmid":["001zVWUJ2O4VrY","000IktgK1drOJX","000aqcqN14jLKz","0020Nl5k1R7sUz","004BU9yB0pHNHL","001dPG2Q1oQZoP","003DvhaO4ZIEA8","004X6Akp0HFCLI","001273Nb1Yuzig","002iTR1A1VsTVc","00127x4x24r8Jx","002rKsUf3HUKfx","001Yj5tl0B9yj3","003bahNt1VAlTS","0039C31H03apxJ","000F7aWV3tQsxf"],"songtype":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"uin":"0","loginflag":0,"platform":"23"}}}
//   }).then((res) => {
//     return Promise.resolve(res)
//   })
// }
// export function getPurlUrl(songmid,songtype) {


//   // const data = Object.assign({}, commonParams, {
//   //   g_tk: 5381,
//   //   format: 'json',
//   //   platform: 'h5',
//   //   uin: 0,
//   //   needNewCode: 1,
//   //   url_mid:{module: "vkey.GetVkeyServer", method: "CgiGetVkey",param: {guid: "9535831446",loginflag:0,platform:"23",songmid,songtype,uin:"0"}}
//   // })

//   return axios.post(url, {
//     params: {"comm":{"g_tk":5381,"inCharset":"utf-8","outCharset":"utf-8","notice":0,"format":"json","platform":"h5","needNewCode":1,"uin":0},"url_mid":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"9535831446","songmid":["001zVWUJ2O4VrY","000IktgK1drOJX","000aqcqN14jLKz","0020Nl5k1R7sUz","004BU9yB0pHNHL","001dPG2Q1oQZoP","003DvhaO4ZIEA8","004X6Akp0HFCLI","001273Nb1Yuzig","002iTR1A1VsTVc","00127x4x24r8Jx","002rKsUf3HUKfx","001Yj5tl0B9yj3","003bahNt1VAlTS","0039C31H03apxJ","000F7aWV3tQsxf"],"songtype":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"uin":"0","loginflag":0,"platform":"23"}}}
//   }).then((res) => {
//     return Promise.resolve(res)
//   })
// }