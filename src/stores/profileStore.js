import { action, autorun, observable } from 'mobx'
import { ProfileRequest } from '../requests/profileRequest'

class ProfileStore {
  @observable userProfile = undefined
  @observable entProfile = undefined
  @action clearProfile = () => {
    this.userProfile = undefined
    this.entProfile = undefined
  }
  @action getProfile = () => {
    return new Promise((resolve, reject) => {
      ProfileRequest.getProfile()
        .then(response => {
          this.userProfile = response.data?.data?.user
          this.entProfile = response.data?.data?.enterprize
          resolve(response.data)
        })
        .catch(error => reject(error))
    })
  }

}

export default new ProfileStore()
