import React from 'react'
import PropTypes from 'prop-types'
import {
  AreaEnterpriseInfoAreaDetail,
  AreaEnterpriseInfoAreaDetailBox,
  AreaEnterpriseInfoAreaDetailLineInfo,
  AreaEnterpriseInfoAreaDetailLineInfoLeft,
  AreaEnterpriseInfoAreaDetailLineInfoRight,
  AreaEnterpriseInfoLabel, AreaEnterpriseInfoWrapper,
  SpanAreaEnterpriseInfoLabel,
} from './AreaEnterpriseInfoStyled'

const AreaEnterpriseInfo = props => {
  return (
    <AreaEnterpriseInfoWrapper>
      <AreaEnterpriseInfoLabel>
        <SpanAreaEnterpriseInfoLabel>Thông tin doanh nghiệp</SpanAreaEnterpriseInfoLabel>
      </AreaEnterpriseInfoLabel>
      <AreaEnterpriseInfoAreaDetail>
        <AreaEnterpriseInfoAreaDetailBox>
          <AreaEnterpriseInfoAreaDetailLineInfo>
            <AreaEnterpriseInfoAreaDetailLineInfoLeft>Tên tổ chức</AreaEnterpriseInfoAreaDetailLineInfoLeft>
            <AreaEnterpriseInfoAreaDetailLineInfoRight>Công Ty Cổ phần thương mại Sài
              Gòn</AreaEnterpriseInfoAreaDetailLineInfoRight>
          </AreaEnterpriseInfoAreaDetailLineInfo>
          <AreaEnterpriseInfoAreaDetailLineInfo>
            <AreaEnterpriseInfoAreaDetailLineInfoLeft>Tên viết tắt</AreaEnterpriseInfoAreaDetailLineInfoLeft>
            <AreaEnterpriseInfoAreaDetailLineInfoRight>Solution Technologi
              Componel</AreaEnterpriseInfoAreaDetailLineInfoRight>
          </AreaEnterpriseInfoAreaDetailLineInfo>
          <AreaEnterpriseInfoAreaDetailLineInfo>
            <AreaEnterpriseInfoAreaDetailLineInfoLeft>Địa chỉ ĐKKD</AreaEnterpriseInfoAreaDetailLineInfoLeft>
            <AreaEnterpriseInfoAreaDetailLineInfoRight>Số 123 , Đường Yên Hòa, Cầu Giấy, Hà
              Nội</AreaEnterpriseInfoAreaDetailLineInfoRight>
          </AreaEnterpriseInfoAreaDetailLineInfo>
          <AreaEnterpriseInfoAreaDetailLineInfo>
            <AreaEnterpriseInfoAreaDetailLineInfoLeft>Địa chỉ giao dịch</AreaEnterpriseInfoAreaDetailLineInfoLeft>
            <AreaEnterpriseInfoAreaDetailLineInfoRight>Số 8 , Trần Duy Hưng, Cầu Giấy, Hà
              Nội</AreaEnterpriseInfoAreaDetailLineInfoRight>
          </AreaEnterpriseInfoAreaDetailLineInfo>
          <AreaEnterpriseInfoAreaDetailLineInfo>
            <AreaEnterpriseInfoAreaDetailLineInfoLeft>Mã số thuế</AreaEnterpriseInfoAreaDetailLineInfoLeft>
            <AreaEnterpriseInfoAreaDetailLineInfoRight>123456789</AreaEnterpriseInfoAreaDetailLineInfoRight>
          </AreaEnterpriseInfoAreaDetailLineInfo>
        </AreaEnterpriseInfoAreaDetailBox>
        <AreaEnterpriseInfoAreaDetailBox>
          <AreaEnterpriseInfoAreaDetailLineInfo>
            <AreaEnterpriseInfoAreaDetailLineInfoLeft>Tên tổ chức</AreaEnterpriseInfoAreaDetailLineInfoLeft>
            <AreaEnterpriseInfoAreaDetailLineInfoRight>Công Ty Cổ phần thương mại Sài
              Gòn</AreaEnterpriseInfoAreaDetailLineInfoRight>
          </AreaEnterpriseInfoAreaDetailLineInfo>
          <AreaEnterpriseInfoAreaDetailLineInfo>
            <AreaEnterpriseInfoAreaDetailLineInfoLeft>Tên viết tắt</AreaEnterpriseInfoAreaDetailLineInfoLeft>
            <AreaEnterpriseInfoAreaDetailLineInfoRight>Solution Technologi
              Componel</AreaEnterpriseInfoAreaDetailLineInfoRight>
          </AreaEnterpriseInfoAreaDetailLineInfo>
          <AreaEnterpriseInfoAreaDetailLineInfo>
            <AreaEnterpriseInfoAreaDetailLineInfoLeft>Địa chỉ ĐKKD</AreaEnterpriseInfoAreaDetailLineInfoLeft>
            <AreaEnterpriseInfoAreaDetailLineInfoRight>Số 123 , Đường Yên Hòa, Cầu Giấy, Hà
              Nội</AreaEnterpriseInfoAreaDetailLineInfoRight>
          </AreaEnterpriseInfoAreaDetailLineInfo>
          <AreaEnterpriseInfoAreaDetailLineInfo>
            <AreaEnterpriseInfoAreaDetailLineInfoLeft>Địa chỉ giao dịch</AreaEnterpriseInfoAreaDetailLineInfoLeft>
            <AreaEnterpriseInfoAreaDetailLineInfoRight>Số 8 , Trần Duy Hưng, Cầu Giấy, Hà
              Nội</AreaEnterpriseInfoAreaDetailLineInfoRight>
          </AreaEnterpriseInfoAreaDetailLineInfo>
          <AreaEnterpriseInfoAreaDetailLineInfo>
            <AreaEnterpriseInfoAreaDetailLineInfoLeft>Mã số thuế</AreaEnterpriseInfoAreaDetailLineInfoLeft>
            <AreaEnterpriseInfoAreaDetailLineInfoRight>123456789</AreaEnterpriseInfoAreaDetailLineInfoRight>
          </AreaEnterpriseInfoAreaDetailLineInfo>
        </AreaEnterpriseInfoAreaDetailBox>
      </AreaEnterpriseInfoAreaDetail>
    </AreaEnterpriseInfoWrapper>
  )
}

AreaEnterpriseInfo.propTypes = {

}

export default AreaEnterpriseInfo