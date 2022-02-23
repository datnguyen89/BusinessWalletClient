import { action, autorun, observable } from 'mobx'
import { AuthenticationRequest } from '../requests/authenticationRequest'
import userStore from './profileStore'

class AuthenticationStore {
  constructor() {
    autorun(() => {
      this.jwtDecode = this.accessToken ? JSON.parse(atob(this.accessToken?.split('.')[1])) : {}
    })
  }
  @observable jwtDecode = null
  @observable accessToken = localStorage.getItem('jwt') || undefined
  @observable coreSysToken = localStorage.getItem('coreSysToken') || undefined

  @action userLogin = (payload) => {
    return new Promise((resolve, reject) => {
      AuthenticationRequest.userLogin(payload)
        .then(response => {
          if (response.data?.responseCode === -52) {
            // show otp active modal
          } else {
            const tokenData = response.data?.data?.token
            const coreSysTokenData = response.data?.data?.coreSysToken
            localStorage.setItem('jwt', tokenData)
            localStorage.setItem('coreSysToken', coreSysTokenData)
            this.accessToken = tokenData
            this.coreSysToken = coreSysTokenData
          }
          resolve(response.data)
        })
        .catch(error => reject(error))
    })
  }
  @action transferExtendDataForChangePassword = (payload) => {
    return new Promise((resolve, reject) => {
      AuthenticationRequest.transferExtendDataForChangePassword(payload)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => reject(error))
    })
  }
  @action changePasswordForCustomer = (payload) => {
    return new Promise((resolve, reject) => {
      AuthenticationRequest.changePasswordForCustomer(payload)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => reject(error))
    })
  }
  @action activeDevice = (payload) => {
    return new Promise((resolve, reject) => {
      AuthenticationRequest.activeDevice(payload)
        .then(response => {
          if (!response.data?.error) {
            const tokenData = response.data?.data?.token
            const coreSysTokenData = response.data?.data?.coreSysToken
            localStorage.setItem('jwt', tokenData)
            localStorage.setItem('coreSysToken', coreSysTokenData)
            this.accessToken = tokenData
            this.coreSysToken = coreSysTokenData
          }
          resolve(response.data)
        })
        .catch(error => reject(error))
    })
  }
  @action logout = () => {
    return new Promise((resolve, reject) => {
      AuthenticationRequest.logout()
        .then(response => {
          this.accessToken = undefined
          this.coreSysToken = undefined
          localStorage.removeItem('jwt')
          localStorage.removeItem('coreSysToken')
          userStore.clearProfile()
          resolve(response.data)
        })
        .catch(error => reject(error))
    })
  }
  @action transferExtendDataForResetPassword = (payload) => {
    return new Promise((resolve, reject) => {
      AuthenticationRequest.transferExtendDataForResetPassword(payload)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => reject(error))
    })
  }
  @action enterInfoForResetPasswordCustomer = (payload) => {
    return new Promise((resolve, reject) => {
      AuthenticationRequest.enterInfoForResetPasswordCustomer(payload)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => reject(error))
    })
  }
  @action resetPasswordCustomer = (payload) => {
    return new Promise((resolve, reject) => {
      AuthenticationRequest.resetPasswordCustomer(payload)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => reject(error))
    })
  }

}

export default new AuthenticationStore()
