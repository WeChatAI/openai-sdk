import openai from "../index"

let {
    init,
    chat,
    nlp
} = openai

init({
    TOKEN: 'PWj9xdSdGU3PPnqUUrTf7uGgQ9Jvn7',
    EncodingAESKey: '4jzHSI2p3EHXh3qBao5onJ39HcOO00ZoiGVNVvjFkPW'
})

chat({
    username: "uid",
    msg: "你好吗"
}).then(res => {
    console.log('机器人返回:', res)
}, res => {
    console.log('reject res:', res)
}).catch(e => {
    console.log('error', e)
})
// 分词
nlp.tokenize({
    uid: "uid",
    data: {
        q: "在微信智言与微信智聆两大技术的支持下，微信AI团队推出了“微信对话开放平台”和“腾讯小微”智能硬件两大核心产品。微信支付团队最新发布的“微信青蛙Pro”在现场设置了体验区，让大家感受AI认脸的本事。"
    }
}).then(res => {
    console.log('词法分析返回：', res)
}, res => {
    console.log('reject res:', res)
}).catch(e => {
    console.log('error', e)
})

// 数字日期时间识别
nlp.ner({
    uid: "uid",
    data: {
        q: "帮我订两张后天上午的火车票"
    }
}).then(res => {
    console.log('数字日期时间识别返回：', res)
}, res => {
    console.log('reject res:', res)
}).catch(e => {
    console.log('error', e)
})

// 情感分析
nlp.sentiment({
    uid: "uid",
    data: {
        q: "恭喜小张脱单成功",
        mode: "6class"
    }
}).then(res => {
    console.log('情感分析返回：', res)
}, res => {
    console.log('reject res:', res)
})
.catch(e => {
    console.log('error', e)
})

// 敏感词识别
nlp.sensitive({
    uid: "uid",
    data: {
        q: "楼主真垃圾，祝你早日死全家"
    }
}).then(res => {
    console.log('敏感词识别返回：', res)
}, res => {
    console.log('reject res:', res)
}).catch(e => {
    console.log('error', e)
})