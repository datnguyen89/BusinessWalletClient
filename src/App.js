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
import DepositPage from './pages/DepositPage'
import TranferPage from './pages/TranferPage'
import WithDrawPage from './pages/WithDrawPage'
import LoadingOverLay from './components/LoadingOverLay'
import ContractPage from './pages/Contract/ContractPage'


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

const rootStores = {
  commonStore,
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
            <Route exact path={'/deposit'} component={DepositPage} />
            <Route exact path={'/trafer'} component={TranferPage} />
            <Route exact path={'/withdraw'} component={WithdrawPage} />
            <Route exact path={'/forgot-password'} component={ForgotPasswordPage} />
            <Route exact path={'/not-permission'} component={NotPermissionPage} />
            <Route exact path={'/contract'} component={ContractPage} />
            <ProtectedRoute exact path={'/protected'} component={ProtectedPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
        <LoadingOverLay />
      </ThemeProvider>
    </Provider>
  )
}

export default App
