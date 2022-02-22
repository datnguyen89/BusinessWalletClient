import React, { useEffect, useState } from 'react'
import { apiUrl } from './config'
// Axios
import axios from 'axios'
// Encrypt
import cypherUtil from './utils/cypherUtil'
// ip
const publicIp = require('public-ip')
import { deviceDetect } from 'react-device-detect'
// util
import stringUtils from './utils/stringUtils'
// provider
import DataProvider from './providers/DataProvider'
// Styling
import './App.less'
import ThemeProvider from './providers/ThemeProvider'
import LoadingOverLay from './components/LoadingOverLay'
// React Router
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
// MobX
import { Provider } from 'mobx-react'
import commonStore from './stores/commonStore.js'
import mobileMoneyStore from './stores/mobileMoneyStore.js'
import infoAccountStore from './stores/infoAccountStore.js'
import testStore from './stores/testStore.js'
import profileStore from './stores/profileStore.js'
import authenticationStore from './stores/authenticationStore.js'
import accountWalletStore from './stores/accountWalletStore'
import providerStore from './stores/providerStore'
import mobileNetworkOperatorStore from './stores/mobileNetworkOperatorStore'
import customerStore from './stores/customerStore'
//moment
import moment from 'moment'
import 'moment/locale/vi'
// Pages
import { PAGES } from './utils/constant'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import NotPermissionPage from './pages/NotPermissionPage'
import ProtectedPage from './pages/ProtectedPage'
import LoginPage from './pages/LoginPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import IdentityInfoPage from './pages/IdentityInfoPage'
import SupportPage from './pages/SupportPage'
import TransactionHistoryPage from './pages/TransactionHistoryPage'
import TransactionManagePage from './pages/TransactionManagePage'
import TransferMultiplePage from './pages/TransferMultiplePage'
import DepositPage from './pages/DepositPage'
import WithdrawPage from './pages/WithdrawPage'
import LinkBankPage from './pages/LinkBankPage'
import TermsOfUsePage from './pages/TermsOfUsePage'
import AboutUsPage from './pages/AboutUsPage'
import ContactPage from './pages/ContactPage'
import PolicyPage from './pages/PolicyPage'
import PhoneCardPage from './pages/PhoneCardPage'
import PrepaidPage from './pages/PrepaidPage'
import PostpaidPage from './pages/PostpaidPage'
import PhoneDataPage from './pages/PhoneDataPage'
import CardDataPage from './pages/CardDataPage'
import ElectricBillPage from './pages/ElectricBillPage'
import WaterBillPage from './pages/WaterBillPage'
import InternetBillPage from './pages/InternetBillPage'
import TelevisionBillPage from './pages/TelevisionBillPage'
import ServiceRechargePage from './pages/ServiceRechargePage'
import ApartmentFeePage from './pages/ApartmentFeePage'
import EducationFeePage from './pages/EducationFeePage'
import TransferWalletPage from './pages/TransferWalletPage'
import ReceiveFromMmPage from './pages/ReceiveFromMmPage'
import TransferToMmPage from './pages/TransferToMmPage'
import TestPage from './pages/TestPage'
import AddLinkPage from './pages/AddLinkPage'


const history = createBrowserHistory()

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !localStorage.getItem('jwt') ? (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
)

moment.locale('vi', {
  week: {
    dow: 1,
  },
})

const rootStores = {
  commonStore,
  mobileMoneyStore,
  infoAccountStore,
  authenticationStore,
  accountWalletStore,
  providerStore,
  mobileNetworkOperatorStore,
  customerStore,
  testStore,
  profileStore,
}

// axios.defaults.timeout = 20000
publicIp.v4().then(res => {
  axios.defaults.headers.common['Ip-Address'] = res
})

axios.interceptors.request.use(
  config => {
    if (config.disableSpinner) {
      commonStore.setAppLoading(false)
    } else {
      commonStore.setAppLoading(true)
    }
    console.log('REQUEST', config.url.replace(apiUrl, ''), config.data)
    let k = stringUtils.randomId(16)
    let obj = { key: k, iv: k }
    let strDataKey = JSON.stringify(obj)
    let strData = JSON.stringify({ ...config.data })

    let encryptedDataKey = cypherUtil.rsaEncrypt(strDataKey)
    let encryptedData = cypherUtil.aesEncrypt(strData, k, k)
    config.data = { data: encryptedData, objKey: encryptedDataKey }

    return config
  },
  error => {
    commonStore.setAppLoading(false)
    return Promise.reject(error)
  },
)

axios.interceptors.response.use(
  response => {
    commonStore.setAppLoading(false)
    console.log('RESPONSE', response.config.url.replace(apiUrl, ''), response)
    if (response.data.error) {
      console.log(response.data.message)
    }
    return response
  },
  error => {
    commonStore.setAppLoading(false)
    // if (error?.response?.status === 403) {
    //   // TODO: do something
    // }
    return Promise.reject(error)
  },
)

