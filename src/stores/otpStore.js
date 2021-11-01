import { action, observable } from 'mobx'

class OtpStore {
  @observable visible = false
  @action setVisible = status => {
    this.visible = status
  }
}

export default new OtpStore()
