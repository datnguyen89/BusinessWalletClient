import axios from 'axios'
import { apiUrl } from '../config'
import authenticationStore from '../stores/authenticationStore'

const source = axios.CancelToken.source()

export const AuthenticationRequest = {
  cancelRequest: () => {
    source.cancel()
  },
  userLogin: (payload) => {
    return axios({
      method: 'post',
      url: `${apiUrl}/Login`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: payload,
    })
  },
  changePassword: (payload) => {
    return axios({
      method: 'post',
      url: `${apiUrl}/ChangePassword`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: payload,
    })
  },
  activeDevice: (payload) => {
    return axios({
      method: 'post',
      url: `${apiUrl}/ActiveDevice`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: payload,
    })
  },
  logout: (payload) => {
    return axios({
      method: 'post',
      url: `${apiUrl}/Logout`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: payload,
    })
  },
}
