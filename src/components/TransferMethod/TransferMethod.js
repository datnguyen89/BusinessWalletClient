import React from 'react'
import PropTypes from 'prop-types'
import {
  BottomTransferMethod,
  TopTransferMethod,
  TransferMethodWrapper, WidgetItemTransferMethod,
} from './TransferMethodStyled'

const TransferMethod = props => {
  return (
    <TransferMethodWrapper>
      <WidgetItemTransferMethod>
        <TopTransferMethod>
          <div>
            <img src={`${process.env.PUBLIC_URL}/assets/icons/logo_account_transfer_money.png`}
                 height={52}
                 width={52}
                 alt='logo account transfer money' />
          </div>
          <div>
            <h5>1234567890</h5>
            <h2>10.830.536.500 vnd</h2>
            <h2>10.830.536.500 vnd</h2>
            <h2>10.830.536.500 vnd</h2>
            <h2>10.830.536.500 vnd</h2>
            <h2>10.830.536.500 vnd</h2>
            <h2>10.830.536.500 vnd</h2>
            <h2>10.830.536.500 vnd</h2>
          </div>
        </TopTransferMethod>
        <BottomTransferMethod>Từ tài khoản</BottomTransferMethod>
      </WidgetItemTransferMethod>
      <WidgetItemTransferMethod>
        <TopTransferMethod>
          <img src={`${process.env.PUBLIC_URL}/assets/icons/download_file_icon.png`}
               alt='icon download file' />
        </TopTransferMethod>
        <BottomTransferMethod>Tải file mẫu</BottomTransferMethod>
      </WidgetItemTransferMethod>
      <WidgetItemTransferMethod>
        <TopTransferMethod>
          <div>
            <img src={`${process.env.PUBLIC_URL}/assets/icons/upload_file_icon.png`}
                 alt='icon upload file' />
            <span>*Quý khách chuyển tiền theo danh sách bằng cách upload thông tin giao dịch dưới dạng file Excel theo mẫu của MobiFone. Giới hạn tối đa 100 giao dịch/lần chuyển</span>
          </div>
        </TopTransferMethod>
        <BottomTransferMethod>Upload file danh sách</BottomTransferMethod>
      </WidgetItemTransferMethod>
    </TransferMethodWrapper>
  )
}

TransferMethod.propTypes = {}

export default TransferMethod