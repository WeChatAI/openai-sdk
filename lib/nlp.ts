import { transferNLP } from './util'

function tokenize(query: Object) {
    return transferNLP('TOKENIZE', query)
}

function ner(query: Object) {
    return transferNLP('NER', query)
}

function sentiment(query: Object) {
    return transferNLP('SENTIMENT', query)
}

function sensitive(query: Object) {
    return transferNLP('SENSITIVE', query)
}

export default { tokenize, ner, sentiment, sensitive };