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
          component={IdentityInfoPage} /> {/*Thông tin định danh*/}
        <Route
          exact path={PAGES.TRANSACTION_MANAGE.PATH}
          component={TransactionManagePage} /> {/*Quản lý giao dịch*/}
        <Route
          exact path={PAGES.TRANSACTION_HISTORY.PATH}
          component={TransactionHistoryPage} /> {/*Lịch sử giao dịch*/}
        <Route
          exact path={PAGES.TERM_OF_USE.PATH}
          component={TermsOfUsePage} /> {/*Điều khoản sử dụng*/}
        <Route
          exact path={PAGES.SUPPORT.PATH}
          component={SupportPage} /> {/*Trợ giúp*/}
        <Route
          exact path={PAGES.ABOUT_US.PATH}
          component={AboutUsPage} /> {/*Giới thiệu*/}
        <Route
          exact path={PAGES.CONTACT.PATH}
          component={ContactPage} /> {/*Liên hệ*/}
        <Route
          exact path={PAGES.POLICY.PATH}
          component={PolicyPage} /> {/*Chính sách*/}
        <Route
          exact path={PAGES.PHONE_CARD.PATH}
          component={PhoneCardPage} /> {/*Mã thẻ*/}
        <Route
          exact path={PAGES.PREPAID.PATH}
          component={PrepaidPage} /> {/*Nạp tiền điện thoại trả trước*/}
        <Route
          exact path={PAGES.POSTPAID.PATH}
          component={PostpaidPage} /> {/*Nạp tiền điện thoại trả sau*/}
        <Route
          exact path={PAGES.PHONE_DATA.PATH}
          component={PhoneDataPage} /> {/*Nạp data*/}
        <Route
          exact path={PAGES.CARD_DATA.PATH}
          component={CardDataPage} /> {/*Mã thẻ data*/}
        <Route
          exact path={PAGES.ELECTRIC_BILL.PATH}
          component={ElectricBillPage} /> {/*Hóa đơn điện*/}
        <Route
          exact path={PAGES.WATER_BILL.PATH}
          component={WaterBillPage} /> {/*Hóa đơn nước*/}
        <Route
          exact path={PAGES.INTERNET_BILL.PATH}
          component={InternetBillPage} /> {/*Internet*/}
        <Route
          exact path={PAGES.TELEVISION_BILL.PATH}
          component={TelevisionBillPage} /> {/*Truyền hình*/}
        <Route
          exact path={PAGES.SERVICE_RECHARGE.PATH}
          component={ServiceRechargePage} /> {/*Nạp dịch vụ*/}
        <Route
          exact path={PAGES.APARTMENT_FEE.PATH}
          component={ApartmentFeePage} /> {/*Phí chung cư*/}
        <Route
          exact path={PAGES.EDUCATION_FEE.PATH}
          component={EducationFeePage} /> {/*Học phí*/}
        <Route
          exact path={PAGES.DEPOSIT.PATH}
          component={DepositPage} /> {/*Nạp tiền*/}
        <Route
          exact path={PAGES.TRANSFER_WALLET.PATH}
          component={TransferWalletPage} /> {/*Chuyển tiền ví*/}
        <Route
          exact path={PAGES.TRANSFER_MULTIPLE.PATH}
          component={TransferMultiplePage} /> {/*Chuyển tiền theo lô*/}
        <Route
          exact path={PAGES.RECEIVE_FROM_MM.PATH}
          component={ReceiveFromMmPage} /> {/*Nhận chuyển tiền từ MM*/}
        <Route
          exact path={PAGES.TRANSFER_TO_MM.PATH}
          component={TransferToMmPage} /> {/*Chuyển tiền tới MM*/}
        <Route
          exact path={PAGES.LINK_BANK.PATH}
          component={LinkBankPage} /> {/*Liên kết*/}
        <Route
          exact path={PAGES.ADD_LINK.PATH}
          component={AddLinkPage} /> {/*Thêm liên kết*/}
        <Route
          exact path={PAGES.WITHDRAW.PATH}
          component={WithdrawPage} /> {/*Rút tiền*/}
        <Route
          exact path={PAGES.REPORT_SUMMARY.PATH}
          component={ReportSummaryPage} /> {/*Báo cáo tổng hợp*/}
        <Route
          exact path={PAGES.REPORT_DETAIL.PATH}
          component={ReportDetailPage} /> {/*Báo cáo chi tiết*/}
        <Route
          exact path={PAGES.LIMIT_SETTING.PATH}
          component={LimitSettingPage} /> {/*Cài đặt hạn mức*/}
      </Switch>
    </DefaultLayout>
  )

}

ProtectedModule.propTypes = {}

export default ProtectedModule