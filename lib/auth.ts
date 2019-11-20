let TOKEN = ''
let EncodingAESKey = ''

function auth(opt: Object) {
  TOKEN = opt.TOKEN
  EncodingAESKey = opt.EncodingAESKey
}

export { auth, TOKEN, EncodingAESKey };