const App = () => {

  // (async () => {
  //   console.log('ip',await publicIp.v4())
  // })()
  // useEffect(() => {
  //   console.log(deviceDetect())
  // }, [])

  return (
    <Provider {...rootStores}>
      <ThemeProvider>
        <DataProvider>
          <Router history={history}>
            <Switch>
              <ProtectedRoute exact path={PAGES.HOME.PATH}
                              component={HomePage} />
              <ProtectedRoute exact path={PAGES.IDENTITY.PATH}
                              component={IdentityInfoPage} /> {/*Thông tin định danh*/}
              <ProtectedRoute exact path={PAGES.TRANSACTION_MANAGE.PATH}
                              component={TransactionManagePage} /> {/*Quản lý giao dịch*/}
              <ProtectedRoute exact path={PAGES.TRANSACTION_HISTORY.PATH}
                              component={TransactionHistoryPage} /> {/*Lịch sử giao dịch*/}
              <ProtectedRoute exact path={PAGES.TERM_OF_USE.PATH}
                              component={TermsOfUsePage} /> {/*Điều khoản sử dụng*/}
              <ProtectedRoute exact path={PAGES.SUPPORT.PATH}
                              component={SupportPage} /> {/*Trợ giúp*/}
              <ProtectedRoute exact path={PAGES.ABOUT_US.PATH}
                              component={AboutUsPage} /> {/*Giới thiệu*/}
              <ProtectedRoute exact path={PAGES.CONTACT.PATH}
                              component={ContactPage} /> {/*Liên hệ*/}
              <ProtectedRoute exact path={PAGES.POLICY.PATH}
                              component={PolicyPage} /> {/*Chính sách*/}
              <ProtectedRoute exact path={PAGES.PHONE_CARD.PATH}
                              component={PhoneCardPage} /> {/*Mã thẻ*/}
              <ProtectedRoute exact path={PAGES.PREPAID.PATH}
                              component={PrepaidPage} /> {/*Nạp tiền điện thoại trả trước*/}
              <ProtectedRoute exact path={PAGES.POSTPAID.PATH}
                              component={PostpaidPage} /> {/*Nạp tiền điện thoại trả sau*/}
              <ProtectedRoute exact path={PAGES.PHONE_DATA.PATH}
                              component={PhoneDataPage} /> {/*Nạp data*/}
              <ProtectedRoute exact path={PAGES.CARD_DATA.PATH}
                              component={CardDataPage} /> {/*Mã thẻ data*/}
              <ProtectedRoute exact path={PAGES.ELECTRIC_BILL.PATH}
                              component={ElectricBillPage} /> {/*Hóa đơn điện*/}
              <ProtectedRoute exact path={PAGES.WATER_BILL.PATH}
                              component={WaterBillPage} /> {/*Hóa đơn nước*/}
              <ProtectedRoute exact path={PAGES.INTERNET_BILL.PATH}
                              component={InternetBillPage} /> {/*Internet*/}
              <ProtectedRoute exact path={PAGES.TELEVISION_BILL.PATH}
                              component={TelevisionBillPage} /> {/*Truyền hình*/}
              <ProtectedRoute exact path={PAGES.SERVICE_RECHARGE.PATH}
                              component={ServiceRechargePage} /> {/*Nạp dịch vụ*/}
              <ProtectedRoute exact path={PAGES.APARTMENT_FEE.PATH}
                              component={ApartmentFeePage} /> {/*Phí chung cư*/}
              <ProtectedRoute exact path={PAGES.EDUCATION_FEE.PATH}
                              component={EducationFeePage} /> {/*Học phí*/}
              <ProtectedRoute exact path={PAGES.DEPOSIT.PATH}
                              component={DepositPage} /> {/*Nạp tiền*/}
              <ProtectedRoute exact path={PAGES.TRANSFER_WALLET.PATH}
                              component={TransferWalletPage} /> {/*Chuyển tiền ví*/}
              <ProtectedRoute exact path={PAGES.TRANSFER_MULTIPLE.PATH}
                              component={TransferMultiplePage} /> {/*Chuyển tiền theo lô*/}
              <ProtectedRoute exact path={PAGES.RECEIVE_FROM_MM.PATH}
                              component={ReceiveFromMmPage} /> {/*Nhận chuyển tiền từ MM*/}
              <ProtectedRoute exact path={PAGES.TRANSFER_TO_MM.PATH}
                              component={TransferToMmPage} /> {/*Chuyển tiền tới MM*/}
              <ProtectedRoute exact path={PAGES.LINK_BANK.PATH}
                              component={LinkBankPage} /> {/*Liên kết*/}
              <ProtectedRoute exact path={PAGES.ADD_LINK.PATH}
                              component={AddLinkPage} /> {/*Thêm liên kết*/}
              <ProtectedRoute exact path={PAGES.WITHDRAW.PATH}
                              component={WithdrawPage} /> {/*Rút tiền*/}

              <Route exact path={PAGES.LOGIN.PATH}
                     component={LoginPage} /> {/*Đăng nhập*/}
              <Route exact path={PAGES.FORGOT_PASSWORD.PATH}
                     component={ForgotPasswordPage} /> {/*Quên mật khẩu*/}
              <Route exact path={PAGES.NOT_PERMISSION.PATH}
                     component={NotPermissionPage} /> {/*Không có quyền truy cập*/}
              <Route exact path={'/protected'}
                     component={ProtectedPage} />
              <Route exact path={'/test'}
                     component={TestPage} /> {/*Test*/}
              <Route component={NotFoundPage} />
            </Switch>
          </Router>
          <LoadingOverLay />
        </DataProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
