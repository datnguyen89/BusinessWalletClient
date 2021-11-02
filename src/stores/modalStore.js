import { action, observable } from 'mobx'

class ModalStore {
  @observable visibleOtp = false
  @action setVisibleOtp = status => {
    this.visibleOtp = status
  }
  @observable visibleSuccess = false
  @action setVisibleSuccess = status => {
    this.visibleSuccess = status
  }
  @observable visibleConfirm = false
  @action setVisibleConfirm = status => {
    this.visibleConfirm = status
  }
}

export default new ModalStore()
