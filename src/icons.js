import React from 'react'
import { ReactComponent as DepositIcon } from './media/icons/deposit.svg'
import { ReactComponent as LinkBankIcon } from './media/icons/linkbank.svg'
import { ReactComponent as TransferIcon } from './media/icons/tranfer.svg'
import { ReactComponent as WithdrawIcon } from './media/icons/withdraw.svg'
import { ReactComponent as LogoutIcon } from './media/icons/log-out.svg'
import { ReactComponent as SettingIcon } from './media/icons/setting.svg'

const ICONS = {
  NOTIFY_BELL: require('./media/icons/notify-bell.svg'),
  WHITE_ARROW_DOWN: require('./media/icons/white-arrow-down.svg'),
  LOGOUT: <LogoutIcon />,
  SETTING: <SettingIcon />,
  IDENTITY_ICON: require('./media/icons/identity-icon.svg'),
  TRANSFER_MULTI_ICON: require('./media/icons/transfer-multi.svg'),
  MOBILE_MONEY_ICON: require('./media/icons/mobile-money-icon.svg'),
  TRANSACTION_ICON: require('./media/icons/transaction-icon.svg'),
  HISTORY_ICON: require('./media/icons/history-icon.svg'),
  POLICY_ICON: require('./media/icons/policy-icon.svg'),
  SUPPORT_ICON: require('./media/icons/support-icon.svg'),
  FACEBOOK: require('./media/icons/facebook.svg'),
  INSTAGRAM: require('./media/icons/instagram.svg'),
  YOUTUBE: require('./media/icons/youtube.svg'),
  SUCCESS: require('./media/icons/approved-white.svg'),
  WAITING: require('./media/icons/waiting-white.svg'),
  REJECT: require('./media/icons/rejected-white.svg'),
  SERVICE1: require('./media/icons/services/s1.png'),
  SERVICE2: require('./media/icons/services/s2.png'),
  SERVICE3: require('./media/icons/services/s3.png'),
  SERVICE4: require('./media/icons/services/s4.png'),
  SERVICE5: require('./media/icons/services/s5.png'),
  SERVICE6: require('./media/icons/services/s6.png'),
  SERVICE7: require('./media/icons/services/s7.png'),
  SERVICE8: require('./media/icons/services/s8.png'),
  SERVICE9: require('./media/icons/services/s9.png'),
  SERVICE10: require('./media/icons/services/s10.png'),
  SERVICE11: require('./media/icons/services/s11.png'),
  SERVICE12: require('./media/icons/services/s12.png'),
  WAITING_ICON: require('./media/icons/waiting.svg'),
  REJECTED_ICON: require('./media/icons/rejected.svg'),
  APPROVED_ICON: require('./media/icons/approved.svg'),
  DEPOSIT_ICON: <DepositIcon />,
  LINK_BANK_ICON: <LinkBankIcon />,
  TRANSFER_ICON: <TransferIcon />,
  WITHDRAW_ICON: <WithdrawIcon />,
}
export default ICONS
