import axios from "axios"

const token: string | undefined = `Bearer `

const API_URL: string | undefined = "http://127.0.0.1:5000" // process.env.URL_API_PRD

export const optionsDefault: any = {
  method: "patch",
  headers: {
    "Content-Type": "application/json"
  }
}

const axiosApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json"
  }
})

axiosApi.defaults.headers.common["Authorization"] = String(token)

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function get(url: string, config = {}) {
  return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url: string, data: any, config = {}) {
  return axiosApi
    .post(url, { ...data }, {
      headers: { Authorization: `Bearer ${window.localStorage.getItem('access_token')}` }
    })
    .then(response => response.data)
}

export async function put(url: string, data: any, config = {}) {
  return axiosApi
    .put(url, { ...data }, {
      headers: { Authorization: `Bearer ${window.localStorage.getItem('access_token')}` }
    })
    .then(response => response.data)
}

export async function putbinary(url: string, data: any, config = {}) {
  return axiosApi
    .put(url, { ...data }, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => response.data)
}

export async function patch(url: string, data: any, config = {}) {
  return axiosApi
    .patch(url, data, {
      headers: { Authorization: `Bearer ${window.localStorage.getItem('access_token')}` }
    })
    .then(response => response.data)
}

export async function del(url: string, config = {}) {
  return await axiosApi
    .delete(url, {
      headers: { Authorization: `Bearer ${window.localStorage.getItem('access_token')}` }
    })
    .then(response => response.data)
}
