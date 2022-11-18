export default function ({ $axios }) {
  $axios.onRequest((request) => {
    const token = localStorage.getItem('idToken')

    if (token) {
      request.headers.common.Authorization = `${token}`
    }

    return request
  })
}
