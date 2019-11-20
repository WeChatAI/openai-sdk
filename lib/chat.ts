import { transferNLP } from './util'

function chat(query: Object) {
    return transferNLP('CHAT', query)
}

export { chat }