import assert from 'assert';
import { expect } from 'chai';
import * as openai from "../index"
let {
    init,
    chat,
    nlp
} = openai.default

let { tokenize, ner, sentiment, sensitive } = nlp
init({
    TOKEN: 'PWj9xdSdGU3PPnqUUrTf7uGgQ9Jvn7',
    EncodingAESKey: '4jzHSI2p3EHXh3qBao5onJ39HcOO00ZoiGVNVvjFkPW'
})
describe('chat',() => {
  it('test chat', async () => {
    let chatRes = await chat({
      username: "uid",
      msg: "你好吗"
    })
    expect(chatRes.title).to.equal('问候')
  });
})

describe('nlp', () => {
  it('test tokenize', async () => {
    let tokenizeRes = await tokenize({
      uid: "uid",
      data: {
        q: "我的家乡叫中国。"
      }
    })
    expect(tokenizeRes).to.have.property('words').with.lengthOf(6)
  });

  it('test ner', async () => {
    let nerRes = await ner({
      uid: "uid",
      data: {
        q: "帮我订两张后天上午的火车票"
      }
    })
    expect(nerRes).with.lengthOf(2)
    expect(nerRes[0]['type']).to.equal('number')
  })

  it('test sentiment', async () => {
    let sentimentRes = await sentiment({
      uid: "uid",
      data: {
        q: "恭喜小张脱单成功",
        mode: "6class"
      }
    })
    expect(sentimentRes).to.have.property('result').with.lengthOf(6)
  })

  it('test sensitive', async () => {
    let sensitiveRes = await sensitive({
      uid: "uid",
      data: {
        q: "楼主真垃圾，祝你早日死全家"
      }
    })
    expect(sensitiveRes).to.have.property('result').with.lengthOf(4)
  })

});
