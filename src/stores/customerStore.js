import { action, observable } from 'mobx'

class CustomerStore {

  @observable customer = null;

  constructor() {
  }

  @action getCustomerByCode = (id) => {
    return new Promise((resolve, reject) => {
      let data =  {
        id: 1,
        customerCode: '00000123456',
        customerName: 'Nguyen Van A',
        customerAddress: '123 Liễu Giai, Ba Đình, Hà Nội',
        customerNetworkMobileId: 1
      };

      this.customer = data
      resolve(data)
    })
  }

  @action getCustomerByPhoneNumber = (phone) => {
    return new Promise((resolve, reject) => {
      let data =  {
        id: 1,
        customerCode: '00000123456',
        customerName: 'Nguyen Van A',
        payTerms: 'Cước trả sau tháng 9',
        debitBalance: '300000',
        customerNetworkMobileId: 1
      };

      this.customer = data
      resolve(data)
    })
  }

  @action getCustomerByCodeOrContract = (id) => {
    return new Promise((resolve, reject) => {
      let data =  {
        id: 1,
        customerCode: '00000123456',
        customerName: 'Nguyen Van A',
        providerBy: 'VETC'
      };

      this.customer = data
      resolve(data)
    })
  }

  @action setCustomerByCode = (customer) => {
    this.customer = customer;
  }
}
export default new CustomerStore()