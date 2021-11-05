import React, { useEffect } from 'react'
// Styling
import './App.less'
import ThemeProvider from './providers/ThemeProvider'
// React Router
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
// MobX
import { Provider } from 'mobx-react'
import commonStore from './stores/commonStore.js'
import mobileMoneyStore from './stores/mobileMoneyStore.js'
import infoAccountStore from './stores/infoAccountStore.js'
// Pages
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import NotPermissionPage from './pages/NotPermissionPage'
import ProtectedPage from './pages/ProtectedPage'
import LoginPage from './pages/LoginPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import IdentityInfoPage from './pages/IdentityInfoPage'
import PolicyPage from './pages/PolicyPage'
import SupportPage from './pages/SupportPage'
import TransactionHistoryPage from './pages/TransactionHistoryPage'
import TransactionManagePage from './pages/TransactionManagePage'
import TransferMobileMoneyPage from './pages/TransferMobileMoneyPage'
import TransferMultiplePage from './pages/TransferMultiplePage'
import LoadingOverLay from './components/LoadingOverLay'
import ContractPage from './pages/Contract/ContractPage'
import moment from 'moment'
import 'moment/locale/vi'

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
}


const App = () => {
  useEffect(() => {
    commonStore.setTheme('blue')
  }, [])
  return (
    <Provider {...rootStores}>
      <ThemeProvider>
        <Router history={history}>
          <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route exact path={'/identity-info'} component={IdentityInfoPage} />
            <Route exact path={'/transfer-multiple'} component={TransferMultiplePage} />
            <Route exact path={'/transfer-mobile-money'} component={TransferMobileMoneyPage} />
            <Route exact path={'/transaction-manage'} component={TransactionManagePage} />
            <Route exact path={'/transaction-history'} component={TransactionHistoryPage} />
            <Route exact path={'/policy'} component={PolicyPage} />
            <Route exact path={'/support'} component={SupportPage} />
            <Route exact path={'/login'} component={LoginPage} />
            <Route exact path={'/forgot-password'} component={ForgotPasswordPage} />
            <Route exact path={'/not-permission'} component={NotPermissionPage} />
            <Route exact path={'/contract'} component={ContractPage} />
            <Route exact path={'/protected'} component={ProtectedPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
        <LoadingOverLay />
      </ThemeProvider>
    </Provider>
  )
}

export default App
