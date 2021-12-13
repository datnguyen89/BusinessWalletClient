import { action, observable } from 'mobx'

class ProviderStore {

  @observable areas = [];
  @observable providers = [];
  @observable providerDetail = null;
  @observable televisions = [];

  constructor() {
  }

  @action getProviderAreas = () => {
    return new Promise((resolve, reject) => {
      this.areas = [
        {
          id: 1,
          area: 'Cấp nước miền trung',
        },
        {
          id: 2,
          area: 'Cấp nước miền nam',
        },
        {
          id: 3,
          area: 'Cấp nước miền bắc',
        },
        {
          id: 4,
          area: 'Cấp nước Hà Nội',
        },
        {
          id: 5,
          area: 'Cấp nước TP.HCM',
        },
      ]
    })
  }

  @action getProviders = () => {
    return new Promise((resolve, reject) => {
      this.providers = [
        {
          id: 1,
          area: 'Cấp nước miền trung',
          areaId: 1,
          providerName: 'Công ty cổ phần Nước Sạch Hà Nội',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
        {
          id: 2,
          area: 'Cấp nước miền nam',
          areaId: 1,
          providerName: 'Công ty cổ phần cấp nước Phú Hòa Tan',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
        {
          id: 3,
          area: 'Cấp nước miền bắc',
          areaId: 2,
          providerName: 'Công ty cấp thoát nước Bình Dương',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
        {
          id: 4,
          area: 'Cấp nước Hà Nội',
          areaId: 2,
          providerName: 'Công ty cổ phần Nước Sạch VTS',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
        {
          id: 5,
          area: 'Cấp nước TP.HCM',
          areaId: 4,
          providerName: 'Công ty cổ phần cấp nước Hoa Phượng',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
        {
          id: 6,
          area: 'Cấp nước miền trung',
          areaId: 1,
          providerName: 'Công ty cổ phần Nước Sạch Hà Nội',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
        {
          id: 7,
          area: 'Cấp nước miền nam',
          areaId: 1,
          providerName: 'Công ty cổ phần cấp nước Phú Hòa Tan',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
        {
          id: 8,
          area: 'Cấp nước miền bắc',
          areaId: 2,
          providerName: 'Công ty cấp thoát nước Bình Dương',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
        {
          id: 9,
          area: 'Cấp nước Hà Nội',
          areaId: 2,
          providerName: 'Công ty cổ phần Nước Sạch VTS',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
        {
          id: 10,
          area: 'Cấp nước TP.HCM',
          areaId: 4,
          providerName: 'Công ty cổ phần cấp nước Hoa Phượng',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
        {
          id: 11,
          area: 'Cấp nước miền trung',
          areaId: 1,
          providerName: 'Công ty cổ phần Nước Sạch Hà Nội',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
        {
          id: 12,
          area: 'Cấp nước miền nam',
          areaId: 1,
          providerName: 'Công ty cổ phần cấp nước Phú Hòa Tan',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
        {
          id: 13,
          area: 'Cấp nước miền bắc',
          areaId: 2,
          providerName: 'Công ty cấp thoát nước Bình Dương',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
        {
          id: 14,
          area: 'Cấp nước Hà Nội',
          areaId: 2,
          providerName: 'Công ty cổ phần Nước Sạch VTS',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
        {
          id: 15,
          area: 'Cấp nước TP.HCM',
          areaId: 4,
          providerName: 'Công ty cổ phần cấp nước Hoa Phượng',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
        {
          id: 16,
          area: 'Cấp nước miền trung',
          areaId: 1,
          providerName: 'Công ty cổ phần Nước Sạch Hà Nội',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
        {
          id: 17,
          area: 'Cấp nước miền nam',
          areaId: 1,
          providerName: 'Công ty cổ phần cấp nước Phú Hòa Tan',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
        {
          id: 18,
          area: 'Cấp nước miền bắc',
          areaId: 2,
          providerName: 'Công ty cấp thoát nước Bình Dương',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
        {
          id: 19,
          area: 'Cấp nước Hà Nội',
          areaId: 2,
          providerName: 'Công ty cổ phần Nước Sạch VTS',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
        {
          id: 20,
          area: 'Cấp nước TP.HCM',
          areaId: 4,
          providerName: 'Công ty cổ phần cấp nước Hoa Phượng',
          paymentTerm: 'Tiền điện tháng 9',
          taxPaid: '1000000'
        },
      ]
    })
  }

  @action getProviderDetail = (id) => {
    return new Promise((resolve, reject) => {
      let data = {
        id: 1,
        area: 'Cấp nước miền trung',
        areaId: 1,
        providerName: 'Công ty cổ phần Nước Sạch Hà Nội',
        customerCode: '00000123456',
        customerName: 'Nguyen Van A',
        customerAddress: '123 Liễu Giai, Ba Đình, Hà Nội',
        paymentTerm: 'Tiền điện tháng 9',
        taxPaid: '1000000'
      };
      this.providerDetail = data
      resolve(data)
    })
  }

  @action getTelevisions = () => {
    return new Promise((resolve, reject) => {
      let data = [
        {
          id: 1,
          name: 'K+',
          description: 'Truyền hình K+',
          imageUrl: require('../media/images/k_plus.png')
        },
        {
          id: 2,
          name: 'K+',
          description: 'Truyền hình K+',
          imageUrl: require('../media/images/k_plus.png')
        },
        {
          id: 3,
          name: 'K+',
          description: 'Truyền hình K+',
          imageUrl: require('../media/images/k_plus.png')
        },
        {
          id: 4,
          name: 'K+',
          description: 'Truyền hình K+',
          imageUrl: require('../media/images/k_plus.png')
        },
        {
          id: 5,
          name: 'K+',
          description: 'Truyền hình K+',
          imageUrl: require('../media/images/k_plus.png')
        },
        {
          id: 6,
          name: 'K+',
          description: 'Truyền hình K+',
          imageUrl: require('../media/images/k_plus.png')
        },
        {
          id: 7,
          name: 'K+',
          description: 'Truyền hình K+',
          imageUrl: require('../media/images/k_plus.png')
        },
      ];
      this.televisions = data
      resolve(data)
    })
  }
}
export default new ProviderStore()