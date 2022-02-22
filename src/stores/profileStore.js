import { action, autorun, observable } from 'mobx'
import { ProfileRequest } from '../requests/profileRequest'

class ProfileStore {
  @observable userProfile = undefined
  @observable entProfile = undefined
  @action clearProfile = () => {
    this.userProfile = undefined
    this.entProfile = undefined
  }
  @action getProfile = (payload) => {
    return new Promise((resolve, reject) => {
      // ProfileRequest.getProfile(payload)
      //   .then(response => {
      //     resolve(response.data)
      //   })
      //   .catch(error => reject(error))

      let data = {
        "responseCode": 0,
        "param": {
          "user": {
            "userId": 754237,
            "gender": 2,
            "birthDay": "24/03/1972",
            "address": "Căn 505B CC A5 KĐTM Đại Kim Định Công, Hoàng Mai, Hà Nội",
            "districtID": 100100800,
            "district": "Quận Hoàng Mai",
            "wardID": 0,
            "ward": null,
            "locationID": 100100000,
            "location": "TP Hà Nội",
            "nationality": "100000000",
            "passport": "001090017812",
            "passportDate": "01/01/2022",
            "passportPlace": "QUẢN LÝ HÀNH CHÍNH VỀ TRẬT TỰ XÃ HỘI",
            "passportExpire": "01/01/2050",
            "accountName": "0963493002",
            "fullName": null,
            "mobile": "0963493002",
            "phone": "",
            "email": "sivico_ChiefAccountant@gmail.com",
            "avatar": "",
            "status": 1,
            "userType": 21,
            "verifyType": 0,
            "createdTime": {
              "seconds": 1645107202,
              "nanos": 703000000
            },
            "device": 12,
            "secureType": 1,
            "minAmount": 0,
            "mmAccountVerifyStatus": 0,
            "accountVerifyStatus": 0,
            "updatedTime": {
              "seconds": 1645107202,
              "nanos": 703000000
            },
            "exNotifyID": 0,
            "totalNotify": 0,
            "numberNewNotify": 0,
            "isNotify": false,
            "job": null,
            "position": "Kế Toán Trưởng",
            "similarPercent": 0,
            "national": "100000000",
            "verifyResult": null,
            "documentType": "NEW ID",
            "totalLinkBank": 0,
            "totalBill": 0,
            "permanentLocationID": 100100000,
            "permanentLocation": "TP Hà Nội",
            "permanentDistrictID": 100100600,
            "permanentDistrict": "Quận Đống Đa",
            "permanentWardID": 100100616,
            "permanentWard": "Phường Thịnh Quang",
            "permanentAddress": "27 Thái Thịnh",
            "jobId": 33,
            "jobName": "Khác",
            "nation": null,
            "clientConfirmTime": null,
            "representative": null,
            "chiefAccountant": null,
            "balance": 9987800,
            "freezeBalance": 0,
            "totalBalance": 9987800,
            "accountId": 61963,
            "mmAccountId": -99,
            "mmBalance": 0,
            "mmFreezeBalance": 0,
            "mmTotalBalance": 0
          },
          "enterprize": {
            "userId": 754235,
            "gender": 0,
            "birthDay": "01/01/2022",
            "address": "Căn 505B CC A5 KĐTM Đại Kim Định Công, Hoàng Mai, Hà Nội",
            "districtID": 100100800,
            "district": "Quận Hoàng Mai",
            "wardID": 0,
            "ward": null,
            "locationID": 100100000,
            "location": "TP Hà Nội",
            "nationality": "100000000",
            "passport": "0200456505",
            "passportDate": "01/01/2022",
            "passportPlace": "Sở kế hoạch và đầu tư Thành Phố Hà Nội",
            "passportExpire": null,
            "accountName": "E0200456505",
            "fullName": null,
            "mobile": "0907172468",
            "phone": "031.3591234",
            "email": "sivico@gmail.com",
            "avatar": "",
            "status": 1,
            "userType": 2,
            "verifyType": 1,
            "createdTime": {
              "seconds": 1645104832,
              "nanos": 370000000
            },
            "device": 12,
            "secureType": 0,
            "minAmount": 0,
            "mmAccountVerifyStatus": 0,
            "accountVerifyStatus": 0,
            "updatedTime": {
              "seconds": 1645104832,
              "nanos": 307000000
            },
            "exNotifyID": 0,
            "totalNotify": 0,
            "numberNewNotify": 0,
            "isNotify": false,
            "job": null,
            "position": null,
            "similarPercent": 0,
            "national": "100000000",
            "verifyResult": null,
            "documentType": "ĐKKD",
            "totalLinkBank": 0,
            "totalBill": 0,
            "permanentLocationID": 0,
            "permanentLocation": null,
            "permanentDistrictID": 0,
            "permanentDistrict": null,
            "permanentWardID": 0,
            "permanentWard": null,
            "permanentAddress": null,
            "jobId": 0,
            "jobName": null,
            "nation": null,
            "clientConfirmTime": null,
            "representative": null,
            "chiefAccountant": null,
            "balance": 0,
            "freezeBalance": 0,
            "totalBalance": 0,
            "accountId": 0,
            "mmAccountId": 0,
            "mmBalance": 0,
            "mmFreezeBalance": 0,
            "mmTotalBalance": 0
          }
        },
        "responseParam": null,
        "description": "Thành công",
        "extendData": null
      }
      this.userProfile = data?.param?.user
      this.entProfile = data?.param?.enterprize
      resolve(data)
    })
  }

}

export default new ProfileStore()
