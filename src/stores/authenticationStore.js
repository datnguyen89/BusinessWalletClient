import { action, autorun, observable } from 'mobx'
import { AuthenticationRequest } from '../requests/authenticationRequest'

class AuthenticationStore {

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
  @action changePassword = (payload) => {
    return new Promise((resolve, reject) => {
      AuthenticationRequest.changePassword(payload)
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
          resolve(response.data)
        })
        .catch(error => reject(error))
    })
  }

}

export default new AuthenticationStore()
