import React from 'react'
import PropTypes from 'prop-types'

import {
  AreaEnterpriseInfo,
  AreaEnterpriseInfo_AreaDetail,
  AreaEnterpriseInfo_AreaDetail_Box,
  AreaEnterpriseInfo_Label,
} from './EnterpriseInfoStyled'

function AreaEnterpriseInfo_AreaDetail_LineInfo(props) {
  return null
}

AreaEnterpriseInfo_AreaDetail_LineInfo.propTypes = { children: PropTypes.node }
const EnterpriseInfo = props => {
  return (
    <AreaEnterpriseInfo>
      <AreaEnterpriseInfo_Label>

      </AreaEnterpriseInfo_Label>
      <AreaEnterpriseInfo_AreaDetail>
        <AreaEnterpriseInfo_AreaDetail_Box>
          <AreaEnterpriseInfo_AreaDetail_LineInfo>
            <span>Tên tổ chức</span>
            <span>Công Ty Cổ phần thương mại Sài Gòn</span>
          </AreaEnterpriseInfo_AreaDetail_LineInfo>
          <AreaEnterpriseInfo_AreaDetail_LineInfo>
            <span>Tên viết tắt</span>
            <span>Solution Technologi Componel</span>
          </AreaEnterpriseInfo_AreaDetail_LineInfo>
          <AreaEnterpriseInfo_AreaDetail_LineInfo>
            <span>Địa chỉ ĐKKD</span>
            <span>Số 123 , Đường Yên Hòa, Cầu Giấy, Hà Nội</span>
          </AreaEnterpriseInfo_AreaDetail_LineInfo>
          <AreaEnterpriseInfo_AreaDetail_LineInfo>
            <span>Địa chỉ giao dịch</span>
            <span>Số 8 , Trần Duy Hưng, Cầu Giấy, Hà Nội</span>
          </AreaEnterpriseInfo_AreaDetail_LineInfo>
          <AreaEnterpriseInfo_AreaDetail_LineInfo>
            <span>Mã số thuế</span>
            <span>123456789</span>
          </AreaEnterpriseInfo_AreaDetail_LineInfo>
        </AreaEnterpriseInfo_AreaDetail_Box>
        <AreaEnterpriseInfo_AreaDetail_Box>
          <AreaEnterpriseInfo_AreaDetail_LineInfo>
            <span>Tên tổ chức</span>
            <span>Công Ty Cổ phần thương mại Sài Gòn</span>
          </AreaEnterpriseInfo_AreaDetail_LineInfo>
          <AreaEnterpriseInfo_AreaDetail_LineInfo>
            <span>Tên viết tắt</span>
            <span>Solution Technologi Componel</span>
          </AreaEnterpriseInfo_AreaDetail_LineInfo>
          <AreaEnterpriseInfo_AreaDetail_LineInfo>
            <span>Địa chỉ ĐKKD</span>
            <span>Số 123 , Đường Yên Hòa, Cầu Giấy, Hà Nội</span>
          </AreaEnterpriseInfo_AreaDetail_LineInfo>
          <AreaEnterpriseInfo_AreaDetail_LineInfo>
            <span>Địa chỉ giao dịch</span>
            <span>Số 8 , Trần Duy Hưng, Cầu Giấy, Hà Nội</span>
          </AreaEnterpriseInfo_AreaDetail_LineInfo>
          <AreaEnterpriseInfo_AreaDetail_LineInfo>
            <span>Mã số thuế</span>
            <span>123456789</span>
          </AreaEnterpriseInfo_AreaDetail_LineInfo>
        </AreaEnterpriseInfo_AreaDetail_Box>
      </AreaEnterpriseInfo_AreaDetail>
    </AreaEnterpriseInfo>
  )
}

EnterpriseInfo.propTypes = {

}

export default EnterpriseInfo