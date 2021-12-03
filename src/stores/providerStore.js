import { action, observable } from 'mobx'

class ProviderStore {

  @observable areas = [];
  @observable providers = [];

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
          providerName: 'Công ty cổ phần Nước Sạch Hà Nội'
        },
        {
          id: 2,
          area: 'Cấp nước miền nam',
          areaId: 1,
          providerName: 'Công ty cổ phần cấp nước Phú Hòa Tan'
        },
        {
          id: 3,
          area: 'Cấp nước miền bắc',
          areaId: 2,
          providerName: 'Công ty cấp thoát nước Bình Dương'
        },
        {
          id: 4,
          area: 'Cấp nước Hà Nội',
          areaId: 2,
          providerName: 'Công ty cổ phần Nước Sạch VTS'
        },
        {
          id: 5,
          area: 'Cấp nước TP.HCM',
          areaId: 4,
          providerName: 'Công ty cổ phần cấp nước Hoa Phượng'
        },
        {
          id: 6,
          area: 'Cấp nước miền trung',
          areaId: 1,
          providerName: 'Công ty cổ phần Nước Sạch Hà Nội'
        },
        {
          id: 7,
          area: 'Cấp nước miền nam',
          areaId: 1,
          providerName: 'Công ty cổ phần cấp nước Phú Hòa Tan'
        },
        {
          id: 8,
          area: 'Cấp nước miền bắc',
          areaId: 2,
          providerName: 'Công ty cấp thoát nước Bình Dương'
        },
        {
          id: 9,
          area: 'Cấp nước Hà Nội',
          areaId: 2,
          providerName: 'Công ty cổ phần Nước Sạch VTS'
        },
        {
          id: 10,
          area: 'Cấp nước TP.HCM',
          areaId: 4,
          providerName: 'Công ty cổ phần cấp nước Hoa Phượng'
        },
        {
          id: 11,
          area: 'Cấp nước miền trung',
          areaId: 1,
          providerName: 'Công ty cổ phần Nước Sạch Hà Nội'
        },
        {
          id: 12,
          area: 'Cấp nước miền nam',
          areaId: 1,
          providerName: 'Công ty cổ phần cấp nước Phú Hòa Tan'
        },
        {
          id: 13,
          area: 'Cấp nước miền bắc',
          areaId: 2,
          providerName: 'Công ty cấp thoát nước Bình Dương'
        },
        {
          id: 14,
          area: 'Cấp nước Hà Nội',
          areaId: 2,
          providerName: 'Công ty cổ phần Nước Sạch VTS'
        },
        {
          id: 15,
          area: 'Cấp nước TP.HCM',
          areaId: 4,
          providerName: 'Công ty cổ phần cấp nước Hoa Phượng'
        },
        {
          id: 16,
          area: 'Cấp nước miền trung',
          areaId: 1,
          providerName: 'Công ty cổ phần Nước Sạch Hà Nội'
        },
        {
          id: 17,
          area: 'Cấp nước miền nam',
          areaId: 1,
          providerName: 'Công ty cổ phần cấp nước Phú Hòa Tan'
        },
        {
          id: 18,
          area: 'Cấp nước miền bắc',
          areaId: 2,
          providerName: 'Công ty cấp thoát nước Bình Dương'
        },
        {
          id: 19,
          area: 'Cấp nước Hà Nội',
          areaId: 2,
          providerName: 'Công ty cổ phần Nước Sạch VTS'
        },
        {
          id: 20,
          area: 'Cấp nước TP.HCM',
          areaId: 4,
          providerName: 'Công ty cổ phần cấp nước Hoa Phượng'
        },
      ]
    })
  }
}
export default new ProviderStore()