import { action, observable } from 'mobx'
import { infoAccountRequest } from '../requests/infoAccountRequest'

class AccountWalletStore {

  @observable accountWallets = [];
  @observable listBankInternal = [];
  @observable listBankDirect = [];
  @observable listBankDirected = [];

  constructor(  ) {
  }
  @action getAccountWallets = () => {
    return new Promise((resolve, reject) => {
      let data =  [
        {id: 1, bankname: 'Công ty cổ phần thương mại Sài gon - Sacombank 1', phoneNumber: '09876543210', accountBalance: '123000000', default: false },
        {id: 2, bankname: 'Công ty cổ phần thương mại Sài gon - Sacombank 2', phoneNumber: '09876543210', accountBalance: '123000000', default: true },
        {id: 3, bankname: 'Công ty cổ phần thương mại Sài gon - Sacombank 3', phoneNumber: '09876543210', accountBalance: '123000000', default: false },
        {id: 4, bankname: 'Công ty cổ phần thương mại Sài gon - Sacombank 4', phoneNumber: '09876543210', accountBalance: '123000000', default: false }
      ]
      this.accountWallets = data
      resolve(data)
    })
  }

  @action setAccountWallets = (arr) => {
    this.accountWallets = arr;
  }

  @action getListBankInternal = () => {
    return new Promise((resolve, reject) => {
      this.listBankInternal = [
        {id: 1, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 2, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 3, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 4, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 5, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 6, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 7, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 8, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 9, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 10, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 11, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 12, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 13, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 14, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 15, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 16, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 17, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 18, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 19, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 20, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 21, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 22, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 23, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 24, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 25, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 26, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 27, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 28, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 29, imageUrl: require('../media/images/HD_Bank.png')},
        {id: 30, imageUrl: require('../media/images/HD_Bank.png')},
      ];
    })
  }

  @action getListBankDirect = () => {
    return new Promise((resolve, reject) => {
      this.listBankDirect = [
        { id: 31, imageUrl: require('../media/images/HD_Bank.png') },
        { id: 32, imageUrl: require('../media/images/HD_Bank.png') },
        { id: 33, imageUrl: require('../media/images/HD_Bank.png') },
      ];
    })
  }

  @action getListBankDirected = () => {
    return new Promise((resolve, reject) => {
      this.listBankDirected = [
        { id: 34, imageUrl: require('../media/images/vcbank.png') },
        { id: 35, imageUrl: require('../media/images/vcbank.png') },
        { id: 36, imageUrl: require('../media/images/vcbank.png') },
      ];
    })
  }
}

export default new AccountWalletStore()