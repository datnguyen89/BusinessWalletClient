import axios from 'axios'
import { apiUrl } from '../config'
import authenticationStore from '../stores/authenticationStore'
import commonStore from '../stores/commonStore'

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
        'Ip-Address': commonStore.ipAddress,
      },
      data: payload,
    })
  },
  transferExtendDataForChangePassword: (payload) => {
    return axios({
      method: 'post',
      url: `${apiUrl}/TransferExtendDataForChangePassword`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authenticationStore.accessToken || ''}`,
        'Token-Core-System': `Bearer ${authenticationStore.coreSysToken || ''}`,
        'Ip-Address': commonStore.ipAddress,
      },
      data: payload,
    })
  },
  changePasswordForCustomer: (payload) => {
    return axios({
      method: 'post',
      url: `${apiUrl}/ChangePasswordForCustomer`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authenticationStore.accessToken || ''}`,
        'Token-Core-System': `Bearer ${authenticationStore.coreSysToken || ''}`,
        'Ip-Address': commonStore.ipAddress,
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
        'Authorization': `Bearer ${authenticationStore.accessToken || ''}`,
        'Token-Core-System': `Bearer ${authenticationStore.coreSysToken || ''}`,
        'Ip-Address': commonStore.ipAddress,
      },
      data: payload,
    })
  },
  logout: () => {
    return axios({
      method: 'post',
      url: `${apiUrl}/Logout`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authenticationStore.accessToken || ''}`,
        'Token-Core-System': `Bearer ${authenticationStore.coreSysToken || ''}`,
        'Ip-Address': commonStore.ipAddress,
      },
    })
  },
  transferExtendDataForResetPassword: (payload) => {
    return axios({
      method: 'post',
      url: `${apiUrl}/TransferExtendDataForResetPassword`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authenticationStore.accessToken || ''}`,
        'Token-Core-System': `Bearer ${authenticationStore.coreSysToken || ''}`,
        'Ip-Address': commonStore.ipAddress,
      },
      data: payload,
    })
  },
  enterInfoForResetPasswordCustomer: (payload) => {
    return axios({
      method: 'post',
      url: `${apiUrl}/EnterInfoForResetPasswordCustomer`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authenticationStore.accessToken || ''}`,
        'Token-Core-System': `Bearer ${authenticationStore.coreSysToken || ''}`,
        'Ip-Address': commonStore.ipAddress,
      },
      data: payload,
    })
  },
  resetPasswordCustomer: (payload) => {
    return axios({
      method: 'post',
      url: `${apiUrl}/ResetPasswordCustomer`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authenticationStore.accessToken || ''}`,
        'Token-Core-System': `Bearer ${authenticationStore.coreSysToken || ''}`,
        'Ip-Address': commonStore.ipAddress,
      },
      data: payload,
    })
  },
}
