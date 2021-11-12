import ICONS from '../icons'

export const SIDEBAR_WIDTH_EXPAND = 240
export const SIDEBAR_WIDTH_COLLAPSE = 64
export const DEVICE = {
  MOBILE: 'MOBILE',
  TABLET: 'TABLET',
  DESKTOP: 'DESKTOP',
}

export const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAskgPKBcNpz71mi4NSYa5
    mazJrO0WZim7T2yy7qPxk2NqQE7OmWWakLJcaeUYnI0kO3yC57vck66RPCjKxWuW
    SGZ7dHXe0bWb5IXjcT4mNdnUIalR+lV8czsoH/wDUvkQdG1SJ+IxzW64WvoaCRZ+
    /4wBF2cSUh9oLwGEXiodUJ9oJXFZVPKGCEjPcBI0vC2ADBRmVQ1sKsZg8zbHN+gu
    U9rPLFzN4YNrCnEsSezVw/W1FKVS8J/Xx4HSSg7AyVwniz8eHi0e3a8VzFg+H09I
    5wK+w39sjDYfAdnJUkr6PjtSbN4/Sg/NMkKB2Ngn8oj7LCfe/7RNqIdiS+dQuSFg
    eQIDAQAB
    -----END PUBLIC KEY-----`;

export const TRANSACTION_STATUS = {
  WAITING: 1,
  APPROVED: 2,
  REJECTED: 3,
  ALL: 99
}
export const PROCESS_STATUS = {
  WAITING: 1,
  APPROVED: 2,
  REJECTED: 3,
  ALL: 99
}
export const BREADCRUMB_DATA = {
  HOME: [
    { ID: 1, LABEL: 'Trang chủ', PATH: null },
  ],
  IDENTITY: [
    { ID: 2, LABEL: 'Trang chủ', PATH: '/' },
    { ID: 3, LABEL: 'Thông tin định danh', PATH: null },
  ],
  TRANSFER_MULTIPLE: [
    { ID: 4, LABEL: 'Trang chủ', PATH: '/' },
    { ID: 5, LABEL: 'Chuyển tiền', PATH: null },
  ],
  MOBILE_MONEY: [
    { ID: 6, LABEL: 'Trang chủ', PATH: '/' },
    { ID: 7, LABEL: 'Chuyển tiền Mobifone Money', PATH: null },
  ],
  TRANSACTION_MANAGE: [
    { ID: 8, LABEL: 'Trang chủ', PATH: '/' },
    { ID: 9, LABEL: 'Quản lý giao dịch', PATH: null },
  ],
  TRANSACTION_HISTORY: [
    { ID: 10, LABEL: 'Trang chủ', PATH: '/' },
    { ID: 11, LABEL: 'Lịch sử giao dịch', PATH: null },
  ],
  POLICY: [
    { ID: 12, LABEL: 'Trang chủ', PATH: '/' },
    { ID: 13, LABEL: 'Điều khoản sử dụng', PATH: null },
  ],
  SUPPORT: [
    { ID: 14, LABEL: 'Trang chủ', PATH: '/' },
    { ID: 15, LABEL: 'Trợ giúp', PATH: null },
  ],
  CONTRACT: [
    { ID: 16, LABEL: 'Trang chủ', PATH: '/' },
    { ID: 17, LABEL: 'Liên kết', PATH: null },
  ],
  DEPOSIT: [
    { ID: 18, LABEL: 'Trang chủ', PATH: '/' },
    { ID: 19, LABEL: 'Nạp tiền', PATH: null },
  ],
  TRANFER: [
    { ID: 20, LABEL: 'Trang chủ', PATH: '/' },
    { ID: 21, LABEL: 'Chuyển tiền', PATH: null },
  ],
  WITHDRAW: [
    { ID: 22, LABEL: 'Trang chủ', PATH: '/' },
    { ID: 23, LABEL: 'Rút tiền', PATH: null },
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
export const THEME_LIST = [
  {
    name: 'blue',
    borderRadius: '8px',
    solidColor: '#0465B0',
    solidLightColor: 'rgb(233, 245, 254)',
    gradientColor: 'linear-gradient(108.88deg, #04BEFE 0%, #4481EB 100%)',
    shadowColor: '0 2px 10px rgba(68, 129, 235, 0.5)',
    lightShadowColor: '0 2px 4px rgba(61, 147, 190, 0.24), 0 4px 8px rgba(61, 153, 190, 0.16)',
  },
  // {
  //   name: 'pink',
  //   borderRadius: '8px',
  //   solidColor: 'rgb(244, 67, 54)',
  //   solidLightColor: 'rgb(254, 237, 235)',
  //   gradientColor: 'linear-gradient(108.84deg, #F77062 0%, #FE5196 100%)',
  //   shadowColor: '0 2px 10px rgba(254, 81, 150, 0.5)',
  //   lightShadowColor: '0 2px 4px rgba(190, 61, 97, 0.24), 0 4px 8px rgba(190, 61, 61, 0.16)',
  // },
  {
    name: 'green',
    borderRadius: '8px',
    solidColor: '#3DBEA3',
    solidLightColor: '#ecf9f6',
    gradientColor: 'linear-gradient(167.51deg, #2ECF94 24.37%, #3DBEA3 78.07%)',
    shadowColor: '0 2px 10px rgba(46,207,148,0.6)',
    lightShadowColor: '0 2px 4px rgba(61, 190, 163, 0.24), 0 4px 8px rgba(61, 190, 163, 0.16)',
  },
  {
    name: 'violet',
    borderRadius: '8px',
    solidColor: 'rgb(229,46,113)',
    solidLightColor: 'rgba(229,46,113, .2)',
    gradientColor: 'linear-gradient(to top left,#ff8a00,#e52e71)',
    shadowColor: '0px 2px 10px rgba(229,46,113, 0.5)',
    lightShadowColor: '0 2px 4px rgba(190, 61, 97, 0.24), 0 4px 8px rgba(190, 61, 61, 0.16)',
  },
  {
    name: 'black',
    borderRadius: '8px',
    solidColor: 'rgb(70, 70, 70)',
    solidLightColor: 'rgb(200, 200, 200)',
    gradientColor: 'linear-gradient(108.88deg, rgb(121, 121, 121) 0%, rgb(70, 70, 70) 100%)',
    shadowColor: '0px 2px 10px rgba(70, 70, 70, 0.5)',
    lightShadowColor: '0 2px 4px rgba(0, 0, 0, 0.22), 0 4px 8px rgba(0, 0, 0, 0.04)',
  }
]
