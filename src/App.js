import React, { useEffect } from 'react'
import { apiUrl } from './config'
// Axios
import axios from 'axios'
// Encrypt
import cypherUtil from './utils/cypherUtil'
// app props
import publicIp from 'public-ip'
// util
import stringUtils from './utils/stringUtils'
// provider
import DataProvider from './providers/DataProvider'
// Styling
import './App.less'
import ThemeProvider from './providers/ThemeProvider'
import LoadingOverLay from './components/LoadingOverLay'
import DefaultLayout from './layouts/DefaultLayout'
import AuthLayout from './layouts/AuthLayout'
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
import ReportSummaryPage from './pages/ReportSummaryPage'
import ReportDetailPage from './pages/ReportDetailPage'
import LimitSettingPage from './pages/LimitSettingPage'
import AuthModule from './modules/AuthModule'
import PublicModule from './modules/PublicModule'
import ProtectedModule from './modules/ProtectedModule'
import { message } from 'antd'


const history = createBrowserHistory()

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !localStorage.getItem('jwt') ? (
        <Redirect
          to={{
            pathname: PAGES.LOGIN.PATH,
            state: { from: window.location.pathname },
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

// axios.defaults.headers.common['Ip-Address'] = commonStore.ipAddress
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
      if (response.data.responseCode === 401) {
        authenticationStore.logout()
          .finally(() => {
            history.push({
              pathname: PAGES.LOGIN.PATH,
              state: { from: window.location.pathname },
            })
          })
        message.error('Phiên đăng nhập hết hạn')
      }
    }
    return response
  },
  error => {
    commonStore.setAppLoading(false)
    if (error?.response?.status === 401) {
      authenticationStore.logout()
        .finally(() => {
          history.push({
            pathname: PAGES.LOGIN.PATH,
            state: { from: window.location.pathname },
          })
        })
    }
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

  useEffect(() => {
    publicIp.v4()
      .then(res => {
        commonStore.setIpAddress(res)
      })
  }, [])

  return (
    <Provider {...rootStores}>
      <ThemeProvider>
        <DataProvider>
          <Router history={history}>
            <Switch>
              <Route
                exact path={[
                PAGES.LOGIN.PATH,
                PAGES.FORGOT_PASSWORD.PATH,
              ]}
                component={AuthModule}
              />
              <Route
                exact path={[
                PAGES.TEST.PATH,
                PAGES.NOT_PERMISSION.PATH,
              ]}
                component={PublicModule}
              />
              <ProtectedRoute
                exact path={[
                PAGES.HOME.PATH,
                PAGES.IDENTITY.PATH,
                PAGES.TRANSACTION_MANAGE.PATH,
                PAGES.TRANSACTION_HISTORY.PATH,
                PAGES.TERM_OF_USE.PATH,
                PAGES.SUPPORT.PATH,
                PAGES.ABOUT_US.PATH,
                PAGES.CONTACT.PATH,
                PAGES.POLICY.PATH,
                PAGES.PHONE_CARD.PATH,
                PAGES.PREPAID.PATH,
                PAGES.POSTPAID.PATH,
                PAGES.PHONE_DATA.PATH,
                PAGES.CARD_DATA.PATH,
                PAGES.ELECTRIC_BILL.PATH,
                PAGES.WATER_BILL.PATH,
                PAGES.INTERNET_BILL.PATH,
                PAGES.TELEVISION_BILL.PATH,
                PAGES.SERVICE_RECHARGE.PATH,
                PAGES.APARTMENT_FEE.PATH,
                PAGES.EDUCATION_FEE.PATH,
                PAGES.DEPOSIT.PATH,
                PAGES.TRANSFER_WALLET.PATH,
                PAGES.TRANSFER_MULTIPLE.PATH,
                PAGES.RECEIVE_FROM_MM.PATH,
                PAGES.TRANSFER_TO_MM.PATH,
                PAGES.LINK_BANK.PATH,
                PAGES.ADD_LINK.PATH,
                PAGES.WITHDRAW.PATH,
                PAGES.REPORT_SUMMARY.PATH,
                PAGES.REPORT_DETAIL.PATH,
                PAGES.LIMIT_SETTING.PATH,

              ]}
                component={ProtectedModule} />

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
