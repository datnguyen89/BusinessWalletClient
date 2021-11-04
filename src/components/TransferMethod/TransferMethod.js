import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  BottomTransferMethod,
  TopTransferMethod, TopTransferMethodLeftArea, TopTransferMethodRightArea,
  TransferMethodWrapper, UploadCustom, WidgetItemTransferMethod,
} from './TransferMethodStyled'
import { message } from 'antd'

const TransferMethod = props => {
  const [fileUpload, uploadFile] = useState(null);
  const [nameFileUpload, setNameFileUpload] = useState("");

  const handleBeforeUpload = (file) => {
    // todo: validate format file
    if (!(file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || file.type === "application/vnd.ms-excel"))
    {
      message.error("File danh sách phải có định dạng Excel");
    }
    else {
      uploadFile([file]);
      setNameFileUpload(file.name);
    }
    return false
  }

  useEffect(() => {
    console.log(fileUpload);
    console.log(nameFileUpload);
    // todo: api for upload file
  }, [fileUpload])

  return (
    <TransferMethodWrapper>
      <WidgetItemTransferMethod>
        <TopTransferMethod>
          <TopTransferMethodLeftArea>
            <img src={`${process.env.PUBLIC_URL}/assets/icons/logo_account_transfer_money.png`}
                 height={52}
                 width={52}
                 alt='logo account transfer money' />
          </TopTransferMethodLeftArea>
          <TopTransferMethodRightArea>
            <h5>1234567890</h5>
            <h1>10.830.536.500 vnd</h1>
          </TopTransferMethodRightArea>
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
          <UploadCustom beforeUpload={handleBeforeUpload}>
            <img src={`${process.env.PUBLIC_URL}/assets/icons/upload_file_icon.png`}
                 alt='icon upload file' />
            <span>
                *Quý khách chuyển tiền theo danh sách bằng cách upload thông tin giao dịch dưới dạng file Excel theo mẫu của MobiFone. Giới hạn tối đa 100 giao dịch/lần chuyển
              </span>
          </UploadCustom>
        </TopTransferMethod>
        <BottomTransferMethod className="bg-yellow">{nameFileUpload === "" ? "Upload file danh sách" : nameFileUpload}</BottomTransferMethod>
      </WidgetItemTransferMethod>
    </TransferMethodWrapper>
  )
}

TransferMethod.propTypes = {}

export default TransferMethod