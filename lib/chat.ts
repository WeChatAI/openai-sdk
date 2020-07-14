import { ResponseCHAT } from './response';
import { transferNLP } from './util'
import { QueryData } from './query'

export function chat(query: QueryData) {
    return transferNLP('CHAT', query) as Promise<ResponseCHAT>
}