import jsonp from 'common/js/jsonp'
/* eslint-disable */
export function getLyric(id) {
  return jsonp('https://api.darlin.me/music/lyric/'+id+'/')
}