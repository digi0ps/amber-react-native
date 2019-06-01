export const BASE = 'https://amber-backend.herokuapp.com'

export const ENDPOINTS = {
    driver: `${BASE}/api/driver`,
    // driver: {
    //   location: {
    //     latitude: 13.94,
    //     longitude: 80,
    //   }
    // }
    drivers: `${BASE}/api/drivers/nearby`,
    bookings: `${BASE}/api/bookings`,
}

export const BA = 'http://192.168.7.102:8080'

export const ENDP = {
  driver: `${BA}/ambulance`,
  book: `${BA}/ambulance/book`
}
