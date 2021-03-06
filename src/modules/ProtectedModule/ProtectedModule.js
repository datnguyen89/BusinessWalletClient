import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import DefaultLayout from '../../layouts/DefaultLayout'
import { PAGES } from '../../utils/constant'
// Pages
import HomePage from '../../pages/HomePage/HomePage'
import IdentityInfoPage from '../../pages/IdentityInfoPage/IdentityInfoPage'
import TransactionManagePage from '../../pages/TransactionManagePage'
import TransactionHistoryPage from '../../pages/TransactionHistoryPage'
import TermsOfUsePage from '../../pages/TermsOfUsePage'
import SupportPage from '../../pages/SupportPage'
import AboutUsPage from '../../pages/AboutUsPage'
import ContactPage from '../../pages/ContactPage'
import PolicyPage from '../../pages/PolicyPage'
import PhoneCardPage from '../../pages/PhoneCardPage/PhoneCardPage'
import PrepaidPage from '../../pages/PrepaidPage/PrepaidPage'
import PostpaidPage from '../../pages/PostpaidPage/PostpaidPage'
import PhoneDataPage from '../../pages/PhoneDataPage/PhoneDataPage'
import CardDataPage from '../../pages/CardDataPage/CardDataPage'
import ElectricBillPage from '../../pages/ElectricBillPage/ElectricBillPage'
import WaterBillPage from '../../pages/WaterBillPage/WaterBillPage'
import InternetBillPage from '../../pages/InternetBillPage/InternetBillPage'
import TelevisionBillPage from '../../pages/TelevisionBillPage/TelevisionBillPage'
import ServiceRechargePage from '../../pages/ServiceRechargePage/ServiceRechargePage'
import ApartmentFeePage from '../../pages/ApartmentFeePage/ApartmentFeePage'
import EducationFeePage from '../../pages/EducationFeePage/EducationFeePage'
import DepositPage from '../../pages/DepositPage/DepositPage'
import TransferWalletPage from '../../pages/TransferWalletPage/TransferWalletPage'
import TransferMultiplePage from '../../pages/TransferMultiplePage/TransferMultiplePage'
import ReceiveFromMmPage from '../../pages/ReceiveFromMmPage/ReceiveFromMmPage'
import TransferToMmPage from '../../pages/TransferToMmPage/TransferToMmPage'
import LinkBankPage from '../../pages/LinkBankPage/LinkBankPage'
import AddLinkPage from '../../pages/AddLinkPage/AddLinkPage'
import WithdrawPage from '../../pages/WithdrawPage/WithdrawPage'
import ReportSummaryPage from '../../pages/ReportSummaryPage'
import ReportDetailPage from '../../pages/ReportDetailPage'
import LimitSettingPage from '../../pages/LimitSettingPage'

