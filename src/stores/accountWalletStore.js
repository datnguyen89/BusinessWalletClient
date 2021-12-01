import { action, observable } from 'mobx'
import { infoAccountRequest } from '../requests/infoAccountRequest'

class AccountWalletStore {

  @observable accountWallets = [];

  constructor(  ) {
  }
  @action getAccountWallets = () => {
    return new Promise((resolve, reject) => {
      this.accountWallets = [
        {id: 1, bankname: 'Công ty cổ phần thương mại Sài gon - Sacombank 1', phoneNumber: '09876543210', accountBalance: '123000000', default: false },
        {id: 2, bankname: 'Công ty cổ phần thương mại Sài gon - Sacombank 2', phoneNumber: '09876543210', accountBalance: '123000000', default: true },
        {id: 3, bankname: 'Công ty cổ phần thương mại Sài gon - Sacombank 3', phoneNumber: '09876543210', accountBalance: '123000000', default: false },
        {id: 4, bankname: 'Công ty cổ phần thương mại Sài gon - Sacombank 4', phoneNumber: '09876543210', accountBalance: '123000000', default: false }
      ]
      // infoAccountRequest.getInfoAccount()
      //   .then(response => {
      //     // this.infoAccount = [...response.data];
      //
      //     resolve(response);
      //   })
      //   .catch(error => reject(error))
    })
  }

  @action setAccountWallets = (arr) => {
    this.accountWallets = arr;
  }
}

export default new AccountWalletStore()