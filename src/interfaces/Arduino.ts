import { StringDecoder } from 'string_decoder'

export default interface Arduino {
  _id: string
  IMEI: number
  info: string
  createdAt: number
}
