import ICONS from '../icons'

export const SIDEBAR_WIDTH_EXPAND = 240
export const SIDEBAR_WIDTH_COLLAPSE = 64
export const DEVICE = {
  MOBILE: 'MOBILE',
  TABLET: 'TABLET',
  DESKTOP: 'DESKTOP',
}
export const BREADCRUMB_DATA = {
  HOME: [
    { ID: '1', LABEL: 'Trang chủ', PATH: null },
  ],
  IDENTITY: [
    { ID: '2', LABEL: 'Trang chủ', PATH: '/' },
    { LABEL: 'Thông tin định danh', PATH: null },
  ],
  TRANSFER_MULTIPLE: [
    { ID: '3', LABEL: 'Trang chủ', PATH: '/' },
    { LABEL: 'Chuyển tiền theo Lô', PATH: null },
  ],
  MOBILE_MONEY: [
    { ID: '4', LABEL: 'Trang chủ', PATH: '/' },
    { LABEL: 'Chuyển tiền Mobifone Money', PATH: null },
  ],
  TRANSACTION_MANAGE: [
    { ID: '5', LABEL: 'Trang chủ', PATH: '/' },
    { LABEL: 'Quản lý giao dịch', PATH: null },
  ],
  TRANSACTION_HISTORY: [
    { ID: '6', LABEL: 'Trang chủ', PATH: '/' },
    { LABEL: 'Lịch sử giao dịch', PATH: null },
  ],
  POLICY: [
    { ID: '7', LABEL: 'Trang chủ', PATH: '/' },
    { LABEL: 'Điều khoản sử dụng', PATH: null },
  ],
  SUPPORT: [
    { ID: '8', LABEL: 'Trang chủ', PATH: '/' },
    { LABEL: 'Trợ giúp', PATH: null },
  ],
}
export const HOME_WIDGET_DATA = [
  {
    ID: 1,
    NUMBER: 440,
    ICON: ICONS.SUCCESS,
    LABEL: 'Đã duyệt',
    COLOR: '#7EBD50',
  },
  {
    ID: 2,
    NUMBER: 800,
    ICON: ICONS.WAITING,
    LABEL: 'Đang chờ duyệt',
    COLOR: '#FFA50C',
  },
  {
    ID: 3,
    NUMBER: 100,
    ICON: ICONS.REJECT,
    LABEL: 'Từ chối',
    COLOR: '#CE3939',
  },
]
