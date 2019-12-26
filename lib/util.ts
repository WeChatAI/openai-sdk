import { ResponseData } from './response';
const nJwt = require('njwt');
const request = require('request')
import { TOKEN, EncodingAESKey } from './auth';
import { api, ApiTypes } from './API'
import { QueryData } from './query';

function checkInit() {
    let error = ""
    if (!TOKEN) {
        error = "TOKEN不能为空，请先调用init方法初始化"
    }
    if (!EncodingAESKey) {
        error = "EncodingAESKey不能为空，请先调用init方法初始化"
    }
    return error
}

function genToken(query: QueryData) {
    let jwt = nJwt.create(query, EncodingAESKey, "HS256");
    let token = jwt.compact();
    return token;
}

async function transferNLP<T extends keyof ApiTypes>(nlpType: T, query: QueryData){
    return new Promise(async (resolve, reject) => {
        let error = checkInit()
        if (!!error) {
            reject(error)
            return
        }
        let token = genToken(query)
        await request.post(`${api[nlpType]}/${TOKEN}`, {
            json: {
                query: token
            }
        }, (error: any, stderr: any, stdout: ResponseData) => {
            if (error) {
                reject(error)
                return
            }
            resolve(stdout)
        })
    })
}

export { checkInit, genToken, transferNLP }