const ProtectedModule = (props) => {
  return (
    <DefaultLayout>
      <Switch>
        <Route
          exact path={PAGES.HOME.PATH}
          component={HomePage} />
        <Route
          exact path={PAGES.IDENTITY.PATH}
          component={IdentityInfoPage} /> {/*Th??ng tin ?????nh danh*/}
        <Route
          exact path={PAGES.TRANSACTION_MANAGE.PATH}
          component={TransactionManagePage} /> {/*Qu???n l?? giao d???ch*/}
        <Route
          exact path={PAGES.TRANSACTION_HISTORY.PATH}
          component={TransactionHistoryPage} /> {/*L???ch s??? giao d???ch*/}
        <Route
          exact path={PAGES.TERM_OF_USE.PATH}
          component={TermsOfUsePage} /> {/*??i???u kho???n s??? d???ng*/}
        <Route
          exact path={PAGES.SUPPORT.PATH}
          component={SupportPage} /> {/*Tr??? gi??p*/}
        <Route
          exact path={PAGES.ABOUT_US.PATH}
          component={AboutUsPage} /> {/*Gi???i thi???u*/}
        <Route
          exact path={PAGES.CONTACT.PATH}
          component={ContactPage} /> {/*Li??n h???*/}
        <Route
          exact path={PAGES.POLICY.PATH}
          component={PolicyPage} /> {/*Ch??nh s??ch*/}
        <Route
          exact path={PAGES.PHONE_CARD.PATH}
          component={PhoneCardPage} /> {/*M?? th???*/}
        <Route
          exact path={PAGES.PREPAID.PATH}
          component={PrepaidPage} /> {/*N???p ti???n ??i???n tho???i tr??? tr?????c*/}
        <Route
          exact path={PAGES.POSTPAID.PATH}
          component={PostpaidPage} /> {/*N???p ti???n ??i???n tho???i tr??? sau*/}
        <Route
          exact path={PAGES.PHONE_DATA.PATH}
          component={PhoneDataPage} /> {/*N???p data*/}
        <Route
          exact path={PAGES.CARD_DATA.PATH}
          component={CardDataPage} /> {/*M?? th??? data*/}
        <Route
          exact path={PAGES.ELECTRIC_BILL.PATH}
          component={ElectricBillPage} /> {/*H??a ????n ??i???n*/}
        <Route
          exact path={PAGES.WATER_BILL.PATH}
          component={WaterBillPage} /> {/*H??a ????n n?????c*/}
        <Route
          exact path={PAGES.INTERNET_BILL.PATH}
          component={InternetBillPage} /> {/*Internet*/}
        <Route
          exact path={PAGES.TELEVISION_BILL.PATH}
          component={TelevisionBillPage} /> {/*Truy???n h??nh*/}
        <Route
          exact path={PAGES.SERVICE_RECHARGE.PATH}
          component={ServiceRechargePage} /> {/*N???p d???ch v???*/}
        <Route
          exact path={PAGES.APARTMENT_FEE.PATH}
          component={ApartmentFeePage} /> {/*Ph?? chung c??*/}
        <Route
          exact path={PAGES.EDUCATION_FEE.PATH}
          component={EducationFeePage} /> {/*H???c ph??*/}
        <Route
          exact path={PAGES.DEPOSIT.PATH}
          component={DepositPage} /> {/*N???p ti???n*/}
        <Route
          exact path={PAGES.TRANSFER_WALLET.PATH}
          component={TransferWalletPage} /> {/*Chuy???n ti???n v??*/}
        <Route
          exact path={PAGES.TRANSFER_MULTIPLE.PATH}
          component={TransferMultiplePage} /> {/*Chuy???n ti???n theo l??*/}
        <Route
          exact path={PAGES.RECEIVE_FROM_MM.PATH}
          component={ReceiveFromMmPage} /> {/*Nh???n chuy???n ti???n t??? MM*/}
        <Route
          exact path={PAGES.TRANSFER_TO_MM.PATH}
          component={TransferToMmPage} /> {/*Chuy???n ti???n t???i MM*/}
        <Route
          exact path={PAGES.LINK_BANK.PATH}
          component={LinkBankPage} /> {/*Li??n k???t*/}
        <Route
          exact path={PAGES.ADD_LINK.PATH}
          component={AddLinkPage} /> {/*Th??m li??n k???t*/}
        <Route
          exact path={PAGES.WITHDRAW.PATH}
          component={WithdrawPage} /> {/*R??t ti???n*/}
        <Route
          exact path={PAGES.REPORT_SUMMARY.PATH}
          component={ReportSummaryPage} /> {/*B??o c??o t???ng h???p*/}
        <Route
          exact path={PAGES.REPORT_DETAIL.PATH}
          component={ReportDetailPage} /> {/*B??o c??o chi ti???t*/}
        <Route
          exact path={PAGES.LIMIT_SETTING.PATH}
          component={LimitSettingPage} /> {/*C??i ?????t h???n m???c*/}
      </Switch>
    </DefaultLayout>
  )

}

ProtectedModule.propTypes = {}

export default ProtectedModule