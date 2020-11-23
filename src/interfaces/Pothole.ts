export default interface Pothole {
  _id: string
  coordinates: {
    latitude: number
    longitude: number
  }
  senderIMEI: number
  sensorDistance: number
  info: string
}
