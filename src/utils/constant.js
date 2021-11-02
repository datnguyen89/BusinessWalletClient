import ICONS from '../icons'

export const MAIN_INFO_COLOR = '#0261AD'
export const MAIN_WARNING_COLOR = '#ffbb00'
export const MAIN_ERROR_COLOR = 'red'
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
  CONTRACT: [
    { ID: '8', LABEL: 'Trang chủ', PATH: '/' },
    { LABEL: 'Liên kết', PATH: null },
  ],
}
export const HOME_WIDGET_DATA = [
  {
    ID: 1,
    NUMBER: 440,
    ICON: ICONS.SUCCESS,
    LABEL: 'Đã duyệt',
    TOP_COLOR: '#28A745',
    BOTTOM_COLOR: '#228E3B',
  },
  {
    ID: 2,
    NUMBER: 800,
    ICON: ICONS.WAITING,
    LABEL: 'Đang chờ duyệt',
    TOP_COLOR: '#FFC107',
    BOTTOM_COLOR: '#D9A406',
  },
  {
    ID: 3,
    NUMBER: 100,
    ICON: ICONS.REJECT,
    LABEL: 'Từ chối',
    TOP_COLOR: '#DC3545',
    BOTTOM_COLOR: '#BB2D3B',
  },
]
export const SERVICES_DATA = [
  {
    ID: 1,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE1,
    SERVICE_NAME: 'Mã thẻ',
    DESCRIPTION: 'Mua mã thẻ di động',
  },
  {
    ID: 2,
    BADGE_NUMBER: 0,
    ICON: ICONS.SERVICE2,
    SERVICE_NAME: 'Nạp tiền',
    DESCRIPTION: 'Thanh toán di động trả trước',
  },
  {
    ID: 3,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE3,
    SERVICE_NAME: 'Trả sau',
    DESCRIPTION: 'Thanh toán di động trả sau',
  },
  {
    ID: 4,
    BADGE_NUMBER: null,
    ICON: ICONS.SERVICE4,
    SERVICE_NAME: 'Nạp data',
    DESCRIPTION: 'Mua dung lượng data mobile internet',
  },
  {
    ID: 5,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE5,
    SERVICE_NAME: 'Mã thẻ data',
    DESCRIPTION: 'Mua mã thẻ gói data 3G/4G',
  },
  {
    ID: 6,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE6,
    SERVICE_NAME: 'Điện',
    DESCRIPTION: 'Thanh toán tiền điện',
  },
  {
    ID: 7,
    BADGE_NUMBER: null,
    ICON: ICONS.SERVICE7,
    SERVICE_NAME: 'Nước',
    DESCRIPTION: 'Thanh toán tiền nước nhanh chóng',
  },
  {
    ID: 8,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE8,
    SERVICE_NAME: 'Internet',
    DESCRIPTION: 'Thanh toán cước Internet',
  },
  {
    ID: 9,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE9,
    SERVICE_NAME: 'Truyền hình',
    DESCRIPTION: 'Thanh toán cước truyền hình',
  },
  {
    ID: 10,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE10,
    SERVICE_NAME: 'Nạp dịch vụ',
    DESCRIPTION: 'Nạp tiền dịch vụ',
  },
  {
    ID: 11,
    BADGE_NUMBER: null,
    ICON: ICONS.SERVICE11,
    SERVICE_NAME: 'Phí chung cư',
    DESCRIPTION: 'Thanh toán phí chung cư',
  },

  {
    ID: 12,
    BADGE_NUMBER: 10,
    ICON: ICONS.SERVICE12,
    SERVICE_NAME: 'Học phí',
    DESCRIPTION: 'Thanh toán học phí',
  },
]
