import md5 from 'md5'
import {Plans} from '../types/Plans'
import { Provider } from "../types/Provider"
const BASE = 'https://app-challenge-api.herokuapp.com'

export const MD5 = {
    getMD5:async (key:string) => {
        let md5Key:string = md5(key)
        return md5Key
    },
}